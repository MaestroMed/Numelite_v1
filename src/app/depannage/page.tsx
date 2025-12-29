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
  Bug,
  HardDrive,
  Wifi,
  Battery,
  AlertTriangle,
  MapPin,
  MessageCircle,
  ThumbsUp,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Dépannage Informatique Paris & Île-de-France | Intervention sous 24h",
  description: "Dépannage informatique rapide à Paris et en Île-de-France. Virus, écran bleu, PC lent, panne... Intervention sous 24h, diagnostic gratuit. Appelez le 01 23 45 67 89",
  keywords: ["dépannage informatique", "réparation ordinateur", "paris", "île-de-france", "virus", "écran bleu", "pc lent"],
  openGraph: {
    title: "Dépannage Informatique Paris | Intervention Rapide 24h",
    description: "Votre ordinateur a un problème ? Intervention sous 24h en Île-de-France. Diagnostic gratuit !",
  },
}

const problems = [
  { icon: Bug, title: "Virus & Malware", description: "Nettoyage complet et protection anti-virus" },
  { icon: Monitor, title: "Écran bleu", description: "Diagnostic et réparation système Windows" },
  { icon: Zap, title: "PC trop lent", description: "Optimisation et boost de performances" },
  { icon: HardDrive, title: "Panne disque dur", description: "Récupération de données, remplacement SSD" },
  { icon: Wifi, title: "Problème réseau", description: "WiFi, connexion internet, configuration" },
  { icon: Battery, title: "Batterie HS", description: "Remplacement batterie PC portable" },
  { icon: AlertTriangle, title: "PC ne démarre plus", description: "Diagnostic complet et réparation" },
  { icon: Monitor, title: "Écran cassé", description: "Remplacement écran PC portable" },
]

const tarifs = [
  {
    name: "Diagnostic",
    price: 49,
    description: "Identification du problème",
    features: ["Diagnostic complet", "Rapport détaillé", "Devis gratuit réparation", "Conseils personnalisés"],
    popular: false
  },
  {
    name: "Intervention",
    price: 89,
    description: "Réparation standard",
    features: ["Diagnostic inclus", "Nettoyage virus/malware", "Optimisation système", "Mises à jour Windows", "Garantie 30 jours"],
    popular: true
  },
  {
    name: "Forfait Pro",
    price: 149,
    description: "Intervention complète",
    features: ["Tout de l'Intervention", "Sauvegarde données", "Installation logiciels", "Formation utilisation", "Support 3 mois", "Garantie 90 jours"],
    popular: false
  }
]

const process = [
  { step: 1, title: "Appelez-nous", description: "Décrivez votre problème à notre équipe" },
  { step: 2, title: "RDV sous 24h", description: "Un technicien se déplace chez vous" },
  { step: 3, title: "Diagnostic", description: "Analyse complète, devis transparent" },
  { step: 4, title: "Réparation", description: "Intervention rapide avec garantie" }
]

const zones = [
  "Paris", "Boulogne-Billancourt", "Saint-Denis", "Montreuil",
  "Nanterre", "Créteil", "Versailles", "Neuilly-sur-Seine"
]

const faqs = [
  {
    question: "Combien de temps dure une intervention ?",
    answer: "La durée dépend du problème. Un nettoyage virus prend 1-2h, une réinstallation système 2-3h."
  },
  {
    question: "Intervenez-vous le week-end ?",
    answer: "Oui, nous intervenons le samedi de 10h à 17h. Pour les urgences du dimanche, un supplément de 50% s'applique."
  },
  {
    question: "Mes données sont-elles sauvegardées ?",
    answer: "Nous sauvegardons systématiquement vos données avant toute intervention."
  },
  {
    question: "Que se passe-t-il si le problème revient ?",
    answer: "Toutes nos interventions sont garanties. Si le même problème revient dans le délai de garantie, nous réintervenons gratuitement."
  }
]

const testimonials = [
  { name: "Jean-Pierre M.", location: "Paris 15e", content: "PC bloqué par un ransomware, ils l'ont nettoyé et récupéré mes fichiers. Intervention le jour même !", rating: 5 },
  { name: "Nathalie R.", location: "Boulogne", content: "Mon ordinateur était ultra lent, maintenant il redémarre en 20 secondes. Merci Numelite !", rating: 5 },
  { name: "Marc D.", location: "Neuilly", content: "Écran bleu permanent, ils ont tout réparé en 2h chez moi. Très professionnel.", rating: 5 }
]

