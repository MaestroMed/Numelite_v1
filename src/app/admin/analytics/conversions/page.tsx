import { TrendingUp, TrendingDown, Target, DollarSign, Users, MousePointer, Calendar, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const conversionData = {
  globalRate: 4.2,
  previousRate: 3.8,
  totalConversions: 127,
  totalValue: 12450,
  goals: [
    { name: "Formulaire contact", conversions: 45, rate: 8.5, value: 4500 },
    { name: "Appel téléphonique", conversions: 32, rate: 3.2, value: 3200 },
    { name: "Demande de devis", conversions: 28, rate: 5.1, value: 2800 },
    { name: "Réservation en ligne", conversions: 15, rate: 2.8, value: 1500 },
    { name: "WhatsApp", conversions: 7, rate: 1.5, value: 450 }
  ],
  funnel: [
    { stage: "Visiteurs", count: 3024, rate: 100 },
    { stage: "Pages vues > 2", count: 1512, rate: 50 },
    { stage: "Temps > 2 min", count: 756, rate: 25 },
    { stage: "Contact initié", count: 226, rate: 7.5 },
    { stage: "Conversion", count: 127, rate: 4.2 }
  ]
}

export default function AdminConversionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Suivi des Conversions</h1>
          <p className="text-[#8899aa]">Analysez les performances de conversion de votre site</p>
        </div>
        <div className="flex gap-2">
          <select className="h-10 px-4 rounded-xl border-2 border-slate-200 text-sm">
            <option>7 derniers jours</option>
            <option>30 derniers jours</option>
            <option>Ce mois</option>
            <option>Ce trimestre</option>
          </select>
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Personnalisé
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="h-8 w-8 text-blue-600" />
              <Badge className="bg-emerald-100 text-emerald-700 gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +10.5%
              </Badge>
            </div>
            <p className="text-sm text-[#8899aa]">Taux de conversion</p>
            <p className="text-3xl font-bold">{conversionData.globalRate}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <MousePointer className="h-8 w-8 text-purple-600" />
              <Badge className="bg-emerald-100 text-emerald-700 gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +15%
              </Badge>
            </div>
            <p className="text-sm text-[#8899aa]">Conversions totales</p>
            <p className="text-3xl font-bold">{conversionData.totalConversions}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-8 w-8 text-emerald-600" />
              <Badge className="bg-emerald-100 text-emerald-700 gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +22%
              </Badge>
            </div>
            <p className="text-sm text-[#8899aa]">Valeur des conversions</p>
            <p className="text-3xl font-bold">{conversionData.totalValue.toLocaleString()}€</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <p className="text-sm text-[#8899aa]">Coût par conversion</p>
            <p className="text-3xl font-bold">12€</p>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Objectifs de conversion</CardTitle>
          <CardDescription>Performance de chaque objectif configuré</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Objectif</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Conversions</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Taux</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Valeur</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Tendance</th>
                </tr>
              </thead>
              <tbody>
                {conversionData.goals.map((goal, index) => (
                  <tr key={goal.name} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-medium">{goal.name}</td>
                    <td className="py-4 px-4 text-right">{goal.conversions}</td>
                    <td className="py-4 px-4 text-right">{goal.rate}%</td>
                    <td className="py-4 px-4 text-right font-medium text-emerald-600">{goal.value}€</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        {index % 2 === 0 ? (
                          <TrendingUp className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        <span className={index % 2 === 0 ? "text-emerald-600" : "text-red-600"}>
                          {index % 2 === 0 ? "+12%" : "-5%"}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Conversion Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Entonnoir de conversion</CardTitle>
          <CardDescription>Visualisation du parcours utilisateur</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionData.funnel.map((stage, index) => (
              <div key={stage.stage} className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium">{stage.stage}</div>
                <div className="flex-1 relative h-10">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg flex items-center justify-end pr-3"
                    style={{ width: `${stage.rate}%` }}
                  >
                    <span className="text-white text-sm font-medium">{stage.count.toLocaleString()}</span>
                  </div>
                </div>
                <div className="w-16 text-right text-sm text-[#8899aa]">
                  {stage.rate}%
                </div>
                {index > 0 && (
                  <div className="w-20 text-right text-sm text-red-500">
                    -{Math.round((1 - stage.rate / conversionData.funnel[index - 1].rate) * 100)}%
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
