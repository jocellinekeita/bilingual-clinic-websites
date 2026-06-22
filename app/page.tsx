"use client"

import { SiteHeader } from "@/components/site-header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
// 💡 i18nファイルからLanguageProvider（または名前が少し違う場合は適宜インポート名を確認してください）を読み込みます
import { LanguageProvider } from "@/lib/i18n" 

export default function Home() {
  return (
    // 💡 エラーの原因だった useLang を動かすための親要素で全体を囲みます
    <LanguageProvider>
      <main className="min-h-screen w-full bg-white text-neutral-900">
        {/* 1. ヘッダー */}
        <SiteHeader />
        
        {/* 2. メインのヒーロービュー */}
        <Hero />
        
        {/* 3. 私たちについて */}
        <About />
        
        {/* 4. お問い合わせ */}
        <Contact />
      </main>
    </LanguageProvider>
  )
}