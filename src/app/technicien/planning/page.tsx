"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  Phone,
  User,
  Zap,
  RefreshCw,
  Download
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const weekDays = [
  { date: "Lun 20", fullDate: "2025-01-20", isToday: true },
  { date: "Mar 21", fullDate: "2025-01-21", isToday: false },
  { date: "Mer 22", fullDate: "2025-01-22", isToday: false },
  { date: "Jeu 23", fullDate: "2025-01-23", isToday: false },
  { date: "Ven 24", fullDate: "2025-01-24", isToday: false },
  { date: "Sam 25", fullDate: "2025-01-25", isToday: false },
  { date: "Dim 26", fullDate: "2025-01-26", isToday: false }
]

const interventions = {
  "2025-01-20": [
    { id: 1, time: "09:00", duration: 2, client: "Marie Dubois", type: "Dépannage PC", zone: "Paris 15e", status: "completed" },
    { id: 2, time: "14:00", duration: 3, client: "Cabinet PMC", type: "Installation réseau", zone: "Paris 16e", status: "current" },
    { id: 3, time: "18:00", duration: 1, client: "Jean Petit", type: "Réparation écran", zone: "Paris 15e", status: "upcoming" }
  ],
  "2025-01-21": [
    { id: 4, time: "10:00", duration: 2, client: "Restaurant Le Gourmet", type: "Maintenance", zone: "Paris 15e", status: "upcoming" },
    { id: 5, time: "15:00", duration: 2, client: "Sophie Laurent", type: "Installation SSD", zone: "Paris 8e", status: "upcoming" }
  ],
  "2025-01-22": [
    { id: 6, time: "09:00", duration: 3, client: "Entreprise Alpha", type: "Audit réseau", zone: "Boulogne", status: "upcoming" }
  ],
  "2025-01-23": [],
  "2025-01-24": [
    { id: 7, time: "14:00", duration: 2, client: "Pierre Martin", type: "Dépannage virus", zone: "Paris 11e", status: "upcoming" }
  ],
  "2025-01-25": [],
  "2025-01-26": []
}

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]

const llmSuggestions = [
  {
    type: "optimization",
    message: "RDV du 21/01 à 15h à Paris 8e pourrait être regroupé avec le RDV du 20/01 à 18h à Paris 15e (28min de trajet).",
    savings: "45 min"
  },
  {
    type: "availability",
    message: "Créneau libre le 23/01 - Proposer aux leads en attente ?",
    action: "Planifier"
  }
]

export default function TechnicienPlanningPage() {
  const [selectedDate, setSelectedDate] = useState("2025-01-20")

  const getInterventionStyle = (intervention: any) => {
    const startHour = parseInt(intervention.time.split(":")[0])
    const top = (startHour - 8) * 60
    const height = intervention.duration * 60 - 4

    let bg = "bg-blue-100 border-blue-300 text-blue-800"
    if (intervention.status === "completed") bg = "bg-emerald-100 border-emerald-300 text-emerald-800"
    if (intervention.status === "current") bg = "bg-amber-100 border-amber-300 text-amber-800"

    return { top: `${top}px`, height: `${height}px`, bg }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Planning</h1>
          <p className="text-[#8899aa]">Semaine du 20 au 26 Janvier 2025</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exporter
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Ajouter
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Calendar */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <div className="flex gap-1 overflow-x-auto">
              {weekDays.map((day) => (
                <button
                  key={day.fullDate}
                  onClick={() => setSelectedDate(day.fullDate)}
                  className={`flex-1 min-w-[80px] p-3 rounded-xl text-center transition-colors ${
                    selectedDate === day.fullDate
                      ? "bg-blue-600 text-white"
                      : day.isToday
                        ? "bg-blue-100 text-blue-700"
                        : "bg-white/5 hover:bg-slate-100"
                  }`}
                >
                  <p className="text-sm font-medium">{day.date}</p>
                  <p className="text-xs opacity-70">
                    {(interventions as any)[day.fullDate]?.length || 0} RDV
                  </p>
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            {/* Time Grid */}
            <div className="relative mt-4" style={{ height: "720px" }}>
              {/* Time labels */}
              <div className="absolute left-0 top-0 w-12 h-full">
                {timeSlots.map((time, index) => (
                  <div
                    key={time}
                    className="absolute text-xs text-slate-400 -translate-y-2"
                    style={{ top: `${index * 60}px` }}
                  >
                    {time}
                  </div>
                ))}
              </div>

              {/* Grid lines */}
              <div className="absolute left-14 right-0 top-0 h-full">
                {timeSlots.map((_, index) => (
                  <div
                    key={index}
                    className="absolute left-0 right-0 border-t border-slate-100"
                    style={{ top: `${index * 60}px` }}
                  />
                ))}

                {/* Interventions */}
                {(interventions as any)[selectedDate]?.map((intervention: any) => {
                  const style = getInterventionStyle(intervention)
                  return (
                    <div
                      key={intervention.id}
                      className={`absolute left-0 right-0 mx-2 p-3 rounded-lg border-l-4 cursor-pointer hover:shadow-md transition-shadow ${style.bg}`}
                      style={{ top: style.top, height: style.height }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{intervention.type}</span>
                        <Badge variant="outline" className="text-xs">
                          {intervention.status === "completed" ? "Terminé" :
                           intervention.status === "current" ? "En cours" : intervention.time}
                        </Badge>
                      </div>
                      <p className="text-sm opacity-80">{intervention.client}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs opacity-70">
                        <MapPin className="h-3 w-3" />
                        {intervention.zone}
                      </div>
                    </div>
                  )
                })}

                {/* Current time indicator */}
                <div
                  className="absolute left-0 right-0 flex items-center"
                  style={{ top: "180px" }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <div className="flex-1 h-0.5 bg-red-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* LLM Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-amber-500" />
                Suggestions IA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {llmSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg text-sm ${
                    suggestion.type === "optimization"
                      ? "bg-amber-50 border border-amber-200"
                      : "bg-blue-50 border border-blue-200"
                  }`}
                >
                  <p className={suggestion.type === "optimization" ? "text-amber-800" : "text-blue-800"}>
                    {suggestion.message}
                  </p>
                  {suggestion.savings && (
                    <p className="mt-1 font-medium text-amber-600">
                      Économie: {suggestion.savings}
                    </p>
                  )}
                  <Button size="sm" className="mt-2 w-full" variant="outline">
                    {suggestion.action || "Appliquer"}
                  </Button>
                </div>
              ))}

              <Button variant="outline" className="w-full gap-2">
                <RefreshCw className="h-4 w-4" />
                Actualiser
              </Button>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cette semaine</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#b8c4d0]">Interventions</span>
                  <span className="font-bold">7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b8c4d0]">Heures prévues</span>
                  <span className="font-bold">15h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b8c4d0]">CA estimé</span>
                  <span className="font-bold text-emerald-600">680€</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b8c4d0]">Km estimés</span>
                  <span className="font-bold">45 km</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

