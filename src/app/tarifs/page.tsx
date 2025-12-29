import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  X,
  Phone,
  Wrench,
  Globe,
  Monitor,
  HelpCircle,
  Zap,
  Shield,
  Star,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Tarifs | Dépannage Informatique & Création de Sites Web | Numelite",
  description: "Découvrez nos tarifs transparents pour le dépannage informatique et la création de sites web. Devis gratuit, prix fixes, pas de mauvaise surprise.",
}

const depannagePrices = [
  {
    name: "Diagnostic",
    price: 49,
    unit: "",
    description: "Identification du problème",
    features: [
      { text: "Diagnostic complet du PC", included: true },
      { text: "Rapport détaillé", included: true },
      { text: "Devis réparation gratuit", included: true },
      { text: "Déplacement inclus (IDF)", included: true },
      { text: "Réparation", included: false },
    ],
    cta: "Réserver",
    popular: false
  },
  {
    name: "Intervention Standard",
    price: 89,
    unit: "",
    description: "Réparation courante",
    features: [
      { text: "Diagnostic inclus", included: true },
      { text: "Nettoyage virus/malware", included: true },
      { text: "Optimisation système", included: true },
      { text: "Mises à jour Windows", included: true },
      { text: "Garantie 30 jours", included: true },
    ],
    cta: "Réserver",
    popular: true
  },
  {
    name: "Forfait Complet",
    price: 149,
    unit: "",
    description: "Intervention premium",
    features: [
      { text: "Tout de Standard +", included: true },
      { text: "Sauvegarde données", included: true },
      { text: "Installation logiciels", included: true },
      { text: "Formation 30min", included: true },
      { text: "Support 3 mois", included: true },
      { text: "Garantie 90 jours", included: true },
    ],
    cta: "Réserver",
    popular: false
  }
]

const sitePrices = [
  {
    name: "Site Vitrine",
    price: 990,
    unit: "",
    description: "5 pages, idéal pour débuter",
    features: [
      { text: "Jusqu'à 5 pages", included: true },
      { text: "Design personnalisé", included: true },
      { text: "Responsive mobile", included: true },
      { text: "SEO de base", included: true },
      { text: "Hébergement 1 an", included: true },
      { text: "Blog", included: false },
      { text: "E-commerce", included: false },
    ],
    cta: "Demander un devis",
    popular: false
  },
  {
    name: "Site Pro",
    price: 1990,
    unit: "",
    description: "10 pages + blog",
    features: [
      { text: "Jusqu'à 10 pages", included: true },
      { text: "Design premium", included: true },
      { text: "Blog intégré", included: true },
      { text: "SEO avancé", included: true },
      { text: "Google Analytics", included: true },
      { text: "Maintenance 3 mois", included: true },
      { text: "E-commerce", included: false },
    ],
    cta: "Demander un devis",
    popular: true
  },
  {
    name: "E-commerce",
    price: 3490,
    unit: "",
    description: "Boutique complète",
    features: [
      { text: "Boutique illimitée", included: true },
      { text: "Paiement en ligne", included: true },
      { text: "Gestion des stocks", included: true },
      { text: "Tableau de bord", included: true },
      { text: "SEO e-commerce", included: true },
      { text: "Formation complète", included: true },
      { text: "Maintenance 6 mois", included: true },
    ],
    cta: "Demander un devis",
    popular: false
  }
]

const maintenancePrices = [
  {
    name: "Essentiel",
    price: 29,
    unit: "/mois",
    description: "Maintenance de base",
    features: [
      { text: "Mises à jour sécurité", included: true },
      { text: "Sauvegardes hebdo", included: true },
      { text: "Monitoring uptime", included: true },
      { text: "Support email", included: true },
      { text: "Modifications mineures", included: false },
      { text: "Support prioritaire", included: false },
    ],
    cta: "Souscrire",
    popular: false
  },
  {
    name: "Business",
    price: 79,
    unit: "/mois",
    description: "Pour les pros",
    features: [
      { text: "Tout de Essentiel +", included: true },
      { text: "Sauvegardes quotidiennes", included: true },
      { text: "2h modifications/mois", included: true },
      { text: "Support téléphone", included: true },
      { text: "Rapport mensuel", included: true },
      { text: "Temps réponse 24h", included: true },
    ],
    cta: "Souscrire",
    popular: true
  },
  {
    name: "Premium",
    price: 149,
    unit: "/mois",
    description: "Support prioritaire",
    features: [
      { text: "Tout de Business +", included: true },
      { text: "5h modifications/mois", included: true },
      { text: "Support 7j/7", included: true },
      { text: "Temps réponse 4h", included: true },
      { text: "Optimisation continue", included: true },
      { text: "Account manager dédié", included: true },
    ],
    cta: "Souscrire",
    popular: false
  }
]

