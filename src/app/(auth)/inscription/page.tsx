import { Metadata } from "next"
import Link from "next/link"
import { Mail, Lock, User, Phone, ArrowRight, Chrome, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Inscription | Numelite",
  description: "Créez votre compte Numelite pour accéder à votre espace client.",
}

const benefits = [
  "Suivi de vos commandes en temps réel",
  "Historique de vos interventions",
  "Factures téléchargeables",
  "Support prioritaire",
  "Offres exclusives"
]

export default function InscriptionPage() {
  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/30 py-12">
      <div className="w-full max-w-5xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Benefits */}
          <div className="hidden lg:block">
            <h1 className="text-3xl font-bold mb-6">
              Rejoignez <span className="gradient-text">Numelite</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Créez votre compte pour profiter de tous les avantages de notre espace client.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Créer un compte</CardTitle>
              <CardDescription>
                Inscrivez-vous en quelques secondes
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Social Login */}
              <Button variant="outline" className="w-full gap-2" type="button">
                <Chrome className="h-5 w-5" />
                Continuer avec Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500">ou</span>
                </div>
              </div>

              {/* Email Form */}
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input 
                        id="firstName" 
                        placeholder="Jean" 
                        className="pl-10"
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Dupont" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="vous@exemple.fr" 
                      className="pl-10"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="06 12 34 56 78" 
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10"
                      required 
                    />
                  </div>
                  <p className="text-xs text-slate-500">Minimum 8 caractères</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" required className="mt-0.5" />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      J&apos;accepte les{" "}
                      <Link href="/cgu" className="text-blue-600 hover:underline">CGU</Link>
                      {" "}et la{" "}
                      <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">
                        politique de confidentialité
                      </Link> *
                    </Label>
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox id="newsletter" className="mt-0.5" />
                    <Label htmlFor="newsletter" className="text-sm font-normal">
                      Je souhaite recevoir les actualités et offres de Numelite
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full gap-2">
                  Créer mon compte
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>

              <p className="text-center text-sm text-slate-600">
                Déjà un compte ?{" "}
                <Link href="/connexion" className="text-blue-600 font-medium hover:underline">
                  Se connecter
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


