import { Metadata } from "next"
import Link from "next/link"
import {
  Home,
  ShoppingBag,
  FolderOpen,
  FileText,
  Wrench,
  MessageSquare,
  Gift,
  Settings,
  Bell,
  Calendar,
  TrendingUp,
  Clock,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Espace Client | Numelite",
  description: "Accédez à votre espace client Numelite pour suivre vos commandes, projets et interventions.",
}

const stats = [
  { label: "Commandes", value: "3", icon: ShoppingBag, color: "from-blue-500 to-cyan-400" },
  { label: "Projets en cours", value: "1", icon: FolderOpen, color: "from-emerald-500 to-green-400" },
  { label: "Interventions", value: "5", icon: Wrench, color: "from-orange-500 to-amber-400" },
  { label: "Messages", value: "2", icon: MessageSquare, color: "from-purple-500 to-pink-400" },
]

const recentOrders = [
  { id: "NL2401-ABC123", date: "15 jan 2024", service: "Site Vitrine", status: "En cours", statusColor: "warning" },
  { id: "NL2312-XYZ789", date: "10 déc 2023", service: "Dépannage", status: "Terminé", statusColor: "success" },
  { id: "NL2311-DEF456", date: "25 nov 2023", service: "Maintenance", status: "Actif", statusColor: "default" },
]

const upcomingAppointments = [
  { date: "Demain", time: "14:00", service: "Suivi projet site web", type: "Appel téléphonique" },
]

const menuItems = [
  { icon: Home, label: "Tableau de bord", href: "/espace-client", active: true },
  { icon: ShoppingBag, label: "Mes commandes", href: "/espace-client/commandes" },
  { icon: FolderOpen, label: "Mes projets", href: "/espace-client/projets" },
  { icon: Wrench, label: "Mes interventions", href: "/espace-client/interventions" },
  { icon: FileText, label: "Mes factures", href: "/espace-client/factures" },
  { icon: MessageSquare, label: "Messages", href: "/espace-client/messages", badge: 2 },
  { icon: Gift, label: "Parrainage", href: "/espace-client/parrainage" },
  { icon: Settings, label: "Paramètres", href: "/espace-client/parametres" },
]

export default function EspaceClientPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[280px,1fr] gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <Card className="sticky top-[180px]">
              <CardContent className="p-4">
                {/* User Info */}
                <div className="flex items-center gap-4 p-4 mb-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold">Jean Dupont</p>
                    <p className="text-sm text-slate-500">Client depuis 2023</p>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        item.active 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="destructive" className="h-5 w-5 p-0 flex items-center justify-center text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">Bonjour Jean 👋</h1>
                <p className="text-slate-600">Bienvenue dans votre espace client</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </Button>
                <Link href="/reservation">
                  <Button size="sm" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Nouvelle demande
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
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
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Commandes récentes</CardTitle>
                    <CardDescription>Vos dernières commandes</CardDescription>
                  </div>
                  <Link href="/espace-client/commandes">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Voir tout
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                        <div>
                          <p className="font-medium">{order.service}</p>
                          <p className="text-sm text-slate-500">{order.id} • {order.date}</p>
                        </div>
                        <Badge variant={order.statusColor as "default" | "warning" | "success"}>
                          {order.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Projet en cours</CardTitle>
                  <CardDescription>Site Vitrine - Boutique Élégance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Progression</span>
                        <span className="text-sm text-slate-500">65%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-3">
                      {[
                        { name: "Brief & Devis", status: "completed" },
                        { name: "Maquettes", status: "completed" },
                        { name: "Développement", status: "current" },
                        { name: "Contenu", status: "pending" },
                        { name: "Mise en ligne", status: "pending" },
                      ].map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                          {step.status === "completed" ? (
                            <CheckCircle className="h-5 w-5 text-emerald-500" />
                          ) : step.status === "current" ? (
                            <Clock className="h-5 w-5 text-blue-500 animate-pulse" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-slate-300" />
                          )}
                          <span className={step.status === "pending" ? "text-slate-400" : ""}>{step.name}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/espace-client/projets/1">
                      <Button variant="outline" className="w-full">
                        Voir les détails du projet
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle>Prochain rendez-vous</CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length > 0 ? (
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                          <Calendar className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold">{upcomingAppointments[0].service}</p>
                          <p className="text-sm text-slate-600">
                            {upcomingAppointments[0].date} à {upcomingAppointments[0].time}
                          </p>
                          <p className="text-sm text-slate-500">{upcomingAppointments[0].type}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-500">Aucun rendez-vous à venir</p>
                  )}
                </CardContent>
              </Card>

              {/* Referral */}
              <Card className="bg-gradient-to-br from-purple-600 to-pink-500 text-white">
                <CardContent className="p-6">
                  <Gift className="h-10 w-10 mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-2">Parrainez vos amis</h3>
                  <p className="text-white/80 mb-4">
                    Gagnez 50€ pour chaque ami qui devient client
                  </p>
                  <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2 mb-4">
                    <span className="font-mono font-bold">JEAN50</span>
                    <Button variant="ghost" size="sm" className="ml-auto text-white hover:bg-white/20">
                      Copier
                    </Button>
                  </div>
                  <Link href="/espace-client/parrainage">
                    <Button variant="secondary" className="w-full">
                      En savoir plus
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}


