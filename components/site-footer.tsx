"use client"

import { useLang } from "@/lib/i18n"

// 💡 確実に「SiteFooter」という名前でエクスポートします
export function SiteFooter() {
  const { lang } = useLang()

  return (
    <footer className="w-full bg-[#090909] py-8 text-neutral-400 text-sm font-[family-name:var(--font-noto-sans)] antialiased border-t border-neutral-900">
      <div className="mx-auto max-w-[1440px] px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* 左側：ロゴマーク */}
        <div className="flex items-center gap-2">
          <div className="bg-white px-4 py-1.5 rounded-sm flex items-center justify-center h-8">
            <img 
              src="/images/logo_caredigital_large.png" 
              alt="CAREDIGITAL" 
              className="h-5 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* 中央：コピーライト */}
        <div className="text-xs text-neutral-500">
          © 2026 CareDigital
        </div>

        {/* 右側：リンク */}
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <a href="#terms" className="hover:text-white transition-colors">
            {lang === "ja" ? "利用規約" : "Terms of Service"}
          </a>
          <span>|</span>
          <a href="#privacy" className="hover:text-white transition-colors">
            {lang === "ja" ? "プライバシーポリシー" : "Privacy Policy"}
          </a>
        </div>

      </div>
    </footer>
  )
}