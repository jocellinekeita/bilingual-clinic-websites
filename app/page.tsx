"use client"

import { SiteHeader } from "@/components/site-header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import { WhyBilingual } from "@/components/why-bilingual" // 💡 追加
import About from "@/components/about"
import Contact from "@/components/contact"
import { LanguageProvider } from "@/lib/i18n" 

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen w-full bg-white text-neutral-900 antialiased">
        {/* 1. ヘッダー */}
        <SiteHeader />
        
        {/* 2. ファーストビュー */}
        <Hero />
        
        {/* 3. サービス概要 */}
        <Services />
        
        {/* 4. 私たちの想い (ご要望に基づきサービス概要の直下に配置) */}
        <WhyBilingual />
        
        {/* 5. 私たちについて */}
        <About />
        
        {/* 6. お問い合わせ */}
        <Contact />
      </main>
    </LanguageProvider>
  )
}