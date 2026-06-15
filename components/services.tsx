"use client"

import { Globe, CalendarCheck, Palette, Printer, Megaphone } from "lucide-react"
import { content, useLang } from "@/lib/i18n"

const icons = [Globe, CalendarCheck, Palette, Printer, Megaphone]

export function Services() {
  const { lang } = useLang()
  const { services } = content
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {services.title[lang]}
          </p>
          <h2 className="mt-3 text-pretty font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {services.intro[lang]}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                  {item.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body[lang]}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
