"use client"

import { content, useLang } from "@/lib/i18n"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const { lang } = useLang()
  const { hero } = content

  const headlineLines = lang === "ja" 
    ? ["あなたのクリニックを", "英語でも日本語でも。"] 
    : ["Your clinic, online —", "in English and Japanese."]

  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-96px)] max-h-[855px] w-full bg-white overflow-hidden flex items-center"
    >
      {/* 背景のイラスト：ぼかし（blur）無しのくっきりしたオリジナル真円 */}
      <div
        className="absolute top-[387px] left-[65%] w-[420px] h-[428px] bg-[#047fb3]/20 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-24 left-[15%] w-[222px] h-[226px] bg-[#047fb3]/10 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[280px] right-[8%] w-[100px] h-[102px] bg-[#047fb3]/15 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] w-full px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* 左カラム：テキストブロック */}
        <div className="flex flex-col items-start max-w-2xl">
          {/* 大見出し（一番上）：明朝体 */}
          <h1
            className="text-[52px] font-semibold text-neutral-900 tracking-tight leading-[1.3] font-[family-name:var(--font-noto-serif)] antialiased"
          >
            {headlineLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* ラベル（タイトルの下）：18px / 太字グラデーション */}
          <p className="text-[18px] font-bold bg-gradient-to-r from-[#03BAEE] to-[#014FB4] bg-clip-text text-transparent leading-snug font-[family-name:var(--font-noto-sans)] antialiased mt-6">
            {hero.tagline[lang]}
          </p>

          {/* 説明文 */}
          <p className="text-[18px] font-normal text-neutral-600 leading-relaxed font-[family-name:var(--font-noto-sans)] antialiased mt-4 max-w-xl">
            {hero.sub[lang]}
          </p>

          {/* CTAボタン */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-[251px] h-16 rounded-full bg-gradient-to-br from-[#03D9FE] to-[#003CAA] text-white text-xl font-bold tracking-wide transition-transform hover:scale-[1.02] shadow-lg shadow-[#003caa]/20 font-[family-name:var(--font-noto-sans)]"
            >
              <span>{hero.cta[lang]}</span>
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>

        {/* 右カラム：指定の clinic-hero.png を配置 */}
        <div className="flex justify-center md:justify-end w-full">
          <div className="w-full max-w-[488px] aspect-[487/495] rounded-2xl overflow-hidden shadow-xl border border-neutral-100 relative">
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