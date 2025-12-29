"use client"

import { usePathname } from "next/navigation"
import { Header, Footer, WhatsAppButton, CookieBanner } from "@/components/layout"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Routes that should NOT show the public header/footer
  const isBackOffice = pathname?.startsWith("/admin") || pathname?.startsWith("/technicien")
  
  if (isBackOffice) {
    // Back-office routes: no public header/footer, no padding
    return (
      <main className="min-h-screen">
        {children}
      </main>
    )
  }
  
  // Public routes: show header/footer
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[120px] lg:pt-[160px]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  )
}

