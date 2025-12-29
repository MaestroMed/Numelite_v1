"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Cookie, X, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: string
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: ""
  })

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie-consent")
    if (!savedConsent) {
      // Wait a bit before showing the banner
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (newConsent: CookieConsent) => {
    const consentWithTime = { ...newConsent, timestamp: new Date().toISOString() }
    localStorage.setItem("cookie-consent", JSON.stringify(consentWithTime))
    setShowBanner(false)
    
    // Initialize analytics if accepted
    if (newConsent.analytics && typeof window !== "undefined") {
      // Initialize GA4 here
      console.log("Analytics enabled")
    }
    
    // Initialize marketing if accepted
    if (newConsent.marketing && typeof window !== "undefined") {
      // Initialize Google Ads, etc.
      console.log("Marketing enabled")
    }
  }

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true, timestamp: "" })
  }

  const rejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false, timestamp: "" })
  }

  const saveSettings = () => {
    saveConsent(consent)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto glass-strong rounded-2xl overflow-hidden glow-border">
            {!showSettings ? (
              // Main Banner
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center shrink-0">
                    <Cookie className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      🍪 Nous utilisons des cookies
                    </h3>
                    <p className="text-[#8899aa] text-sm mb-4">
                      Ce site utilise des cookies pour améliorer votre expérience, analyser le trafic et personnaliser les publicités. 
                      Vous pouvez accepter tous les cookies ou personnaliser vos préférences.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={acceptAll}>
                        Accepter tout
                      </Button>
                      <Button variant="outline" onClick={rejectAll}>
                        Refuser
                      </Button>
                      <Button 
                        variant="ghost" 
                        onClick={() => setShowSettings(true)}
                        className="gap-2"
                      >
                        <Settings className="h-4 w-4" />
                        Personnaliser
                      </Button>
                    </div>
                    <p className="text-xs text-[#667788] mt-4">
                      En savoir plus dans notre{" "}
                      <Link href="/politique-cookies" className="text-[#4da6ff] hover:underline">
                        politique de cookies
                      </Link>{" "}
                      et notre{" "}
                      <Link href="/politique-confidentialite" className="text-[#4da6ff] hover:underline">
                        politique de confidentialité
                      </Link>
                      .
                    </p>
                  </div>
                  <button
                    onClick={rejectAll}
                    className="p-2 text-[#667788] hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">
                    Paramètres des cookies
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 text-[#667788] hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Necessary */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Label className="text-base font-medium text-white">Cookies nécessaires</Label>
                      <p className="text-sm text-[#8899aa] mt-1">
                        Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                      </p>
                    </div>
                    <Switch checked disabled />
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Label className="text-base font-medium text-white">Cookies analytiques</Label>
                      <p className="text-sm text-[#8899aa] mt-1">
                        Ces cookies nous permettent de mesurer l&apos;audience et d&apos;améliorer le site (Google Analytics).
                      </p>
                    </div>
                    <Switch 
                      checked={consent.analytics}
                      onCheckedChange={(checked) => setConsent({ ...consent, analytics: checked })}
                    />
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Label className="text-base font-medium text-white">Cookies marketing</Label>
                      <p className="text-sm text-[#8899aa] mt-1">
                        Ces cookies sont utilisés pour les publicités ciblées et le remarketing (Google Ads).
                      </p>
                    </div>
                    <Switch 
                      checked={consent.marketing}
                      onCheckedChange={(checked) => setConsent({ ...consent, marketing: checked })}
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <Button onClick={saveSettings}>
                    Enregistrer mes préférences
                  </Button>
                  <Button variant="outline" onClick={acceptAll}>
                    Accepter tout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
