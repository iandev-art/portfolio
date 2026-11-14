export function SectionHeading({ index, title, children }: { index: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:mb-14">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">{index}</p>
      <h2 className="text-balance font-serif text-4xl tracking-tight md:text-6xl">{title}</h2>
      {children && <p className="max-w-2xl text-pretty text-muted-foreground">{children}</p>}
    </div>
  )
}
