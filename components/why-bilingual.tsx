"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { content, useLang } from "@/lib/i18n"

export function WhyBilingual() {
  const { lang } = useLang()
  const { why } = content
  return (
    <section id="why" className="border-t border-border bg-accent text-accent-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-accent-foreground/15 shadow-sm">
          <Image
            src="/images/why-bilingual.png"
            alt={
              lang === "ja"
                ? "東京のクリニックで国際的な患者を迎えるスタッフ"
                : "Clinic staff welcoming international patients in Tokyo"
            }
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-foreground/70">
            {why.title[lang]}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold leading-snug tracking-tight sm:text-4xl">
            {lang === "ja"
              ? "あなたが取りこぼしている患者さんがいます。"
              : "A bilingual site isn't a luxury — it's patients you're turning away."}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-accent-foreground/80">
            {why.body[lang]}
          </p>
          <ul className="mt-6 space-y-3">
            {why.points.map((pt, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-foreground/15">
                  <Check className="size-3.5" />
                </span>
                {pt[lang]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
