"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { content, useLang } from "@/lib/i18n"

export function Hero() {
  const { lang } = useLang()
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium tracking-wide text-secondary-foreground">
            {content.hero.tagline[lang]}
          </span>
          <h1 className="mt-6 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {lang === "ja" ? (
              <>
                あなたのクリニックを
                <br />
                英語でも日本語でも。
              </>
            ) : (
              content.hero.headline[lang]
            )}
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.hero.sub[lang]}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #03D9FE, #003CAA)'
              }}
            >
              {content.hero.cta[lang]}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {content.nav.services[lang]}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/clinic-hero.png"
              alt={
                lang === "ja"
                  ? "東京のモダンなクリニックの受付"
                  : "Modern Tokyo clinic reception interior"
              }
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card px-5 py-4 shadow-sm sm:block">
            <p className="font-serif text-2xl font-bold text-primary">EN / 日本語</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {lang === "ja" ? "1日目からバイリンガル" : "Bilingual from day one"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
