"use client"

import { useState } from "react"
import {
  Search,
  Edit,
  Eye,
  CheckCircle,
  AlertCircle,
  Globe,
  FileText
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const pages = [
  {
    id: 1,
    path: "/",
    title: "Numelite - Dépannage Informatique & Création de Sites Web en Île-de-France",
    description: "Expert informatique en Île-de-France : dépannage rapide, création de sites web professionnels, maintenance et support. Intervention sous 24h.",
    titleLength: 74,
    descLength: 142,
    status: "optimized",
    indexable: true
  },
  {
    id: 2,
    path: "/depannage",
    title: "Dépannage Informatique Paris | Intervention Rapide 24h | Numelite",
    description: "Service de dépannage informatique à domicile en Île-de-France. Intervention sous 24h, diagnostic gratuit. Virus, lenteur, panne, récupération données.",
    titleLength: 68,
    descLength: 156,
    status: "optimized",
    indexable: true
  },
  {
    id: 3,
    path: "/creation-site",
    title: "Création de Sites Web | Sites Vitrines & E-commerce | Numelite",
    description: "Création de sites web professionnels sur-mesure. Sites vitrines, e-commerce, WordPress. Design moderne, SEO optimisé, responsive mobile.",
    titleLength: 63,
    descLength: 139,
    status: "optimized",
    indexable: true
  },
  {
    id: 4,
    path: "/tarifs",
    title: "Tarifs Dépannage Informatique & Création Site Web | Numelite",
    description: "Découvrez nos tarifs transparents pour le dépannage informatique et la création de sites web. Devis gratuit, prix fixes.",
    titleLength: 61,
    descLength: 122,
    status: "warning",
    indexable: true
  },
  {
    id: 5,
    path: "/maintenance",
    title: "Maintenance Informatique Paris",
    description: "Service de maintenance informatique",
    titleLength: 31,
    descLength: 35,
    status: "error",
    indexable: true
  },
  {
    id: 6,
    path: "/google-ads",
    title: "Gestion Google Ads Paris | Campagnes Publicitaires | Numelite",
    description: "Agence Google Ads certifiée. Création et gestion de campagnes publicitaires performantes. Audit gratuit, ROI garanti.",
    titleLength: 62,
    descLength: 118,
    status: "optimized",
    indexable: true
  },
  {
    id: 7,
    path: "/seo",
    title: "SEO Référencement Naturel Paris | Expert SEO | Numelite",
    description: "Améliorez votre visibilité sur Google avec notre expertise SEO. Audit gratuit, optimisation on-page, netlinking, suivi mensuel.",
    titleLength: 55,
    descLength: 128,
    status: "optimized",
    indexable: true
  },
  {
    id: 8,
    path: "/mentions-legales",
    title: "Mentions Légales | Numelite",
    description: "Mentions légales de Numelite, société de dépannage informatique et création de sites web en Île-de-France.",
    titleLength: 28,
    descLength: 106,
    status: "warning",
    indexable: false
  }
]

export default function SEOPagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredPages = pages.filter(page => {
    const matchesSearch = page.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         page.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || page.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimized": return "bg-emerald-100 text-emerald-700"
      case "warning": return "bg-amber-100 text-amber-700"
      case "error": return "bg-red-100 text-red-700"
      default: return "bg-slate-100 text-slate-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "optimized": return <CheckCircle className="h-4 w-4" />
      case "warning": return <AlertCircle className="h-4 w-4" />
      case "error": return <AlertCircle className="h-4 w-4" />
      default: return null
    }
  }

  const getTitleColor = (length: number) => {
    if (length < 30 || length > 70) return "text-red-600"
    if (length < 40 || length > 60) return "text-amber-600"
    return "text-emerald-600"
  }

  const getDescColor = (length: number) => {
    if (length < 70 || length > 160) return "text-red-600"
    if (length < 120 || length > 155) return "text-amber-600"
    return "text-emerald-600"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Méta Pages</h1>
          <p className="text-[#8899aa]">Optimisez les balises méta de vos pages</p>
        </div>
        <Button className="gap-2">
          <Search className="h-4 w-4" />
          Analyser le site
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Pages totales</p>
            <p className="text-2xl font-bold">{pages.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Optimisées</p>
            <p className="text-2xl font-bold text-emerald-600">{pages.filter(p => p.status === "optimized").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">À améliorer</p>
            <p className="text-2xl font-bold text-amber-600">{pages.filter(p => p.status === "warning").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Problèmes</p>
            <p className="text-2xl font-bold text-red-600">{pages.filter(p => p.status === "error").length}</p>
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
                placeholder="Rechercher une page..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {["all", "optimized", "warning", "error"].map(status => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                >
                  {status === "all" ? "Tous" :
                   status === "optimized" ? "Optimisé" :
                   status === "warning" ? "À améliorer" :
                   "Erreur"}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pages List */}
      <div className="space-y-4">
        {filteredPages.map((page) => (
          <Card key={page.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className={getStatusColor(page.status)}>
                      {getStatusIcon(page.status)}
                      <span className="ml-1">
                        {page.status === "optimized" ? "Optimisé" :
                         page.status === "warning" ? "À améliorer" :
                         "Problème"}
                      </span>
                    </Badge>
                    {!page.indexable && (
                      <Badge variant="secondary">noindex</Badge>
                    )}
                    <span className="text-sm text-[#8899aa] font-mono">{page.path}</span>
                  </div>

                  {/* SERP Preview */}
                  <div className="bg-slate-50 rounded-lg p-4 mt-4">
                    <p className="text-blue-700 text-lg hover:underline cursor-pointer truncate">
                      {page.title}
                    </p>
                    <p className="text-emerald-700 text-sm mb-1">
                      https://numelite.fr{page.path}
                    </p>
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {page.description}
                    </p>
                  </div>

                  <div className="flex gap-6 mt-4 text-sm">
                    <div>
                      <span className="text-[#8899aa]">Titre : </span>
                      <span className={getTitleColor(page.titleLength)}>
                        {page.titleLength} caractères
                      </span>
                      <span className="text-slate-400"> (idéal : 50-60)</span>
                    </div>
                    <div>
                      <span className="text-[#8899aa]">Description : </span>
                      <span className={getDescColor(page.descLength)}>
                        {page.descLength} caractères
                      </span>
                      <span className="text-slate-400"> (idéal : 120-155)</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Edit className="h-3 w-3" />
                    Modifier
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Eye className="h-3 w-3" />
                    Voir
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

