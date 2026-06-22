"use client"

import { content, useLang } from "@/lib/i18n"

export default function About() {
  const { lang } = useLang()

  const members = [
    {
      name: "Jolie",
      role: lang === "ja" ? "DXプロジェクトマネージャー" : "DX Project Manager",
      desc: lang === "ja" 
        ? "デジタルトランスフォーメーション(DX)の深い知見を持ち、英語・日本語のバイリンガルで数多くのプロジェクトを推進。医療機関向けの英語対応・システム統合を得意としています。"
        : "With deep expertise in Digital Transformation (DX), she drives numerous projects bilingually in English and Japanese, specializing in clinic localization.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Runa",
      role: lang === "ja" ? "UI/UXデザイナー" : "UI/UX Designer",
      desc: lang === "ja" 
        ? "Webサイトやアプリケーションのデザインを、ユーザーリサーチから実装設計まで一貫して手がけ、使いやすさと美しさを両立するデザインを得意としています。"
        : "Handles website and application design from user research to UI implementation, excels in creating interfaces that balance aesthetics and usability.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  ]

  return (
    <section id="about" className="w-full bg-neutral-50 py-24">
      <div className="mx-auto max-w-[1440px] px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 [font-family:'Noto_Serif_JP-Bold',Helvetica]">
            {lang === "ja" ? "私たちについて" : "About Us"}
          </h2>
          <p className="text-neutral-500 mt-2 text-lg">
            {lang === "ja" ? "東京を拠点とするバイリンガルチーム" : "Tokyo-based bilingual team"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {members.map((m, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <img src={m.img} alt={m.name} className="size-24 rounded-full object-cover bg-neutral-100" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-neutral-900">{m.name}</h3>
                <p className="text-[#049DC4] font-medium text-sm mb-3">{m.role}</p>
                <p className="text-neutral-600 text-base leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}