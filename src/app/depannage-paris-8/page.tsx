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
  title: "Dépannage Informatique Paris 8ème | Réparation PC Entreprise | Numelite",
  description: "Dépannage informatique Paris 8ème arrondissement. Service express pour entreprises et particuliers. Réparation PC, Mac, réseau. ☎ 01 23 45 67 89",
  keywords: "dépannage informatique paris 8, réparation ordinateur paris 8ème, technicien informatique 75008"
}

const quartiers = [
  "Champs-Élysées", "Madeleine", "Saint-Lazare", "Faubourg du Roule",
  "Europe", "Haussmann", "Parc Monceau", "Wagram"
]

const services = [
  { name: "Dépannage express", price: "99€" },
  { name: "Maintenance pro", price: "149€/mois" },
  { name: "Récupération données", price: "199€" },
  { name: "Audit réseau", price: "299€" }
]

export default function DepannageParis8Page() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#c9a227] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-4 py-2 mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Service Premium Paris 8ème
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dépannage Informatique
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
                  Paris 8ème
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8">
                Services informatiques haut de gamme pour le <strong className="text-white">quartier d&apos;affaires</strong>. 
                Des Champs-Élysées à Saint-Lazare, intervention express.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:0123456789">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 text-lg px-8 py-6">
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
                <span>5/5 • Clientèle professionnelle exigeante</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900">
              <h2 className="text-2xl font-bold mb-6">Intervention prioritaire</h2>
              <form className="space-y-4">
                <Input placeholder="Votre nom / Société" />
                <Input type="tel" placeholder="Votre téléphone" />
                <Input placeholder="Adresse dans le 8ème" />
                <Textarea placeholder="Nature de l'urgence..." className="min-h-[100px]" />
                <Button type="submit" className="w-full py-6 text-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900">
                  Intervention prioritaire
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Services Professionnels</h2>
          <p className="text-center text-slate-600 mb-12">Offres adaptées aux exigences du 8ème arrondissement</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Card key={service.name} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{service.name}</h3>
                  <p className="text-3xl font-bold text-amber-600">{service.price}</p>
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
      <section className="py-16 bg-gradient-to-r from-slate-900 to-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Service d&apos;excellence dans le 8ème</h2>
          <p className="text-xl text-amber-100 mb-8">Intervention discrète et professionnelle</p>
          <a href="tel:0123456789">
            <Button size="lg" className="bg-amber-400 text-slate-900 hover:bg-amber-300 text-lg px-8 py-6 gap-2">
              <Phone className="h-5 w-5" />
              01 23 45 67 89
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}


