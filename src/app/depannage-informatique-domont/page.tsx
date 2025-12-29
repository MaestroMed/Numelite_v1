import { Metadata } from "next"
import Link from "next/link"
import { 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Star, 
  Shield, 
  Zap,
  MessageCircle,
  Award,
  Home,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GeoContactForm } from "@/components/geo-contact-form"

export const metadata: Metadata = {
  title: "Dépannage Informatique Domont (95330) | Réparation PC à Domicile | Numelite",
  description: "Dépannage informatique à Domont et environs. Réparation PC, Mac, suppression virus, récupération données. Intervention rapide à domicile. ☎ 01 23 45 67 89",
  keywords: "dépannage informatique domont, réparation ordinateur domont, technicien informatique 95330, depannage pc domont"
}

const nearbyCities = [
  { name: "Domont", code: "95330", distance: "0 km" },
  { name: "Bouffémont", code: "95570", distance: "2 km" },
  { name: "Moisselles", code: "95570", distance: "3 km" },
  { name: "Ezanville", code: "95460", distance: "3 km" },
  { name: "Montmorency", code: "95160", distance: "5 km" },
  { name: "Eaubonne", code: "95600", distance: "6 km" },
  { name: "Saint-Brice-sous-Forêt", code: "95350", distance: "4 km" },
  { name: "Piscop", code: "95350", distance: "3 km" },
  { name: "Attainville", code: "95570", distance: "4 km" },
  { name: "Sarcelles", code: "95200", distance: "7 km" }
]

const problems = [
  { title: "PC très lent", description: "Votre ordinateur met du temps à démarrer ou à ouvrir les programmes", icon: "🐌" },
  { title: "Virus / Malware", description: "Pop-ups intempestifs, programmes indésirables, comportement suspect", icon: "🦠" },
  { title: "Écran noir / bleu", description: "Votre PC ne démarre plus ou affiche un écran d'erreur", icon: "📺" },
  { title: "Problème WiFi", description: "Connexion internet instable ou qui ne fonctionne plus", icon: "📶" },
  { title: "Perte de données", description: "Fichiers supprimés, disque dur endommagé, récupération urgente", icon: "💾" },
  { title: "Installation logiciel", description: "Configuration Windows, Office, antivirus, imprimante...", icon: "⚙️" }
]

const pricingLocal = [
  { service: "Diagnostic complet", price: "Gratuit*", note: "*si intervention" },
  { service: "Suppression virus/malware", price: "79€", note: "Nettoyage + antivirus" },
  { service: "Optimisation PC lent", price: "89€", note: "Diagnostic + nettoyage" },
  { service: "Réinstallation Windows", price: "99€", note: "Système + drivers" },
  { service: "Récupération données", price: "à partir de 149€", note: "Devis selon cas" },
  { service: "Installation réseau/WiFi", price: "79€", note: "Configuration complète" }
]

export default function DepannageDomontPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Local SEO Focus */}
      <section className="relative bg-gradient-to-br from-[#0f4c75] via-[#1b6ca8] to-[#3498db] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Local Badge */}
              <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Intervention locale à Domont et environs
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Dépannage Informatique
                <span className="block text-yellow-300">à Domont (95330)</span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Technicien informatique <strong className="text-white">basé à Domont</strong>. 
                Intervention rapide à domicile ou en entreprise dans un rayon de 15 km.
              </p>

              {/* Local Trust */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Home className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Technicien local</p>
                    <p className="text-sm text-blue-200">Basé à Domont depuis 2018</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0123456789">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-yellow-400 text-slate-900 hover:bg-yellow-300 text-lg px-8 py-6 font-bold">
                    <Phone className="h-5 w-5" />
                    01 23 45 67 89
                  </Button>
                </a>
                <a href="https://wa.me/33123456789">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <GeoContactForm location="Domont" buttonGradient="from-[#1b6ca8] to-[#0f4c75]" />
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Problèmes informatiques que nous résolvons à Domont
            </h2>
            <p className="text-slate-600">
              Intervention rapide pour tous types de pannes informatiques
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <Card key={problem.title} className="hover:shadow-lg transition-all border-2 hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{problem.title}</h3>
                  <p className="text-slate-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Tarifs à Domont</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nos tarifs transparents
            </h2>
            <p className="text-slate-600">Prix fixes, sans surprise • Pas de frais de déplacement à Domont</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    {pricingLocal.map((item, index) => (
                      <tr key={item.service} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-4 font-medium">{item.service}</td>
                        <td className="p-4 text-right">
                          <span className="text-xl font-bold text-blue-600">{item.price}</span>
                          <br />
                          <span className="text-sm text-slate-500">{item.note}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <a href="tel:0123456789">
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Appelez pour un devis gratuit
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Zone d&apos;intervention autour de Domont
            </h2>
            <p className="text-slate-600">
              Intervention rapide dans toutes les communes proches de Domont
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {nearbyCities.map((city) => (
              <Link 
                key={city.name}
                href={city.name === "Domont" ? "#" : `/depannage-informatique-${city.name.toLowerCase().replace(/[éè]/g, 'e').replace(/\s+/g, '-')}`}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  city.name === "Domont" 
                    ? "bg-blue-600 text-white border-blue-600" 
                    : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg"
                }`}
              >
                <p className="font-bold">{city.name}</p>
                <p className={`text-sm ${city.name === "Domont" ? "text-blue-200" : "text-slate-500"}`}>
                  {city.code} • {city.distance}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">
              Votre technicien informatique à Domont
            </h2>
            <p>
              Situé au cœur du <strong>Val d&apos;Oise</strong>, Domont bénéficie d&apos;une position 
              stratégique pour nos interventions de <strong>dépannage informatique</strong>. Que vous 
              soyez un particulier résidant dans le centre-ville ou dans les quartiers résidentiels, 
              ou une entreprise installée dans la zone d&apos;activités, nous intervenons rapidement.
            </p>
            <p>
              Notre technicien, basé localement depuis 2018, connaît parfaitement Domont et ses environs. 
              Cette proximité nous permet de garantir des <strong>interventions rapides</strong>, 
              généralement dans l&apos;heure suivant votre appel.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Services informatiques à Domont
            </h3>
            <ul>
              <li><strong>Dépannage à domicile</strong> : nous nous déplaçons chez vous</li>
              <li><strong>Réparation PC et Mac</strong> : diagnostic et réparation sur place</li>
              <li><strong>Suppression de virus</strong> : nettoyage complet de votre système</li>
              <li><strong>Récupération de données</strong> : sur disques durs endommagés</li>
              <li><strong>Installation et configuration</strong> : Windows, logiciels, périphériques</li>
              <li><strong>Assistance aux entreprises</strong> : maintenance informatique régulière</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Pourquoi choisir un technicien local à Domont ?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              {[
                { icon: Clock, title: "Intervention rapide", text: "Sur place en moins d'1h" },
                { icon: MapPin, title: "Connaissance locale", text: "Basé à Domont depuis 2018" },
                { icon: Shield, title: "Confiance", text: "Vos voisins nous font confiance" },
                { icon: Award, title: "Expertise", text: "Technicien certifié Microsoft" }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0f4c75] to-[#1b6ca8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Besoin d&apos;un dépannage informatique à Domont ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Appelez maintenant • Diagnostic gratuit • Intervention rapide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0123456789">
              <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 text-lg px-8 py-6 gap-2 font-bold">
                <Phone className="h-5 w-5" />
                01 23 45 67 89
              </Button>
            </a>
            <Link href="/reservation">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Réserver en ligne
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


