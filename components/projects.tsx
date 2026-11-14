'use client'

import { useState } from 'react'
import { ArrowUpRight, Code2, Plus } from 'lucide-react'
import { projects, type ProjectCategory } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const filters: Array<'All' | ProjectCategory> = ['All', 'Web', 'Data', 'AI']

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="border-b">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading index="03 — Projects" title="Things I've vibe-coded.">
          Built with AI as a co-pilot. This list grows as I learn.
        </SectionHeading>

        <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => {
            const count = f === 'All' ? projects.length : projects.filter((p) => p.category === f).length
            return (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm transition-colors',
                  filter === f ? 'border-foreground bg-foreground text-background' : 'hover:border-foreground',
                )}
              >
                {f} <span className="font-mono text-xs opacity-60">{count}</span>
              </button>
            )
          })}
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-foreground hover:shadow-[6px_6px_0_0_var(--foreground)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">{project.category}</span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <h3 className="mt-6 font-serif text-3xl">{project.title}</h3>
              <p className="mt-2 flex-1 text-pretty text-muted-foreground">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li key={t} className="font-mono text-xs text-muted-foreground">
                    #{t}
                  </li>
                ))}
              </ul>
              {(project.liveUrl || project.codeUrl) && (
                <div className="mt-5 flex gap-4 border-t pt-4 text-sm">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline">
                      Live <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline">
                      Code <Code2 className="size-4" />
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}

          <li className="flex min-h-56 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed p-6 text-center text-muted-foreground">
            <span className="flex size-12 items-center justify-center rounded-full border border-dashed">
              <Plus className="size-5" />
            </span>
            <p className="font-serif text-2xl text-foreground">Next project loading…</p>
            <p className="text-sm">
              {filter === 'All' ? 'More experiments are on the way.' : `No ${filter} projects yet — stay tuned.`}
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
