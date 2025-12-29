import Link from "next/link"
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  DollarSign,
  ShoppingCart
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const mainStats = [
  { name: "Visiteurs", value: "12,456", change: "+18.2%", positive: true, icon: Users },
  { name: "Pages vues", value: "34,567", change: "+12.5%", positive: true, icon: Eye },
  { name: "Taux de rebond", value: "42.3%", change: "-3.2%", positive: true, icon: MousePointer },
  { name: "Durée moyenne", value: "2:35", change: "+0:22", positive: true, icon: Clock },
]

const conversionStats = [
  { name: "Leads générés", value: "156", change: "+24%", icon: Target, color: "from-blue-500 to-cyan-400" },
  { name: "Demandes devis", value: "48", change: "+15%", icon: ShoppingCart, color: "from-emerald-500 to-green-400" },
  { name: "Réservations", value: "32", change: "+8%", icon: Clock, color: "from-orange-500 to-amber-400" },
  { name: "CA attribué", value: "8,450€", change: "+32%", icon: DollarSign, color: "from-purple-500 to-pink-400" },
]

const topPages = [
  { page: "/depannage", views: 3456, percentage: 28 },
  { page: "/creation-site", views: 2345, percentage: 19 },
  { page: "/tarifs", views: 1890, percentage: 15 },
  { page: "/", views: 1567, percentage: 13 },
  { page: "/contact", views: 1234, percentage: 10 },
]

const trafficSources = [
  { source: "Google Ads", visits: 4567, percentage: 37, color: "bg-blue-500" },
  { source: "Organique", visits: 3456, percentage: 28, color: "bg-emerald-500" },
  { source: "Direct", visits: 2345, percentage: 19, color: "bg-purple-500" },
  { source: "Referral", visits: 1234, percentage: 10, color: "bg-orange-500" },
  { source: "Social", visits: 789, percentage: 6, color: "bg-pink-500" },
]

const deviceStats = [
  { device: "Mobile", percentage: 58, icon: Smartphone },
  { device: "Desktop", percentage: 35, icon: Monitor },
  { device: "Tablette", percentage: 7, icon: Monitor },
]

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics</h1>
          <p className="text-[#8899aa]">Analysez les performances de votre site</p>
        </div>
        <div className="flex gap-3">
          <select className="px-3 py-2 border border-white/10 rounded-lg text-sm bg-white/5 text-white">
            <option>7 derniers jours</option>
            <option>30 derniers jours</option>
            <option>Ce mois</option>
            <option>Ce trimestre</option>
            <option>Cette année</option>
          </select>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">Exporter</Button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mainStats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-5 w-5 text-[#8899aa]" />
                <div className={`flex items-center gap-1 text-sm ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stat.positive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-[#8899aa]">{stat.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Trafic sur les 30 derniers jours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg flex items-end justify-around px-4 pb-4">
            {Array.from({ length: 30 }, (_, i) => (
              <div 
                key={i}
                className="w-2 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t"
                style={{ height: `${Math.random() * 80 + 20}%` }}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conversion Stats */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-white">Conversions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {conversionStats.map((stat) => (
            <Card key={stat.name}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-[#8899aa]">{stat.name}</p>
                    <p className="text-xs text-emerald-400">{stat.change}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Pages les plus vues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-[#667788] w-6">{index + 1}</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm truncate text-white">{page.page}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                          style={{ width: `${page.percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#8899aa]">{page.percentage}%</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-white">{page.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Sources de trafic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${source.color}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm text-white">{source.source}</p>
                      <span className="text-sm text-[#8899aa]">{source.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden mt-1">
                      <div 
                        className={`h-full ${source.color} rounded-full`}
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Devices */}
        <Card>
          <CardHeader>
            <CardTitle>Appareils</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {deviceStats.map((device, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <device.icon className="h-6 w-6 text-[#b8c4d0]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-white">{device.device}</p>
                      <span className="font-bold text-white">{device.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                        style={{ width: `${device.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick tip */}
            <div className="mt-6 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <p className="text-sm text-amber-400">
                <strong>💡 Conseil :</strong> 58% de votre trafic est mobile. 
                Assurez-vous que vos pages sont optimisées pour mobile.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
