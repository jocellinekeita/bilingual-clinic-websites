"use client"

import { content, useLang } from "@/lib/i18n"

export default function About() {
  const { lang } = useLang()
  const { about } = content

  return (
    <section id="about" className="w-full bg-white py-24 scroll-mt-[96px]">
      {/* 💡 コンテンツ幅を max-w-[1250px] に統一 */}
      <div className="mx-auto max-w-[1250px] px-12">
        
        {/* セクションヘッダー */}
        <div className="mb-12 flex flex-col items-start gap-3">
          <p className="text-[18px] font-bold text-[#049DC4] font-[family-name:var(--font-noto-sans)] antialiased">
            {about.title[lang]}
          </p>
          {/* 見出しフォントサイズ調整版 */}
          <h2 className="text-[26px] md:text-[34px] font-bold text-neutral-900 tracking-tight font-[family-name:var(--font-noto-serif)] antialiased leading-snug">
            {lang === "ja" ? "東京を拠点とするバイリンガルチーム。" : about.location[lang]}
          </h2>
        </div>

        {/* メンバーカード（2カラムが1250pxの幅いっぱいに美しく広がります） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {about.people.map((p, idx) => (
            <div 
              key={idx} 
              className="bg-[#fbfbfc] p-10 rounded-[24px] border border-neutral-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col items-start gap-4"
            >
              <h3 className="text-[32px] font-bold text-neutral-900 font-[family-name:var(--font-noto-serif)] antialiased leading-none">
                {p.name}
              </h3>
              <p className="text-sm font-bold text-neutral-900 font-[family-name:var(--font-noto-sans)] antialiased tracking-wide">
                {p.role[lang]}
              </p>
              <p className="text-neutral-700 text-base leading-relaxed font-[family-name:var(--font-noto-sans)] antialiased mt-2">
                {p.bio[lang]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}