"use client"

import { content, useLang } from "@/lib/i18n"
import { Globe, Calendar, Paintbrush, FileText, Share2 } from "lucide-react"

export default function Services() {
  const { lang } = useLang()
  const { services } = content

  // 各カードの並び順に対応する美しい白抜きアイコンの配列
  const icons = [
    <Globe className="size-8 text-[#028AC4]" />,
    <Calendar className="size-8 text-[#028AC4]" />,
    <Paintbrush className="size-8 text-[#028AC4]" />,
    <FileText className="size-8 text-[#028AC4]" />,
    <Share2 className="size-8 text-[#028AC4]" />,
  ]

  return (
    <section id="services" className="w-full bg-white py-24 scroll-mt-[96px]">
      <div className="mx-auto max-w-[1440px] px-12">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-start gap-3 mb-16 max-w-4xl">
          {/* 18px */}
          <p className="text-[18px] font-bold bg-gradient-to-r from-[#03BAEE] to-[#014FB4] bg-clip-text text-transparent [font-family:'Noto_Sans_JP-Bold',Helvetica]">
            {services.title[lang]}
          </p>
          {/* 36px 信頼感溢れるセリフ体 */}
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-snug [font-family:'Noto_Serif_JP-Bold',Helvetica]">
            {services.intro[lang]}
          </h2>
        </div>

        {/* サービスカードグリッド配置 (指定色: bg-[#028AC4]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#028AC4] p-8 rounded-[18px] flex flex-col gap-5 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl text-white shadow-md"
            >
              {/* アイコンボックス (白地でアイコンを引き立たせる) */}
              <div className="p-3 bg-white rounded-xl w-fit shadow-sm">
                {icons[idx] || <Globe className="size-8 text-[#028AC4]" />}
              </div>
              <div className="flex flex-col gap-2">
                {/* カードタイトル: 20px相当 */}
                <h3 className="text-xl font-bold [font-family:'Noto_Sans_JP-Bold',Helvetica] tracking-normal">
                  {item.title[lang]}
                </h3>
                {/* カード本文: 16px快適サイズ */}
                <p className="text-white/90 text-base leading-relaxed [font-family:'Noto_Sans_JP-Regular',Helvetica]">
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