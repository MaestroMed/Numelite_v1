import { Metadata } from "next"
import Link from "next/link"
import { Mail, ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Mot de passe oublié | Numelite",
  description: "Réinitialisez votre mot de passe Numelite.",
}

export default function MotDePasseOubliePage() {
  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/30 py-12">
      <div className="w-full max-w-md px-6">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-amber-600" />
            </div>
            <CardTitle className="text-2xl">Mot de passe oublié ?</CardTitle>
            <CardDescription>
              Entrez votre email pour recevoir un lien de réinitialisation
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
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

              <Button type="submit" className="w-full gap-2">
                <Send className="h-5 w-5" />
                Envoyer le lien
              </Button>
            </form>

            <Link 
              href="/connexion" 
              className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à la connexion
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


