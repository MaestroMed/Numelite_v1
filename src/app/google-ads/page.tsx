import { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Users,
  DollarSign,
  Eye,
  MousePointer,
  PieChart,
  Settings,
  Rocket,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Gestion Google Ads Paris | Campagnes publicitaires performantes | Numelite",
  description: "Agence Google Ads certifiée en Île-de-France. Création et gestion de campagnes publicitaires rentables. Augmentez votre visibilité et vos conversions. Audit gratuit.",
  keywords: ["google ads", "publicité google", "campagne adwords", "agence sea", "paris", "île-de-france", "publicité en ligne"],
  openGraph: {
    title: "Gestion Google Ads Paris | Campagnes publicitaires rentables",
    description: "Maximisez votre ROI avec nos campagnes Google Ads optimisées. Audit gratuit et accompagnement personnalisé.",
  },
}

const services = [
  { icon: Target, title: "Campagnes Search", description: "Annonces textuelles sur les résultats de recherche Google" },
  { icon: Eye, title: "Campagnes Display", description: "Bannières publicitaires sur le réseau de sites partenaires" },
  { icon: Users, title: "Campagnes Remarketing", description: "Reciblage des visiteurs de votre site web" },
  { icon: MousePointer, title: "Campagnes Shopping", description: "Annonces produits pour les e-commerces" },
  { icon: Zap, title: "Campagnes Performance Max", description: "Automatisation IA sur tous les canaux Google" },
  { icon: BarChart3, title: "YouTube Ads", description: "Publicités vidéo sur la plateforme YouTube" },
]

const process = [
  {
    step: 1,
    title: "Audit & Stratégie",
    description: "Analyse de votre marché, concurrence et objectifs. Définition de la stratégie publicitaire optimale."
  },
  {
    step: 2,
    title: "Création des campagnes",
    description: "Structuration du compte, rédaction des annonces, sélection des mots-clés et ciblages."
  },
  {
    step: 3,
    title: "Lancement & Suivi",
    description: "Mise en ligne des campagnes avec un suivi quotidien des performances."
  },
  {
    step: 4,
    title: "Optimisation continue",
    description: "Ajustements réguliers pour améliorer les résultats et maximiser le ROI."
  }
]

const forfaits = [
  {
    name: "Starter",
    price: 299,
    period: "/mois",
    budget: "Budget pub: 500-1500€",
    description: "Pour démarrer sur Google Ads",
    features: [
      "1 campagne Search",
      "Configuration compte",
      "Suivi conversions",
      "Rapport mensuel",
      "Optimisation hebdo",
      "Support email"
    ],
    popular: false,
    cta: "Commencer"
  },
  {
    name: "Business",
    price: 599,
    period: "/mois",
    budget: "Budget pub: 1500-5000€",
    description: "Pour développer votre acquisition",
    features: [
      "3 campagnes (Search, Display, Remarketing)",
      "Audit concurrentiel",
      "A/B testing annonces",
      "Rapports bi-mensuels",
      "Optimisation continue",
      "Support prioritaire",
      "Call mensuel stratégie"
    ],
    popular: true,
    cta: "Choisir Business"
  },
  {
    name: "Premium",
    price: 999,
    period: "/mois",
    budget: "Budget pub: 5000€+",
    description: "Pour maximiser vos performances",
    features: [
      "Campagnes illimitées",
      "Performance Max inclus",
      "YouTube Ads",
      "Shopping Ads",
      "Landing pages optimisées",
      "Rapports hebdomadaires",
      "Account manager dédié",
      "Calls illimités",
      "Stratégie multi-canal"
    ],
    popular: false,
    cta: "Nous contacter"
  }
]

const stats = [
  { value: "+250%", label: "ROI moyen" },
  { value: "-40%", label: "Coût par clic" },
  { value: "+180%", label: "Conversions" },
  { value: "50+", label: "Clients actifs" },
]

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Marketing",
    company: "E-commerce Mode",
    content: "Numelite a multiplié par 3 notre chiffre d'affaires Google Ads en seulement 3 mois. Un travail remarquable !",
    result: "+320% de CA"
  },
  {
    name: "Thomas Durand",
    role: "Gérant",
    company: "Cabinet Conseil",
    content: "Grâce à leurs campagnes, nous recevons des leads qualifiés chaque jour. Le coût par lead a été divisé par 2.",
    result: "-50% coût/lead"
  }
]

