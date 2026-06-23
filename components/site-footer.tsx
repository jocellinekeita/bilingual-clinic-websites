"use client"

import { useLang } from "@/lib/i18n"

export function SiteFooter() {
  const { lang } = useLang()

  return (
    <footer className="w-full bg-[#090909] py-8 text-neutral-400 text-sm font-[family-name:var(--font-noto-sans)] antialiased border-t border-neutral-900">
      <div className="mx-auto max-w-[1440px] px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* 左側：指定のダークロゴマーク（💡 1.5倍の大型サイズに拡張） */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-16">
            <img 
              src="/images/logo_caredigital_dark.png" 
              alt="CAREDIGITAL" 
              className="h-[54px] w-auto object-contain"
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


      </div>
    </footer>
  )
}