"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { content, useLang } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { lang } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    { href: "#services", label: content.nav.services[lang] },
    { href: "#about", label: content.nav.about[lang] },
    { href: "#why-bilingual", label: content.nav.why[lang] },
  ]

  return (
    // 💡 bg-[#03C2F2]/80 で指定の透過度80%を設定、backdrop-blur-md で背面を美しくぼかします
    <header className="sticky top-0 z-50 w-full bg-[#03C2F2]/80 backdrop-blur-md text-white border-b border-white/10">
      <div className="mx-auto flex max-w-[1440px] h-[96px] items-center justify-between px-12">

        {/* 左側：ロゴエリア（mix-blend-multiplyで白背景を透過） */}
        <a href="#top" className="flex items-center transition-opacity hover:opacity-95 h-[64px]">
          <img
            src="/images/logo_caredigital_large.png"
            alt={content.brand}
            className="h-12 w-auto object-contain mix-blend-multiply brightness-110 contrast-125"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </a>

        {/* 中央：ナビゲーション（💡 text-base = 16px に変更） */}
        <nav className="hidden items-center gap-12 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-white transition-colors hover:text-white/80 antialiased tracking-normal"
              style={{ fontFamily: "'Noto Sans JP', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* 右側：言語切り替え ＆ お問い合わせボタン */}
        <div className="hidden items-center gap-6 md:flex">
          {/* 💡 text-base = 16px に変更 */}
          <div className="flex items-center h-12 text-base font-medium antialiased">
            <LanguageToggle />
          </div>
          <a
            href="#contact"
            // 💡 text-base = 16px に変更
            className="inline-flex items-center justify-center rounded-full bg-[#ffffff] px-8 h-12 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-200 shadow-sm"
            style={{ fontFamily: "'Noto Sans JP', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            <span>{content.nav.contact[lang]}</span>
          </a>
        </div>

        {/* モバイル用メニューボタン */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="inline-flex size-11 items-center justify-center rounded-md text-white md:hidden"
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>

      </div>

      {/* モバイル用ドロワーメニュー */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 md:hidden bg-[#03C2F2]",
          open ? "max-h-[360px] border-t border-white/10" : "max-h-0",
        )}
      >
        {/* 💡 モバイルメニュー内のフォントサイズもすべて一貫して text-base（16px）に統一 */}
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-white hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center h-12 px-3 text-base my-2">
            <LanguageToggle />
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center rounded-full bg-[#ffffff] py-3 text-base font-medium text-neutral-900"
          >
            {content.nav.contact[lang]}
          </a>
        </nav>
      </div>
    </header>
  )
}