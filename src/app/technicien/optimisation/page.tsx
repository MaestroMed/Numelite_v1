"use client"

import { useState, useEffect } from "react"
import {
  Zap,
  RefreshCw,
  Clock,
  MapPin,
  Car,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Play,
  Pause,
  Download,
  Brain
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

// Simulated LLM suggestions
const llmSuggestions = [
  {
    id: 1,
    type: "route",
    priority: "high",
    title: "Optimisation trajet Lundi",
    description: "Réorganiser les RDV du lundi pour économiser 35 min de trajet. Suggère de déplacer le RDV de Paris 16e à 10h avant celui de Boulogne à 14h.",
    savings: "35 min + 8€ carburant",
    applied: false
  },
  {
    id: 2,
    type: "availability",
    priority: "medium",
    title: "Créneau libre détecté",
    description: "Créneau de 2h disponible le Mercredi 22/01 après-midi. 3 leads en attente dans la zone Paris 15e pourraient être programmés.",
    savings: "Potentiel +150€ CA",
    applied: false
  },
  {
    id: 3,
    type: "workload",
    priority: "low",
    title: "Répartition charge",
    description: "La semaine prochaine est chargée (28h planifiées). Suggère de proposer certains RDV à Sophie qui a des disponibilités.",
    savings: "Équilibre équipe",
    applied: true
  },
  {
    id: 4,
    type: "efficiency",
    priority: "medium",
    title: "Regroupement interventions",
    description: "2 interventions maintenance prévues le même jour dans le même immeuble (différents étages). Possibilité de les regrouper.",
    savings: "30 min",
    applied: false
  }
]

const analysisHistory = [
  { date: "2025-01-20 10:00", suggestions: 3, applied: 2, savings: "1h15 + 25€" },
  { date: "2025-01-20 09:00", suggestions: 2, applied: 1, savings: "45 min" },
  { date: "2025-01-19 18:00", suggestions: 4, applied: 3, savings: "2h + 45€" },
  { date: "2025-01-19 10:00", suggestions: 1, applied: 1, savings: "20 min" }
]

export default function TechnicienOptimisationPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [lastAnalysis, setLastAnalysis] = useState("Il y a 45 min")
  const [suggestions, setSuggestions] = useState(llmSuggestions)
  const [autoMode, setAutoMode] = useState(true)

  const runAnalysis = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setLastAnalysis("À l'instant")
    }, 3000)
  }

  const applySuggestion = (id: number) => {
    setSuggestions(suggestions.map(s => 
      s.id === id ? { ...s, applied: true } : s
    ))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-700 border-red-200"
      case "medium": return "bg-amber-100 text-amber-700 border-amber-200"
      case "low": return "bg-blue-100 text-blue-700 border-blue-200"
      default: return "bg-slate-100 text-slate-700"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "route": return Car
      case "availability": return Clock
      case "workload": return TrendingUp
      case "efficiency": return Zap
      default: return Brain
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            Optimisation IA du Planning
          </h1>
          <p className="text-[#8899aa]">
            Suggestions intelligentes pour optimiser vos trajets et votre temps
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => setAutoMode(!autoMode)}
          >
            {autoMode ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            Mode auto {autoMode ? "ON" : "OFF"}
          </Button>
          <Button 
            className="gap-2"
            onClick={runAnalysis}
            disabled={isAnalyzing}
          >
            <RefreshCw className={`h-4 w-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
            {isAnalyzing ? "Analyse en cours..." : "Analyser maintenant"}
          </Button>
        </div>
      </div>

      {/* Status */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                autoMode ? 'bg-emerald-100' : 'bg-slate-100'
              }`}>
                <Brain className={`h-5 w-5 ${autoMode ? 'text-emerald-600' : 'text-slate-400'}`} />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Mode automatique</p>
                <p className="font-bold">{autoMode ? "Actif" : "Désactivé"}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Dernière analyse</p>
                <p className="font-bold">{lastAnalysis}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Suggestions actives</p>
                <p className="font-bold">{suggestions.filter(s => !s.applied).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Temps économisé (sem.)</p>
                <p className="font-bold text-emerald-600">4h20</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Suggestions */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold">Suggestions d&apos;optimisation</h2>
          
          {suggestions.map((suggestion) => {
            const TypeIcon = getTypeIcon(suggestion.type)
            return (
              <Card 
                key={suggestion.id} 
                className={suggestion.applied ? "opacity-60" : ""}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      suggestion.applied ? 'bg-emerald-100' : 'bg-purple-100'
                    }`}>
                      {suggestion.applied ? (
                        <CheckCircle className="h-6 w-6 text-emerald-600" />
                      ) : (
                        <TypeIcon className="h-6 w-6 text-purple-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{suggestion.title}</h3>
                        <Badge className={getPriorityColor(suggestion.priority)}>
                          {suggestion.priority === "high" ? "Urgent" :
                           suggestion.priority === "medium" ? "Recommandé" : "Optionnel"}
                        </Badge>
                        {suggestion.applied && (
                          <Badge className="bg-emerald-100 text-emerald-700">
                            ✓ Appliqué
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-600 mb-2">{suggestion.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-emerald-600 font-medium">
                          💰 Économie: {suggestion.savings}
                        </span>
                        {!suggestion.applied && (
                          <Button 
                            size="sm" 
                            onClick={() => applySuggestion(suggestion.id)}
                          >
                            Appliquer
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Analysis Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Paramètres d&apos;analyse</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Fréquence d&apos;analyse</span>
                <select className="px-3 py-1 rounded-lg border text-sm">
                  <option>Toutes les heures</option>
                  <option>Toutes les 2h</option>
                  <option>Toutes les 4h</option>
                  <option>Manuel uniquement</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Optimiser les trajets</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Détecter créneaux libres</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Équilibrer charge équipe</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>

          {/* History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Historique</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {analysisHistory.map((analysis, index) => (
                  <div key={index} className="p-3 bg-slate-50 rounded-lg text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{analysis.date}</span>
                      <Badge variant="outline">{analysis.suggestions} suggestions</Badge>
                    </div>
                    <p className="text-slate-600">
                      {analysis.applied} appliquées • {analysis.savings} économisés
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Export */}
          <Card>
            <CardContent className="p-4">
              <Button variant="outline" className="w-full gap-2">
                <Download className="h-4 w-4" />
                Exporter le rapport
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* LLM Output Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Dernière analyse LLM</CardTitle>
          <CardDescription>Sortie brute de l&apos;analyse IA</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            readOnly
            className="font-mono text-sm min-h-[200px] bg-slate-900 text-emerald-400"
            value={`[2025-01-20 10:45:32] Analyse du planning en cours...
[2025-01-20 10:45:33] Chargement des interventions: 7 RDV cette semaine
[2025-01-20 10:45:33] Calcul des distances optimales...
[2025-01-20 10:45:34] Détection des créneaux libres...
[2025-01-20 10:45:35] Analyse de la charge de travail équipe...

=== RÉSUMÉ ===
✓ 4 suggestions générées
  - 2 optimisations de trajet
  - 1 créneau disponible détecté
  - 1 recommandation équilibre équipe

Économies potentielles estimées:
  - Temps: 1h45
  - Carburant: ~15€
  - CA additionnel possible: +150€

Prochaine analyse automatique: 11:45`}
          />
        </CardContent>
      </Card>
    </div>
  )
}

