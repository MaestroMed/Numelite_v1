"use client"

import { useState } from "react"
import {
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Play,
  Pause,
  Zap,
  Mail,
  Clock,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const sequences = [
  {
    id: 1,
    name: "Onboarding Nouveau Client",
    description: "Séquence de bienvenue pour les nouveaux clients",
    trigger: "Inscription",
    status: "active",
    emails: 5,
    duration: "14 jours",
    enrolled: 234,
    completed: 189,
    conversionRate: 32
  },
  {
    id: 2,
    name: "Relance Devis Non Signé",
    description: "Suivi automatique des devis en attente",
    trigger: "Devis envoyé",
    status: "active",
    emails: 3,
    duration: "7 jours",
    enrolled: 156,
    completed: 98,
    conversionRate: 28
  },
  {
    id: 3,
    name: "Post-Intervention",
    description: "Demande d'avis et offre maintenance après intervention",
    trigger: "Intervention terminée",
    status: "active",
    emails: 4,
    duration: "21 jours",
    enrolled: 345,
    completed: 312,
    conversionRate: 45
  },
  {
    id: 4,
    name: "Réactivation Client Dormant",
    description: "Réengager les clients inactifs depuis 6 mois",
    trigger: "Inactivité 180 jours",
    status: "paused",
    emails: 4,
    duration: "30 jours",
    enrolled: 89,
    completed: 45,
    conversionRate: 12
  },
  {
    id: 5,
    name: "Upsell Maintenance",
    description: "Proposition de forfait maintenance après achat",
    trigger: "Achat service",
    status: "active",
    emails: 3,
    duration: "14 jours",
    enrolled: 178,
    completed: 156,
    conversionRate: 22
  }
]

export default function SequencesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSequences = sequences.filter(seq =>
    seq.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Séquences Email</h1>
          <p className="text-[#8899aa]">Automatisez vos campagnes d&apos;email marketing</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouvelle séquence
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Séquences actives</p>
            <p className="text-2xl font-bold">{sequences.filter(s => s.status === "active").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Contacts inscrits</p>
            <p className="text-2xl font-bold">{sequences.reduce((acc, s) => acc + s.enrolled, 0)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Séquences terminées</p>
            <p className="text-2xl font-bold">{sequences.reduce((acc, s) => acc + s.completed, 0)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Taux conversion moy.</p>
            <p className="text-2xl font-bold">
              {(sequences.reduce((acc, s) => acc + s.conversionRate, 0) / sequences.length).toFixed(0)}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Rechercher une séquence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Sequences List */}
      <div className="space-y-4">
        {filteredSequences.map((sequence) => (
          <Card key={sequence.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    sequence.status === "active" ? "bg-blue-100" : "bg-slate-100"
                  }`}>
                    <Zap className={`h-6 w-6 ${
                      sequence.status === "active" ? "text-blue-600" : "text-slate-400"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{sequence.name}</h3>
                      <Badge variant={sequence.status === "active" ? "success" : "secondary"}>
                        {sequence.status === "active" ? "Active" : "En pause"}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#8899aa] mb-2">{sequence.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Zap className="h-4 w-4" />
                        Trigger: {sequence.trigger}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {sequence.emails} emails
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {sequence.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {/* Flow Preview */}
                  <div className="hidden xl:flex items-center gap-2">
                    {Array.from({ length: Math.min(sequence.emails, 4) }).map((_, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Mail className="h-4 w-4 text-blue-600" />
                        </div>
                        {i < Math.min(sequence.emails, 4) - 1 && (
                          <ArrowRight className="h-4 w-4 text-slate-300 mx-1" />
                        )}
                      </div>
                    ))}
                    {sequence.emails > 4 && (
                      <span className="text-sm text-slate-400">+{sequence.emails - 4}</span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold">{sequence.enrolled}</p>
                      <p className="text-xs text-[#8899aa]">Inscrits</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{sequence.completed}</p>
                      <p className="text-xs text-[#8899aa]">Terminées</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-emerald-600">{sequence.conversionRate}%</p>
                      <p className="text-xs text-[#8899aa]">Conversion</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1">
                    {sequence.status === "active" ? (
                      <Button variant="ghost" size="icon">
                        <Pause className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

