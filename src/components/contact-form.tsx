"use client"

import { useState } from "react"
import Link from "next/link"
import { Zap, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactFormProps {
  variant?: "depannage" | "contact" | "creation-site" | "maintenance"
  className?: string
}

const problemOptions = {
  depannage: [
    "Mon PC est trop lent",
    "J'ai un virus",
    "Écran bleu / Mon PC plante",
    "Mon PC ne démarre plus",
    "Problème de connexion internet",
    "Autre problème"
  ],
  "creation-site": [
    "Site vitrine",
    "Site e-commerce",
    "Refonte de site existant",
    "Application web",
    "Autre projet"
  ],
  maintenance: [
    "Contrat de maintenance",
    "Intervention ponctuelle",
    "Audit sécurité",
    "Mise à jour système",
    "Autre demande"
  ],
  contact: [
    "Demande de devis",
    "Question sur un service",
    "Partenariat",
    "Autre"
  ]
}

const titles = {
  depannage: "Demande d'intervention rapide",
  contact: "Contactez-nous",
  "creation-site": "Demandez un devis gratuit",
  maintenance: "Demande de maintenance"
}

const subtitles = {
  depannage: "Réponse sous 30 minutes",
  contact: "Nous vous répondons sous 24h",
  "creation-site": "Réponse sous 24h",
  maintenance: "Réponse sous 24h"
}

const buttonLabels = {
  depannage: "Demander une intervention",
  contact: "Envoyer le message",
  "creation-site": "Demander mon devis gratuit",
  maintenance: "Demander un devis"
}

export function ContactForm({ variant = "contact", className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    problem: problemOptions[variant][0],
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || null,
          phone: formData.phone,
          message: `[${variant.toUpperCase()}] ${formData.problem}\n\n${formData.message}`,
          source: variant,
          status: "new"
        })
      })

      if (!response.ok) throw new Error("Erreur lors de l'envoi")

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        problem: problemOptions[variant][0],
        message: ""
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setErrorMessage("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.")
    }
  }

  if (status === "success") {
    return (
      <div className={`glass-strong rounded-3xl p-8 glow-border text-center ${className}`}>
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-emerald-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Message envoyé !</h2>
        <p className="text-[#8899aa] mb-6">
          Merci pour votre demande. Nous vous recontacterons dans les plus brefs délais 
          {variant === "depannage" && " (sous 30 minutes en moyenne)"}.
        </p>
        <Button 
          onClick={() => setStatus("idle")}
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
        >
          Envoyer une autre demande
        </Button>
      </div>
    )
  }

  return (
    <div className={`glass-strong rounded-3xl p-8 glow-border ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">{titles[variant]}</h2>
        <p className="text-[#8899aa]">{subtitles[variant]}</p>
      </div>

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#b8c4d0] mb-2">Votre nom *</label>
          <input 
            type="text" 
            className="w-full h-12 px-4 rounded-xl glass-input"
            placeholder="Jean Dupont"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#b8c4d0] mb-2">Téléphone *</label>
          <input 
            type="tel" 
            className="w-full h-12 px-4 rounded-xl glass-input"
            placeholder="06 12 34 56 78"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {(variant === "contact" || variant === "creation-site") && (
          <div>
            <label className="block text-sm font-medium text-[#b8c4d0] mb-2">Email</label>
            <input 
              type="email" 
              className="w-full h-12 px-4 rounded-xl glass-input"
              placeholder="jean@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-[#b8c4d0] mb-2">
            {variant === "depannage" ? "Décrivez votre problème" : "Type de demande"}
          </label>
          <select 
            className="w-full h-12 px-4 rounded-xl glass-input"
            value={formData.problem}
            onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
          >
            {problemOptions[variant].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {(variant === "contact" || variant === "creation-site") && (
          <div>
            <label className="block text-sm font-medium text-[#b8c4d0] mb-2">Message</label>
            <textarea 
              className="w-full h-24 px-4 py-3 rounded-xl glass-input resize-none"
              placeholder="Décrivez votre projet ou votre demande..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
        )}

        <Button 
          type="submit" 
          size="lg" 
          className="w-full gap-2 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Zap className="h-5 w-5" />
              {buttonLabels[variant]}
            </>
          )}
        </Button>
        
        <p className="text-xs text-center text-[#667788]">
          En soumettant ce formulaire, vous acceptez notre{" "}
          <Link href="/politique-confidentialite" className="text-[#4da6ff] hover:underline">
            politique de confidentialité
          </Link>
        </p>
      </form>
    </div>
  )
}

