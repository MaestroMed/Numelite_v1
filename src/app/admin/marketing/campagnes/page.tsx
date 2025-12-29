"use client"

import { useState } from "react"
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Play,
  Pause,
  BarChart3,
  Target,
  Mail,
  MousePointer,
  DollarSign,
  TrendingUp,
  Calendar
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const campaigns = [
  {
    id: 1,
    name: "Dépannage Paris - Janvier",
    type: "Google Ads",
    status: "active",
    budget: 500,
    spent: 342,
    impressions: 12450,
    clicks: 856,
    conversions: 42,
    cpa: 8.14,
    startDate: "2025-01-01",
    endDate: "2025-01-31"
  },
  {
    id: 2,
    name: "Création Site - Remarketing",
    type: "Google Ads",
    status: "active",
    budget: 300,
    spent: 187,
    impressions: 8970,
    clicks: 234,
    conversions: 12,
    cpa: 15.58,
    startDate: "2025-01-01",
    endDate: null
  },
  {
    id: 3,
    name: "Newsletter Promo Noël",
    type: "Email",
    status: "completed",
    budget: 0,
    spent: 0,
    impressions: 2450,
    clicks: 412,
    conversions: 28,
    cpa: 0,
    startDate: "2024-12-15",
    endDate: "2024-12-25"
  },
  {
    id: 4,
    name: "SEO Local Val d'Oise",
    type: "SEO",
    status: "active",
    budget: 399,
    spent: 399,
    impressions: 5670,
    clicks: 345,
    conversions: 18,
    cpa: 22.17,
    startDate: "2024-11-01",
    endDate: null
  },
  {
    id: 5,
    name: "Maintenance - Cold Email",
    type: "Email",
    status: "paused",
    budget: 0,
    spent: 0,
    impressions: 1200,
    clicks: 89,
    conversions: 5,
    cpa: 0,
    startDate: "2025-01-10",
    endDate: null
  }
]

export default function CampagnesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || campaign.type === typeFilter
    return matchesSearch && matchesType
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-emerald-100 text-emerald-700"
      case "paused": return "bg-amber-100 text-amber-700"
      case "completed": return "bg-slate-100 text-slate-700"
      default: return "bg-slate-100 text-slate-700"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Google Ads": return Target
      case "Email": return Mail
      case "SEO": return TrendingUp
      default: return BarChart3
    }
  }

  const totalSpent = campaigns.reduce((acc, c) => acc + c.spent, 0)
  const totalConversions = campaigns.reduce((acc, c) => acc + c.conversions, 0)
  const avgCPA = totalSpent / totalConversions

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Campagnes</h1>
          <p className="text-[#8899aa]">Gérez vos campagnes marketing multi-canal</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouvelle campagne
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Campagnes actives</p>
                <p className="text-2xl font-bold">{campaigns.filter(c => c.status === "active").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Dépenses totales</p>
                <p className="text-2xl font-bold">{totalSpent.toLocaleString()}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <MousePointer className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Conversions</p>
                <p className="text-2xl font-bold">{totalConversions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">CPA moyen</p>
                <p className="text-2xl font-bold">{avgCPA.toFixed(2)}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Rechercher une campagne..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <select 
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">Tous les types</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Email">Email</option>
              <option value="SEO">SEO</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Campagne</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Statut</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Budget</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Dépensé</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Impressions</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Clics</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Conv.</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">CPA</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCampaigns.map((campaign) => {
                  const TypeIcon = getTypeIcon(campaign.type)
                  const ctr = ((campaign.clicks / campaign.impressions) * 100).toFixed(2)
                  const convRate = ((campaign.conversions / campaign.clicks) * 100).toFixed(2)
                  
                  return (
                    <tr key={campaign.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                            <TypeIcon className="h-5 w-5 text-slate-600" />
                          </div>
                          <div>
                            <p className="font-medium">{campaign.name}</p>
                            <p className="text-sm text-[#8899aa]">
                              {campaign.startDate} {campaign.endDate ? `→ ${campaign.endDate}` : "→ En cours"}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline">{campaign.type}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(campaign.status)}>
                          {campaign.status === "active" ? "Active" : 
                           campaign.status === "paused" ? "En pause" : "Terminée"}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right font-medium">
                        {campaign.budget > 0 ? `${campaign.budget}€` : "-"}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {campaign.spent > 0 ? `${campaign.spent}€` : "-"}
                      </td>
                      <td className="py-3 px-4 text-right">{campaign.impressions.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right">
                        <div>
                          <span>{campaign.clicks}</span>
                          <span className="text-xs text-slate-400 ml-1">({ctr}%)</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div>
                          <span className="text-emerald-600 font-medium">{campaign.conversions}</span>
                          <span className="text-xs text-slate-400 ml-1">({convRate}%)</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right font-medium">
                        {campaign.cpa > 0 ? `${campaign.cpa.toFixed(2)}€` : "-"}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-1">
                          {campaign.status === "active" ? (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Pause className="h-4 w-4" />
                            </Button>
                          ) : campaign.status === "paused" ? (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Play className="h-4 w-4" />
                            </Button>
                          ) : null}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <BarChart3 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

