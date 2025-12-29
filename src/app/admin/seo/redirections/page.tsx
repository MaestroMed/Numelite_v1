"use client"

import { useState } from "react"
import {
  Plus,
  Search,
  Edit,
  Trash2,
  ArrowRight,
  Upload,
  Download,
  AlertCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const redirections = [
  { id: 1, from: "/services", to: "/tarifs", type: "301", hits: 234, lastHit: "2025-01-20", status: "active" },
  { id: 2, from: "/depannage-informatique", to: "/depannage", type: "301", hits: 156, lastHit: "2025-01-19", status: "active" },
  { id: 3, from: "/site-internet", to: "/creation-site", type: "301", hits: 89, lastHit: "2025-01-18", status: "active" },
  { id: 4, from: "/blog/ancien-article", to: "/blog/nouveau-article", type: "301", hits: 12, lastHit: "2025-01-15", status: "active" },
  { id: 5, from: "/promo-noel", to: "/tarifs", type: "302", hits: 567, lastHit: "2025-01-01", status: "expired" },
  { id: 6, from: "/contact-us", to: "/contact", type: "301", hits: 45, lastHit: "2025-01-10", status: "active" }
]

const brokenLinks = [
  { url: "/old-page", referrer: "https://google.fr", hits: 23, lastSeen: "2025-01-20" },
  { url: "/services/depannage", referrer: "https://facebook.com", hits: 12, lastSeen: "2025-01-18" },
  { url: "/blog/2024/article-supprime", referrer: "https://twitter.com", hits: 8, lastSeen: "2025-01-15" }
]

export default function RedirectionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredRedirections = redirections.filter(r =>
    r.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.to.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Redirections</h1>
          <p className="text-[#8899aa]">Gérez les redirections 301/302 de votre site</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Importer CSV
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exporter
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nouvelle redirection
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Redirections actives</p>
            <p className="text-2xl font-bold">{redirections.filter(r => r.status === "active").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Total hits</p>
            <p className="text-2xl font-bold">{redirections.reduce((acc, r) => acc + r.hits, 0)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">301 (Permanent)</p>
            <p className="text-2xl font-bold">{redirections.filter(r => r.type === "301").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">302 (Temporaire)</p>
            <p className="text-2xl font-bold">{redirections.filter(r => r.type === "302").length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Broken Links Alert */}
      {brokenLinks.length > 0 && (
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-amber-700 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Liens cassés détectés ({brokenLinks.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-600 mb-4">
              Ces URLs génèrent des erreurs 404. Créez des redirections pour les corriger.
            </p>
            <div className="space-y-2">
              {brokenLinks.slice(0, 3).map((link, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-mono text-sm">{link.url}</p>
                    <p className="text-xs text-[#8899aa]">Depuis : {link.referrer} • {link.hits} hits</p>
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Plus className="h-3 w-3" />
                    Créer redirection
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Rechercher une URL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Redirections Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">URL Source</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">URL Destination</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Hits</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Dernier hit</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Statut</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRedirections.map((redirect) => (
                  <tr key={redirect.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <code className="text-sm">{redirect.from}</code>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant={redirect.type === "301" ? "default" : "secondary"}>
                        {redirect.type}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-slate-400" />
                        <code className="text-sm">{redirect.to}</code>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-medium">{redirect.hits}</td>
                    <td className="py-3 px-4 text-sm text-[#8899aa]">{redirect.lastHit}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant={redirect.status === "active" ? "success" : "secondary"}>
                        {redirect.status === "active" ? "Actif" : "Expiré"}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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

