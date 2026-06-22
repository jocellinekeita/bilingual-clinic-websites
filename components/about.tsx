"use client"

import { content, useLang } from "@/lib/i18n"

export default function About() {
  const { lang } = useLang()
  const { about } = content

  return (
    <section id="about" className="w-full bg-white py-24 scroll-mt-[96px]">
      <div className="mx-auto max-w-[1440px] px-12">
        
        {/* セクションヘッダー */}
        <div className="max-w-5xl mx-auto mb-12 flex flex-col items-start gap-3">
          {/* ラベル：18px サンセリフ */}
          <p className="text-[18px] font-bold text-[#049DC4] font-[family-name:var(--font-noto-sans)] antialiased">
            {about.title[lang]}
          </p>
          {/* 💡 理想のUI：美しい明朝体スタイルで「東京を拠点とするバイリンガルチーム。」を再現 */}
          <h2 className="text-4xl font-bold text-neutral-900 tracking-tight font-[family-name:var(--font-noto-serif)] antialiased">
            {lang === "ja" ? "東京を拠点とするバイリンガルチーム。" : about.location[lang]}
          </h2>
        </div>

        {/* メンバーカード：アバター画像なしの2カラム */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {about.people.map((p, idx) => (
            <div 
              key={idx} 
              className="bg-[#fbfbfc] p-10 rounded-[24px] border border-neutral-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-start gap-4"
            >
              {/* 名前：明朝体 */}
              <h3 className="text-[32px] font-bold text-neutral-900 font-[family-name:var(--font-noto-serif)] antialiased leading-none">
                {p.name}
              </h3>
              
              {/* 役職：太字サンセリフ */}
              <p className="text-sm font-bold text-neutral-900 font-[family-name:var(--font-noto-sans)] antialiased tracking-wide">
                {p.role[lang]}
              </p>
              
              {/* プロフィール本文：16px */}
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