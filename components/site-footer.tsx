"use client"

import Image from "next/image"
import { content, useLang } from "@/lib/i18n"

export function SiteFooter() {
  const { lang } = useLang()
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-baseline gap-2">
          <img
            src="images/logo_caredigital_large.png"
            alt={content.brand}
            className="h-10 w-auto"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground sm:text-right">
          {content.footer.rights[lang]}
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {content.brandRoman}
        </p>
      </div>
    </footer>
  )
}
