"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

const WHATSAPP_NUMBER = "33612345678"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const messages = [
    { label: "Dépannage urgent", message: "Bonjour, j'ai besoin d'une intervention de dépannage urgente." },
    { label: "Demande de devis site web", message: "Bonjour, je souhaite obtenir un devis pour la création d'un site web." },
    { label: "Question sur un service", message: "Bonjour, j'ai une question concernant vos services." },
  ]

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-72 glass-strong rounded-2xl overflow-hidden glow-border"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-400 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Numelite</p>
                  <p className="text-sm text-white/80">Répond généralement sous 1h</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4">
              <p className="text-sm text-[#b8c4d0] mb-4">
                Bonjour ! 👋 Comment pouvons-nous vous aider ?
              </p>
              <div className="space-y-2">
                {messages.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => openWhatsApp(item.message)}
                    className="w-full text-left px-4 py-3 glass hover:bg-white/10 rounded-xl text-sm font-medium text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center text-white hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-7 w-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse animation */}
      {!isOpen && (
        <span className="absolute top-0 right-0 w-4 h-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </span>
      )}
    </div>
  )
}
