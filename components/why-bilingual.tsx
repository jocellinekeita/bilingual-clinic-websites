"use client"

import Image from "next/image"
import { content, useLang } from "@/lib/i18n"

export function WhyBilingual() {
  const { lang } = useLang()
  const { why } = content

  return (
    <section id="why" className="bg-[#EBF6FB]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
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
          <p className="text-sm font-medium tracking-[0.2em] text-[#0099cc]">
            {why.title[lang]}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            {why.subtitle[lang]}
          </h2>
          <p className="mt-5 leading-relaxed text-gray-500">
            {why.body[lang]}
          </p>
        </div>
      </div>
    </section>
  )
}