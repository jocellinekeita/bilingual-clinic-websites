"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { content, useLang } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"
import { cn } from "@/lib/utils"
import Image from "next/image"


export function SiteHeader() {
  const { lang } = useLang()
  const [open, setOpen] = useState(false)

  // 💡 お問い合わせのリンク先をGoogleフォームのURLに指定
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSemWJQtSbIIB1MVeIHKJFF2cAp0UGWlBfg1iF1c_rrWHFgpGw/viewform?usp=publish-editor"

  const links = [
    { href: "#services", label: content.nav.services[lang] },
    { href: "#why-bilingual", label: content.nav.why[lang] },
    { href: "#about", label: content.nav.about[lang] },
  ]

  // 自然なアニメーション
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)

    const target = document.querySelector(href)
    if (!target) return

    target.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#03C2F2]/80 backdrop-blur-md text-white border-b border-white/10">
      <div className="mx-auto flex max-w-[1440px] h-[96px] items-center justify-between px-12">

{/* 左側：ロゴエリア（💡 白背景の面積を最小化し、ロゴを限界まで大型化） */}
        <a 
          href="#top" 
          onClick={(e) => handleSmoothScroll(e, "#top")}
          className="flex items-center transition-opacity hover:opacity-95"
        >
          {/* 高さは h-14 (56px) のまま、横の余白を px-5 → px-2.5 に極小化して白の面積を大幅カット */}
          <div className="bg-white px-2.5 rounded-[8px] flex items-center justify-center h-14 shadow-sm">
            {/* ボックスの高さ(56px)に対して、ロゴ画像を h-12 (48px) まで引き上げ、上下余白をわずか4pxに */}
            
<Image
  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo_caredigital_large.png`}
  alt={content.brand}
  width={200}
  height={48}
  className="h-12 w-auto object-contain"
/>
          </div>
        </a>

        {/* 中央：ナビゲーション（16px） */}
        <nav className="hidden items-center gap-12 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleSmoothScroll(e, l.href)}
              className="text-base font-medium text-white transition-colors hover:text-white/80 antialiased tracking-normal"
              style={{ fontFamily: "'Noto Sans JP', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* 右側：言語切り替え ＆ お問い合わせボタン */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center h-12 text-base font-medium antialiased">
            <LanguageToggle />
          </div>
          {/* 💡 px-8 から w-[160px] に変更し、EN/JP どちらでも全く同じ横幅をキープします */}
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#ffffff] w-[160px] h-12 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-200 shadow-sm"
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
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleSmoothScroll(e, l.href)}
              className="rounded-md px-3 py-3 text-base font-medium text-white hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center h-12 px-3 text-base my-2">
            <LanguageToggle />
          </div>
          {/* 💡 モバイル版のお問い合わせリンクも同様に別タブでフォームが開くように修正 */}
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
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