const additionalServices = [
  { service: "Récupération de données", price: "À partir de 150€", note: "Selon complexité" },
  { service: "Installation SSD", price: "89€", note: "SSD non inclus" },
  { service: "Remplacement écran portable", price: "À partir de 120€", note: "Pièce non incluse" },
  { service: "Nettoyage physique PC", price: "49€", note: "Dépoussiérage complet" },
  { service: "Configuration réseau", price: "79€", note: "Box, WiFi, imprimante" },
  { service: "Transfert de données", price: "69€", note: "PC vers PC" },
  { service: "Formation personnalisée", price: "49€/h", note: "Windows, Office, etc." },
  { service: "Intervention urgente week-end", price: "+50%", note: "Samedi/Dimanche" },
]

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0d10] via-[#0f1419] to-[#1a1f26]">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                             radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative text-center">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">Tarifs transparents</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tarifs</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Des prix clairs et fixes, sans mauvaise surprise. 
            Devis gratuit pour chaque projet.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-400" />
              <span>Garantie satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-400" />
              <span>Intervention rapide</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>4.9/5 sur 500+ avis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="depannage" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white/5 backdrop-blur-xl border border-white/10 p-1">
                <TabsTrigger value="depannage" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300">
                  <Wrench className="h-4 w-4" />
                  Dépannage
                </TabsTrigger>
                <TabsTrigger value="sites" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300">
                  <Globe className="h-4 w-4" />
                  Sites Web
                </TabsTrigger>
                <TabsTrigger value="maintenance" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300">
                  <Monitor className="h-4 w-4" />
                  Maintenance
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="depannage">
              <div className="grid md:grid-cols-3 gap-8">
                {depannagePrices.map((plan, index) => (
                  <Card 
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden ${
                      plan.popular ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                    )}
                    {plan.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600">Le plus populaire</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                      <p className="text-slate-400">{plan.description}</p>
                      <div className="pt-4">
                        <span className="text-5xl font-bold text-white">{plan.price}€</span>
                        <span className="text-slate-400">{plan.unit}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            {feature.included ? (
                              <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-slate-600 shrink-0" />
                            )}
                            <span className={feature.included ? 'text-slate-300' : 'text-slate-600'}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/reservation">
                        <Button 
                          className={`w-full ${plan.popular 
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600' 
                            : 'bg-white/10 hover:bg-white/20 text-white'
                          }`}
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sites">
              <div className="grid md:grid-cols-3 gap-8">
                {sitePrices.map((plan, index) => (
                  <Card 
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden ${
                      plan.popular ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                    )}
                    {plan.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600">Le plus populaire</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                      <p className="text-slate-400">{plan.description}</p>
                      <div className="pt-4">
                        <span className="text-5xl font-bold text-white">{plan.price}€</span>
                        <span className="text-slate-400">{plan.unit}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            {feature.included ? (
                              <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-slate-600 shrink-0" />
                            )}
                            <span className={feature.included ? 'text-slate-300' : 'text-slate-600'}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/devis">
                        <Button 
                          className={`w-full ${plan.popular 
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600' 
                            : 'bg-white/10 hover:bg-white/20 text-white'
                          }`}
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="maintenance">
              <div className="grid md:grid-cols-3 gap-8">
                {maintenancePrices.map((plan, index) => (
                  <Card 
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden ${
                      plan.popular ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                    )}
                    {plan.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600">Le plus populaire</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                      <p className="text-slate-400">{plan.description}</p>
                      <div className="pt-4">
                        <span className="text-5xl font-bold text-white">{plan.price}€</span>
                        <span className="text-slate-400">{plan.unit}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            {feature.included ? (
                              <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-slate-600 shrink-0" />
                            )}
                            <span className={feature.included ? 'text-slate-300' : 'text-slate-600'}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                        <Button 
                          className={`w-full ${plan.popular 
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600' 
                            : 'bg-white/10 hover:bg-white/20 text-white'
                          }`}
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-[#0a0d10]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">Services complémentaires</Badge>
            <h2 className="text-3xl font-bold text-white">Autres prestations</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-white">Service</th>
                      <th className="px-6 py-4 text-right font-semibold text-white">Prix</th>
                      <th className="px-6 py-4 text-right font-semibold text-white hidden sm:table-cell">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {additionalServices.map((item, index) => (
                      <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-slate-300">{item.service}</td>
                        <td className="px-6 py-4 text-right font-semibold text-blue-400">{item.price}</td>
                        <td className="px-6 py-4 text-right text-slate-500 hidden sm:table-cell">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Besoin d&apos;un devis personnalisé ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une estimation gratuite adaptée à votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 gap-2">
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+33123456789">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 gap-2">
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
