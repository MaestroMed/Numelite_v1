import { Metadata } from "next"
import Link from "next/link"
import { Star, Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Témoignages | Avis Clients | Numelite",
  description: "Découvrez les avis de nos clients satisfaits. Plus de 500 clients nous font confiance pour leurs besoins informatiques.",
}

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Gérante",
    company: "Boutique Élégance",
    content: "Numelite a créé notre site e-commerce en un temps record. L'équipe a parfaitement compris nos besoins et le résultat dépasse nos attentes. Les ventes en ligne ont décollé dès le premier mois !",
    rating: 5,
    service: "E-commerce",
    date: "Janvier 2024"
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Directeur",
    company: "Cabinet PMC Avocats",
    content: "Intervention rapide et efficace pour un problème de serveur critique. Le technicien a diagnostiqué et résolu le problème en moins de 2 heures. Professionnalisme exemplaire.",
    rating: 5,
    service: "Dépannage",
    date: "Décembre 2023"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Freelance",
    company: "Designer",
    content: "Mon ordinateur avait un virus qui bloquait tout. Numelite est intervenu le jour même et a tout nettoyé. En plus, ils m'ont installé un bon antivirus. Je recommande vivement !",
    rating: 5,
    service: "Dépannage",
    date: "Novembre 2023"
  },
  {
    id: 4,
    name: "Jean Petit",
    role: "Propriétaire",
    company: "Restaurant Le Gourmet",
    content: "Un site magnifique avec un système de réservation en ligne très pratique. Nos clients adorent pouvoir réserver directement depuis le site. Merci Numelite !",
    rating: 5,
    service: "Site vitrine",
    date: "Octobre 2023"
  },
  {
    id: 5,
    name: "Nathalie Roux",
    role: "Directrice",
    company: "Fitness Pro Studio",
    content: "Ils ont créé un site complet avec booking de cours et paiement en ligne. L'espace membre fonctionne parfaitement. Un travail de qualité professionnelle.",
    rating: 5,
    service: "Site pro",
    date: "Septembre 2023"
  },
  {
    id: 6,
    name: "Thomas Bernard",
    role: "Artisan",
    company: "Menuiserie Bernard",
    content: "Je cherchais quelqu'un pour créer un site simple mais efficace pour mon activité. Le résultat est top et j'ai vu mes demandes de devis augmenter significativement.",
    rating: 5,
    service: "Site vitrine",
    date: "Août 2023"
  },
  {
    id: 7,
    name: "Claire Moreau",
    role: "Responsable IT",
    company: "PME Services",
    content: "Nous faisons appel à Numelite pour la maintenance de nos 15 postes. Service réactif, équipe compétente, et prix raisonnables. Partenaire de confiance.",
    rating: 5,
    service: "Maintenance",
    date: "Juillet 2023"
  },
  {
    id: 8,
    name: "Marc Dupont",
    role: "Particulier",
    company: "",
    content: "Mon PC portable ne démarrait plus du tout. Ils ont récupéré toutes mes données et remis l'ordinateur en état. Service impeccable et prix honnête.",
    rating: 5,
    service: "Dépannage",
    date: "Juin 2023"
  },
]

const stats = [
  { value: "4.9/5", label: "Note moyenne" },
  { value: "500+", label: "Clients satisfaits" },
  { value: "98%", label: "Recommandent" },
  { value: "127", label: "Avis Google" },
]

export default function TemoignagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4">Témoignages</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Ce que disent nos <span className="gradient-text">clients</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Plus de 500 clients nous font confiance. Découvrez leurs retours d&apos;expérience.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative">
                <CardContent className="p-8">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Badge variant="secondary" className="mb-4">
                    {testimonial.service}
                  </Badge>

                  <p className="text-slate-600 mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}
                        {testimonial.company && ` - ${testimonial.company}`}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mt-4">{testimonial.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-slate-600 mb-4">
            Vous êtes client Numelite ? Partagez votre expérience !
          </p>
          <Button variant="outline" className="gap-2">
            <Star className="h-5 w-5" />
            Laisser un avis Google
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez-nous pour discuter de votre projet
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90 gap-2">
              Nous contacter
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}


