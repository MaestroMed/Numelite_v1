import { PlusCircle, Edit, Trash2, Percent, Calendar, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

const promotions = [
  {
    id: "PROMO001",
    name: "Promo Hiver 2025",
    description: "-20% sur tous les dépannages",
    type: "percentage",
    value: 20,
    appliesTo: "Dépannage",
    startDate: "2025-01-01",
    endDate: "2025-02-28",
    active: true,
    usageCount: 45
  },
  {
    id: "PROMO002",
    name: "Pack Création Site",
    description: "Maintenance 3 mois offerte",
    type: "gift",
    value: 0,
    appliesTo: "Création Site",
    startDate: "2025-01-15",
    endDate: "2025-03-31",
    active: true,
    usageCount: 12
  },
  {
    id: "PROMO003",
    name: "Parrainage",
    description: "-30€ pour le parrain et le filleul",
    type: "fixed",
    value: 30,
    appliesTo: "Tous services",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    active: true,
    usageCount: 28
  }
]

export default function AdminPromotionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Promotions</h1>
          <p className="text-[#8899aa]">Gérez les promotions et offres spéciales sur vos services</p>
        </div>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Nouvelle promotion
        </Button>
      </div>

      {/* Active Promotions Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Percent className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Promos actives</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Tag className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Utilisations ce mois</p>
                <p className="text-2xl font-bold">85</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Expire bientôt</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Promotions List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Liste des promotions</CardTitle>
          <Input placeholder="Rechercher une promotion..." className="w-48" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {promotions.map((promo) => (
              <div key={promo.id} className="p-4 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg">{promo.name}</h3>
                      <Badge variant={promo.active ? 'success' : 'secondary'}>
                        {promo.active ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-2">{promo.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-[#8899aa]">
                      <span>📅 {promo.startDate} - {promo.endDate}</span>
                      <span>🎯 {promo.appliesTo}</span>
                      <span>📊 {promo.usageCount} utilisations</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch checked={promo.active} />
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add/Edit Promotion Form */}
      <Card>
        <CardHeader>
          <CardTitle>Créer une promotion</CardTitle>
          <CardDescription>Définissez les paramètres de votre nouvelle promotion</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Nom de la promotion</Label>
            <Input placeholder="Ex: Soldes d'été 2025" />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Décrivez votre promotion..." />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Type de réduction</Label>
              <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200">
                <option value="percentage">Pourcentage</option>
                <option value="fixed">Montant fixe</option>
                <option value="gift">Cadeau</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Valeur</Label>
              <Input type="number" placeholder="20" />
            </div>
            <div className="space-y-2">
              <Label>S&apos;applique à</Label>
              <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200">
                <option value="all">Tous les services</option>
                <option value="depannage">Dépannage</option>
                <option value="creation">Création site</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date de début</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>Date de fin</Label>
              <Input type="date" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="promoActive" defaultChecked={true} />
            <Label htmlFor="promoActive">Activer immédiatement</Label>
          </div>
          <Button>Créer la promotion</Button>
        </CardContent>
      </Card>
    </div>
  )
}

