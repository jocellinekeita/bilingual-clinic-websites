"use client"

import Image from "next/image"
import { content, useLang } from "@/lib/i18n"

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function WhyBilingual() {
  const { lang } = useLang()
  const { why } = content

  return (
    <section id="why-bilingual" className="w-full bg-[#EBF6FB] py-24 scroll-mt-[96px]">
      <div className="mx-auto max-w-[1250px] px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[512px] aspect-[1.33] rounded-[18px] overflow-hidden relative">
            <Image
              src={`${BASE_PATH}/images/why-bilingual.png`}
              alt={
                lang === "ja"
                  ? "東京のクリニックで国際的な患者を迎えるスタッフ"
                  : "Clinic staff welcoming international patients in Tokyo"
              }
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 max-w-xl">
          <p className="text-[18px] font-bold bg-gradient-to-r from-[#03BAEE] to-[#014FB4] bg-clip-text text-transparent font-[family-name:var(--font-noto-sans)] antialiased">
            {why.title[lang]}
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-[1.4] font-[family-name:var(--font-noto-serif)] antialiased">
            {why.subtitle[lang]}
          </h2>

          <p className="text-[18px] font-normal text-neutral-700 leading-relaxed font-[family-name:var(--font-noto-sans)] antialiased">
            {why.body[lang]}
          </p>
        </div>

      </div>
    </section>
  )
}