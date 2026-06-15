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
    { href: "#why", label: content.nav.why[lang] },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <img
            src="images/logo_caredigital_large.png"
            alt={content.brand}
            className="h-14 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            {content.nav.contact[lang]}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((p) => !p)}
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 transition-[max-height] duration-300 md:hidden",
          open ? "max-h-72" : "max-h-0 border-t-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
