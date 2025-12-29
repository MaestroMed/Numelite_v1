import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ExternalLink,
  Globe,
  ShoppingCart,
  Briefcase,
  Star,
  Eye,
  Calendar,
  Filter
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Portfolio | Nos Réalisations Web | Numelite",
  description: "Découvrez nos réalisations : sites vitrines, e-commerce, applications web. Plus de 100 projets livrés pour des clients satisfaits.",
}

const categories = [
  { name: "Tous", count: 12 },
  { name: "Site Vitrine", count: 6 },
  { name: "E-commerce", count: 4 },
  { name: "Application Web", count: 2 }
]

const projects = [
  {
    id: 1,
    title: "Boulangerie Artisanale Martin",
    category: "Site Vitrine",
    description: "Site vitrine moderne pour une boulangerie artisanale à Paris. Galerie photos, menu du jour, réservation en ligne.",
    image: null,
    tags: ["Next.js", "Tailwind CSS", "Réservation"],
    url: "#",
    year: "2024",
    testimonial: "Un site magnifique qui nous apporte de nouveaux clients chaque semaine !",
    client: "Marie Martin"
  },
  {
    id: 2,
    title: "Mode Élégance",
    category: "E-commerce",
    description: "Boutique en ligne de mode féminine avec plus de 500 produits, paiement sécurisé et gestion des stocks.",
    image: null,
    tags: ["Shopify", "Stripe", "SEO"],
    url: "#",
    year: "2024",
    testimonial: "Nos ventes ont triplé depuis le lancement du site !",
    client: "Sophie Dubois"
  },
  {
    id: 3,
    title: "Cabinet Avocat Dupont",
    category: "Site Vitrine",
    description: "Site professionnel pour un cabinet d'avocats. Prise de rendez-vous en ligne, formulaire de contact sécurisé.",
    image: null,
    tags: ["WordPress", "Calendly", "RGPD"],
    url: "#",
    year: "2023"
  },
  {
    id: 4,
    title: "RestaurantChef",
    category: "Site Vitrine",
    description: "Site élégant pour un restaurant gastronomique avec réservation de table et menu interactif.",
    image: null,
    tags: ["React", "Réservation", "Menu digital"],
    url: "#",
    year: "2023"
  },
  {
    id: 5,
    title: "TechPro Solutions",
    category: "Application Web",
    description: "Application de gestion interne pour une entreprise de services informatiques. Dashboard, tickets, facturation.",
    image: null,
    tags: ["Next.js", "PostgreSQL", "Dashboard"],
    url: "#",
    year: "2024",
    testimonial: "Une application sur-mesure qui a transformé notre organisation !",
    client: "Jean-Pierre Tech"
  },
  {
    id: 6,
    title: "Bio Market",
    category: "E-commerce",
    description: "E-commerce de produits bio locaux avec livraison à domicile et abonnements mensuels.",
    image: null,
    tags: ["WooCommerce", "Abonnement", "Livraison"],
    url: "#",
    year: "2023"
  },
  {
    id: 7,
    title: "Coach Sportif Pro",
    category: "Site Vitrine",
    description: "Site pour un coach sportif avec présentation des services, témoignages et prise de rendez-vous.",
    image: null,
    tags: ["Next.js", "Calendly", "Responsive"],
    url: "#",
    year: "2024"
  },
  {
    id: 8,
    title: "Immobilier Premium",
    category: "Application Web",
    description: "Plateforme immobilière avec recherche avancée, visites virtuelles et espace client.",
    image: null,
    tags: ["React", "3D", "Géolocalisation"],
    url: "#",
    year: "2024"
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0d10] via-[#0f1419] to-[#1a1f26]">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
                             radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative text-center">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">Portfolio</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Réalisations</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Découvrez les projets que nous avons réalisés pour nos clients. 
            Plus de 100 sites web livrés avec satisfaction.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-slate-400">Sites créés</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-slate-400">Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p className="text-slate-400">Note moyenne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.name === "Tous"
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden group hover:border-purple-500/50 transition-all"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    {project.category === "E-commerce" ? (
                      <ShoppingCart className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                    ) : project.category === "Application Web" ? (
                      <Briefcase className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                    ) : (
                      <Globe className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                    )}
                    <p className="text-slate-500 text-sm">Aperçu du projet</p>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <div className="flex gap-2">
                      <Button size="sm" className="gap-1">
                        <Eye className="h-4 w-4" />
                        Voir
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1 border-white/30 text-white">
                        <ExternalLink className="h-4 w-4" />
                        Site
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg mb-2 text-white">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/10 rounded text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.testimonial && (
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-400 italic">&quot;{project.testimonial}&quot;</p>
                      <p className="text-sm text-slate-500 mt-1">— {project.client}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Vous avez un projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discutons ensemble de votre projet et créons quelque chose d&apos;exceptionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-white/90 gap-2">
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/tarifs">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Voir nos offres
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
