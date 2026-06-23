"use client"

import { content, useLang } from "@/lib/i18n"

export default function About() {
  const { lang } = useLang()
  const { about } = content

  // 💡 ご提示いただいた日本語と英語の紹介文データを定義
  const aboutText = {
    ja: "私たちは、DXプロジェクトマネジメントとUX/UIデザインの専門性を活かし、医療機関の多言語対応を支援しています。英語・日本語のバイリンガル環境で数多くのプロジェクトを推進してきた経験と、ユーザーリサーチからUIデザインまで一貫して手がけるデザイン力を組み合わせ、患者様と医療機関の双方にとって使いやすいサービスづくりを目指しています。",
    en: "We bring together expertise in Digital Transformation (DX) project management and User Experience (UX) and User Interface(UI) design to support multilingual healthcare services. With experience leading projects in bilingual English–Japanese environments and a strong understanding of the challenges foreigners face when accessing healthcare in Japan, we design user-friendly digital experiences that benefit both patients and healthcare providers."
  }

  return (
    <section id="about" className="w-full bg-white py-24 scroll-mt-[96px]">
      {/* 💡 コンテンツ幅を他と共通の max-w-[1250px] に統一 */}
      <div className="mx-auto max-w-[1250px] px-12">
        
        {/* セクションヘッダー：左端のラインを1250pxに吸着 */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-[18px] font-bold text-[#049DC4] font-[family-name:var(--font-noto-sans)] antialiased">
            {about.title[lang]}
          </p>
          <h2 className="text-[26px] md:text-[34px] font-bold text-neutral-900 tracking-tight font-[family-name:var(--font-noto-serif)] antialiased leading-snug">
            {lang === "ja" ? "東京を拠点とするバイリンガルチーム。" : "Tokyo-Based Bilingual Team."}
          </h2>
        </div>

        {/* 💡 【変更の核心】スクリーンショット通りのシンプルな紹介文レイアウト */}
        <div className="mt-12 max-w-5xl">
          <p className="text-neutral-700 text-base md:text-[17px] leading-[1.8] font-[family-name:var(--font-noto-sans)] antialiased">
            {aboutText[lang]}
          </p>
        </div>

      </div>
    </section>
  )
}