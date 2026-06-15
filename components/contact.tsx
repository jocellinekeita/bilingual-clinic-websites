"use client"

import { useState, type FormEvent } from "react"
import { content, useLang } from "@/lib/i18n"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const RECIPIENTS = ["jocelline.keita@gmail.com", "runa.wahahahaha@gmail.com"]

export function Contact() {
  const { lang } = useLang()
  const { contact } = content
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "")
    const clinic = String(data.get("clinic") || "")
    const email = String(data.get("email") || "")
    const message = String(data.get("message") || "")

    const subject = `[ケアデジタル] Consultation request — ${name || "New inquiry"}`
    const body = [
      `Name / お名前: ${name}`,
      `Clinic / クリニック名: ${clinic}`,
      `Email / メール: ${email}`,
      "",
      `Message / ご相談内容:`,
      message,
    ].join("\n")

    const mailto = `mailto:${RECIPIENTS.join(",")}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    window.location.href = mailto
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {content.nav.contact[lang]}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {contact.title[lang]}
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {contact.sub[lang]}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">{contact.name[lang]}</Label>
              <Input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="clinic">{contact.clinic[lang]}</Label>
              <Input id="clinic" name="clinic" autoComplete="organization" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{contact.email[lang]}</Label>
              <Input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">{contact.message[lang]}</Label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {sent ? contact.sending[lang] : contact.submit[lang]}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
