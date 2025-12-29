import { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Search,
  BarChart3,
  Globe,
  FileText,
  Link2,
  MapPin,
  Zap,
  Target,
  Award,
  Eye,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Agence SEO Paris & Île-de-France | Référencement naturel | Numelite",
  description: "Agence SEO spécialisée en référencement naturel. Améliorez votre visibilité sur Google et attirez plus de clients qualifiés. Audit SEO gratuit.",
  keywords: ["seo", "référencement naturel", "agence seo", "paris", "île-de-france", "google", "positionnement"],
  openGraph: {
    title: "Agence SEO Paris | Référencement naturel & Visibilité Google",
    description: "Boostez votre visibilité sur Google avec notre expertise SEO. Audit gratuit et stratégie personnalisée.",
  },
}

const services = [
  { icon: Search, title: "Audit SEO complet", description: "Analyse technique, sémantique et concurrentielle de votre site" },
  { icon: FileText, title: "Optimisation on-page", description: "Balises, contenu, structure et maillage interne" },
  { icon: Link2, title: "Netlinking", description: "Stratégie de liens entrants de qualité" },
  { icon: MapPin, title: "SEO local", description: "Visibilité locale et Google My Business" },
  { icon: Globe, title: "SEO technique", description: "Performance, indexation et Core Web Vitals" },
  { icon: BarChart3, title: "Suivi & Reporting", description: "Tableaux de bord et rapports de positionnement" },
]

const pillars = [
  {
    icon: Zap,
    title: "Technique",
    description: "Vitesse, mobile-first, indexation, structure du site, données structurées.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: FileText,
    title: "Contenu",
    description: "Stratégie éditoriale, optimisation sémantique, mots-clés, intention de recherche.",
    color: "from-emerald-500 to-green-400"
  },
  {
    icon: Link2,
    title: "Popularité",
    description: "Backlinks de qualité, autorité du domaine, mentions, partenariats.",
    color: "from-violet-500 to-purple-400"
  }
]

const forfaits = [
  {
    name: "Essentiel",
    price: 499,
    period: "/mois",
    description: "Pour les sites vitrines",
    features: [
      "Audit SEO initial",
      "Optimisation 5 pages",
      "Recherche mots-clés",
      "Optimisation technique de base",
      "Google Search Console",
      "Rapport mensuel",
      "Support email"
    ],
    popular: false,
    cta: "Commencer"
  },
  {
    name: "Performance",
    price: 899,
    period: "/mois",
    description: "Pour les PME ambitieuses",
    features: [
      "Audit SEO approfondi",
      "Optimisation 15 pages",
      "Stratégie de contenu",
      "2 articles SEO/mois",
      "Netlinking (5 liens/mois)",
      "SEO local inclus",
      "Rapports bi-mensuels",
      "Call mensuel stratégie"
    ],
    popular: true,
    cta: "Choisir Performance"
  },
  {
    name: "Premium",
    price: 1499,
    period: "/mois",
    description: "Pour dominer votre marché",
    features: [
      "Audit SEO complet + concurrence",
      "Optimisation illimitée",
      "Stratégie éditoriale complète",
      "4 articles SEO/mois",
      "Netlinking premium (15 liens/mois)",
      "SEO local multi-établissements",
      "Consultant SEO dédié",
      "Rapports hebdomadaires",
      "Calls illimités"
    ],
    popular: false,
    cta: "Nous contacter"
  }
]

const stats = [
  { value: "+156%", label: "Trafic organique" },
  { value: "Top 3", label: "Positions Google" },
  { value: "+89%", label: "Leads qualifiés" },
  { value: "40+", label: "Projets SEO" },
]

const results = [
  {
    client: "E-commerce Beauté",
    before: "Page 3-4",
    after: "Top 3",
    improvement: "+450% trafic",
    period: "6 mois"
  },
  {
    client: "Cabinet Avocat",
    before: "Invisible",
    after: "Position 1",
    improvement: "+12 leads/mois",
    period: "4 mois"
  },
  {
    client: "Restaurant Paris",
    before: "Page 2",
    after: "Pack local #1",
    improvement: "+200% réservations",
    period: "3 mois"
  }
]

