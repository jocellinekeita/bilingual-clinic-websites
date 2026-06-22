"use client"

import { content, useLang } from "@/lib/i18n"

export default function Contact() {
  const { lang } = useLang()
  
  return (
    <section 
      id="contact" 
      className="w-full bg-[#E6F5FD] py-24 scroll-mt-[96px] text-center flex flex-col items-center justify-center"
    >
      <div className="mx-auto max-w-[1440px] px-12 flex flex-col items-center">
        
        {/* 大見出し：美しい明朝体 */}
        <h2 className="text-[36px] sm:text-[40px] font-bold text-neutral-900 tracking-tight font-[family-name:var(--font-noto-serif)] antialiased leading-tight">
          {lang === "ja" ? "お気軽にご相談ください" : "Feel free to reach out"}
        </h2>
        
        {/* サブテキスト：サンセリフ */}
        <p className="text-[16px] sm:text-[18px] font-normal text-neutral-700 font-[family-name:var(--font-noto-sans)] antialiased mt-6 max-w-2xl leading-relaxed">
          {lang === "ja" 
            ? "30分の無料相談を実施しています。アイデア段階でもお気軽にご相談ください。" 
            : "We offer a free 30-minute consultation. Feel free to contact us even at the idea stage."}
        </p>

        {/* 💡 理想のUI：中央に配置された鮮やかなグラデーションの楕円ボタン */}
        <div className="mt-10">
          <a
            href="mailto:info@caredigital.com" // または適切な遷移先
            className="inline-flex items-center justify-center w-[256px] h-14 rounded-full bg-gradient-to-r from-[#49B3E4] via-[#2F73C0] to-[#1E4FA2] text-white text-lg font-bold tracking-wide transition-transform hover:scale-[1.02] shadow-md shadow-[#2f73c0]/10 font-[family-name:var(--font-noto-sans)]"
          >
            {lang === "ja" ? "無料相談" : "Free Consultation"}
          </a>
        </div>

      </div>
    </section>
  )
}