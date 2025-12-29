import { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Contact | Numelite - Dépannage Informatique & Sites Web",
  description: "Contactez Numelite pour vos besoins en dépannage informatique ou création de site web. Réponse rapide garantie. Île-de-France.",
}

const contactMethods = [
  {
    icon: Phone,
    title: "Téléphone",
    value: "01 23 45 67 89",
    href: "tel:+33123456789",
    description: "Lun-Ven: 9h-19h | Sam: 10h-17h",
    color: "from-emerald-500 to-green-400"
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@numelite.fr",
    href: "mailto:contact@numelite.fr",
    description: "Réponse sous 24h",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Discuter maintenant",
    href: "https://wa.me/33612345678",
    description: "Réponse instantanée",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: MapPin,
    title: "Zone d'intervention",
    value: "Paris & Île-de-France",
    href: "/zones",
    description: "Déplacement gratuit",
    color: "from-purple-500 to-pink-400"
  }
]

export default function ContactPage() {
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
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">Contact</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Contactez-<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">nous</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Une question ? Un projet ? Nous sommes là pour vous aider. 
            Réponse garantie sous 24h.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-colors h-full group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <method.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1 text-white">{method.title}</h3>
                    <p className="text-blue-400 font-medium mb-1">{method.value}</p>
                    <p className="text-sm text-slate-500">{method.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Envoyez-nous un message</h2>
              
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-300">Prénom *</Label>
                        <Input 
                          placeholder="Jean" 
                          required 
                          className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-300">Nom *</Label>
                        <Input 
                          placeholder="Dupont" 
                          required 
                          className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Email *</Label>
                      <Input 
                        type="email" 
                        placeholder="jean@exemple.fr" 
                        required 
                        className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Téléphone</Label>
                      <Input 
                        type="tel" 
                        placeholder="06 12 34 56 78" 
                        className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Sujet *</Label>
                      <select 
                        className="flex h-12 w-full rounded-xl border-2 border-white/20 bg-white/5 px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                        required
                      >
                        <option value="" className="bg-slate-800">Sélectionnez un sujet</option>
                        <option value="depannage" className="bg-slate-800">Dépannage informatique</option>
                        <option value="site-vitrine" className="bg-slate-800">Création site vitrine</option>
                        <option value="site-ecommerce" className="bg-slate-800">Création site e-commerce</option>
                        <option value="maintenance" className="bg-slate-800">Maintenance</option>
                        <option value="devis" className="bg-slate-800">Demande de devis</option>
                        <option value="autre" className="bg-slate-800">Autre</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Message *</Label>
                      <Textarea 
                        placeholder="Décrivez votre projet ou votre problème..."
                        className="min-h-[150px] bg-white/5 border-white/20 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="privacy" required className="mt-1" />
                      <Label htmlFor="privacy" className="text-sm text-slate-400 font-normal">
                        J&apos;accepte que mes données soient traitées conformément à la{" "}
                        <Link href="/politique-confidentialite" className="text-blue-400 hover:underline">
                          politique de confidentialité
                        </Link>
                        . *
                      </Label>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="newsletter" className="mt-1" />
                      <Label htmlFor="newsletter" className="text-sm text-slate-400 font-normal">
                        Je souhaite recevoir les actualités et offres de Numelite
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2 bg-gradient-to-r from-blue-600 to-cyan-500">
                      <Send className="h-5 w-5" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Informations pratiques</h2>

              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-white">
                    <Clock className="h-5 w-5 text-blue-400" />
                    Horaires d&apos;ouverture
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Lundi - Vendredi</span>
                      <span className="font-medium text-white">9h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Samedi</span>
                      <span className="font-medium text-white">10h00 - 17h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Dimanche</span>
                      <span className="font-medium text-slate-500">Fermé (urgences possibles)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-white">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    Zone d&apos;intervention
                  </h3>
                  <p className="text-slate-400 mb-4">
                    Nous intervenons dans tout Paris et l&apos;Île-de-France :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Paris', 'Hauts-de-Seine (92)', 'Seine-Saint-Denis (93)', 'Val-de-Marne (94)', 'Yvelines (78)', 'Essonne (91)'].map((zone) => (
                      <span key={zone} className="px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300">
                        {zone}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-white">Pourquoi nous choisir ?</h3>
                  <ul className="space-y-3">
                    {[
                      "Réponse sous 24h garantie",
                      "Devis gratuit et sans engagement",
                      "Intervention rapide en Île-de-France",
                      "Garantie satisfaction",
                      "Tarifs transparents"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick CTA */}
              <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border-blue-500/30">
                <CardContent className="p-6 text-center">
                  <Zap className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-white">Besoin d&apos;aide urgente ?</h3>
                  <p className="text-slate-400 mb-4">Appelez-nous directement</p>
                  <a href="tel:+33123456789">
                    <Button className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-500">
                      <Phone className="h-5 w-5" />
                      01 23 45 67 89
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-[#0a0d10] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500">Carte Google Maps</p>
            <p className="text-sm text-slate-600">Paris & Île-de-France</p>
          </div>
        </div>
      </section>
    </div>
  )
}
