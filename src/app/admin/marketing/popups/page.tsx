"use client"

import { useState } from "react"
import {
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Play,
  Pause,
  MousePointer,
  Timer,
  ArrowDown,
  LogOut,
  Target
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const popups = [
  {
    id: 1,
    name: "Exit Intent - 10% Réduction",
    type: "exit_intent",
    status: "active",
    pages: ["/*"],
    views: 3456,
    conversions: 234,
    conversionRate: 6.77
  },
  {
    id: 2,
    name: "Newsletter Scroll 50%",
    type: "scroll",
    status: "active",
    pages: ["/blog/*"],
    views: 1234,
    conversions: 89,
    conversionRate: 7.21
  },
  {
    id: 3,
    name: "Promo Noël - Timer",
    type: "timer",
    status: "paused",
    pages: ["/depannage", "/tarifs"],
    views: 567,
    conversions: 45,
    conversionRate: 7.94
  },
  {
    id: 4,
    name: "Click CTA - Devis Gratuit",
    type: "click",
    status: "active",
    pages: ["/creation-site", "/seo"],
    views: 890,
    conversions: 67,
    conversionRate: 7.53
  }
]

const triggerIcons: Record<string, typeof MousePointer> = {
  exit_intent: LogOut,
  scroll: ArrowDown,
  timer: Timer,
  click: MousePointer
}

const triggerLabels: Record<string, string> = {
  exit_intent: "Exit Intent",
  scroll: "Au scroll",
  timer: "Après délai",
  click: "Au clic"
}

export default function PopupsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Popups</h1>
          <p className="text-[#8899aa]">Créez des popups pour convertir vos visiteurs</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau popup
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Popups actifs</p>
            <p className="text-2xl font-bold">{popups.filter(p => p.status === "active").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Total vues</p>
            <p className="text-2xl font-bold">{popups.reduce((acc, p) => acc + p.views, 0).toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Conversions</p>
            <p className="text-2xl font-bold">{popups.reduce((acc, p) => acc + p.conversions, 0)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Taux conversion moy.</p>
            <p className="text-2xl font-bold">
              {(popups.reduce((acc, p) => acc + p.conversionRate, 0) / popups.length).toFixed(1)}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Popups Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {popups.map((popup) => {
          const TriggerIcon = triggerIcons[popup.type]
          return (
            <Card key={popup.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      popup.status === "active" ? "bg-blue-100" : "bg-slate-100"
                    }`}>
                      <TriggerIcon className={`h-6 w-6 ${
                        popup.status === "active" ? "text-blue-600" : "text-slate-400"
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-bold">{popup.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{triggerLabels[popup.type]}</Badge>
                        <Badge variant={popup.status === "active" ? "success" : "secondary"}>
                          {popup.status === "active" ? "Actif" : "En pause"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-[#8899aa] mb-2">Afficher sur :</p>
                  <div className="flex flex-wrap gap-2">
                    {popup.pages.map((page, i) => (
                      <Badge key={i} variant="secondary" className="font-mono text-xs">
                        {page}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-100">
                  <div className="text-center">
                    <p className="text-lg font-bold">{popup.views.toLocaleString()}</p>
                    <p className="text-xs text-[#8899aa]">Vues</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">{popup.conversions}</p>
                    <p className="text-xs text-[#8899aa]">Conversions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-emerald-600">{popup.conversionRate}%</p>
                    <p className="text-xs text-[#8899aa]">Taux</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1 gap-1">
                    <Edit className="h-3 w-3" />
                    Modifier
                  </Button>
                  {popup.status === "active" ? (
                    <Button variant="outline" size="sm" className="gap-1">
                      <Pause className="h-3 w-3" />
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="gap-1">
                      <Play className="h-3 w-3" />
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="gap-1">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

