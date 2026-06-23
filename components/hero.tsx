"use client"

import { content, useLang } from "@/lib/i18n"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const { lang } = useLang()
  const { hero } = content

  // お問い合わせ・無料相談のGoogleフォームURL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSemWJQtSbIIB1MVeIHKJFF2cAp0UGWlBfg1iF1c_rrWHFgpGw/viewform?usp=publish-editor"

  const headlineLines = lang === "ja" 
    ? ["あなたのクリニックを", "英語でも日本語でも。"] 
    : ["Your clinic,", "in English and Japanese."]

  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-96px)] md:max-h-[780px] w-full bg-white overflow-hidden flex items-center"
    >
      {/* 下からふわっと浮かび上がる極上のイージングアニメーション定義 */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-1 { animation-delay: 100ms; }
        .delay-2 { animation-delay: 250ms; }
        .delay-3 { animation-delay: 400ms; }
        .delay-4 { animation-delay: 550ms; }
      `}</style>

      {/* 背景の真円イラスト（位置はそのままキープ） */}
      <div className="absolute top-[387px] left-[65%] w-[420px] h-[428px] bg-[#047fb3]/20 rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute top-24 left-[15%] w-[222px] h-[226px] bg-[#047fb3]/10 rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[280px] right-[8%] w-[100px] h-[102px] bg-[#047fb3]/15 rounded-full pointer-events-none" aria-hidden="true" />

      {/* 💡 コンテンツ幅を max-w-[1250px] に統一 */}
      <div className="mx-auto max-w-[1250px] w-full px-12 pt-[116px] pb-12 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* 左カラム：テキスト */}
        <div className="flex flex-col items-start max-w-2xl">
          {/* 見出しサイズバランス（30px / 42px）＆ 文字高180% */}
          <h1
            className="text-[30px] md:text-[42px] font-semibold text-neutral-900 tracking-tight leading-[1.6] font-[family-name:var(--font-noto-serif)] antialiased animate-fade-up delay-1"
          >
            {headlineLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* ラベル */}
          <p className="text-[18px] font-bold bg-gradient-to-r from-[#03BAEE] to-[#014FB4] bg-clip-text text-transparent leading-snug font-[family-name:var(--font-noto-sans)] antialiased mt-6 animate-fade-up delay-2">
            {hero.tagline[lang]}
          </p>

          {/* 説明文 */}
          <p className="text-[18px] font-normal text-neutral-600 leading-relaxed font-[family-name:var(--font-noto-sans)] antialiased mt-4 max-w-xl animate-fade-up delay-3">
            {hero.sub[lang]}
          </p>

          {/* Googleフォームボタン */}
          <div className="mt-11 animate-fade-up delay-4">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-[251px] h-16 rounded-full bg-gradient-to-br from-[#03D9FE] to-[#003CAA] text-white text-xl font-bold tracking-wide transition-transform hover:scale-[1.02] shadow-lg shadow-[#003caa]/20 font-[family-name:var(--font-noto-sans)]"
            >
              <span>{hero.cta[lang]}</span>
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>

        {/* 右カラム：画像 */}
        <div className="flex justify-center md:justify-end w-full">
          <div className="w-full max-w-[488px] aspect-[487/495] rounded-2xl overflow-hidden relative shadow-md animate-fade-up delay-3">
            <img
              src="/images/clinic-hero.png"
              alt="Clinic Hero Visual"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}