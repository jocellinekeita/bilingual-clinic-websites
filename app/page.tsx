"use client"

import { SiteHeader } from "@/components/site-header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import { WhyBilingual } from "@/components/why-bilingual"
import About from "@/components/about"
import Contact from "@/components/contact"
import { SiteFooter } from "@/components/site-footer" // 💡 フッターをインポート
import { LanguageProvider } from "@/lib/i18n" 

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen w-full bg-white text-neutral-900 antialiased flex flex-col">
        {/* 1. ヘッダー */}
        <SiteHeader />
        
        {/* メインコンテンツエリア */}
        <div className="flex-1">
          {/* 2. ファーストビュー */}
          <Hero />
          
          {/* 3. サービス概要 */}
          <Services />
          
          {/* 4. 私たちの想い */}
          <WhyBilingual />
          
          {/* 5. 私たちについて */}
          <About />
          
          {/* 6. お問い合わせ (無料相談ボタン) */}
          <Contact />
        </div>
        
        {/* 7. フッター (最下部に配置) */}
        <SiteFooter />
      </main>
    </LanguageProvider>
  )
}