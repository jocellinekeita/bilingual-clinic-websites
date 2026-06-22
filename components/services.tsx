"use client"

import { content, useLang } from "@/lib/i18n"
import { Globe, Calendar, Paintbrush, FileText, Share2 } from "lucide-react"

export default function Services() {
  const { lang } = useLang()
  const { services } = content

  const icons = [
    <Globe className="size-8 text-[#028AC4]" />,
    <Calendar className="size-8 text-[#028AC4]" />,
    <Paintbrush className="size-8 text-[#028AC4]" />,
    <FileText className="size-8 text-[#028AC4]" />,
    <Share2 className="size-8 text-[#028AC4]" />,
  ]

  return (
    <section id="services" className="w-full bg-white pt-12 pb-24 scroll-mt-[96px]">
      {/* 💡 コンテンツ幅を max-w-[1250px] に統一 */}
      <div className="mx-auto max-w-[1250px] px-12">
        
        {/* セクションヘッダー（左端のラインを1250pxに吸着） */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <p className="text-[18px] font-bold bg-gradient-to-r from-[#03BAEE] to-[#014FB4] bg-clip-text text-transparent [font-family:'Noto_Sans_JP-Bold',Helvetica]">
            {services.title[lang]}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-snug font-[family-name:var(--font-noto-serif)] antialiased">
            {services.intro[lang]}
          </h2>
        </div>

        {/* サービスカードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#028AC4] p-8 rounded-[18px] flex flex-col gap-5 text-white shadow-md cursor-default select-none"
            >
              <div className="p-3 bg-white rounded-xl w-fit shadow-sm">
                {icons[idx] || <Globe className="size-8 text-[#028AC4]" />}
              </div>
              <div className="flex flex-col gap-2">
                {/* SNS運用が1行に綺麗に収まる指定 */}
                <h3 className="text-xl md:text-[19px] font-bold font-[family-name:var(--font-noto-serif)] antialiased tracking-tight md:whitespace-nowrap">
                  {item.title[lang]}
                </h3>
                <p className="text-white/90 text-base leading-relaxed [font-family:'Noto_Sans_JP-Regular',Helvetica] mt-1">
                  {item.body[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}