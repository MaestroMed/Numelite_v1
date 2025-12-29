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
  Globe,
  Wrench,
  Users,
  Award,
  MapPin,
  ChevronRight,
  Play,
  Target,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroCarousel } from "@/components/hero-carousel"

const services = [
  {
    icon: Wrench,
    title: "Dépannage Informatique",
    description: "Intervention rapide pour tous vos problèmes : virus, lenteur, écran bleu, panne matérielle...",
    price: "À partir de 49€",
    href: "/depannage",
    gradient: "from-orange-500 to-amber-400",
    features: ["Diagnostic gratuit", "Intervention sous 24h", "Garantie satisfaction"]
  },
  {
    icon: Globe,
    title: "Création de Sites Web",
    description: "Sites vitrines, e-commerce, sur-mesure. Design moderne et optimisé pour le référencement.",
    price: "À partir de 990€",
    href: "/creation-site",
    gradient: "from-[#2d8cf0] to-[#4da6ff]",
    features: ["Design personnalisé", "Responsive mobile", "SEO optimisé"]
  },
  {
    icon: Monitor,
    title: "Maintenance & Support",
    description: "Gardez votre site et vos équipements en parfait état avec notre service de maintenance.",
    price: "À partir de 29€/mois",
    href: "/maintenance",
    gradient: "from-emerald-500 to-green-400",
    features: ["Mises à jour régulières", "Support prioritaire", "Sauvegardes auto"]
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Campagnes publicitaires ciblées pour générer des leads qualifiés et booster vos ventes.",
    price: "À partir de 299€/mois",
    href: "/google-ads",
    gradient: "from-purple-500 to-violet-400",
    features: ["Audit gratuit", "Optimisation continue", "Reporting mensuel"]
  },
  {
    icon: Search,
    title: "SEO / Référencement",
    description: "Améliorez votre visibilité sur Google et attirez plus de clients qualifiés.",
    price: "À partir de 399€/mois",
    href: "/seo",
    gradient: "from-[#22d3ee] to-[#4da6ff]",
    features: ["Audit SEO gratuit", "Optimisation on-page", "Netlinking"]
  }
]

const stats = [
  { value: "500+", label: "Clients satisfaits", icon: Users },
  { value: "24h", label: "Délai d'intervention", icon: Clock },
  { value: "4.9/5", label: "Note moyenne", icon: Star },
  { value: "10+", label: "Années d'expérience", icon: Award },
]

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Gérante",
    company: "Boutique Élégance",
    content: "Numelite a créé notre site e-commerce en un temps record. Les ventes en ligne ont décollé dès le premier mois !",
    rating: 5,
  },
  {
    name: "Pierre Martin",
    role: "Directeur",
    company: "Cabinet PMC",
    content: "Intervention rapide et efficace pour un problème de serveur critique. Professionnalisme exemplaire.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Freelance",
    company: "Designer",
    content: "Mon ordinateur avait un virus, ils l'ont nettoyé le jour même. Je recommande vivement !",
    rating: 5,
  }
]

