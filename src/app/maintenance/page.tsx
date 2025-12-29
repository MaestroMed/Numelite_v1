import { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Zap,
  Monitor,
  RefreshCw,
  HardDrive,
  Cloud,
  Lock,
  Headphones,
  TrendingUp,
  Settings,
  AlertTriangle,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Maintenance Informatique Paris & Île-de-France | Contrat sur mesure",
  description: "Service de maintenance informatique pour entreprises et particuliers en Île-de-France. Support technique, mises à jour, sauvegardes automatiques. À partir de 29€/mois.",
  keywords: ["maintenance informatique", "support technique", "contrat maintenance", "paris", "île-de-france", "infogérance"],
  openGraph: {
    title: "Maintenance Informatique Paris | Support & Infogérance",
    description: "Gardez vos équipements en parfait état avec notre service de maintenance informatique. Support prioritaire inclus.",
  },
}

const services = [
  { icon: RefreshCw, title: "Mises à jour", description: "Windows, logiciels, antivirus toujours à jour" },
  { icon: Cloud, title: "Sauvegardes auto", description: "Vos données sauvegardées quotidiennement" },
  { icon: Shield, title: "Sécurité", description: "Antivirus, firewall, protection contre les menaces" },
  { icon: Monitor, title: "Surveillance", description: "Monitoring 24/7 de vos équipements" },
  { icon: Headphones, title: "Support", description: "Assistance téléphonique et à distance" },
  { icon: TrendingUp, title: "Optimisation", description: "Performances optimales garanties" },
  { icon: HardDrive, title: "Nettoyage", description: "Maintenance préventive régulière" },
  { icon: Lock, title: "Conformité", description: "RGPD et bonnes pratiques de sécurité" },
]

const forfaits = [
  {
    name: "Essentiel",
    price: 29,
    period: "/mois",
    description: "Pour les particuliers",
    features: [
      "1 poste informatique",
      "Mises à jour mensuelles",
      "Sauvegarde hebdomadaire",
      "Support par email",
      "Temps de réponse 48h",
      "Antivirus inclus"
    ],
    notIncluded: [
      "Support téléphonique",
      "Interventions sur site"
    ],
    popular: false,
    cta: "Souscrire"
  },
  {
    name: "Professionnel",
    price: 79,
    period: "/mois",
    description: "Pour les TPE/PME",
    features: [
      "Jusqu'à 5 postes",
      "Mises à jour hebdomadaires",
      "Sauvegarde quotidienne",
      "Support téléphonique",
      "Temps de réponse 24h",
      "Antivirus + Firewall",
      "Rapport mensuel",
      "1 intervention sur site/mois"
    ],
    notIncluded: [],
    popular: true,
    cta: "Souscrire"
  },
  {
    name: "Entreprise",
    price: 199,
    period: "/mois",
    description: "Pour les PME/ETI",
    features: [
      "Jusqu'à 20 postes",
      "Mises à jour continues",
      "Sauvegarde temps réel",
      "Support prioritaire 24/7",
      "Temps de réponse 4h",
      "Suite sécurité complète",
      "Monitoring 24/7",
      "Interventions illimitées",
      "Serveur inclus",
      "Chef de projet dédié"
    ],
    notIncluded: [],
    popular: false,
    cta: "Nous contacter"
  }
]

const benefits = [
  {
    icon: Clock,
    title: "Zéro interruption",
    description: "Prévenez les pannes avant qu'elles ne surviennent grâce à notre maintenance proactive."
  },
  {
    icon: Shield,
    title: "Sécurité maximale",
    description: "Protection continue contre les virus, ransomwares et autres menaces informatiques."
  },
  {
    icon: TrendingUp,
    title: "Performances optimales",
    description: "Vos équipements fonctionnent toujours à leur meilleur niveau."
  },
  {
    icon: Headphones,
    title: "Support réactif",
    description: "Une équipe d'experts disponible pour résoudre vos problèmes rapidement."
  }
]

const risks = [
  "Pannes imprévues coûteuses",
  "Perte de données critiques",
  "Failles de sécurité",
  "Performances dégradées",
  "Interruption d'activité"
]

