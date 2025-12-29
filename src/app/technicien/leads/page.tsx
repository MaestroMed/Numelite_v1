"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Search,
  Filter
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Lead {
  id: string
  email: string
  first_name: string | null
  last_name: string | null
  phone: string | null
  message: string | null
  source: string | null
  status: string
  created_at: string
}

export default function TechnicienLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads")
      const data = await res.json()
      setLeads(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching leads:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateLeadStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })
      fetchLeads()
    } catch (error) {
      console.error("Error updating lead:", error)
    }
  }

  const filteredLeads = leads.filter((lead) => {
    if (statusFilter !== "all" && lead.status !== statusFilter) return false
    if (!search) return true
    const searchLower = search.toLowerCase()
    return (
      lead.email.toLowerCase().includes(searchLower) ||
      (lead.first_name?.toLowerCase() || "").includes(searchLower) ||
      (lead.last_name?.toLowerCase() || "").includes(searchLower)
    )
  })

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "new": return "Nouveau"
      case "contacted": return "Contacté"
      case "qualified": return "Qualifié"
      case "converted": return "Converti"
      case "lost": return "Perdu"
      default: return status
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "new": return "default"
      case "contacted": return "warning"
      case "qualified": return "success"
      case "converted": return "success"
      case "lost": return "destructive"
      default: return "secondary"
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <p className="text-[#8899aa]">Gérez vos prospects</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Total</p>
            <p className="text-2xl font-bold text-white">{leads.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Nouveaux</p>
            <p className="text-2xl font-bold text-amber-400">
              {leads.filter(l => l.status === "new").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Contactés</p>
            <p className="text-2xl font-bold text-blue-400">
              {leads.filter(l => l.status === "contacted").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Qualifiés</p>
            <p className="text-2xl font-bold text-emerald-400">
              {leads.filter(l => l.status === "qualified").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Convertis</p>
            <p className="text-2xl font-bold text-purple-400">
              {leads.filter(l => l.status === "converted").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg flex-1">
              <Search className="h-4 w-4 text-[#8899aa]" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border-0 outline-none text-sm w-full text-white placeholder:text-[#667788]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#8899aa]" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
              >
                <option value="all" className="bg-[#1a1f2e]">Tous les statuts</option>
                <option value="new" className="bg-[#1a1f2e]">Nouveaux</option>
                <option value="contacted" className="bg-[#1a1f2e]">Contactés</option>
                <option value="qualified" className="bg-[#1a1f2e]">Qualifiés</option>
                <option value="converted" className="bg-[#1a1f2e]">Convertis</option>
                <option value="lost" className="bg-[#1a1f2e]">Perdus</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      <Card>
        <CardHeader>
          <CardTitle>Tous les leads</CardTitle>
          <CardDescription>{filteredLeads.length} résultat(s)</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
          ) : filteredLeads.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-[#667788] mx-auto mb-3" />
              <p className="text-[#8899aa]">
                {search || statusFilter !== "all" ? "Aucun résultat" : "Aucun lead pour le moment"}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {(lead.first_name?.[0] || lead.email[0]).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">
                          {lead.first_name || lead.last_name 
                            ? `${lead.first_name || ""} ${lead.last_name || ""}`.trim()
                            : "Nouveau lead"
                          }
                        </h3>
                        <div className="flex flex-wrap gap-3 mt-1 text-sm text-[#8899aa]">
                          <span className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {lead.email}
                          </span>
                          {lead.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              {lead.phone}
                            </span>
                          )}
                        </div>
                        {lead.message && (
                          <p className="text-sm text-[#b8c4d0] mt-2 line-clamp-2">{lead.message}</p>
                        )}
                        <div className="flex items-center gap-3 mt-2">
                          <Badge variant={getStatusVariant(lead.status) as "default" | "secondary" | "success" | "warning" | "destructive"}>
                            {getStatusLabel(lead.status)}
                          </Badge>
                          <span className="text-xs text-[#667788]">{getTimeAgo(lead.created_at)}</span>
                          {lead.source && (
                            <span className="text-xs text-[#667788]">via {lead.source}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {lead.status === "new" && (
                        <Button
                          size="sm"
                          onClick={() => updateLeadStatus(lead.id, "contacted")}
                          className="gap-1"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Contacter
                        </Button>
                      )}
                      {lead.status === "contacted" && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => updateLeadStatus(lead.id, "qualified")}
                            className="gap-1 bg-emerald-600 hover:bg-emerald-700"
                          >
                            <CheckCircle className="h-4 w-4" />
                            Qualifier
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateLeadStatus(lead.id, "lost")}
                            className="gap-1 border-red-500/30 text-red-400 hover:bg-red-500/10"
                          >
                            <XCircle className="h-4 w-4" />
                            Perdu
                          </Button>
                        </>
                      )}
                      {lead.phone && (
                        <a href={`tel:${lead.phone}`}>
                          <Button variant="outline" size="sm" className="gap-1 border-white/20 text-white hover:bg-white/10">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </a>
                      )}
                      <a href={`mailto:${lead.email}`}>
                        <Button variant="outline" size="sm" className="gap-1 border-white/20 text-white hover:bg-white/10">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