export default function DepannagePage() {
  return (
    <>
      {/* Hero Section - Dark Glassmorphism */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0f1419]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-500/10 border-orange-500/30 text-orange-400">
                ⚡ Intervention urgente disponible
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-orange-400">Dépannage</span>{" "}
                <span className="text-white">Informatique</span>{" "}
                <span className="gradient-text">Paris & Île-de-France</span>
              </h1>

              <p className="text-xl text-[#b8c4d0] mb-6">
                Votre ordinateur a un problème ? <strong className="text-white">Intervention sous 24h</strong> chez vous ou au bureau. 
                Diagnostic gratuit, tarifs transparents.
              </p>

              {/* Key benefits */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Clock, text: "Sous 24h" },
                  { icon: Shield, text: "Garantie" },
                  { icon: ThumbsUp, text: "Diagnostic gratuit" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                    <item.icon className="h-5 w-5 text-orange-400" />
                    <span className="font-medium text-white">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+33123456789" className="contents">
                  <Button size="xl" variant="phone" className="w-full sm:w-auto gap-2">
                    <Phone className="h-6 w-6" />
                    01 23 45 67 89
                  </Button>
                </a>
                <a 
                  href={`https://wa.me/33612345678?text=${encodeURIComponent("Bonjour, j'ai besoin d'un dépannage informatique urgent.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contents"
                >
                  <Button size="xl" variant="whatsapp" className="w-full sm:w-auto gap-2">
                    <MessageCircle className="h-6 w-6" />
                    WhatsApp
                  </Button>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 font-semibold text-white">4.9/5</span>
                  <span className="text-[#8899aa]">(127 avis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#8899aa]" />
                  <span className="text-[#8899aa]">+500 interventions/an</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form - Glassmorphism */}
            <div className="glass-strong rounded-3xl p-8 glow-border">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Demande d&apos;intervention rapide</h2>
                <p className="text-[#8899aa]">Réponse sous 30 minutes</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#b8c4d0] mb-2">Votre nom</label>
                  <input 
                    type="text" 
                    className="w-full h-12 px-4 rounded-xl glass-input"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b8c4d0] mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full h-12 px-4 rounded-xl glass-input"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b8c4d0] mb-2">Décrivez votre problème</label>
                  <select className="w-full h-12 px-4 rounded-xl glass-input">
                    <option>Mon PC est trop lent</option>
                    <option>J&apos;ai un virus</option>
                    <option>Écran bleu / Mon PC plante</option>
                    <option>Mon PC ne démarre plus</option>
                    <option>Problème de connexion internet</option>
                    <option>Autre problème</option>
                  </select>
                </div>
                <Button type="submit" size="lg" className="w-full gap-2 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300">
                  <Zap className="h-5 w-5" />
                  Demander une intervention
                </Button>
                <p className="text-xs text-center text-[#667788]">
                  En soumettant ce formulaire, vous acceptez notre{" "}
                  <Link href="/politique-confidentialite" className="text-[#4da6ff] hover:underline">
                    politique de confidentialité
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding relative mesh-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Problèmes résolus</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Quel est votre <span className="text-orange-400">problème</span> ?
            </h2>
            <p className="text-lg text-[#8899aa] max-w-2xl mx-auto">
              Nous intervenons sur tous types de pannes informatiques, PC de bureau et portables.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center cursor-pointer group card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-amber-400 transition-all duration-300">
                  <problem.icon className="h-8 w-8 text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-sm text-[#8899aa]">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding relative bg-[#0a0d10]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-500/10 border-orange-500/30 text-orange-400">Tarifs transparents</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Nos <span className="text-orange-400">forfaits</span> dépannage
            </h2>
            <p className="text-lg text-[#8899aa] max-w-2xl mx-auto">
              Pas de mauvaise surprise. Prix fixés à l&apos;avance, devis gratuit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tarifs.map((tarif, index) => (
              <div 
                key={index} 
                className={`glass rounded-2xl overflow-hidden relative ${tarif.popular ? 'glow-border' : ''}`}
              >
                {tarif.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{tarif.name}</h3>
                  <p className="text-[#8899aa] mb-4">{tarif.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tarif.price}€</span>
                    <span className="text-[#8899aa]"> / intervention</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tarif.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#b8c4d0]">
                        <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${tarif.popular ? 'bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300' : ''}`}
                    variant={tarif.popular ? 'default' : 'outline'}
                  >
                    Choisir ce forfait
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding relative mesh-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Comment ça marche</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">4 étapes simples</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg shadow-orange-500/25">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-[#8899aa]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative bg-[#0a0d10]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-500/10 border-orange-500/30 text-orange-400">Témoignages</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ils nous ont fait <span className="text-orange-400">confiance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#b8c4d0] mb-4">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-[#667788]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="section-padding relative mesh-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Zones d&apos;intervention</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Intervention dans toute l&apos;<span className="text-orange-400">Île-de-France</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {zones.map((zone, index) => (
              <span 
                key={index}
                className="px-4 py-2 glass rounded-full text-sm text-[#b8c4d0] hover:bg-white/10 hover:text-white transition-colors cursor-default flex items-center gap-1"
              >
                <MapPin className="h-4 w-4" />
                {zone}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding relative bg-[#0a0d10]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Questions fréquentes</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-white/10"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-orange-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#8899aa]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Votre ordinateur a besoin d&apos;aide ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Appelez maintenant et obtenez une intervention sous 24h !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33123456789">
              <Button size="xl" className="w-full sm:w-auto gap-2 bg-white text-orange-600 hover:bg-white/90 shadow-xl shadow-black/20">
                <Phone className="h-6 w-6" />
                01 23 45 67 89
              </Button>
            </a>
            <Link href="/reservation">
              <Button size="xl" variant="outline" className="w-full sm:w-auto gap-2 border-white/30 text-white hover:bg-white/10">
                Réserver en ligne
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
