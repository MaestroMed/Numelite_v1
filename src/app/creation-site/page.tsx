import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  X,
  Star,
  Globe,
  ShoppingCart,
  Code,
  Palette,
  Search,
  Smartphone,
  Zap,
  Shield,
  Headphones,
  BarChart,
  Rocket,
  Users,
  Award,
  Clock,
  Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Création de Site Web Paris | Site Vitrine & E-commerce | Numelite",
  description: "Création de sites web professionnels à Paris et Île-de-France. Sites vitrines, e-commerce, sur-mesure. Design moderne, SEO optimisé. Devis gratuit.",
  keywords: ["création site web", "site vitrine", "site e-commerce", "paris", "agence web", "développeur web"],
}

const offers = [
  {
    id: "vitrine",
    name: "Site Vitrine",
    price: 990,
    originalPrice: 1490,
    description: "Parfait pour présenter votre activité",
    delivery: "2-3 semaines",
    features: [
      "Jusqu'à 5 pages",
      "Design personnalisé",
      "Responsive (mobile, tablette)",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Intégration réseaux sociaux",
      "Hébergement 1 an inclus",
      "Nom de domaine 1 an",
      "Certificat SSL (HTTPS)",
      "Formation à la gestion"
    ],
    notIncluded: [
      "Blog",
      "Fonctionnalités avancées",
      "Maintenance mensuelle"
    ],
    popular: false,
    icon: Globe
  },
  {
    id: "pro",
    name: "Site Pro",
    price: 1990,
    originalPrice: 2490,
    description: "Pour les entreprises ambitieuses",
    delivery: "3-4 semaines",
    features: [
      "Jusqu'à 10 pages",
      "Design premium sur-mesure",
      "Responsive optimisé",
      "Blog intégré",
      "SEO avancé (balises, sitemap)",
      "Google Analytics configuré",
      "Formulaires avancés",
      "Galerie photos/portfolio",
      "Hébergement 1 an inclus",
      "Nom de domaine 1 an",
      "Certificat SSL (HTTPS)",
      "Maintenance 3 mois incluse",
      "Support prioritaire"
    ],
    notIncluded: [
      "E-commerce",
      "Fonctionnalités sur-mesure"
    ],
    popular: true,
    icon: Rocket
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    price: 3490,
    originalPrice: 4490,
    description: "Vendez en ligne efficacement",
    delivery: "4-6 semaines",
    features: [
      "Boutique complète",
      "Gestion des produits illimitée",
      "Panier et paiement sécurisé",
      "Stripe/PayPal intégré",
      "Gestion des stocks",
      "Tableau de bord vendeur",
      "Emails transactionnels",
      "SEO e-commerce",
      "Google Analytics e-commerce",
      "Design responsive premium",
      "Hébergement 1 an",
      "Nom de domaine 1 an",
      "SSL + sécurité renforcée",
      "Formation complète",
      "Maintenance 6 mois"
    ],
    notIncluded: [],
    popular: false,
    icon: ShoppingCart
  }
]

const addons = [
  { name: "Pages supplémentaires", price: "150€/page", description: "Au-delà du forfait inclus" },
  { name: "Blog / Actualités", price: "350€", description: "Système de publication d'articles" },
  { name: "Réservation en ligne", price: "490€", description: "Calendrier et prise de RDV" },
  { name: "Chat en direct", price: "290€", description: "Widget de chat client" },
  { name: "Multilingue", price: "490€/langue", description: "Traduction et gestion multilingue" },
  { name: "Maintenance mensuelle", price: "à partir de 49€/mois", description: "Mises à jour et support" },
]

const process = [
  {
    step: 1,
    title: "Brief & Devis",
    description: "Discussion de votre projet, objectifs, besoins. Devis détaillé gratuit sous 48h.",
    duration: "1-2 jours"
  },
  {
    step: 2,
    title: "Maquettes",
    description: "Création des maquettes visuelles. Validation du design avant développement.",
    duration: "3-5 jours"
  },
  {
    step: 3,
    title: "Développement",
    description: "Intégration et développement de votre site. Tests sur tous les appareils.",
    duration: "1-3 semaines"
  },
  {
    step: 4,
    title: "Contenu",
    description: "Intégration de vos textes, images, vidéos. Optimisation SEO du contenu.",
    duration: "2-3 jours"
  },
  {
    step: 5,
    title: "Mise en ligne",
    description: "Publication du site, configuration DNS, formation à l'utilisation.",
    duration: "1 jour"
  }
]

const features = [
  {
    icon: Palette,
    title: "Design Sur-Mesure",
    description: "Chaque site est unique, conçu selon votre identité de marque."
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description: "Parfait sur mobile, tablette et ordinateur. Google Mobile-First."
  },
  {
    icon: Search,
    title: "SEO Optimisé",
    description: "Référencement naturel intégré pour être visible sur Google."
  },
  {
    icon: Zap,
    title: "Ultra Rapide",
    description: "Temps de chargement optimisé pour une meilleure expérience."
  },
  {
    icon: Shield,
    title: "Sécurisé",
    description: "HTTPS, sauvegardes régulières, protection contre les attaques."
  },
  {
    icon: Headphones,
    title: "Support Inclus",
    description: "Assistance technique et modifications mineures incluses."
  }
]