const faqs = [
  {
    question: "Combien de temps faut-il pour voir des résultats en SEO ?",
    answer: "Le SEO est un travail de long terme. Les premiers résultats sont généralement visibles entre 3 et 6 mois selon la concurrence et l'état initial du site. Des résultats significatifs et durables se construisent sur 6 à 12 mois."
  },
  {
    question: "Garantissez-vous la première position sur Google ?",
    answer: "Non, aucune agence sérieuse ne peut garantir une position spécifique sur Google. Ce que nous garantissons, c'est l'application des meilleures pratiques SEO et une amélioration mesurable de votre visibilité et de vos positions."
  },
  {
    question: "Quelle est la différence entre SEO et Google Ads ?",
    answer: "Le SEO (référencement naturel) vise les résultats organiques de Google et prend du temps mais offre un trafic gratuit et durable. Google Ads permet d'apparaître immédiatement via des annonces payantes. Nous recommandons souvent une stratégie combinée."
  },
  {
    question: "Comment mesurez-vous les résultats ?",
    answer: "Nous suivons plusieurs KPIs : positions sur vos mots-clés cibles, trafic organique, taux de clics (CTR), conversions, autorité du domaine. Vous recevez des rapports détaillés réguliers avec l'évolution de ces métriques."
  },
  {
    question: "Le SEO fonctionne-t-il pour tous les secteurs ?",
    answer: "Oui, le SEO est pertinent pour tous les secteurs, mais la stratégie diffère selon la concurrence et les spécificités du marché. Nous adaptons notre approche à votre secteur d'activité et à vos objectifs."
  },
  {
    question: "Proposez-vous des formations SEO ?",
    answer: "Oui, nous proposons des formations SEO pour vos équipes afin de les autonomiser sur les bonnes pratiques. Contactez-nous pour en savoir plus sur nos programmes de formation."
  }
]

export default function SEOPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50/30 to-yellow-50/20">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-orange-100 text-orange-700 border-orange-200">
                🔍 Experts en référencement naturel
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Référencement{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  SEO
                </span>{" "}
                & visibilité Google
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 mb-8">
                Améliorez durablement votre positionnement sur Google et attirez 
                des clients qualifiés grâce à notre expertise SEO.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: TrendingUp, text: "+150% trafic" },
                  { icon: Target, text: "Top 3 Google" },
                  { icon: Users, text: "Leads qualifiés" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
                    <item.icon className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600">
                    Audit SEO gratuit
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+33123456789">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                    <Phone className="h-5 w-5" />
                    01 23 45 67 89
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-sm text-slate-600">4.9/5 (67 avis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span className="text-sm text-slate-600">+40 projets SEO</span>
                </div>
              </div>
            </div>

            {/* Search Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-2xl shadow-orange-200/50">
                {/* Fake Google Search */}
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl mb-4">
                  <Search className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">votre mot-clé principal</span>
                </div>

                <p className="text-sm text-slate-500 mb-4">Environ 125 000 résultats</p>

                {/* Search Results */}
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border-2 border-orange-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="success" className="text-xs">Position 1</Badge>
                      <span className="text-xs text-emerald-600">↑ +5</span>
                    </div>
                    <p className="text-blue-600 font-medium hover:underline cursor-pointer">
                      Votre Site - Titre optimisé SEO
                    </p>
                    <p className="text-sm text-emerald-700">votresite.fr</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Meta description optimisée qui incite au clic et présente votre offre de manière attractive...
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl opacity-60">
                    <p className="text-blue-600 font-medium">Concurrent 1 - Leur titre</p>
                    <p className="text-sm text-slate-500">concurrent1.fr</p>
                    <p className="text-sm text-slate-500 mt-1">Leur description...</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl opacity-40">
                    <p className="text-blue-600 font-medium">Concurrent 2 - Leur titre</p>
                    <p className="text-sm text-slate-500">concurrent2.fr</p>
                    <p className="text-sm text-slate-500 mt-1">Leur description...</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">+156%</p>
                    <p className="text-sm text-slate-500">Trafic organique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-500 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-orange-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Notre approche</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Les 3 piliers du{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                SEO
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Une stratégie SEO efficace repose sur trois piliers fondamentaux que nous optimisons ensemble.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${pillar.color}`} />
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-slate-600">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nos services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Expertise SEO{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                complète
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Résultats</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Des résultats{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                concrets
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <p className="text-lg font-bold mb-4">{result.client}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-slate-500">Avant</p>
                      <p className="text-lg font-semibold text-red-600">{result.before}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-slate-300" />
                    <div className="text-center">
                      <p className="text-sm text-slate-500">Après</p>
                      <p className="text-lg font-semibold text-emerald-600">{result.after}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Badge variant="success" className="mb-2">{result.improvement}</Badge>
                    <p className="text-sm text-slate-500">En {result.period}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nos forfaits</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tarifs{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                adaptés
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Des forfaits SEO sur mesure selon vos ambitions et votre budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {forfaits.map((forfait, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${forfait.popular ? "border-2 border-orange-500 shadow-xl shadow-orange-200/50" : ""}`}
              >
                {forfait.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-amber-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    Recommandé
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2">{forfait.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{forfait.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{forfait.price}€</span>
                    <span className="text-slate-500">{forfait.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {forfait.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button 
                      className={`w-full ${forfait.popular ? "bg-gradient-to-r from-orange-600 to-amber-500" : ""}`}
                      variant={forfait.popular ? "default" : "outline"}
                    >
                      {forfait.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-2xl border border-slate-200 px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-600 to-amber-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Prêt à conquérir la première page ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez un audit SEO gratuit de votre site et découvrez votre potentiel de croissance organique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 bg-white text-orange-600 hover:bg-white/90">
                <Search className="h-5 w-5" />
                Audit SEO gratuit
              </Button>
            </Link>
            <a href="tel:+33123456789">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-white text-white hover:bg-white/10">
                <Phone className="h-5 w-5" />
                01 23 45 67 89
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}


