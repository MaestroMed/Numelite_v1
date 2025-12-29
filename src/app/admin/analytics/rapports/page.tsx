import { FileText, Download, Calendar, Clock, Send, PlusCircle, Trash2, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const reports = [
  {
    id: "RPT001",
    name: "Rapport Mensuel - Janvier 2025",
    type: "mensuel",
    createdAt: "2025-01-31",
    size: "2.4 MB",
    format: "PDF",
    status: "ready"
  },
  {
    id: "RPT002",
    name: "Rapport Conversions - Semaine 3",
    type: "hebdomadaire",
    createdAt: "2025-01-19",
    size: "850 KB",
    format: "PDF",
    status: "ready"
  },
  {
    id: "RPT003",
    name: "Analyse Campagnes Google Ads",
    type: "personnalisé",
    createdAt: "2025-01-15",
    size: "1.8 MB",
    format: "Excel",
    status: "ready"
  },
  {
    id: "RPT004",
    name: "Rapport SEO - Positions",
    type: "mensuel",
    createdAt: "2025-01-10",
    size: "1.2 MB",
    format: "PDF",
    status: "ready"
  }
]

const scheduledReports = [
  { name: "Rapport Hebdomadaire", frequency: "Chaque lundi", recipients: ["admin@numelite.fr"], active: true },
  { name: "Rapport Mensuel Complet", frequency: "1er du mois", recipients: ["admin@numelite.fr", "direction@numelite.fr"], active: true },
  { name: "Alerte Conversions", frequency: "Si taux < 2%", recipients: ["admin@numelite.fr"], active: false }
]

export default function AdminRapportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Rapports</h1>
          <p className="text-[#8899aa]">Générez et programmez des rapports détaillés</p>
        </div>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Nouveau rapport
        </Button>
      </div>

      {/* Quick Generate */}
      <Card>
        <CardHeader>
          <CardTitle>Génération rapide</CardTitle>
          <CardDescription>Créez un rapport personnalisé en quelques clics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Type de rapport</Label>
              <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200">
                <option>Rapport complet</option>
                <option>Trafic & Audience</option>
                <option>Conversions</option>
                <option>Sources de trafic</option>
                <option>Campagnes marketing</option>
                <option>SEO</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Période</Label>
              <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200">
                <option>7 derniers jours</option>
                <option>30 derniers jours</option>
                <option>Ce mois</option>
                <option>Mois précédent</option>
                <option>Ce trimestre</option>
                <option>Personnalisé</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Format</Label>
              <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full gap-2">
                <FileText className="h-4 w-4" />
                Générer
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Rapports générés</CardTitle>
          <Input placeholder="Rechercher..." className="w-48" />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Nom du rapport</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Format</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Taille</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">{report.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline">{report.type}</Badge>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{report.createdAt}</td>
                    <td className="py-4 px-4">
                      <Badge className={
                        report.format === 'PDF' ? 'bg-red-100 text-red-700' :
                        report.format === 'Excel' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-blue-100 text-blue-700'
                      }>
                        {report.format}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-right text-slate-600">{report.size}</td>
                    <td className="py-4 px-4 text-right">
                      <Button variant="ghost" size="sm" className="mr-1">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="mr-1">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="mr-1">
                        <Send className="h-4 w-4" />
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

      {/* Scheduled Reports */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Rapports programmés</CardTitle>
            <CardDescription>Automatisez l&apos;envoi de vos rapports</CardDescription>
          </div>
          <Button variant="outline" className="gap-2">
            <Clock className="h-4 w-4" />
            Programmer
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledReports.map((scheduled, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    scheduled.active ? 'bg-emerald-100' : 'bg-slate-100'
                  }`}>
                    <Clock className={`h-5 w-5 ${scheduled.active ? 'text-emerald-600' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <p className="font-medium">{scheduled.name}</p>
                    <div className="flex items-center gap-2 text-sm text-[#8899aa]">
                      <span>{scheduled.frequency}</span>
                      <span>•</span>
                      <span>{scheduled.recipients.join(", ")}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Switch checked={scheduled.active} />
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
