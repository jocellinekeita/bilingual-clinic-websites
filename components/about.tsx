"use client"

import { content, useLang } from "@/lib/i18n"

export function About() {
  const { lang } = useLang()
  const { about } = content
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {about.title[lang]}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {lang === "ja" ? "東京を拠点とするバイリンガルチーム。" : "A bilingual team based in Tokyo."}
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {about.people.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 font-serif text-xl font-bold text-primary">
                  {p.name.charAt(0)}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{p.role[lang]}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {p.bio[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
