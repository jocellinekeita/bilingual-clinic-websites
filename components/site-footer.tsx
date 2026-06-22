"use client"

import { content, useLang } from "@/lib/i18n"

export function SiteFooter() {
  const { lang } = useLang()
  return (
    <footer className="border-t border-[#d6e8f0] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <img
          src="images/logo_caredigital_large.png"
          alt={content.brand}
          className="h-8 w-auto"
        />
        <p className="text-center text-sm text-gray-400 sm:text-left">
          {content.footer.rights[lang]}
        </p>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {content.brandRoman}
        </p>
      </div>
    </footer>
  )
}