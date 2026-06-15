import { LanguageProvider } from "@/lib/i18n"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyBilingual } from "@/components/why-bilingual"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main>
          <Hero />
          <Services />
          <About />
          <WhyBilingual />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
