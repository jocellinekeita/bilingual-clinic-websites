"use client"

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"

export type Lang = "en" | "ja"

type Dict = typeof content

export const content = {
  brand: "ケアデジタル",
  brandRoman: "Care Digital",
  nav: {
    services: { en: "Services", ja: "サービス" },
    about: { en: "About", ja: "私たちについて" },
    why: { en: "Why Bilingual", ja: "なぜバイリンガル" },
    contact: { en: "Contact", ja: "お問い合わせ" },
  },
  hero: {
    tagline: {
      en: "Bilingual Web Design for Medical Clinics in Tokyo",
      ja: "東京のクリニックのためのバイリンガルWeb制作（英語・日本語対応）",
    },
    headline: {
      en: "Your clinic, online — in English and Japanese.",
      ja: "あなたのクリニックを、英語でも日本語でも。",
    },
    sub: {
      en: "We build clean, professional websites for medical and wellness clinics in Tokyo. Bilingual from day one.",
      ja: "東京の医療・ウェルネスクリニック向けに、洗練された信頼感のあるWebサイトを制作します。英語・日本語のバイリンガル対応サイトをご提供します。",
    },
    cta: { en: "Get in touch", ja: "お問い合わせ" },
    ctaAlt: { en: "お問い合わせ", ja: "Get in touch" },
  },
  services: {
    title: { en: "What We Do", ja: "私たちができること" },
    intro: {
      en: "We help Tokyo clinics show up online — with websites that work for both Japanese and international patients.",
      ja: "東京のクリニックが、日本人患者様にも外国人患者様にも見つけてもらいやすいオンライン環境づくりをサポートします。",
    },
    items: [
      {
        title: { en: "Bilingual Web Design", ja: "バイリンガルWebサイト制作" },
        body: {
          en: "Clean, professional sites in English and Japanese.",
          ja: "英語・日本語に対応した、見やすく信頼感のあるWebサイトを制作します。",
        },
      },
      {
        title: { en: "Booking System Integration", ja: "予約システム導入・連携" },
        body: {
          en: "Let patients book online, 24/7.",
          ja: "患者様が24時間いつでもオンラインで予約できる環境を整えます。",
        },
      },
      {
        title: { en: "Brand & Visual Identity", ja: "ブランディング・ビジュアルデザイン" },
        body: {
          en: "Logo, colors, and a design system that fits your clinic.",
          ja: "ロゴ制作からカラー設計、デザインガイドラインまで、クリニックの魅力を形にします。",
        },
      },
      {
        title: { en: "DTP & Print Design", ja: "DTP・印刷物デザイン" },
        body: {
          en: "Brochures, flyers, in-clinic signage, and business cards.",
          ja: "パンフレット、チラシ、院内掲示物、名刺など各種印刷物を制作します。",
        },
      },
      {
        title: { en: "SNS Strategy & Marketing", ja: "SNS運用・デジタルマーケティング支援" },
        body: {
          en: "Social media plans, content creation, and digital marketing.",
          ja: "SNS運用戦略の立案、コンテンツ制作、情報発信のサポートを行います。",
        },
      },
    ],
  },
  about: {
    title: { en: "Who We Are", ja: "私たちについて" },
    location: { en: "Based in Tokyo.", ja: "東京を拠点に活動しています。" },
    people: [
      {
        name: "Jolie",
        role: { en: "Digital Transformation PM", ja: "DXプロジェクトマネージャー" },
        bio: {
          en: "Experience as a digital transformation project manager with EN/JP fluency. Deeply understands the pain points of foreigners in Japan looking for clinics.",
          ja: "デジタルトランスフォーメーション（DX）プロジェクトマネージャーとしての経験を持ち、英語・日本語のバイリンガル環境で数多くのプロジェクトを推進。日本で医療機関を探す外国人の課題への深い理解があります。",
        },
      },
      {
        name: "Runa",
        role: { en: "UX/UI Designer", ja: "UX/UIデザイナー" },
        bio: {
          en: "Over five years as a UX/UI Designer across B2B and B2C websites, apps, and DTP. Expertise spans the full design process — from user research and information architecture to UI — with a focus on intuitive experiences that support both user needs and business goals.",
          ja: "UX/UIデザイナーとして5年以上、toB・toC向けのWebサイトやアプリケーション、DTPデザインを担当。ユーザーリサーチから情報設計、UIデザインまで一貫して手がけ、使いやすさとビジネス成果を両立するデザインを得意としています。",
        },
      },
    ],
  },
  why: {
    title: { en: "Why Bilingual", ja: "なぜバイリンガル対応が必要なのか" },
    body: {
      en: "Tokyo has one of the largest international communities in Japan — and most clinic websites are Japanese-only. That means foreign residents can't find you, can't understand your services, and go elsewhere. We fix that. A bilingual site isn't a luxury — it's patients you're currently turning away.",
      ja: "東京には日本最大級の国際コミュニティがあります。しかし、多くのクリニックのWebサイトは日本語のみです。その結果、外国人居住者や訪日外国人は、クリニックを見つけられず、別の医療機関を選んでしまいます。私たちは、その機会損失を解決します。バイリンガルサイトは、これまで取りこぼしていた患者さんとの接点を生み出します。",
    },
    points: [
      { en: "Can't find your clinic", ja: "クリニックを見つけられない" },
      { en: "Can't understand your services", ja: "提供サービスを理解できない" },
      { en: "Don't know how to book", ja: "予約方法がわからない" },
    ],
  },
  contact: {
    title: { en: "Let's talk about your clinic.", ja: "あなたのクリニックについて、お聞かせください。" },
    sub: {
      en: "We offer a free 30-minute consultation. No obligation.",
      ja: "30分の無料相談を実施しています。アイデア段階でもお気軽にご相談ください。",
    },
    name: { en: "Your name", ja: "お名前" },
    clinic: { en: "Clinic name", ja: "クリニック名" },
    email: { en: "Email address", ja: "メールアドレス" },
    message: { en: "How can we help?", ja: "ご相談内容" },
    submit: { en: "Send message", ja: "送信する" },
    sending: { en: "Opening your email…", ja: "メールを開いています…" },
  },
  footer: {
    rights: {
      en: "Bilingual web design for Tokyo clinics.",
      ja: "東京のクリニックのためのバイリンガルWeb制作。",
    },
  },
} as const

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  const toggle = () => setLang((p) => (p === "en" ? "ja" : "en"))
  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}

export function useT() {
  const { lang } = useLang()
  return { lang, t: content, tr: (obj: { en: string; ja: string }) => obj[lang] }
}

export type { Dict }
