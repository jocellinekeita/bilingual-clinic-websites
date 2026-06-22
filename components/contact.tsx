"use client"

import { useState } from "react"
import { useLang } from "@/lib/i18n"

export default function Contact() {
  const { lang } = useLang()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="w-full bg-white py-24 border-t border-neutral-100">
      <div className="mx-auto max-w-[1440px] px-12 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 [font-family:'Noto_Serif_JP-Bold',Helvetica]">
            {lang === "ja" ? "お問い合わせ" : "Contact Us"}
          </h2>
          <p className="text-neutral-500 mt-2 text-lg">
            {lang === "ja" ? "ご相談・お見積もりは無料です。お気軽にご連絡ください。" : "Free consultation and estimate. Feel free to reach out."}
          </p>
        </div>

        {submitted ? (
          <div className="bg-blue-50 border border-blue-200 text-[#049DC4] p-6 rounded-xl text-center text-xl font-medium">
            {lang === "ja" ? "送信が完了しました。ありがとうございます！" : "Thank you! Your message has been sent."}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-neutral-800">{lang === "ja" ? "お名前" : "Name"}</label>
              <input required type="text" className="w-full px-4 h-12 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#049DC4] text-neutral-900 bg-neutral-50" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-neutral-800">{lang === "ja" ? "メールアドレス" : "Email"}</label>
              <input required type="email" className="w-full px-4 h-12 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#049DC4] text-neutral-900 bg-neutral-50" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-neutral-800">{lang === "ja" ? "お問い合わせ内容" : "Message"}</label>
              <textarea required rows={5} className="w-full p-4 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#049DC4] text-neutral-900 bg-neutral-50 resize-none" />
            </div>
            <button type="submit" className="w-full h-14 rounded-full bg-[#049DC4] text-white text-xl font-bold transition-opacity hover:opacity-90 mt-4">
              {lang === "ja" ? "送信する" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}