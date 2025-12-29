"use client"

import { useState } from "react"
import {
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Copy,
  Send,
  Mail,
  Clock,
  CheckCircle,
  Users
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const emailTemplates = [
  {
    id: 1,
    name: "Bienvenue nouveau client",
    subject: "Bienvenue chez Numelite ! 🎉",
    category: "Onboarding",
    status: "active",
    lastEdited: "2025-01-15",
    sends: 234,
    openRate: 68,
    clickRate: 24
  },
  {
    id: 2,
    name: "Confirmation de réservation",
    subject: "Votre intervention est confirmée",
    category: "Transactionnel",
    status: "active",
    lastEdited: "2025-01-10",
    sends: 456,
    openRate: 89,
    clickRate: 32
  },
  {
    id: 3,
    name: "Relance abandon panier",
    subject: "Vous avez oublié quelque chose ?",
    category: "Remarketing",
    status: "active",
    lastEdited: "2025-01-08",
    sends: 123,
    openRate: 42,
    clickRate: 18
  },
  {
    id: 4,
    name: "Newsletter mensuelle",
    subject: "Les actualités Numelite - Janvier 2025",
    category: "Newsletter",
    status: "draft",
    lastEdited: "2025-01-20",
    sends: 0,
    openRate: 0,
    clickRate: 0
  },
  {
    id: 5,
    name: "Demande d'avis après intervention",
    subject: "Votre avis compte pour nous",
    category: "Post-achat",
    status: "active",
    lastEdited: "2025-01-05",
    sends: 189,
    openRate: 52,
    clickRate: 28
  },
  {
    id: 6,
    name: "Offre maintenance annuelle",
    subject: "Économisez 20% sur votre maintenance",
    category: "Promo",
    status: "active",
    lastEdited: "2025-01-12",
    sends: 567,
    openRate: 38,
    clickRate: 12
  }
]

const categories = ["Tous", "Onboarding", "Transactionnel", "Remarketing", "Newsletter", "Post-achat", "Promo"]

export default function EmailsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredTemplates = emailTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Tous" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Templates Email</h1>
          <p className="text-[#8899aa]">Créez et gérez vos modèles d&apos;emails</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau template
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Templates actifs</p>
                <p className="text-2xl font-bold">{emailTemplates.filter(t => t.status === "active").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Send className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Emails envoyés</p>
                <p className="text-2xl font-bold">{emailTemplates.reduce((acc, t) => acc + t.sends, 0).toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Eye className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Taux d&apos;ouverture moy.</p>
                <p className="text-2xl font-bold">
                  {(emailTemplates.filter(t => t.sends > 0).reduce((acc, t) => acc + t.openRate, 0) / 
                    emailTemplates.filter(t => t.sends > 0).length).toFixed(0)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Taux de clic moy.</p>
                <p className="text-2xl font-bold">
                  {(emailTemplates.filter(t => t.sends > 0).reduce((acc, t) => acc + t.clickRate, 0) / 
                    emailTemplates.filter(t => t.sends > 0).length).toFixed(0)}%
                </p>
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
                placeholder="Rechercher un template..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.slice(0, 4).map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
              <select 
                className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <Badge variant={template.status === "active" ? "success" : "secondary"}>
                  {template.status === "active" ? "Actif" : "Brouillon"}
                </Badge>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <h3 className="font-bold text-lg mb-1">{template.name}</h3>
              <p className="text-sm text-[#8899aa] mb-2">{template.subject}</p>
              <Badge variant="outline" className="mb-4">{template.category}</Badge>

              {template.sends > 0 && (
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-100">
                  <div className="text-center">
                    <p className="text-lg font-bold">{template.sends}</p>
                    <p className="text-xs text-[#8899aa]">Envois</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-blue-600">{template.openRate}%</p>
                    <p className="text-xs text-[#8899aa]">Ouverture</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-emerald-600">{template.clickRate}%</p>
                    <p className="text-xs text-[#8899aa]">Clics</p>
                  </div>
                </div>
              )}

              <p className="text-sm text-slate-400 mt-4">
                Modifié le {new Date(template.lastEdited).toLocaleDateString("fr-FR")}
              </p>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1 gap-1">
                  <Edit className="h-3 w-3" />
                  Modifier
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Eye className="h-3 w-3" />
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

