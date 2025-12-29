import Link from "next/link"
import {
  Users,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointer,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  MoreHorizontal
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    name: "Chiffre d'affaires",
    value: "0€",
    change: "0%",
    changeType: "neutral" as const,
    icon: DollarSign,
    color: "from-emerald-500 to-green-400"
  },
  {
    name: "Nouveaux leads",
    value: "0",
    change: "0%",
    changeType: "neutral" as const,
    icon: Users,
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Commandes",
    value: "0",
    change: "0%",
    changeType: "neutral" as const,
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-400"
  },
  {
    name: "Taux de conversion",
    value: "0%",
    change: "0%",
    changeType: "neutral" as const,
    icon: TrendingUp,
    color: "from-orange-500 to-amber-400"
  },
]

// Empty arrays - will be populated from Supabase
const recentLeads: { id: number; name: string; email: string; source: string; status: string; date: string }[] = []

const recentOrders: { id: string; client: string; service: string; amount: number; status: string }[] = []

const upcomingTasks: { id: number; title: string; time: string; type: string }[] = []

const analyticsPreview = {
  visitors: 0,
  pageViews: 0,
  bounceRate: 0,
  avgDuration: "0:00"
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-[#8899aa]">Vue d&apos;ensemble de votre activité</p>
        </div>
        <div className="flex gap-3">
          <select className="px-3 py-2 border border-white/10 rounded-lg text-sm bg-white/5 text-white">
            <option>Aujourd&apos;hui</option>
            <option>Cette semaine</option>
            <option>Ce mois</option>
            <option>Cette année</option>
          </select>
          <Button className="gap-2">
            <Calendar className="h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#8899aa]">{stat.name}</p>
                  <p className="text-2xl font-bold mt-1 text-white">{stat.value}</p>
                  <div className={`flex items-center gap-1 mt-1 text-sm ${
                    stat.changeType === 'positive' ? 'text-emerald-400' : 
                    stat.changeType === 'negative' ? 'text-red-400' : 'text-[#8899aa]'
                  }`}>
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : stat.changeType === 'negative' ? (
                      <ArrowDownRight className="h-4 w-4" />
                    ) : null}
                    {stat.change}
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Leads */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Leads récents</CardTitle>
              <CardDescription>Nouveaux prospects à traiter</CardDescription>
            </div>
            <Link href="/admin/clients">
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">Voir tout</Button>
            </Link>
          </CardHeader>
          <CardContent>
            {recentLeads.length === 0 ? (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-[#667788] mx-auto mb-3" />
                <p className="text-[#8899aa]">Aucun lead pour le moment</p>
                <p className="text-sm text-[#667788]">Les nouveaux prospects apparaîtront ici</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-white">{lead.name}</p>
                        <p className="text-sm text-[#8899aa]">{lead.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={
                        lead.status === 'new' ? 'default' :
                        lead.status === 'contacted' ? 'warning' :
                        'success'
                      }>
                        {lead.status === 'new' ? 'Nouveau' :
                         lead.status === 'contacted' ? 'Contacté' :
                         'Qualifié'}
                      </Badge>
                      <span className="text-sm text-[#8899aa] hidden sm:block">{lead.source}</span>
                      <span className="text-xs text-[#667788]">{lead.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Tâches du jour</CardTitle>
            <CardDescription>À ne pas oublier</CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingTasks.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-[#667788] mx-auto mb-3" />
                <p className="text-[#8899aa]">Aucune tâche prévue</p>
                <p className="text-sm text-[#667788]">Votre agenda est vide</p>
              </div>
            ) : (
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      task.type === 'call' ? 'bg-blue-500/20 text-blue-400' :
                      task.type === 'intervention' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {task.type === 'call' ? <Users className="h-5 w-5" /> :
                       task.type === 'intervention' ? <Clock className="h-5 w-5" /> :
                       <CheckCircle className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-white">{task.title}</p>
                      <p className="text-xs text-[#8899aa]">{task.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Second Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Commandes récentes</CardTitle>
              <CardDescription>Dernières commandes passées</CardDescription>
            </div>
            <Link href="/admin/commandes">
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">Voir tout</Button>
            </Link>
          </CardHeader>
          <CardContent>
            {recentOrders.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-12 w-12 text-[#667788] mx-auto mb-3" />
                <p className="text-[#8899aa]">Aucune commande pour le moment</p>
                <p className="text-sm text-[#667788]">Les nouvelles commandes apparaîtront ici</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">N° Commande</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Client</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Service</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Montant</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4 font-mono text-sm text-white">{order.id}</td>
                        <td className="py-3 px-4 text-white">{order.client}</td>
                        <td className="py-3 px-4 text-[#b8c4d0]">{order.service}</td>
                        <td className="py-3 px-4 text-right font-medium text-white">{order.amount}€</td>
                        <td className="py-3 px-4 text-center">
                          <Badge variant={
                            order.status === 'completed' ? 'success' :
                            order.status === 'in_progress' ? 'warning' :
                            'secondary'
                          }>
                            {order.status === 'completed' ? 'Terminée' :
                             order.status === 'in_progress' ? 'En cours' :
                             'En attente'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Analytics Preview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Analytics</CardTitle>
            <Link href="/admin/analytics">
              <Button variant="ghost" size="sm" className="text-[#8899aa] hover:text-white hover:bg-white/10">Détails</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-[#8899aa]" />
                  <span className="text-sm text-[#b8c4d0]">Visiteurs</span>
                </div>
                <span className="font-bold text-white">{analyticsPreview.visitors.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <MousePointer className="h-5 w-5 text-[#8899aa]" />
                  <span className="text-sm text-[#b8c4d0]">Pages vues</span>
                </div>
                <span className="font-bold text-white">{analyticsPreview.pageViews.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-[#8899aa]" />
                  <span className="text-sm text-[#b8c4d0]">Taux de rebond</span>
                </div>
                <span className="font-bold text-white">{analyticsPreview.bounceRate}%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#8899aa]" />
                  <span className="text-sm text-[#b8c4d0]">Durée moyenne</span>
                </div>
                <span className="font-bold text-white">{analyticsPreview.avgDuration}</span>
              </div>
            </div>

            {/* Mini Chart Placeholder */}
            <div className="mt-6 h-32 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg flex items-end justify-around px-2 pb-2">
              {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                <div 
                  key={i}
                  className="w-6 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
