"use client"

import { useState } from "react"
import Link from "next/link"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

export function ContactPageForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
    newsletter: false
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.privacy) {
      setErrorMessage("Veuillez accepter la politique de confidentialité")
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || null,
          message: `[${formData.subject}]\n\n${formData.message}${formData.newsletter ? '\n\n[Souhaite recevoir la newsletter]' : ''}`,
          source: "contact",
          status: "new"
        })
      })

      if (!response.ok) throw new Error("Erreur lors de l'envoi")

      setStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
        newsletter: false
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setErrorMessage("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.")
    }
  }

  if (status === "success") {
    return (
      <Card className="bg-white/5 backdrop-blur-xl border-white/10">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
          <p className="text-[#8899aa] mb-6">
            Merci pour votre message. Nous vous répondrons dans les plus brefs délais (sous 24h).
          </p>
          <Button 
            onClick={() => setStatus("idle")}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Envoyer un autre message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/5 backdrop-blur-xl border-white/10">
      <CardContent className="p-6">
        {status === "error" && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
            <p className="text-red-400 text-sm">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-300">Prénom *</Label>
              <Input 
                placeholder="Jean"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Nom *</Label>
              <Input 
                placeholder="Dupont"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-300">Email *</Label>
            <Input 
              type="email"
              placeholder="jean@exemple.fr"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-slate-300">Téléphone</Label>
            <Input 
              type="tel"
              placeholder="06 12 34 56 78"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-slate-300">Sujet *</Label>
            <select 
              className="flex h-12 w-full rounded-xl border-2 border-white/20 bg-white/5 px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            >
              <option value="" className="bg-slate-800">Sélectionnez un sujet</option>
              <option value="depannage" className="bg-slate-800">Dépannage informatique</option>
              <option value="site-vitrine" className="bg-slate-800">Création site vitrine</option>
              <option value="site-ecommerce" className="bg-slate-800">Création site e-commerce</option>
              <option value="maintenance" className="bg-slate-800">Maintenance</option>
              <option value="devis" className="bg-slate-800">Demande de devis</option>
              <option value="autre" className="bg-slate-800">Autre</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-300">Message *</Label>
            <Textarea 
              placeholder="Décrivez votre projet ou votre problème..."
              className="min-h-[150px] bg-white/5 border-white/20 text-white placeholder:text-slate-500"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox 
              id="privacy"
              checked={formData.privacy}
              onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
              className="mt-1"
            />
            <Label htmlFor="privacy" className="text-sm text-slate-400 font-normal">
              J&apos;accepte que mes données soient traitées conformément à la{" "}
              <Link href="/politique-confidentialite" className="text-blue-400 hover:underline">
                politique de confidentialité
              </Link>
              . *
            </Label>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox 
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
              className="mt-1"
            />
            <Label htmlFor="newsletter" className="text-sm text-slate-400 font-normal">
              Je souhaite recevoir les actualités et offres de Numelite
            </Label>
          </div>

          <Button 
            type="submit"
            size="lg"
            className="w-full gap-2 bg-gradient-to-r from-blue-600 to-cyan-500"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Envoyer le message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

