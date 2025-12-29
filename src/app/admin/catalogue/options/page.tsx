import { PlusCircle, Edit, Trash2, Search as SearchIcon, Settings2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

const options = [
  {
    id: "OPT001",
    name: "Urgence (- 2h)",
    description: "Intervention en moins de 2 heures",
    priceModifier: "+50%",
    type: "percentage",
    active: true
  },
  {
    id: "OPT002",
    name: "Week-end",
    description: "Intervention le samedi ou dimanche",
    priceModifier: "+30€",
    type: "fixed",
    active: true
  },
  {
    id: "OPT003",
    name: "Soir (après 19h)",
    description: "Intervention en soirée après 19h",
    priceModifier: "+20€",
    type: "fixed",
    active: true
  },
  {
    id: "OPT004",
    name: "Garantie étendue",
    description: "Extension de garantie à 12 mois",
    priceModifier: "+29€",
    type: "fixed",
    active: true
  },
  {
    id: "OPT005",
    name: "Formation utilisateur",
    description: "1h de formation incluse",
    priceModifier: "+49€",
    type: "fixed",
    active: false
  }
]

export default function AdminOptionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Options de Services</h1>
          <p className="text-[#8899aa]">Gérez les options supplémentaires proposées avec vos services</p>
        </div>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Ajouter une option
        </Button>
      </div>

      {/* Options List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Liste des options</CardTitle>
          <Input placeholder="Rechercher une option..." className="w-48" />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Nom de l&apos;option</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Description</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Modificateur de prix</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Active</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {options.map((option) => (
                  <tr key={option.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 font-medium">{option.name}</td>
                    <td className="py-3 px-4 text-slate-600">{option.description}</td>
                    <td className="py-3 px-4 text-right">
                      <Badge variant={option.type === 'percentage' ? 'default' : 'secondary'}>
                        {option.priceModifier}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Switch checked={option.active} />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm" className="mr-2">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add/Edit Option Form */}
      <Card>
        <CardHeader>
          <CardTitle>Détails de l&apos;option</CardTitle>
          <CardDescription>Modifier une option de service</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="optionName">Nom de l&apos;option</Label>
            <Input id="optionName" defaultValue="Urgence (- 2h)" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="optionDescription">Description</Label>
            <Textarea id="optionDescription" defaultValue="Intervention en moins de 2 heures" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="optionType">Type de modificateur</Label>
              <select id="optionType" className="w-full h-12 px-4 rounded-xl border-2 border-slate-200">
                <option value="percentage">Pourcentage</option>
                <option value="fixed">Montant fixe</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="optionValue">Valeur</Label>
              <Input id="optionValue" defaultValue="50" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="optionActive" defaultChecked={true} />
            <Label htmlFor="optionActive">Option active</Label>
          </div>
          <Button>Enregistrer les modifications</Button>
        </CardContent>
      </Card>
    </div>
  )
}

