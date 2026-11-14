'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % profile.roles.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="border-b">
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Open to internships &amp; collaborations
        </p>

        <h1 className="mt-6 text-balance font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
          Numbers, code
          <br />
          and <em className="text-primary">curiosity.</em>
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          {"I'm "}
          <strong className="font-medium text-foreground">{profile.name}</strong>
          {' — a Mathematics & Computer Science student at Multimedia University of Kenya and a Data Science student at ALX, using AI to learn faster and build more.'}
        </p>

        <p className="mt-6 flex flex-wrap items-baseline gap-2 font-mono text-sm" aria-live="polite">
          <span className="text-muted-foreground">currently:</span>
          <span key={roleIndex} className="animate-in fade-in slide-in-from-bottom-1 rounded-md bg-accent px-2 py-0.5 text-accent-foreground duration-500">
            {profile.roles[roleIndex]}
          </span>
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            See my work <ArrowDown className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            <Mail className="size-4" /> Email me
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4 border-t pt-8">
          {[
            ['2', 'Programmes'],
            ['3', 'Certificates'],
            ['∞', 'Questions'],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="font-serif text-4xl md:text-5xl">{value}</dd>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
