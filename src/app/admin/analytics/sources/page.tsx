import { Globe, Search, Share2, Mail, ExternalLink, TrendingUp, TrendingDown, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const trafficSources = [
  { 
    name: "Google (Organic)", 
    type: "organic",
    visitors: 1250, 
    sessions: 1680, 
    bounceRate: 42, 
    conversions: 52, 
    trend: 15,
    icon: Search
  },
  { 
    name: "Google Ads", 
    type: "paid",
    visitors: 820, 
    sessions: 950, 
    bounceRate: 38, 
    conversions: 41, 
    trend: 28,
    icon: Globe
  },
  { 
    name: "Direct", 
    type: "direct",
    visitors: 450, 
    sessions: 520, 
    bounceRate: 35, 
    conversions: 18, 
    trend: 5,
    icon: ExternalLink
  },
  { 
    name: "Facebook", 
    type: "social",
    visitors: 180, 
    sessions: 210, 
    bounceRate: 55, 
    conversions: 8, 
    trend: -12,
    icon: Share2
  },
  { 
    name: "Email", 
    type: "email",
    visitors: 120, 
    sessions: 145, 
    bounceRate: 28, 
    conversions: 12, 
    trend: 8,
    icon: Mail
  },
  { 
    name: "LinkedIn", 
    type: "social",
    visitors: 95, 
    sessions: 110, 
    bounceRate: 48, 
    conversions: 4, 
    trend: 22,
    icon: Share2
  }
]

const campaigns = [
  { name: "Dépannage Hiver 2025", source: "Google Ads", clicks: 2450, conversions: 89, cpc: 1.25, cost: 3062, roi: 245 },
  { name: "Création Site - PME", source: "Google Ads", clicks: 890, conversions: 12, cpc: 2.80, cost: 2492, roi: 180 },
  { name: "Remarketing", source: "Google Ads", clicks: 1200, conversions: 35, cpc: 0.85, cost: 1020, roi: 320 },
  { name: "Newsletter Janvier", source: "Email", clicks: 450, conversions: 18, cpc: 0, cost: 0, roi: "∞" }
]

export default function AdminSourcesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Sources de Trafic</h1>
          <p className="text-[#8899aa]">Analysez d&apos;où viennent vos visiteurs</p>
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

      {/* Overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
          <CardContent className="p-6">
            <p className="text-blue-100 text-sm">Organic</p>
            <p className="text-3xl font-bold">43%</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-600 to-pink-500 text-white">
          <CardContent className="p-6">
            <p className="text-purple-100 text-sm">Paid</p>
            <p className="text-3xl font-bold">28%</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-slate-600 to-slate-700 text-white">
          <CardContent className="p-6">
            <p className="text-slate-300 text-sm">Direct</p>
            <p className="text-3xl font-bold">15%</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-500 to-orange-500 text-white">
          <CardContent className="p-6">
            <p className="text-amber-100 text-sm">Social</p>
            <p className="text-3xl font-bold">10%</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-emerald-600 to-green-500 text-white">
          <CardContent className="p-6">
            <p className="text-emerald-100 text-sm">Email</p>
            <p className="text-3xl font-bold">4%</p>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources Table */}
      <Card>
        <CardHeader>
          <CardTitle>Détail par source</CardTitle>
          <CardDescription>Performance de chaque canal d&apos;acquisition</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Source</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Visiteurs</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Sessions</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Taux rebond</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Conversions</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Tendance</th>
                </tr>
              </thead>
              <tbody>
                {trafficSources.map((source) => (
                  <tr key={source.name} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          source.type === 'organic' ? 'bg-blue-100' :
                          source.type === 'paid' ? 'bg-purple-100' :
                          source.type === 'direct' ? 'bg-slate-100' :
                          source.type === 'social' ? 'bg-amber-100' :
                          'bg-emerald-100'
                        }`}>
                          <source.icon className={`h-4 w-4 ${
                            source.type === 'organic' ? 'text-blue-600' :
                            source.type === 'paid' ? 'text-purple-600' :
                            source.type === 'direct' ? 'text-slate-600' :
                            source.type === 'social' ? 'text-amber-600' :
                            'text-emerald-600'
                          }`} />
                        </div>
                        <span className="font-medium">{source.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">{source.visitors.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right">{source.sessions.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right">{source.bounceRate}%</td>
                    <td className="py-4 px-4 text-right font-medium text-emerald-600">{source.conversions}</td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {source.trend > 0 ? (
                          <>
                            <TrendingUp className="h-4 w-4 text-emerald-600" />
                            <span className="text-emerald-600">+{source.trend}%</span>
                          </>
                        ) : (
                          <>
                            <TrendingDown className="h-4 w-4 text-red-600" />
                            <span className="text-red-600">{source.trend}%</span>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Performance des campagnes</CardTitle>
          <CardDescription>Analyse détaillée de vos campagnes marketing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Campagne</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Source</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Clics</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Conv.</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">CPC</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Coût</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">ROI</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.name} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-medium">{campaign.name}</td>
                    <td className="py-4 px-4">
                      <Badge variant="outline">{campaign.source}</Badge>
                    </td>
                    <td className="py-4 px-4 text-right">{campaign.clicks.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right">{campaign.conversions}</td>
                    <td className="py-4 px-4 text-right">{campaign.cpc > 0 ? `${campaign.cpc}€` : '-'}</td>
                    <td className="py-4 px-4 text-right">{campaign.cost > 0 ? `${campaign.cost}€` : '-'}</td>
                    <td className="py-4 px-4 text-right">
                      <Badge className="bg-emerald-100 text-emerald-700">
                        {typeof campaign.roi === 'number' ? `+${campaign.roi}%` : campaign.roi}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
