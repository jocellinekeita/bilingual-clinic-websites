"use client"

import { Globe, CalendarCheck, Palette, Printer, Megaphone } from "lucide-react"
import { content, useLang } from "@/lib/i18n"

const icons = [Globe, CalendarCheck, Palette, Printer, Megaphone]

export function Services() {
  const { lang } = useLang()
  const { services } = content
  return (
    <section id="services" className="bg-[#EBF6FB]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-[0.2em] text-[#0099cc]">
            {services.title[lang]}
          </p>
          <h2 className="mt-3 text-pretty font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {services.intro[lang]}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="flex flex-col rounded-2xl p-6"
                style={{ background: "linear-gradient(145deg, #2EC0E8, #0057B8)" }}
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white/20">
                  <Icon className="size-5 text-white" />
                </span>
                <h3 className="mt-5 font-serif text-base font-semibold text-white">
                  {item.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
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