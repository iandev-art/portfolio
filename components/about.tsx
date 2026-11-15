'use client'

import { useState } from 'react'
import { skillGroups } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

export function About() {
  const [group, setGroup] = useState(skillGroups[0].name)
  const current = skillGroups.find((g) => g.name === group) ?? skillGroups[0]

  return (
    <section id="about" className="border-b">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <SectionHeading index="01 — About" title="Where math meets machines." />
          <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              {"I'm studying the theory behind computation at Multimedia University — and applying it at ALX, where I'm learning to clean, analyse and model real-world data."}
            </p>
            <p>
              {"I'm comfortable working in Microsoft Excel and Google Sheets, and I have a growing interest in network engineering: how systems connect and how data moves between them."}
            </p>
            <p>
              {"I treat AI as a power tool: I've been trained in prompt engineering and use AI to research, prototype and vibe-code projects that would otherwise take weeks."}
            </p>
            <p>
              {"I'm also a certified Virtual Assistant, so I know how to manage clients, automate workflows and deliver reliably."}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6 md:self-end">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Toolkit</p>
          <div role="tablist" aria-label="Skill groups" className="mt-4 flex flex-wrap gap-2">
            {skillGroups.map((g) => (
              <button
                key={g.name}
                type="button"
                role="tab"
                id={`tab-${g.name}`}
                aria-selected={group === g.name}
                aria-controls="skills-panel"
                onClick={() => setGroup(g.name)}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-sm transition-colors',
                  group === g.name ? 'border-foreground bg-foreground text-background' : 'hover:border-foreground',
                )}
              >
                {g.name}
              </button>
            ))}
          </div>
          <ul
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.name}`}
            key={current.name}
            className="mt-6 flex flex-col"
          >
            {current.items.map((item, i) => (
              <li
                key={item}
                className="flex items-center justify-between border-t py-3 animate-in fade-in slide-in-from-left-2 fill-mode-both"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-serif text-2xl">{item}</span>
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
