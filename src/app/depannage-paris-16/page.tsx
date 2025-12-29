import { Metadata } from "next"
import Link from "next/link"
import { 
  Phone, 
  MapPin, 
  Star, 
  Zap,
  ArrowRight,
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Dépannage Informatique Paris 16ème | Réparation PC à Domicile | Numelite",
  description: "Dépannage informatique Paris 16ème arrondissement. Technicien à domicile en 2h. Réparation PC, Mac, virus, données. ☎ 01 23 45 67 89",
  keywords: "dépannage informatique paris 16, réparation ordinateur paris 16ème, technicien informatique 75016"
}

const quartiers = [
  "Auteuil", "Passy", "Chaillot", "Porte Dauphine", "Muette",
  "Ranelagh", "Trocadéro", "Victor Hugo", "Porte Maillot", "Bois de Boulogne"
]

const services = [
  { name: "Virus & Malwares", price: "79€" },
  { name: "PC Lent", price: "89€" },
  { name: "Écran noir", price: "99€" },
  { name: "Récupération données", price: "149€" }
]

export default function DepannageParis16Page() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#1abc9c] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-2 mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Intervention en 2h dans le 16ème
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dépannage Informatique
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                  Paris 16ème
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8">
                Service premium dans le <strong className="text-white">16ème arrondissement</strong>. 
                Du Trocadéro à Auteuil, intervention rapide et discrète.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:0123456789">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-lg px-8 py-6">
                    <Phone className="h-5 w-5" />
                    01 23 45 67 89
                  </Button>
                </a>
                <a href="https://wa.me/33123456789">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span>5/5 • 45 avis dans le 16ème</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900">
              <h2 className="text-2xl font-bold mb-6">Rappel gratuit en 15 min</h2>
              <form className="space-y-4">
                <Input placeholder="Votre nom" />
                <Input type="tel" placeholder="Votre téléphone" />
                <Input placeholder="Votre adresse dans le 16ème" />
                <Textarea placeholder="Décrivez votre problème..." className="min-h-[100px]" />
                <Button type="submit" className="w-full py-6 text-lg bg-gradient-to-r from-emerald-500 to-teal-500">
                  Demander un rappel
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos tarifs Paris 16ème</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Card key={service.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{service.name}</h3>
                  <p className="text-3xl font-bold text-emerald-600">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Nous intervenons dans tout le 16ème</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {quartiers.map((quartier) => (
              <Badge key={quartier} variant="outline" className="px-4 py-2 text-base">
                <MapPin className="h-4 w-4 mr-1" />
                {quartier}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d&apos;aide dans le 16ème ?</h2>
          <p className="text-xl text-emerald-100 mb-8">Service discret et professionnel</p>
          <a href="tel:0123456789">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6 gap-2">
              <Phone className="h-5 w-5" />
              01 23 45 67 89
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}


