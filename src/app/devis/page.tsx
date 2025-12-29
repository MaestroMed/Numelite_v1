import { Metadata } from "next"
import Link from "next/link"
import {
  Globe,
  Palette,
  ShoppingCart,
  Code,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  User,
  Building
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Demander un devis | Création de site web | Numelite",
  description: "Obtenez un devis gratuit et personnalisé pour votre projet de site web en 48h.",
}

const projectTypes = [
  { id: "vitrine", name: "Site Vitrine", icon: Globe, startPrice: 990, description: "Présenter votre activité" },
  { id: "pro", name: "Site Pro", icon: Palette, startPrice: 1990, description: "Site avec blog et SEO avancé" },
  { id: "ecommerce", name: "E-commerce", icon: ShoppingCart, startPrice: 3490, description: "Vendre en ligne" },
  { id: "surmesure", name: "Sur-mesure", icon: Code, startPrice: null, description: "Projet spécifique" },
]

const features = [
  "Design personnalisé",
  "Blog / Actualités",
  "Réservation en ligne",
  "Formulaires avancés",
  "Galerie / Portfolio",
  "Espace membre",
  "Multilingue",
  "Chat en direct",
  "Newsletter",
  "Intégration CRM",
]

export default function DevisPage() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4">Devis gratuit</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Demandez votre <span className="gradient-text">devis</span>
          </h1>
          <p className="text-lg text-slate-600">
            Réponse personnalisée sous 48h
          </p>
        </div>

        <form className="space-y-8">
          {/* Project Type */}
          <Card>
            <CardHeader>
              <CardTitle>1. Type de projet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <label
                    key={type.id}
                    className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50"
                  >
                    <input 
                      type="radio" 
                      name="projectType" 
                      value={type.id}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <type.icon className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">{type.name}</span>
                      </div>
                      <p className="text-sm text-slate-500">{type.description}</p>
                      {type.startPrice && (
                        <p className="text-sm font-medium text-blue-600 mt-1">
                          À partir de {type.startPrice}€
                        </p>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>2. Fonctionnalités souhaitées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50"
                  >
                    <Checkbox />
                    <span>{feature}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Details */}
          <Card>
            <CardHeader>
              <CardTitle>3. Détails du projet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Nombre de pages estimé</Label>
                <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-blue-500">
                  <option>1-5 pages</option>
                  <option>6-10 pages</option>
                  <option>11-20 pages</option>
                  <option>Plus de 20 pages</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Avez-vous déjà un site web ?</Label>
                <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-blue-500">
                  <option>Non, c&apos;est mon premier site</option>
                  <option>Oui, je veux le refondre</option>
                  <option>Oui, mais je veux repartir de zéro</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Budget approximatif</Label>
                <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-blue-500">
                  <option>Moins de 1 000€</option>
                  <option>1 000€ - 2 000€</option>
                  <option>2 000€ - 5 000€</option>
                  <option>Plus de 5 000€</option>
                  <option>Je ne sais pas encore</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Délai souhaité</Label>
                <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-blue-500">
                  <option>Urgent (moins de 2 semaines)</option>
                  <option>1 mois</option>
                  <option>2-3 mois</option>
                  <option>Pas de délai précis</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Décrivez votre projet</Label>
                <Textarea 
                  placeholder="Parlez-nous de votre activité, vos objectifs, vos inspirations..."
                  className="min-h-[150px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>4. Vos coordonnées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input id="firstName" placeholder="Jean" className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input id="lastName" placeholder="Dupont" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Entreprise (optionnel)</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input id="company" placeholder="Ma Société" className="pl-10" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input id="email" type="email" placeholder="vous@exemple.fr" className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input id="phone" type="tel" placeholder="06 12 34 56 78" className="pl-10" required />
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-2">
                  <Checkbox id="privacy" required className="mt-0.5" />
                  <Label htmlFor="privacy" className="text-sm font-normal">
                    J&apos;accepte que mes données soient traitées conformément à la{" "}
                    <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">
                      politique de confidentialité
                    </Link> *
                  </Label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="callback" className="mt-0.5" />
                  <Label htmlFor="callback" className="text-sm font-normal">
                    Je souhaite être rappelé(e) pour discuter du projet
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-center sm:text-left">
              <p className="font-semibold">Devis 100% gratuit et sans engagement</p>
              <p className="text-sm text-slate-500">Réponse personnalisée sous 48h</p>
            </div>
            <Button size="lg" type="submit" className="w-full sm:w-auto gap-2">
              Envoyer ma demande
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </form>

        {/* Trust */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          {[
            "100% gratuit",
            "Sans engagement",
            "Réponse sous 48h",
            "+100 sites créés"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


