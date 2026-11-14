'use client'

import { useState } from 'react'
import { Check, Copy, Send } from 'lucide-react'
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
