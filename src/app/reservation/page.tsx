import { Metadata } from "next"
import Link from "next/link"
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Wrench,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Réserver une intervention | Numelite",
  description: "Réservez votre intervention de dépannage informatique en ligne. Créneaux disponibles sous 24h.",
}

const services = [
  { id: "diagnostic", name: "Diagnostic", price: 49, duration: "1h" },
  { id: "standard", name: "Intervention Standard", price: 89, duration: "1-2h" },
  { id: "complet", name: "Forfait Complet", price: 149, duration: "2-3h" },
]

const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
]

const problems = [
  "Mon PC est trop lent",
  "J'ai un virus / malware",
  "Écran bleu / Mon PC plante",
  "Mon PC ne démarre plus",
  "Problème de connexion internet",
  "Installation logiciel",
  "Autre problème"
]

export default function ReservationPage() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4">Réservation</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Réserver une <span className="gradient-text">intervention</span>
          </h1>
          <p className="text-lg text-slate-600">
            Choisissez votre créneau et nous intervenons chez vous
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
            <span className="ml-2 font-medium">Service</span>
          </div>
          <div className="w-12 h-0.5 bg-slate-200 mx-4" />
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold">2</div>
            <span className="ml-2 text-slate-500">Date & Heure</span>
          </div>
          <div className="w-12 h-0.5 bg-slate-200 mx-4" />
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold">3</div>
            <span className="ml-2 text-slate-500">Coordonnées</span>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-blue-600" />
              Choisissez votre intervention
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {services.map((service) => (
              <label
                key={service.id}
                className="flex items-center justify-between p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50"
              >
                <div className="flex items-center gap-4">
                  <input 
                    type="radio" 
                    name="service" 
                    value={service.id}
                    className="w-5 h-5 text-blue-600"
                  />
                  <div>
                    <p className="font-semibold">{service.name}</p>
                    <p className="text-sm text-slate-500">Durée estimée : {service.duration}</p>
                  </div>
                </div>
                <span className="text-xl font-bold text-blue-600">{service.price}€</span>
              </label>
            ))}

            <div className="space-y-2 pt-4">
              <Label>Décrivez votre problème</Label>
              <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10">
                <option value="">Sélectionnez un problème</option>
                {problems.map((problem, index) => (
                  <option key={index} value={problem}>{problem}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label>Détails supplémentaires (optionnel)</Label>
              <Textarea 
                placeholder="Décrivez votre problème plus en détail..."
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Date & Time */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Choisissez une date et un créneau
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Simple date picker placeholder */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Label className="mb-4 block">Date souhaitée</Label>
                <Input type="date" min={new Date().toISOString().split('T')[0]} />
                <p className="text-sm text-slate-500 mt-2">
                  Prochains créneaux disponibles : aujourd&apos;hui ou demain
                </p>
              </div>

              <div>
                <Label className="mb-4 block">Créneau horaire</Label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <label
                      key={time}
                      className="flex items-center justify-center p-3 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input 
                        type="radio" 
                        name="time" 
                        value={time}
                        className="sr-only"
                      />
                      <span className="font-medium">{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Contact Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              Vos coordonnées
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input id="firstName" placeholder="Jean" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input id="lastName" placeholder="Dupont" required />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input id="email" type="email" placeholder="vous@exemple.fr" className="pl-10" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input id="phone" type="tel" placeholder="06 12 34 56 78" className="pl-10" required />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Adresse d&apos;intervention *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input id="address" placeholder="123 rue de Paris" className="pl-10" required />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="postalCode">Code postal *</Label>
                <Input id="postalCode" placeholder="75001" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Ville *</Label>
                <Input id="city" placeholder="Paris" required />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary & Submit */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm text-slate-500">Total estimé</p>
                <p className="text-3xl font-bold">89€</p>
                <p className="text-sm text-slate-500">Paiement après intervention</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link href="/depannage">
                  <Button variant="outline" className="w-full gap-2">
                    <ArrowLeft className="h-5 w-5" />
                    Retour
                  </Button>
                </Link>
                <Button size="lg" className="w-full gap-2">
                  Confirmer la réservation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Déplacement gratuit
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Paiement après intervention
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Garantie satisfaction
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