const faqs = [
  {
    question: "Quel budget minimum faut-il pour démarrer sur Google Ads ?",
    answer: "Nous recommandons un budget publicitaire minimum de 500€/mois pour obtenir des résultats significatifs. Ce budget s'ajoute à nos frais de gestion. Cependant, le budget optimal dépend de votre secteur et de vos objectifs."
  },
  {
    question: "En combien de temps vais-je voir des résultats ?",
    answer: "Les premiers résultats sont visibles dès les premières semaines (trafic, clics). Pour les conversions optimisées, comptez 1 à 3 mois le temps que l'algorithme Google apprenne et que nous affinions les campagnes."
  },
  {
    question: "Êtes-vous certifiés Google Partner ?",
    answer: "Oui, nous sommes certifiés Google Partner, ce qui atteste de notre expertise et de notre respect des bonnes pratiques Google Ads. Nos équipes sont régulièrement formées aux dernières fonctionnalités."
  },
  {
    question: "Puis-je garder le contrôle de mon compte Google Ads ?",
    answer: "Absolument. Nous travaillons sur votre propre compte Google Ads. Vous gardez un accès total et la propriété de vos données et campagnes, même si vous décidez d'arrêter notre collaboration."
  },
  {
    question: "Comment mesurez-vous les performances ?",
    answer: "Nous configurons un tracking complet (Google Analytics 4, conversions, call tracking si nécessaire) et vous fournissons des rapports détaillés avec les KPIs clés : impressions, clics, coût par clic, conversions, ROI."
  }
]

export default function GoogleAdsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50/30 to-blue-50/20">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-violet-100 text-violet-700 border-violet-200">
                🎯 Agence Google Ads certifiée
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Gestion{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                  Google Ads
                </span>{" "}
                performante
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 mb-8">
                Maximisez votre retour sur investissement publicitaire avec nos campagnes Google Ads 
                optimisées par des experts certifiés.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Target, text: "Ciblage précis" },
                  { icon: TrendingUp, text: "ROI optimisé" },
                  { icon: BarChart3, text: "Reporting détaillé" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
                    <item.icon className="h-4 w-4 text-violet-600" />
                    <span className="text-sm font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600">
                    Audit gratuit
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
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-violet-600" />
                  <span className="text-sm text-slate-600">Google Partner</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-sm text-slate-600">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Stats Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-violet-200/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Performance campagne</p>
                    <p className="text-2xl font-bold text-violet-600">+250% ROI</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
                    <p className="text-2xl font-bold text-slate-900">12,450</p>
                    <p className="text-sm text-slate-500">Clics ce mois</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl">
                    <p className="text-2xl font-bold text-slate-900">342</p>
                    <p className="text-sm text-slate-500">Conversions</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                    <p className="text-2xl font-bold text-slate-900">0.85€</p>
                    <p className="text-sm text-slate-500">CPC moyen</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                    <p className="text-2xl font-bold text-slate-900">4.2%</p>
                    <p className="text-sm text-slate-500">Taux de conversion</p>
                  </div>
                </div>

                <div className="h-32 bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl flex items-end p-4">
                  <div className="flex items-end gap-2 w-full">
                    {[40, 55, 45, 65, 50, 75, 85, 70, 90, 80, 95, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-violet-500 to-purple-400 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">ROI positif</p>
                    <p className="text-sm text-slate-500">Dès le 1er mois</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-500 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-violet-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Types de campagnes</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tous les formats{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                Google Ads
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nous maîtrisons tous les types de campagnes pour atteindre vos objectifs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-4 group-hover:from-violet-500 group-hover:to-purple-400 transition-colors">
                    <service.icon className="h-7 w-7 text-violet-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-violet-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Notre méthode</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Un processus{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                éprouvé
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
                
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 h-6 w-6 text-violet-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nos forfaits</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tarifs{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                transparents
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Des forfaits adaptés à votre budget publicitaire. Sans frais cachés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {forfaits.map((forfait, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${forfait.popular ? "border-2 border-violet-500 shadow-xl shadow-violet-200/50" : ""}`}
              >
                {forfait.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    Recommandé
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-1">{forfait.name}</h3>
                  <p className="text-violet-600 text-sm mb-2">{forfait.budget}</p>
                  <p className="text-slate-600 text-sm mb-4">{forfait.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{forfait.price}€</span>
                    <span className="text-slate-500">{forfait.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {forfait.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-violet-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button 
                      className={`w-full ${forfait.popular ? "bg-gradient-to-r from-violet-600 to-purple-500" : ""}`}
                      variant={forfait.popular ? "default" : "outline"}
                    >
                      {forfait.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm">
            * Les budgets publicitaires sont payés directement à Google et ne sont pas inclus dans nos frais de gestion.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-violet-50/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Témoignages</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.role} - {testimonial.company}</p>
                      </div>
                    </div>
                    <Badge variant="success" className="shrink-0">{testimonial.result}</Badge>
                  </div>
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-violet-600 to-purple-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Prêt à booster votre visibilité ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez un audit gratuit de vos campagnes actuelles ou découvrez le potentiel de Google Ads pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 bg-white text-violet-600 hover:bg-white/90">
                <Rocket className="h-5 w-5" />
                Audit gratuit
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


