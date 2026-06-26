"use client"

import { content, useLang } from "@/lib/i18n"

export default function Services() {
  const { lang } = useLang()
  const { services } = content

  return (
    <section id="services" className="w-full bg-white pt-12 pb-24 scroll-mt-[96px]">
      <div className="mx-auto max-w-[1250px] px-12">
        <div className="flex flex-col items-start gap-3 mb-16">
          <p className="text-[18px] font-bold bg-gradient-to-r from-[#03BAEE] to-[#014FB4] bg-clip-text text-transparent [font-family:'Noto_Sans_JP-Bold',Helvetica]">
            {services.title[lang]}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-snug font-[family-name:var(--font-noto-serif)] antialiased">
            {services.intro[lang]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((item, idx) => (
            <div key={idx} className="bg-[#028AC4] p-8 rounded-[18px] flex flex-col gap-3 text-white shadow-md cursor-default select-none min-h-[200px]">
              <h3 className="text-[18px] sm:text-xl font-bold font-[family-name:var(--font-noto-serif)] antialiased tracking-tight break-words leading-snug">
                {item.title[lang]}
              </h3>
              <p className="text-white/90 text-base leading-relaxed [font-family:'Noto_Sans_JP-Regular',Helvetica]">
                {item.body[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}