const zones = [
  "Paris", "Boulogne-Billancourt", "Saint-Denis", "Montreuil",
  "Nanterre", "Créteil", "Versailles", "Neuilly-sur-Seine",
  "Levallois-Perret", "Issy-les-Moulineaux"
]

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section - Glassmorphism */}
      <section className="relative py-16 bg-[#0a0d10] border-y border-white/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2d8cf0]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#4da6ff]/20 to-[#22d3ee]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-[#4da6ff]" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-[#8899aa]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative mesh-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 glass-blue border-[#4da6ff]/30 text-[#4da6ff] bg-[#4da6ff]/10">Nos Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Des solutions pour tous vos{" "}
              <span className="gradient-text">besoins informatiques</span>
            </h2>
            <p className="text-lg text-[#8899aa] max-w-2xl mx-auto">
              De la réparation d&apos;urgence à la création de votre site web, nous vous accompagnons dans tous vos projets numériques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl overflow-hidden group card-hover card-glow"
              >
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-[#8899aa] mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#b8c4d0]">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="font-bold text-lg gradient-text">{service.price}</span>
                    <Link href={service.href}>
                      <Button variant="ghost" size="sm" className="gap-1 group/btn text-[#4da6ff] hover:text-white hover:bg-white/5">
                        En savoir plus
                        <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 services */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {services.slice(3).map((service, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl overflow-hidden group card-hover card-glow"
              >
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-[#8899aa] mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#b8c4d0]">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="font-bold text-lg gradient-text">{service.price}</span>
                    <Link href={service.href}>
                      <Button variant="ghost" size="sm" className="gap-1 group/btn text-[#4da6ff] hover:text-white hover:bg-white/5">
                        En savoir plus
                        <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tarifs">
              <Button size="lg" variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/5">
                Voir tous nos tarifs
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding relative bg-[#0a0d10]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#2d8cf0]/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 glass-blue border-[#4da6ff]/30 text-[#4da6ff] bg-[#4da6ff]/10">Pourquoi nous choisir</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                L&apos;expertise informatique au service de{" "}
                <span className="gradient-text">votre réussite</span>
              </h2>
              <p className="text-lg text-[#8899aa] mb-8">
                Depuis plus de 10 ans, nous accompagnons les particuliers et les entreprises 
                d&apos;Île-de-France dans leurs projets numériques.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "Réactivité",
                    description: "Intervention sous 24h en Île-de-France, 7j/7 pour les urgences."
                  },
                  {
                    icon: Shield,
                    title: "Garantie",
                    description: "Satisfait ou reintervenons gratuitement. Devis transparent sans surprise."
                  },
                  {
                    icon: Award,
                    title: "Expertise",
                    description: "Techniciens certifiés avec plus de 10 ans d'expérience."
                  },
                  {
                    icon: Users,
                    title: "Proximité",
                    description: "Une équipe locale qui connaît vos besoins et parle votre langue."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl glass-blue flex items-center justify-center shrink-0 group-hover:bg-[#4da6ff]/20 transition-colors">
                      <item.icon className="h-6 w-6 text-[#4da6ff]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                      <p className="text-[#8899aa]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative glass rounded-3xl p-8 glow-border">
                <div className="aspect-video glass rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <button className="relative w-20 h-20 bg-gradient-to-br from-[#2d8cf0] to-[#4da6ff] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#4da6ff]/30 hover:scale-110 transition-transform btn-glow">
                    <Play className="h-8 w-8 ml-1" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Découvrez Numelite</h3>
                <p className="text-[#8899aa]">Regardez notre vidéo de présentation</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#22d3ee]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4da6ff]/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding relative mesh-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 glass-blue border-[#4da6ff]/30 text-[#4da6ff] bg-[#4da6ff]/10">Témoignages</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Ce que disent nos{" "}
              <span className="gradient-text">clients</span>
            </h2>
            <p className="text-lg text-[#8899aa] max-w-2xl mx-auto">
              Plus de 500 clients nous font confiance. Découvrez leurs retours d&apos;expérience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass rounded-2xl p-8 card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#b8c4d0] mb-6 italic leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4da6ff] to-[#22d3ee] flex items-center justify-center text-white font-bold shadow-lg shadow-[#4da6ff]/25">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-[#667788]">{testimonial.role} - {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/temoignages">
              <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/5">
                Voir tous les avis
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="section-padding relative bg-[#0a0d10]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#22d3ee]/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 glass-blue border-[#22d3ee]/30 text-[#22d3ee] bg-[#22d3ee]/10">
                Zones d&apos;intervention
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Intervention rapide dans toute l&apos;
                <span className="text-[#22d3ee]">Île-de-France</span>
              </h2>
              <p className="text-lg text-[#8899aa] mb-8">
                Nous intervenons dans Paris et toute la région parisienne. 
                Déplacement gratuit pour toute intervention.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {zones.map((zone, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 glass rounded-full text-sm text-[#b8c4d0] hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {zone}
                  </span>
                ))}
              </div>

              <Link href="/zones">
                <Button variant="outline" className="border-[#22d3ee]/30 text-[#22d3ee] hover:bg-[#22d3ee]/10 gap-2">
                  <MapPin className="h-5 w-5" />
                  Voir toutes les zones
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square glass rounded-3xl p-8 flex items-center justify-center glow-border">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-[#22d3ee] mx-auto mb-4" />
                  <p className="text-2xl font-bold text-white mb-2">Île-de-France</p>
                  <p className="text-[#8899aa]">Paris et toute la région</p>
                </div>
                
                {/* Animated pins */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#22d3ee] rounded-full animate-ping" />
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#4da6ff] rounded-full animate-ping" style={{ animationDelay: '300ms' }} />
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '600ms' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a7ae0] via-[#2d8cf0] to-[#22d3ee]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Prêt à résoudre votre problème informatique ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous maintenant pour une intervention rapide ou un devis gratuit pour votre projet web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33123456789">
              <Button size="xl" className="w-full sm:w-auto gap-2 bg-white text-[#2d8cf0] hover:bg-white/90 shadow-xl shadow-black/20">
                <Phone className="h-5 w-5" />
                01 23 45 67 89
              </Button>
            </a>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="w-full sm:w-auto gap-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                Demander un devis gratuit
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