const portfolio = [
  { name: "Boutique Élégance", category: "E-commerce", image: "/portfolio/elegance.jpg" },
  { name: "Cabinet PMC", category: "Site vitrine", image: "/portfolio/pmc.jpg" },
  { name: "Restaurant Le Gourmet", category: "Site vitrine", image: "/portfolio/gourmet.jpg" },
  { name: "Fitness Pro", category: "Site Pro", image: "/portfolio/fitness.jpg" },
]

const faqs = [
  {
    question: "Combien de temps pour créer mon site ?",
    answer: "Le délai varie selon le type de site : 2-3 semaines pour un site vitrine, 3-4 semaines pour un site pro, 4-6 semaines pour un e-commerce. Ces délais peuvent être réduits selon vos besoins."
  },
  {
    question: "Est-ce que je pourrai modifier mon site moi-même ?",
    answer: "Oui ! Nous utilisons des systèmes de gestion de contenu simples qui vous permettent de modifier textes et images facilement. Une formation est incluse dans tous nos forfaits."
  },
  {
    question: "Qu'est-ce qui est inclus dans l'hébergement ?",
    answer: "L'hébergement inclut : espace disque, bande passante, emails professionnels (5 à 10 selon le forfait), sauvegardes quotidiennes, certificat SSL et support technique."
  },
  {
    question: "Et après la première année ?",
    answer: "L'hébergement et le nom de domaine sont renouvelables à 120€/an (site vitrine) à 180€/an (e-commerce). La maintenance peut être ajoutée en option à partir de 49€/mois."
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Oui, vous pouvez payer en 2 ou 3 fois sans frais. 30% à la commande, le reste à la livraison ou en mensualités."
  },
  {
    question: "Pouvez-vous reprendre un site existant ?",
    answer: "Oui, nous pouvons moderniser ou reconstruire un site existant. Nous analysons votre site actuel et vous proposons les meilleures options (refonte partielle ou complète)."
  }
]

export default function CreationSitePage() {
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
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6">
              🚀 Offre de lancement : jusqu&apos;à -30%
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Création de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Sites Web
              </span>{" "}
              Professionnels
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Des sites modernes, performants et optimisés pour le référencement. 
              De la vitrine au e-commerce, nous réalisons votre projet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#offres">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-blue-600 to-cyan-500">
                  Voir nos offres
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                  Devis gratuit
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="h-6 w-6 text-blue-400" />
                <span className="font-medium">+100 sites livrés</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-white">4.9/5</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="h-6 w-6 text-blue-400" />
                <span className="font-medium">Livraison 2-6 semaines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-[#0a0d10]">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center shrink-0">
                  <feature.icon className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="offres" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4">Nos Offres</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Choisissez votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                formule
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Des tarifs clairs, sans surprise. Tout est inclus.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <Card 
                key={offer.id}
                className={`relative bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden ${
                  offer.popular ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20 lg:scale-105' : ''
                }`}
              >
                {offer.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-2 text-sm font-semibold">
                    ⭐ LE PLUS POPULAIRE
                  </div>
                )}
                <CardContent className={`p-8 ${offer.popular ? 'pt-14' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <offer.icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{offer.name}</h3>
                      <p className="text-slate-400">{offer.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">{offer.price}€</span>
                      <span className="text-lg text-slate-500 line-through">{offer.originalPrice}€</span>
                    </div>
                    <p className="text-sm text-slate-500">Livraison : {offer.delivery}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {offer.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                    {offer.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <X className="h-5 w-5 text-slate-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/devis?offre=${offer.id}`}>
                    <Button 
                      className={`w-full ${offer.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                      size="lg"
                    >
                      Demander un devis
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 lg:py-24 bg-[#0a0d10]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">Options</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Personnalisez votre projet
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {addons.map((addon, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                  <div>
                    <p className="font-semibold text-white">{addon.name}</p>
                    <p className="text-sm text-slate-400">{addon.description}</p>
                  </div>
                  <span className="font-bold text-blue-400 whitespace-nowrap">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4">Notre Méthode</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              De l&apos;idée au site en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                5 étapes
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xl font-bold mx-auto mb-4 text-white shadow-lg shadow-blue-500/30">
                  {step.step}
                </div>
                <h3 className="font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-sm text-slate-400 mb-2">{step.description}</p>
                <span className="text-xs text-cyan-400">{step.duration}</span>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 lg:py-24 bg-[#0a0d10]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">Portfolio</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Nos dernières{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                réalisations
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden group cursor-pointer hover:border-purple-500/50 transition-colors">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative flex items-center justify-center">
                  <Globe className="h-12 w-12 text-purple-400/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <p className="font-bold">{project.name}</p>
                      <p className="text-sm text-white/80">{project.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/portfolio">
              <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
                Voir tout le portfolio
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">FAQ</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Questions fréquentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/5 backdrop-blur-xl rounded-xl px-6 border border-white/10"
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-blue-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Prêt à lancer votre site web ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez un devis gratuit et personnalisé sous 48h
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-white text-blue-600 hover:bg-white/90">
                Demander un devis gratuit
                <ArrowRight className="h-5 w-5" />
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
    </div>
  )
}
