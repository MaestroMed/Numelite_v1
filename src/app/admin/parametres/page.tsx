import {
  Settings,
  Building,
  CreditCard,
  Mail,
  Bell,
  Users,
  Link2,
  FileText,
  Shield,
  Database,
  Globe,
  Palette
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function AdminParametresPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Paramètres</h1>
        <p className="text-[#8899aa]">Configurez votre plateforme Numelite</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 h-auto p-1 bg-white/5">
          <TabsTrigger value="general" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Building className="h-4 w-4" />
            Général
          </TabsTrigger>
          <TabsTrigger value="paiement" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <CreditCard className="h-4 w-4" />
            Paiement
          </TabsTrigger>
          <TabsTrigger value="emails" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Mail className="h-4 w-4" />
            Emails
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="utilisateurs" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Users className="h-4 w-4" />
            Utilisateurs
          </TabsTrigger>
          <TabsTrigger value="integrations" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Link2 className="h-4 w-4" />
            Intégrations
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations de l&apos;entreprise</CardTitle>
              <CardDescription>Ces informations apparaissent sur vos documents (devis, factures...)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">Nom de l&apos;entreprise</Label>
                  <Input defaultValue="Numelite" className="bg-white/5 border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">SIRET</Label>
                  <Input placeholder="123 456 789 00012" className="bg-white/5 border-white/10 text-white placeholder:text-[#667788]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">Email de contact</Label>
                  <Input type="email" defaultValue="contact@numelite.fr" className="bg-white/5 border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">Téléphone</Label>
                  <Input type="tel" defaultValue="01 23 45 67 89" className="bg-white/5 border-white/10 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[#b8c4d0]">Adresse</Label>
                <Textarea placeholder="123 rue de Paris, 75001 Paris" className="bg-white/5 border-white/10 text-white placeholder:text-[#667788]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">N° TVA intracommunautaire</Label>
                  <Input placeholder="FR12345678901" className="bg-white/5 border-white/10 text-white placeholder:text-[#667788]" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">Forme juridique</Label>
                  <select className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white">
                    <option>SARL</option>
                    <option>SAS</option>
                    <option>Auto-entrepreneur</option>
                    <option>EURL</option>
                  </select>
                </div>
              </div>
              <Button>Enregistrer</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Apparence</CardTitle>
              <CardDescription>Personnalisez l&apos;apparence de votre site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">Couleur principale</Label>
                  <div className="flex items-center gap-2">
                    <input type="color" defaultValue="#2563eb" className="w-12 h-12 rounded-lg border-0 bg-white/10" />
                    <Input defaultValue="#2563eb" className="font-mono bg-white/5 border-white/10 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">Couleur secondaire</Label>
                  <div className="flex items-center gap-2">
                    <input type="color" defaultValue="#06b6d4" className="w-12 h-12 rounded-lg border-0 bg-white/10" />
                    <Input defaultValue="#06b6d4" className="font-mono bg-white/5 border-white/10 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[#b8c4d0]">Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                    N
                  </div>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">Modifier le logo</Button>
                </div>
              </div>
              <Button>Enregistrer</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="paiement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stripe</CardTitle>
              <CardDescription>Configuration de votre compte Stripe pour les paiements en ligne</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-emerald-500/10 rounded-xl flex items-center gap-4 border border-emerald-500/20">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-emerald-400">Compte connecté</p>
                  <p className="text-sm text-emerald-400/80">Votre compte Stripe est correctement configuré</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[#b8c4d0]">Clé publique (Publishable Key)</Label>
                <Input type="password" defaultValue="pk_live_xxxxxxxxxxxx" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <Label className="text-[#b8c4d0]">Clé secrète (Secret Key)</Label>
                <Input type="password" defaultValue="sk_live_xxxxxxxxxxxx" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <Label className="text-[#b8c4d0]">Webhook Secret</Label>
                <Input type="password" defaultValue="whsec_xxxxxxxxxxxx" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div>
                  <p className="font-medium text-white">Mode test</p>
                  <p className="text-sm text-[#8899aa]">Utiliser les clés de test Stripe</p>
                </div>
                <Switch />
              </div>
              <Button>Enregistrer</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Moyens de paiement</CardTitle>
              <CardDescription>Configurez les moyens de paiement acceptés</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Carte bancaire", enabled: true },
                { name: "Virement bancaire", enabled: true },
                { name: "Chèque", enabled: false },
                { name: "Espèces (intervention)", enabled: true },
              ].map((method) => (
                <div key={method.name} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="font-medium text-white">{method.name}</span>
                  <Switch defaultChecked={method.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="emails" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuration Email</CardTitle>
              <CardDescription>Paramètres d&apos;envoi des emails transactionnels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-[#b8c4d0]">Service d&apos;envoi</Label>
                <select className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white">
                  <option>Resend</option>
                  <option>SendGrid</option>
                  <option>Mailgun</option>
                  <option>SMTP personnalisé</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label className="text-[#b8c4d0]">Clé API Resend</Label>
                <Input type="password" defaultValue="re_xxxxxxxxxxxx" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">Email expéditeur</Label>
                  <Input type="email" defaultValue="contact@numelite.fr" className="bg-white/5 border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#b8c4d0]">Nom expéditeur</Label>
                  <Input defaultValue="Numelite" className="bg-white/5 border-white/10 text-white" />
                </div>
              </div>
              <Button>Enregistrer</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notifications admin</CardTitle>
              <CardDescription>Choisissez quand recevoir des notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Nouveau lead", description: "Quand un nouveau prospect remplit un formulaire", enabled: true },
                { name: "Nouvelle commande", description: "Quand une commande est passée", enabled: true },
                { name: "Paiement reçu", description: "Quand un paiement est confirmé", enabled: true },
                { name: "Message client", description: "Quand un client envoie un message", enabled: true },
                { name: "Avis client", description: "Quand un client laisse un avis", enabled: false },
                { name: "Rapport quotidien", description: "Résumé quotidien par email", enabled: false },
              ].map((notif) => (
                <div key={notif.name} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="font-medium text-white">{notif.name}</p>
                    <p className="text-sm text-[#8899aa]">{notif.description}</p>
                  </div>
                  <Switch defaultChecked={notif.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users */}
        <TabsContent value="utilisateurs" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Utilisateurs admin</CardTitle>
                <CardDescription>Gérez les accès au back-office</CardDescription>
              </div>
              <Button className="gap-2">
                <Users className="h-4 w-4" />
                Ajouter
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Admin", email: "admin@numelite.fr", role: "Super Admin", lastLogin: "Il y a 5 min" },
                  { name: "Thomas", email: "thomas@numelite.fr", role: "Technicien", lastLogin: "Il y a 2h" },
                  { name: "Sophie", email: "sophie@numelite.fr", role: "Commercial", lastLogin: "Hier" },
                ].map((user) => (
                  <div key={user.email} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="text-sm text-[#8899aa]">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">{user.role}</p>
                        <p className="text-xs text-[#8899aa]">{user.lastLogin}</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">Modifier</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Intégrations</CardTitle>
              <CardDescription>Connectez vos outils tiers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Google Analytics", status: "connected", icon: Globe },
                  { name: "Google Tag Manager", status: "connected", icon: Globe },
                  { name: "Google Ads", status: "connected", icon: Globe },
                  { name: "Facebook Pixel", status: "disconnected", icon: Globe },
                  { name: "Calendly", status: "connected", icon: Globe },
                  { name: "WhatsApp Business", status: "connected", icon: Globe },
                ].map((integration) => (
                  <div key={integration.name} className="p-4 border border-white/10 rounded-xl bg-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <integration.icon className="h-5 w-5 text-[#b8c4d0]" />
                        </div>
                        <span className="font-medium text-white">{integration.name}</span>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        integration.status === 'connected' ? 'bg-emerald-500' : 'bg-[#667788]'
                      }`} />
                    </div>
                    <Button 
                      variant={integration.status === 'connected' ? 'outline' : 'default'}
                      className={`w-full ${integration.status === 'connected' ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
                      size="sm"
                    >
                      {integration.status === 'connected' ? 'Configurer' : 'Connecter'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
