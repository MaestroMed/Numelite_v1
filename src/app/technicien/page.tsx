"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Euro,
  Users,
  Navigation,
  Play
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Intervention {
  id: string
  title: string
  address: string | null
  scheduled_at: string | null
  status: string
  clients?: { first_name: string | null; last_name: string | null; phone: string | null } | null
}

interface Lead {
  id: string
  first_name: string | null
  last_name: string | null
  message: string | null
  source: string | null
  status: string
  created_at: string
}

export default function TechnicienDashboard() {
  const [interventions, setInterventions] = useState<Intervention[]>([])
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    interventionsToday: 0,
    interventionsCompleted: 0,
    revenueToday: 0,
    leadsToProcess: 0
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Fetch leads
      const leadsRes = await fetch("/api/leads")
      const leadsData = await leadsRes.json()
      const activeLeads = Array.isArray(leadsData) 
        ? leadsData.filter((l: Lead) => l.status === "new").slice(0, 5)
        : []
      setLeads(activeLeads)
      
      // Update stats
      setStats({
        interventionsToday: 0,
        interventionsCompleted: 0,
        revenueToday: 0,
        leadsToProcess: activeLeads.length
      })
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      case "in_progress": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "scheduled": return "bg-white/10 text-[#b8c4d0] border-white/10"
      default: return "bg-white/10 text-[#b8c4d0]"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed": return "Terminée"
      case "in_progress": return "En cours"
      case "scheduled": return "À venir"
      default: return status
    }
  }

  const getTimeAgo = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)
    
    if (diffMins < 60) return `Il y a ${diffMins} min`
    if (diffHours < 24) return `Il y a ${diffHours}h`
    return `Il y a ${diffDays} jour${diffDays > 1 ? "s" : ""}`
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Interventions</p>
                <p className="text-2xl font-bold text-white">{stats.interventionsCompleted}/{stats.interventionsToday}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Euro className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">CA du jour</p>
                <p className="text-2xl font-bold text-white">{stats.revenueToday}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Leads à traiter</p>
                <p className="text-2xl font-bold text-white">{stats.leadsToProcess}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Taux conversion</p>
                <p className="text-2xl font-bold text-white">0%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Interventions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Interventions du jour</CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
            ) : interventions.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-[#667788] mx-auto mb-3" />
                <p className="text-[#8899aa]">Aucune intervention prévue</p>
                <p className="text-sm text-[#667788]">Votre planning est vide pour aujourd&apos;hui</p>
              </div>
            ) : (
              <div className="space-y-4">
                {interventions.map((intervention) => (
                  <div 
                    key={intervention.id} 
                    className={`p-4 rounded-xl border ${
                      intervention.status === "in_progress" ? "bg-blue-500/10 border-blue-500/20" : "bg-white/5 border-white/10"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#8899aa]" />
                          <span className="font-medium text-white">
                            {intervention.scheduled_at 
                              ? new Date(intervention.scheduled_at).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
                              : "Non planifié"
                            }
                          </span>
                        </div>
                        <Badge className={getStatusColor(intervention.status)}>
                          {getStatusLabel(intervention.status)}
                        </Badge>
                      </div>
                    </div>

                    <h3 className="font-medium mb-1 text-white">{intervention.title}</h3>
                    <p className="text-sm text-[#b8c4d0] mb-2">
                      {intervention.clients 
                        ? `${intervention.clients.first_name || ""} ${intervention.clients.last_name || ""}`.trim() || "Client"
                        : "Client"
                      }
                    </p>

                    {intervention.address && (
                      <div className="flex flex-wrap gap-4 text-sm text-[#8899aa] mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {intervention.address}
                        </span>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {intervention.status === "in_progress" && (
                        <Button size="sm" className="gap-1 bg-emerald-600 hover:bg-emerald-700">
                          <CheckCircle className="h-4 w-4" />
                          Terminer
                        </Button>
                      )}
                      {intervention.status === "scheduled" && (
                        <Button size="sm" className="gap-1">
                          <Play className="h-4 w-4" />
                          Démarrer
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="gap-1 border-white/20 text-white hover:bg-white/10">
                        <Navigation className="h-4 w-4" />
                        GPS
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* New Leads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Nouveaux leads</span>
              <Badge className="bg-amber-500/20 text-amber-400">{leads.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
            ) : leads.length === 0 ? (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-[#667788] mx-auto mb-3" />
                <p className="text-[#8899aa]">Aucun lead à traiter</p>
              </div>
            ) : (
              <div className="space-y-4">
                {leads.map((lead) => (
                  <div key={lead.id} className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-white">
                        {lead.first_name || lead.last_name 
                          ? `${lead.first_name || ""} ${lead.last_name || ""}`.trim()
                          : "Nouveau lead"
                        }
                      </span>
                      {lead.status === "new" && (
                        <Badge className="bg-amber-500/20 text-amber-400">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Nouveau
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-[#b8c4d0] line-clamp-1">{lead.message || "Pas de message"}</p>
                    <div className="flex items-center justify-between mt-2 text-sm text-[#8899aa]">
                      <span>{lead.source || "Direct"}</span>
                      <span>{getTimeAgo(lead.created_at)}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Link href={`/technicien/leads/${lead.id}`} className="flex-1">
                        <Button size="sm" className="w-full">Traiter</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <Link href="/technicien/leads">
              <Button variant="outline" className="w-full mt-4 border-white/20 text-white hover:bg-white/10">
                Voir tous les leads
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
