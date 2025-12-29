import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Clock,
  Heart,
  Shield,
  Target,
  Users,
  Zap,
  CheckCircle,
  Star,
  MapPin,
  Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "À propos | Numelite - Votre Expert Informatique en Île-de-France",
  description: "Découvrez Numelite, votre partenaire informatique en Île-de-France depuis plus de 10 ans. Dépannage, création de sites web, maintenance.",
}

const values = [
  {
    icon: Zap,
    title: "Réactivité",
    description: "Intervention rapide, réponse sous 24h. Nous comprenons l'urgence de vos besoins."
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Travail de qualité, garantie satisfaction. Nous nous engageons sur les résultats."
  },
  {
    icon: Heart,
    title: "Proximité",
    description: "Relation humaine et personnalisée. Chaque client est unique et mérite une attention particulière."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Formation continue, veille technologique. Nous restons à la pointe pour vous servir au mieux."
  }
]

const milestones = [
  { year: "2014", event: "Création de Numelite", description: "Lancement de l'activité de dépannage informatique à Paris" },
  { year: "2016", event: "Expansion Île-de-France", description: "Extension de nos services à toute la région parisienne" },
  { year: "2018", event: "Création de sites web", description: "Ajout des services de développement web" },
  { year: "2020", event: "100 sites livrés", description: "Franchissement du cap des 100 sites web créés" },
  { year: "2023", event: "+500 clients", description: "Plus de 500 clients satisfaits nous font confiance" },
  { year: "2024", event: "Nouvelle plateforme", description: "Lancement de notre nouvelle plateforme digitale" },
]

const stats = [
  { value: "500+", label: "Clients satisfaits" },
  { value: "100+", label: "Sites web créés" },
  { value: "1000+", label: "Interventions/an" },
  { value: "4.9/5", label: "Note moyenne" },
]

const team = [
  {
    name: "Thomas Martin",
    role: "Fondateur & Expert Technique",
    description: "10+ ans d'expérience en informatique et développement web"
  },
  {
    name: "Sophie Dubois",
    role: "Responsable Commercial",
    description: "Votre interlocutrice pour les devis et le suivi projets"
  },
  {
    name: "Lucas Bernard",
    role: "Technicien Senior",
    description: "Spécialiste dépannage et récupération de données"
  }
]

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0d10] via-[#0f1419] to-[#1a1f26]">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                             radial-gradient(circle at 70% 80%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">À propos</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Votre partenaire{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  informatique
                </span>{" "}
                de confiance
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Depuis plus de 10 ans, Numelite accompagne les particuliers et entreprises 
                d&apos;Île-de-France dans leurs projets numériques. Dépannage, création de sites web, 
                maintenance : nous sommes là pour vous.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-500">
                    Nous contacter
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-3xl blur-2xl" />
                
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-300 mb-4">
                      10+
                    </div>
                    <div className="text-xl text-slate-300">années d&apos;expérience</div>
                  </div>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-2 border-[#0f1419] flex items-center justify-center text-white font-bold text-sm">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-white">+500 clients</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0a0d10]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">Notre histoire</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Une aventure qui a commencé par une passion
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="prose prose-lg prose-invert mx-auto">
                <p className="text-slate-300">
                  Numelite est né en 2014 d&apos;une passion pour l&apos;informatique et d&apos;une conviction : 
                  le numérique doit être accessible à tous. Trop souvent, les particuliers et les petites 
                  entreprises se retrouvent démunis face à un ordinateur en panne ou à la complexité 
                  de créer une présence en ligne.
                </p>
                <p className="text-slate-300">
                  Notre mission est simple : vous accompagner avec humanité et expertise dans tous 
                  vos projets numériques. Que ce soit pour réparer votre ordinateur, créer votre 
                  site web ou maintenir vos équipements, nous sommes là pour vous.
                </p>
                <p className="text-slate-300">
                  Aujourd&apos;hui, plus de 500 clients nous font confiance en Île-de-France. 
                  Cette réussite, nous la devons à notre engagement quotidien pour la qualité de service 
                  et la satisfaction client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-[#0a0d10]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4">Notre parcours</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Les étapes clés
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex gap-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white z-10 shrink-0 shadow-lg shadow-blue-500/30">
                      {milestone.year.slice(2)}
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 flex-1">
                      <p className="text-sm text-blue-400 font-medium mb-1">{milestone.year}</p>
                      <h3 className="font-bold text-lg mb-2 text-white">{milestone.event}</h3>
                      <p className="text-slate-400">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-4">Nos valeurs</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ce qui nous guide au quotidien
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">{value.title}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-[#0a0d10]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 mb-4">L&apos;équipe</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Les visages de Numelite
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-1 text-white">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-400">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 gap-2">
                Nous contacter
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/tarifs">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Voir nos tarifs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
