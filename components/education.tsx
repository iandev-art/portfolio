'use client'

import { useState } from 'react'
import { ChevronDown, GraduationCap } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

export function Education() {
  const [openId, setOpenId] = useState<string | null>(education[0].id)

  return (
    <section id="education" className="border-b">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading index="02 — Education" title="Two programmes, one direction.">
          Click a programme to see what I&apos;m focusing on.
        </SectionHeading>

        <ul className="flex flex-col border-t">
          {education.map((item) => {
            const isOpen = openId === item.id
            return (
              <li key={item.id} className="border-b">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`edu-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="group flex w-full items-center gap-4 py-6 text-left"
                  >
                    <span
                      className={cn(
                        'flex size-12 shrink-0 items-center justify-center rounded-full border transition-colors',
                        isOpen ? 'border-primary bg-primary text-primary-foreground' : 'group-hover:border-foreground',
                      )}
                    >
                      <GraduationCap className="size-5" />
                    </span>
                    <span className="flex flex-1 flex-col gap-1">
                      <span className="font-serif text-2xl md:text-4xl">{item.program}</span>
                      <span className="text-sm text-muted-foreground">{item.institution}</span>
                    </span>
                    <span className="hidden rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground sm:inline">
                      {item.status}
                    </span>
                    <ChevronDown className={cn('size-5 shrink-0 transition-transform', isOpen && 'rotate-180')} />
                  </button>
                </h3>
                <div
                  id={`edu-${item.id}`}
                  className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr] pb-8' : 'grid-rows-[0fr]')}
                >
                  <div className="overflow-hidden md:pl-16">
                    <p className="max-w-2xl text-pretty text-muted-foreground">{item.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.focus.map((f) => (
                        <li key={f} className="rounded-full border px-3 py-1 text-sm">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
