import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { Certificates } from '@/components/certificates'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Ian Njoroge</p>
          <p>Nairobi, Kenya · Built with AI</p>
        </div>
      </footer>
    </>
  )
}
