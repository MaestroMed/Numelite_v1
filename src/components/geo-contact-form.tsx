"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface GeoContactFormProps {
  location: string
  buttonGradient?: string
}

export function GeoContactForm({ 
  location, 
  buttonGradient = "from-red-500 to-pink-500" 
}: GeoContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: `[${location}] Adresse: ${formData.address}\n\n${formData.message}`,
          source: `geo-${location.toLowerCase().replace(/\s+/g, '-')}`,
          status: "new"
        })
      })

      if (!response.ok) throw new Error("Erreur")

      setStatus("success")
      setFormData({ name: "", phone: "", address: "", message: "" })
    } catch (error) {
      console.error("Error:", error)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Demande envoyée !</h2>
        <p className="text-slate-600 mb-4">
          Nous vous rappelons sous 15 minutes.
        </p>
        <Button 
          onClick={() => setStatus("idle")}
          variant="outline"
        >
          Nouvelle demande
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900">
      <h2 className="text-2xl font-bold mb-6">Rappel gratuit en 15 min</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          placeholder="Votre nom"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input 
          type="tel"
          placeholder="Votre téléphone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Input 
          placeholder={`Votre adresse dans le ${location}`}
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <Textarea 
          placeholder="Décrivez votre problème..."
          className="min-h-[100px]"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <Button 
          type="submit"
          className={`w-full py-6 text-lg bg-gradient-to-r ${buttonGradient}`}
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Envoi...
            </>
          ) : (
            <>
              Demander un rappel
              <ArrowRight className="h-5 w-5 ml-2" />
            </>
          )}
        </Button>
      </form>
      {status === "error" && (
        <p className="text-red-600 text-sm mt-4 text-center">
          Erreur. Appelez-nous directement au 01 23 45 67 89
        </p>
      )}
    </div>
  )
}

