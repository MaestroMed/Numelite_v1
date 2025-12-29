"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Plus,
  Send,
  Euro,
  FileText,
  User
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Mock data for a single lead
const leadData = {
  id: 1,
  name: "Sophie Laurent",
  email: "sophie@exemple.fr",
  phone: "06 12 34 56 78",
  problem: "PC très lent, met 10 minutes à démarrer. Beaucoup de pop-ups publicitaires apparaissent. Le navigateur s'ouvre tout seul parfois.",
  zone: "Paris 11e",
  address: "45 rue de la Roquette, 75011 Paris",
  urgency: "normal",
  status: "new",
  source: "Site web",
  createdAt: "2025-01-20 14:30",
  timeline: [
    { date: "2025-01-20 14:30", action: "Lead créé", type: "system" },
    { date: "2025-01-20 14:32", action: "Email de confirmation envoyé", type: "email" }
  ]
}

const pricingOptions = [
  { id: 1, name: "Diagnostic seul", price: 0, description: "Gratuit si intervention" },
  { id: 2, name: "Nettoyage virus standard", price: 79, description: "Suppression malwares + antivirus" },
  { id: 3, name: "Nettoyage virus complet", price: 119, description: "Nettoyage + optimisation système" },
  { id: 4, name: "Forfait PC lent", price: 99, description: "Diagnostic + nettoyage + optimisation" }
]

const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"
]

export default function LeadDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [status, setStatus] = useState(leadData.status)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [notes, setNotes] = useState("")

  const handleConvertToIntervention = () => {
    if (!selectedService || !selectedDate || !selectedTime) {
      alert("Veuillez sélectionner un service, une date et un créneau")
      return
    }
    // Here we would create the intervention
    alert("Intervention créée avec succès!")
    router.push("/technicien/planning")
  }

  const handleMarkAsLost = () => {
    setStatus("lost")
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/technicien/leads">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">{leadData.name}</h1>
            {leadData.urgency === "urgent" && (
              <Badge className="bg-red-100 text-red-700">
                <AlertCircle className="h-3 w-3 mr-1" />
                Urgent
              </Badge>
            )}
            <Badge className={
              status === "new" ? "bg-blue-100 text-blue-700" :
              status === "contacted" ? "bg-amber-100 text-amber-700" :
              status === "qualified" ? "bg-emerald-100 text-emerald-700" :
              "bg-red-100 text-red-700"
            }>
              {status === "new" ? "Nouveau" :
               status === "contacted" ? "Contacté" :
               status === "qualified" ? "Qualifié" : "Perdu"}
            </Badge>
          </div>
          <p className="text-[#8899aa]">Lead #{leadData.id} • {leadData.source} • {leadData.createdAt}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informations contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Phone className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-[#8899aa]">Téléphone</p>
                    <a href={`tel:${leadData.phone}`} className="font-medium text-blue-600 hover:underline">
                      {leadData.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-[#8899aa]">Email</p>
                    <a href={`mailto:${leadData.email}`} className="font-medium text-blue-600 hover:underline">
                      {leadData.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg sm:col-span-2">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-sm text-[#8899aa]">Adresse</p>
                    <p className="font-medium">{leadData.address}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <a href={`tel:${leadData.phone}`} className="flex-1">
                  <Button className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Appeler
                  </Button>
                </a>
                <a href={`sms:${leadData.phone}`} className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    SMS
                  </Button>
                </a>
                <a href={`mailto:${leadData.email}`} className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Problem Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description du problème</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">{leadData.problem}</p>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>💡 Suggestion :</strong> Symptômes typiques d&apos;adware/malware. Prévoir nettoyage complet + installation antivirus.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Convert to Intervention */}
          <Card className="border-2 border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                Convertir en intervention
              </CardTitle>
              <CardDescription>Planifiez le rendez-vous et convertissez ce lead en client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Service Selection */}
              <div>
                <Label className="text-base font-medium">1. Sélectionner le service</Label>
                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  {pricingOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedService(option.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedService === option.id
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{option.name}</span>
                        <span className="font-bold text-emerald-600">
                          {option.price === 0 ? "Gratuit" : `${option.price}€`}
                        </span>
                      </div>
                      <p className="text-sm text-[#8899aa]">{option.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <Label className="text-base font-medium">2. Choisir la date</Label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="mt-3"
                />
              </div>

              {/* Time Selection */}
              <div>
                <Label className="text-base font-medium">3. Choisir le créneau</Label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedTime === time
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label className="text-base font-medium">4. Notes internes (optionnel)</Label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ajouter des notes pour l'intervention..."
                  className="mt-3"
                />
              </div>

              {/* Summary */}
              {selectedService && selectedDate && selectedTime && (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <h4 className="font-medium text-emerald-800 mb-2">Récapitulatif</h4>
                  <div className="space-y-1 text-sm text-emerald-700">
                    <p>📍 {leadData.address}</p>
                    <p>📅 {selectedDate} à {selectedTime}</p>
                    <p>🔧 {pricingOptions.find(o => o.id === selectedService)?.name}</p>
                    <p className="font-bold text-lg mt-2">
                      💰 {pricingOptions.find(o => o.id === selectedService)?.price || 0}€
                    </p>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  onClick={handleConvertToIntervention}
                  className="flex-1 gap-2 bg-emerald-600 hover:bg-emerald-700"
                  disabled={!selectedService || !selectedDate || !selectedTime}
                >
                  <CheckCircle className="h-4 w-4" />
                  Créer l&apos;intervention
                </Button>
                <Button
                  variant="outline"
                  className="gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Envoyer devis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => setStatus("contacted")}
              >
                <Phone className="h-4 w-4" />
                Marquer comme contacté
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => setStatus("qualified")}
              >
                <CheckCircle className="h-4 w-4" />
                Marquer comme qualifié
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-red-600 hover:bg-red-50"
                onClick={handleMarkAsLost}
              >
                <XCircle className="h-4 w-4" />
                Marquer comme perdu
              </Button>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Historique</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leadData.timeline.map((event, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <p className="text-sm font-medium">{event.action}</p>
                      <p className="text-xs text-[#8899aa]">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add note */}
              <div className="mt-4 pt-4 border-t">
                <div className="flex gap-2">
                  <Input placeholder="Ajouter une note..." className="flex-1" />
                  <Button size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

