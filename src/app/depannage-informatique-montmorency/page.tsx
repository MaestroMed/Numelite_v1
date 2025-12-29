import { Metadata } from "next"
import Link from "next/link"
import { 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Star, 
  Shield, 
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GeoContactForm } from "@/components/geo-contact-form"

export const metadata: Metadata = {
  title: "Dépannage Informatique Montmorency (95160) | Réparation PC | Numelite",
  description: "Dépannage informatique à Montmorency. Réparation PC, Mac, suppression virus, récupération données. Intervention rapide à domicile. ☎ 01 23 45 67 89",
  keywords: "dépannage informatique montmorency, réparation ordinateur montmorency, technicien informatique 95160"
}

const services = [
  { name: "Virus & Malwares", price: "79€" },
  { name: "PC Lent", price: "89€" },
  { name: "Écran noir", price: "99€" },
  { name: "Récupération données", price: "149€" },
  { name: "Installation Windows", price: "79€" },
  { name: "Problème WiFi", price: "59€" }
]

export default function DepannageMontmorencyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2c5282] to-[#3182ce] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Intervention à Montmorency (95160)
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dépannage Informatique
                <span className="block text-cyan-300">Montmorency</span>
              </h1>

              <p className="text-xl text-blue-100 mb-8">
                Technicien informatique intervenant à <strong className="text-white">Montmorency</strong> et 
                dans toute la Vallée de Montmorency. Réparation PC, Mac, virus, données.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0123456789">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-6">
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
            </div>

            <GeoContactForm location="Montmorency" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos tarifs à Montmorency
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Card key={service.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                  <p className="text-3xl font-bold text-blue-600">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-slate-600">
            Diagnostic gratuit si intervention • Pas de frais de déplacement à Montmorency
          </p>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Dépannage informatique à Montmorency</h2>
            <p>
              Située dans la <strong>Vallée de Montmorency</strong>, cette charmante ville du Val d&apos;Oise 
              bénéficie de notre service de dépannage informatique à domicile. Que vous habitiez 
              près de la Collégiale Saint-Martin ou dans les quartiers résidentiels, nous intervenons 
              rapidement pour résoudre tous vos problèmes informatiques.
            </p>
            <p>
              Notre proximité avec <strong>Domont</strong>, <strong>Eaubonne</strong> et <strong>Enghien-les-Bains</strong> 
              nous permet de garantir des délais d&apos;intervention courts, généralement dans l&apos;heure.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Nous intervenons également à</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Domont", "Eaubonne", "Enghien-les-Bains", "Soisy-sous-Montmorency", "Andilly", "Groslay", "Saint-Gratien"].map((city) => (
              <Badge key={city} variant="outline" className="px-4 py-2 text-base">
                <MapPin className="h-4 w-4 mr-1" />
                {city}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Un problème informatique à Montmorency ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Appelez maintenant pour une intervention rapide
          </p>
          <a href="tel:0123456789">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 gap-2">
              <Phone className="h-5 w-5" />
              01 23 45 67 89
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}


