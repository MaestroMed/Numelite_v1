import { Metadata } from "next"
import Link from "next/link"
import { 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Star, 
  Shield, 
  Zap,
  ArrowRight,
  MessageCircle,
  Award,
  Users,
  ThumbsUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Dépannage Informatique Val d'Oise (95) | Intervention Rapide | Numelite",
  description: "Dépannage informatique dans le Val d'Oise : Cergy, Argenteuil, Pontoise, Sarcelles. Intervention rapide à domicile. Diagnostic gratuit. Appelez le 01 23 45 67 89",
  keywords: "dépannage informatique val d'oise, réparation pc 95, dépannage ordinateur cergy, technicien informatique argenteuil"
}

const cities = [
  "Cergy", "Argenteuil", "Pontoise", "Sarcelles", "Franconville", 
  "Garges-lès-Gonesse", "Goussainville", "Bezons", "Ermont", "Taverny",
  "Herblay", "Saint-Ouen-l'Aumône", "Eaubonne", "Villiers-le-Bel", "Deuil-la-Barre"
]

const services = [
  { name: "Virus & Malwares", price: "79€", description: "Nettoyage complet + antivirus" },
  { name: "PC Lent", price: "89€", description: "Diagnostic + optimisation" },
  { name: "Écran noir", price: "99€", description: "Diagnostic matériel + réparation" },
  { name: "Récupération données", price: "149€", description: "Récupération sur disque HS" },
  { name: "Installation Windows", price: "79€", description: "Réinstallation complète" },
  { name: "Problème WiFi", price: "59€", description: "Configuration réseau" }
]

const testimonials = [
  { 
    name: "Marie D.", 
    city: "Cergy", 
    text: "Intervention rapide et efficace ! Mon PC refonctionne parfaitement.", 
    rating: 5 
  },
  { 
    name: "Pierre M.", 
    city: "Argenteuil", 
    text: "Excellent service, technicien très professionnel. Je recommande vivement.", 
    rating: 5 
  },
  { 
    name: "Sophie L.", 
    city: "Pontoise", 
    text: "Prix correct et travail impeccable. Très satisfaite !", 
    rating: 5 
  }
]

export default function DepannageValDoisePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a0d10] via-[#0f1419] to-[#1a1f26] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(34, 211, 238, 0.2) 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1">
                  <Clock className="h-3 w-3 mr-1" />
                  Intervention en 2h
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1">
                  <Shield className="h-3 w-3 mr-1" />
                  Diagnostic gratuit
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Dépannage Informatique
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Val d&apos;Oise (95)
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Votre expert informatique intervient <strong className="text-white">à domicile dans tout le Val d&apos;Oise</strong>. 
                Réparation PC, Mac, suppression de virus, récupération de données.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:0123456789">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-lg px-8 py-6 shadow-xl shadow-emerald-500/25">
                    <Phone className="h-5 w-5" />
                    01 23 45 67 89
                  </Button>
                </a>
                <a href="https://wa.me/33123456789">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>

              {/* Trust Elements */}
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span>4.9/5 (127 avis)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>+500 clients</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold mb-2">Demande d&apos;intervention</h2>
              <p className="text-slate-300 mb-6">Rappel gratuit en moins de 15 minutes</p>

              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Votre nom" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Input 
                    type="tel"
                    placeholder="Votre téléphone" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Votre ville (ex: Cergy)" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Décrivez votre problème..." 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 py-6 text-lg">
                  Demander un rappel gratuit
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Nos tarifs</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tarifs transparents, sans surprise
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Diagnostic gratuit si intervention. Devis avant toute réparation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.name} className="hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">{service.name}</h3>
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  <p className="text-slate-600">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Garantie 30 jours</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="tel:0123456789">
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Appelez pour un devis gratuit
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pourquoi choisir Numelite dans le Val d&apos;Oise ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Intervention rapide", description: "Sur place en 2h dans tout le 95" },
              { icon: Shield, title: "Diagnostic gratuit", description: "Gratuit si vous faites réparer" },
              { icon: ThumbsUp, title: "Satisfaction garantie", description: "30 jours de garantie sur toutes nos interventions" },
              { icon: Award, title: "Techniciens certifiés", description: "Experts formés et expérimentés" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ils nous font confiance dans le Val d&apos;Oise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-200 mb-4">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nous intervenons dans toutes les villes du Val d&apos;Oise
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Intervention à domicile ou en entreprise dans tout le département 95
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Badge 
                key={city} 
                variant="outline" 
                className="px-4 py-2 text-base hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
              >
                <MapPin className="h-4 w-4 mr-1" />
                {city}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Un problème informatique dans le Val d&apos;Oise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Appelez maintenant et un technicien sera chez vous dans les 2 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0123456789">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 gap-2">
                <Phone className="h-5 w-5" />
                01 23 45 67 89
              </Button>
            </a>
            <Link href="/reservation">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Réserver en ligne
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


