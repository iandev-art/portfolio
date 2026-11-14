'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { QRCodeSVG } from 'qrcode.react'
import { Award, ExternalLink, FileText, Maximize2, X } from 'lucide-react'
import { certificates, type Certificate } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Certificates() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState<Certificate | null>(null)

  const openPreview = (cert: Certificate) => {
    setSelected(cert)
    dialogRef.current?.showModal()
  }

  return (
    <section id="certificates" className="border-b">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading index="04 — Certificates" title="Verified, not just claimed.">
          Scan a QR code with your phone to check a certificate on the issuer&apos;s site, or open it here.
        </SectionHeading>

        <ul className="flex flex-col gap-4">
          {certificates.map((cert) => {
            const qrValue = cert.verifyUrl ?? `${cert.issuer} · Credential ${cert.credentialId}`
            return (
              <li key={cert.id} className="grid gap-6 rounded-2xl border bg-card p-5 md:grid-cols-[220px_1fr_auto] md:items-center md:p-6">
                <button
                  type="button"
                  onClick={() => (cert.image ? openPreview(cert) : window.open(cert.file, '_blank'))}
                  className="group relative aspect-video overflow-hidden rounded-xl border bg-muted"
                >
                  {cert.image ? (
                    <Image src={cert.image} alt={`${cert.title} certificate`} fill sizes="(min-width: 768px) 220px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <span className="flex size-full flex-col items-center justify-center gap-2 bg-foreground text-background">
                      <Award className="size-8 text-primary-foreground" />
                      <span className="font-serif text-xl">Virtual Assistant</span>
                    </span>
                  )}
                  <span className="absolute inset-0 flex items-center justify-center bg-foreground/60 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-sm text-foreground">
                      {cert.image ? <Maximize2 className="size-4" /> : <FileText className="size-4" />}
                      {cert.image ? 'View' : 'Open PDF'}
                    </span>
                  </span>
                  <span className="sr-only">{cert.image ? `View ${cert.title} certificate` : `Open ${cert.title} certificate PDF`}</span>
                </button>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {cert.issuer} · {cert.issued}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">{cert.title}</h3>
                  <p className="mt-2 text-pretty text-sm text-muted-foreground">{cert.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((s) => (
                      <li key={s} className="rounded-full border px-2.5 py-0.5 text-xs">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                    {cert.verifyUrl && (
                      <a href={cert.verifyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline">
                        Verify on ALX <ExternalLink className="size-4" />
                      </a>
                    )}
                    {cert.file && (
                      <a href={cert.file} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline">
                        View certificate PDF <FileText className="size-4" />
                      </a>
                    )}
                  </div>
                </div>

                <figure className="flex flex-row items-center gap-4 md:flex-col md:gap-2">
                  <div className="rounded-xl border bg-background p-2.5">
                    <QRCodeSVG
                      value={qrValue}
                      size={104}
                      bgColor="transparent"
                      fgColor="#15181d"
                      level="M"
                      title={cert.verifyUrl ? `QR code to verify ${cert.title}` : `QR code with ${cert.title} credential ID`}
                    />
                  </div>
                  <figcaption className="font-mono text-[11px] leading-tight text-muted-foreground md:text-center">
                    {cert.verifyUrl ? 'Scan to verify' : 'Credential ID'}
                    <br />
                    <span className="text-foreground">{cert.credentialId}</span>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={selected ? `${selected.title} certificate` : 'Certificate'}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto w-[min(960px,calc(100vw-2rem))] max-w-none rounded-2xl bg-transparent p-0"
      >
        {selected?.image && (
          <div className="relative">
            <Image src={selected.image} alt={`${selected.title} certificate issued to Ian Njoroge`} width={1280} height={720} className="h-auto w-full rounded-2xl" />
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full bg-background text-foreground shadow"
            >
              <X className="size-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        )}
      </dialog>
    </section>
  )
}
