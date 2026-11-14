'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy, MessageCircle, Phone, Send } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Hello Ian — from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <SectionHeading index="05 — Contact" title="Let's build something.">
            Internships, data projects, VA work or just a good conversation about math — my inbox is open.
          </SectionHeading>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="break-all font-serif text-2xl underline decoration-primary decoration-2 underline-offset-8 md:text-3xl">
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors hover:border-foreground"
            >
              {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <ul className="mt-8 flex flex-col gap-3">
            <li>
              <a
                href={`https://wa.me/${profile.whatsapp.international}?text=${encodeURIComponent('Hello Ian, I saw your portfolio.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</span>
                  <span className="text-lg font-medium">{profile.whatsapp.display}</span>
                </span>
                <ArrowUpRight className="ml-auto size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                <span className="sr-only">(opens WhatsApp in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.international}`}
                className="group flex items-center gap-4 rounded-2xl border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Call</span>
                  <span className="text-lg font-medium">{profile.phone.display}</span>
                </span>
                <ArrowUpRight className="ml-auto size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border bg-card p-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Your name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="rounded-lg border bg-background px-3 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border bg-background px-3 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Send via email <Send className="size-4" />
          </button>
          <p className="text-center text-xs text-muted-foreground">Opens your email app with the message ready to send.</p>
        </form>
      </div>
    </section>
  )
}
