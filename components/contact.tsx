"use client"

import { content, useLang } from "@/lib/i18n"

export default function Contact() {
  const { lang } = useLang()

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSemWJQtSbIIB1MVeIHKJFF2cAp0UGWlBfg1iF1c_rrWHFgpGw/viewform?usp=publish-editor"
  
  return (
    <section 
      id="contact" 
      className="w-full bg-[#E6F5FD] py-24 scroll-mt-[96px] text-center flex flex-col items-center justify-center"
    >
      {/* 💡 コンテンツ幅を max-w-[1250px] に統一 */}
      <div className="mx-auto max-w-[1250px] w-full px-12 flex flex-col items-center">
        
        {/* 大見出し：サイズ縮小調整版 */}
        <h2 className="text-[28px] md:text-[34px] font-bold text-neutral-900 tracking-tight font-[family-name:var(--font-noto-serif)] antialiased leading-tight">
          {lang === "ja" ? "お気軽にご相談ください" : "Get in Touch"}
        </h2>
        
        {/* サブテキスト */}
        <div className="text-[16px] sm:text-[18px] font-normal text-neutral-700 font-[family-name:var(--font-noto-sans)] antialiased mt-6 max-w-2xl leading-relaxed">
          {lang === "ja" ? (
            <p>30分の無料相談を実施しています。アイデア段階でもお気軽にご相談ください。</p>
          ) : (
            /* 💡 英語の時は配列から1行ずつ取り出して、block要素として改行させます */
            <p className="flex flex-col gap-1">
              <span className="block">We offer a free 30-minute consultation.</span>
              <span className="block">Feel free to contact us even at the idea stage.</span>
            </p>
          )}
        </div>

        {/* 楕円グラデーションボタン（Googleフォーム別タブ遷移） */}
        <div className="mt-10">
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-[256px] h-14 rounded-full bg-gradient-to-r from-[#49B3E4] via-[#2F73C0] to-[#1E4FA2] text-white text-lg font-bold tracking-wide transition-transform hover:scale-[1.02] shadow-md shadow-[#2f73c0]/10 font-[family-name:var(--font-noto-sans)]"
          >
            {lang === "ja" ? "無料相談" : "Free Consultation"}
          </a>
        </div>

      </div>
    </section>
  )
}