const faqs = [
  {
    question: "Que comprend exactement le contrat de maintenance ?",
    answer: "Le contrat de maintenance inclut les mises à jour système et logicielles, la gestion des sauvegardes, la surveillance de la sécurité, le support technique et les interventions selon votre forfait. Chaque contrat est adapté à vos besoins spécifiques."
  },
  {
    question: "Puis-je résilier mon contrat à tout moment ?",
    answer: "Nos contrats sont sans engagement minimum. Vous pouvez résilier à tout moment avec un préavis de 30 jours. Nous vous garantissons une transition en douceur vers une autre solution si nécessaire."
  },
  {
    question: "Comment se passent les interventions sur site ?",
    answer: "Pour les forfaits incluant des interventions sur site, nous planifions ensemble les créneaux qui vous conviennent. En cas d'urgence, nous intervenons dans les délais garantis par votre contrat."
  },
  {
    question: "Mes données sont-elles sécurisées avec vos sauvegardes ?",
    answer: "Absolument. Vos sauvegardes sont chiffrées et stockées sur des serveurs sécurisés en France. Nous respectons strictement le RGPD et vous gardez un contrôle total sur vos données."
  },
  {
    question: "Proposez-vous des contrats pour un parc informatique plus important ?",
    answer: "Oui, nous proposons des contrats sur mesure pour les entreprises avec un parc informatique important. Contactez-nous pour une étude personnalisée et un devis adapté à vos besoins."
  }
]

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0d10] via-[#0f1419] to-[#1a1f26]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
                             radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                ⚙️ Maintenance proactive
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Maintenance{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                  Informatique
                </span>{" "}
                sur mesure
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 mb-8">
                Gardez vos équipements en parfait état avec notre service de maintenance.
                Support technique réactif, mises à jour automatiques et sauvegardes incluses.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Clock, text: "Support réactif" },
                  { icon: Shield, text: "Sécurité 24/7" },
                  { icon: RefreshCw, text: "Mises à jour auto" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/10">
                    <item.icon className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm font-medium text-white">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600">
                    <Phone className="h-5 w-5" />
                    Demander un devis
                  </Button>
                </Link>
                <a href="tel:+33123456789">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-white/20 text-white hover:bg-white/10">
                    01 23 45 67 89
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-sm text-slate-400">4.9/5 (89 avis)</span>
                </div>
                <span className="text-sm text-slate-500">+200 contrats actifs</span>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-slate-400">État du système</p>
                    <p className="text-2xl font-bold text-emerald-400">Tout fonctionne ✓</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Windows", status: "À jour", ok: true },
                    { label: "Antivirus", status: "Actif", ok: true },
                    { label: "Sauvegarde", status: "Aujourd'hui 03:00", ok: true },
                    { label: "Espace disque", status: "45% utilisé", ok: true }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-slate-300">{item.label}</span>
                      <Badge className={item.ok ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : "bg-amber-500/20 text-amber-300 border-amber-500/30"}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Prochaine vérification</span>
                    <span className="font-medium text-slate-300">Dans 2 heures</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center">
                    <Settings className="h-5 w-5 text-emerald-400 animate-spin" style={{ animationDuration: "3s" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Maintenance auto</p>
                    <p className="text-sm text-slate-400">En cours...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-[#0a0d10]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-4">Services inclus</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Une maintenance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                complète
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Tous les services essentiels pour garder vos équipements informatiques en parfait état de fonctionnement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 text-center hover:border-emerald-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Risks */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-4">Pourquoi nous choisir</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                La tranquillité d&apos;esprit{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                  garantie
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Avec notre service de maintenance, vous pouvez vous concentrer sur votre activité 
                pendant que nous veillons sur votre informatique.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center shrink-0">
                      <benefit.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-white">{benefit.title}</h3>
                      <p className="text-slate-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                  <AlertTriangle className="h-10 w-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Sans maintenance</h3>
                <p className="text-slate-400">Les risques que vous prenez</p>
              </div>

              <div className="space-y-3">
                {risks.map((risk, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                    <X className="h-5 w-5 text-red-400 shrink-0" />
                    <span className="text-red-300">{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-[#0a0d10]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-4">Nos forfaits</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Choisissez votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                formule
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Des contrats flexibles adaptés à vos besoins. Sans engagement, résiliable à tout moment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {forfaits.map((forfait, index) => (
              <Card 
                key={index} 
                className={`relative bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden ${
                  forfait.popular ? "ring-2 ring-emerald-500 shadow-xl shadow-emerald-500/20" : ""
                }`}
              >
                {forfait.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-green-500 text-white text-center py-2 text-sm font-semibold">
                    ⭐ LE PLUS POPULAIRE
                  </div>
                )}
                <CardContent className={`p-8 ${forfait.popular ? 'pt-14' : ''}`}>
                  <h3 className="text-xl font-bold mb-2 text-white">{forfait.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{forfait.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{forfait.price}€</span>
                    <span className="text-slate-500">{forfait.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {forfait.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                    {forfait.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="h-5 w-5 text-slate-600 shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button 
                      className={`w-full ${forfait.popular 
                        ? "bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600" 
                        : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      {forfait.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8">
            Besoin d&apos;un contrat personnalisé ?{" "}
            <Link href="/contact" className="text-emerald-400 hover:underline font-medium">
              Contactez-nous
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-4">FAQ</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Questions fréquentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-emerald-400">
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-600 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Protégez votre informatique dès maintenant
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez nos +200 clients satisfaits et profitez d&apos;une maintenance informatique sans souci.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-white text-emerald-600 hover:bg-white/90">
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
