"use client"

import { content, useLang } from "@/lib/i18n"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const { lang } = useLang()

  const heroContent = {
    eyebrow: lang === "ja" ? "東京のクリニックのためのバイリンガルWeb制作" : "Bilingual Web Design for Clinics in Tokyo",
    title: lang === "ja" ? ["あなたのクリニックを", "英語でも日本語でも。"] : ["Your Clinic,", "In English and Japanese."],
    description: lang === "ja" 
      ? [
          "東京の医療・ウェルネスクリニック向けに、洗練された信頼感",
          "のあるWebサイトを制作します。英語・日本語のバイリンガル",
          "対応サイトをご提供します。",
        ]
      : [
          "We build sophisticated, trustworthy websites for medical and wellness",
          "clinics in Tokyo. Providing fully bilingual sites tailored for both",
          "local and international patients.",
        ],
    cta: lang === "ja" ? "お問い合わせ" : "Contact Us",
  }

  return (
    <section id="top" className="relative min-h-[calc(100vh-96px)] max-h-[855px] w-full bg-white overflow-hidden flex items-center">
      {/* 背景装飾 */}
      <div className="absolute top-[387px] left-[70%] lg:left-[1340px] w-[420px] h-[428px] bg-[#047fb366] rounded-full blur-[40px] pointer-events-none" />
      <div className="absolute top-32 left-[10%] lg:left-[250px] w-[222px] h-[226px] bg-[#047fb333] rounded-full blur-[20px] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] w-full px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* 左カラム */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          {/* Label: 18px */}
          <p className="text-[18px] font-bold bg-gradient-to-r from-[#03BAEE] to-[#014FB4] bg-clip-text text-transparent leading-snug [font-family:'Noto_Sans_JP-Bold',Helvetica]">
            {heroContent.eyebrow}
          </p>

          {/* Headline (h1): 52px */}
          <header className="w-full">
            <h1 id="hero-title" className="text-[52px] font-semibold text-neutral-900 tracking-tight leading-[1.3] [font-family:'Noto_Serif_JP-SemiBold',Helvetica]">
              {heroContent.title.map((line, idx) => (
                <span key={idx} className="block">{line}</span>
              ))}
            </h1>
          </header>

          {/* Description (p): 18px */}
          <div className="w-full">
            <p className="text-[18px] font-normal text-neutral-700 leading-relaxed [font-family:'Noto_Sans_JP-Regular',Helvetica]">
              {heroContent.description.map((line, idx) => (
                <span key={idx} className="block">{line}</span>
              ))}
            </p>
          </div>

          <div className="mt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-[251px] h-16 rounded-full bg-gradient-to-br from-[#03D9FE] to-[#003CAA] text-white text-xl font-bold tracking-wide transition-transform hover:scale-[1.02] shadow-lg shadow-[#003caa]/20 [font-family:'Noto_Sans_JP-Bold',Helvetica]"
            >
              <span>{heroContent.cta}</span>
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>

        {/* 右カラム */}
        <div className="flex justify-center md:justify-end w-full">
          <div className="w-full max-w-[488px] aspect-[487/495] bg-neutral-100 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
              alt="Clinic Reception"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}