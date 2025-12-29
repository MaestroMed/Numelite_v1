import { Metadata } from "next"
import Link from "next/link"
import { Mail, Lock, ArrowRight, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Connexion | Numelite",
  description: "Connectez-vous à votre espace client Numelite.",
}

export default function ConnexionPage() {
  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/30 py-12">
      <div className="w-full max-w-md px-6">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <CardTitle className="text-2xl">Connexion</CardTitle>
            <CardDescription>
              Accédez à votre espace client Numelite
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link 
                    href="/mot-de-passe-oublie" 
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Oublié ?
                  </Link>
                </div>
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
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Se souvenir de moi
                </Label>
              </div>

              <Button type="submit" className="w-full gap-2">
                Se connecter
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>

            <p className="text-center text-sm text-slate-600">
              Pas encore de compte ?{" "}
              <Link href="/inscription" className="text-blue-600 font-medium hover:underline">
                Créer un compte
              </Link>
            </p>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-slate-500 mt-6">
          En vous connectant, vous acceptez nos{" "}
          <Link href="/cgu" className="text-blue-600 hover:underline">CGU</Link>
          {" "}et notre{" "}
          <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">
            politique de confidentialité
          </Link>
        </p>
      </div>
    </section>
  )
}


