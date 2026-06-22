"use client"

import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { lang, setLang } = useLang()

  const options = [
    { value: "en", label: "EN" },
    { value: "ja", label: "日本語" },
  ] as const

  return (
    <div 
      className="inline-flex items-center gap-1 p-1 bg-black/10 rounded-full border border-white/10"
      role="group"
      aria-label="Language selection"
    >
      {options.map((option) => {
        const isSelected = lang === option.value

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => setLang(option.value)}
            className={cn(
              "inline-flex items-center justify-center px-6 h-12 text-xl font-medium rounded-full transition-all duration-200 focus-visible:outline-none",
              isSelected 
                ? "bg-white text-neutral-900 shadow-sm" 
                : "bg-transparent text-white/80 hover:text-white"
            )}
            style={{ fontFamily: "'Noto Sans JP', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}