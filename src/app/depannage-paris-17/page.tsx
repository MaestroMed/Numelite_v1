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
  title: "Dépannage Informatique Paris 17ème | Réparation PC à Domicile | Numelite",
  description: "Dépannage informatique Paris 17ème arrondissement. Technicien à domicile en 2h. Réparation PC, Mac, virus, données. ☎ 01 23 45 67 89",
  keywords: "dépannage informatique paris 17, réparation ordinateur paris 17ème, technicien informatique 75017"
}

const quartiers = [
  "Batignolles", "Épinettes", "Ternes", "Plaine Monceau",
  "Porte de Clichy", "Porte de Champerret", "Wagram", "Villiers"
]

const services = [
  { name: "Virus & Malwares", price: "79€" },
  { name: "PC Lent", price: "89€" },
  { name: "Écran noir", price: "99€" },
  { name: "Récupération données", price: "149€" }
]

export default function DepannageParis17Page() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#4a0e4e] via-[#7b2d8e] to-[#c86fc9] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-500/20 text-purple-200 border border-purple-400/30 px-4 py-2 mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Intervention rapide Paris 17ème
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dépannage Informatique
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
                  Paris 17ème
                </span>
              </h1>

              <p className="text-xl text-purple-100 mb-8">
                Technicien informatique dans le <strong className="text-white">17ème arrondissement</strong>. 
                Des Batignolles aux Ternes, intervention rapide à domicile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:0123456789">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-6">
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

              <div className="flex items-center gap-4 text-sm text-purple-200">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span>4.9/5 • 62 avis dans le 17ème</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900">
              <h2 className="text-2xl font-bold mb-6">Rappel gratuit</h2>
              <form className="space-y-4">
                <Input placeholder="Votre nom" />
                <Input type="tel" placeholder="Votre téléphone" />
                <Input placeholder="Votre adresse dans le 17ème" />
                <Textarea placeholder="Décrivez votre problème..." className="min-h-[100px]" />
                <Button type="submit" className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-500">
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
          <h2 className="text-3xl font-bold text-center mb-12">Nos tarifs Paris 17ème</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Card key={service.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{service.name}</h3>
                  <p className="text-3xl font-bold text-purple-600">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Zones d&apos;intervention</h2>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d&apos;aide dans le 17ème ?</h2>
          <p className="text-xl text-purple-100 mb-8">Un technicien chez vous en moins de 2 heures</p>
          <a href="tel:0123456789">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 gap-2">
              <Phone className="h-5 w-5" />
              01 23 45 67 89
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}


