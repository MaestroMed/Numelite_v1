"use client"

import { useState } from "react"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  User,
  MapPin,
  Phone,
  MoreHorizontal,
  Filter,
  Download,
  Maximize2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Simulation de données
const interventions = [
  {
    id: 1,
    title: "Dépannage PC - Virus",
    client: "Marie Dubois",
    address: "12 rue de Paris, 75015 Paris",
    phone: "06 12 34 56 78",
    date: new Date(),
    startTime: "09:00",
    endTime: "11:00",
    technician: "Thomas",
    status: "confirmed",
    type: "depannage"
  },
  {
    id: 2,
    title: "Installation réseau",
    client: "Cabinet PMC",
    address: "45 avenue Victor Hugo, 75016 Paris",
    phone: "01 23 45 67 89",
    date: new Date(),
    startTime: "14:00",
    endTime: "17:00",
    technician: "Thomas",
    status: "pending",
    type: "installation"
  },
  {
    id: 3,
    title: "Formation Excel",
    client: "Sophie Laurent",
    address: "8 place de la République, 75011 Paris",
    date: new Date(Date.now() + 86400000),
    startTime: "10:00",
    endTime: "12:00",
    technician: "Marie",
    status: "confirmed",
    type: "formation"
  },
  {
    id: 4,
    title: "Maintenance mensuelle",
    client: "Restaurant Le Gourmet",
    address: "22 rue du Commerce, 75015 Paris",
    date: new Date(Date.now() + 86400000),
    startTime: "14:00",
    endTime: "15:00",
    technician: "Thomas",
    status: "confirmed",
    type: "maintenance"
  },
  {
    id: 5,
    title: "Réparation écran",
    client: "Jean Petit",
    address: "156 boulevard Haussmann, 75008 Paris",
    date: new Date(Date.now() + 172800000),
    startTime: "09:00",
    endTime: "10:00",
    technician: "Marie",
    status: "pending",
    type: "depannage"
  }
]

const technicians = [
  { id: 1, name: "Thomas", color: "from-blue-500 to-cyan-400" },
  { id: 2, name: "Marie", color: "from-purple-500 to-pink-400" },
  { id: 3, name: "Lucas", color: "from-emerald-500 to-green-400" }
]

const hours = Array.from({ length: 11 }, (_, i) => i + 8) // 8h à 18h

export default function PlanningPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<"day" | "week" | "month">("week")
  const [selectedTechnician, setSelectedTechnician] = useState<string>("all")

  const getDaysInWeek = (date: Date) => {
    const start = new Date(date)
    start.setDate(start.getDate() - start.getDay() + 1) // Lundi
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(start)
      day.setDate(start.getDate() + i)
      return day
    })
  }

  const weekDays = getDaysInWeek(currentDate)

  const goToPrev = () => {
    const newDate = new Date(currentDate)
    if (view === "day") newDate.setDate(newDate.getDate() - 1)
    else if (view === "week") newDate.setDate(newDate.getDate() - 7)
    else newDate.setMonth(newDate.getMonth() - 1)
    setCurrentDate(newDate)
  }

  const goToNext = () => {
    const newDate = new Date(currentDate)
    if (view === "day") newDate.setDate(newDate.getDate() + 1)
    else if (view === "week") newDate.setDate(newDate.getDate() + 7)
    else newDate.setMonth(newDate.getMonth() + 1)
    setCurrentDate(newDate)
  }

  const formatDateRange = () => {
    if (view === "day") {
      return currentDate.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    } else if (view === "week") {
      const start = weekDays[0]
      const end = weekDays[6]
      return `${start.toLocaleDateString("fr-FR", { day: "numeric", month: "short" })} - ${end.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}`
    } else {
      return currentDate.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })
    }
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.toDateString() === date2.toDateString()
  }

  const getInterventionsForDay = (date: Date) => {
    return interventions.filter(i => isSameDay(i.date, date))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      case "pending": return "bg-amber-500/20 text-amber-400 border-amber-500/30"
      case "cancelled": return "bg-red-500/20 text-red-400 border-red-500/30"
      default: return "bg-white/10 text-[#b8c4d0] border-white/10"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "depannage": return "from-orange-500 to-amber-400"
      case "installation": return "from-blue-500 to-cyan-400"
      case "formation": return "from-purple-500 to-pink-400"
      case "maintenance": return "from-emerald-500 to-green-400"
      default: return "from-slate-500 to-slate-400"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Planning</h1>
          <p className="text-[#8899aa]">Gérez les interventions et rendez-vous</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
            <Filter className="h-4 w-4" />
            Filtrer
          </Button>
          <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
            <Download className="h-4 w-4" />
            Exporter
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nouvelle intervention
          </Button>
        </div>
      </div>

      {/* Calendar Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Navigation */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" onClick={goToPrev} className="text-[#8899aa] hover:text-white hover:bg-white/10">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={goToNext} className="text-[#8899aa] hover:text-white hover:bg-white/10">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <h2 className="text-lg font-semibold capitalize text-white">{formatDateRange()}</h2>
              <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())} className="border-white/20 text-white hover:bg-white/10">
                Aujourd&apos;hui
              </Button>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              {/* Technician filter */}
              <select 
                className="px-3 py-2 border border-white/10 rounded-lg text-sm bg-white/5 text-white"
                value={selectedTechnician}
                onChange={(e) => setSelectedTechnician(e.target.value)}
              >
                <option value="all">Tous les techniciens</option>
                {technicians.map(tech => (
                  <option key={tech.id} value={tech.name}>{tech.name}</option>
                ))}
              </select>

              {/* View buttons */}
              <div className="flex border border-white/10 rounded-lg overflow-hidden">
                {(["day", "week", "month"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      view === v 
                        ? "bg-blue-600 text-white" 
                        : "bg-white/5 text-[#8899aa] hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {v === "day" ? "Jour" : v === "week" ? "Semaine" : "Mois"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Grid - Week View */}
      {view === "week" && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Header - Days */}
                <div className="grid grid-cols-8 border-b border-white/10">
                  <div className="p-3 border-r border-white/10 bg-white/5" />
                  {weekDays.map((day, i) => (
                    <div 
                      key={i} 
                      className={`p-3 text-center border-r border-white/10 ${isToday(day) ? "bg-blue-500/10" : "bg-white/5"}`}
                    >
                      <p className="text-sm text-[#8899aa]">{day.toLocaleDateString("fr-FR", { weekday: "short" })}</p>
                      <p className={`text-lg font-bold ${isToday(day) ? "text-blue-400" : "text-white"}`}>
                        {day.getDate()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Time Grid */}
                <div className="relative">
                  {hours.map((hour) => (
                    <div key={hour} className="grid grid-cols-8 border-b border-white/5">
                      <div className="p-2 text-sm text-[#667788] border-r border-white/10 bg-white/5">
                        {`${hour}:00`}
                      </div>
                      {weekDays.map((day, dayIndex) => {
                        const dayInterventions = getInterventionsForDay(day)
                        const hourInterventions = dayInterventions.filter(i => {
                          const startHour = parseInt(i.startTime.split(":")[0])
                          return startHour === hour
                        })

                        return (
                          <div 
                            key={dayIndex} 
                            className={`p-1 min-h-[60px] border-r border-white/5 ${isToday(day) ? "bg-blue-500/5" : ""}`}
                          >
                            {hourInterventions.map((intervention) => {
                              const startHour = parseInt(intervention.startTime.split(":")[0])
                              const endHour = parseInt(intervention.endTime.split(":")[0])
                              const duration = endHour - startHour

                              return (
                                <div
                                  key={intervention.id}
                                  className={`p-2 rounded-lg border cursor-pointer hover:shadow-md transition-shadow ${getStatusColor(intervention.status)}`}
                                  style={{ minHeight: `${duration * 60 - 8}px` }}
                                >
                                  <div className="flex items-start gap-2">
                                    <div className={`w-1 h-full rounded-full bg-gradient-to-b ${getTypeColor(intervention.type)}`} />
                                    <div className="flex-1 min-w-0">
                                      <p className="font-medium text-sm truncate">{intervention.title}</p>
                                      <p className="text-xs opacity-80">{intervention.client}</p>
                                      <p className="text-xs opacity-60">{intervention.startTime} - {intervention.endTime}</p>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Day View */}
      {view === "day" && (
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Interventions du jour</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {getInterventionsForDay(currentDate).length === 0 ? (
                  <p className="text-center text-[#8899aa] py-8">Aucune intervention prévue ce jour</p>
                ) : (
                  getInterventionsForDay(currentDate).map((intervention) => (
                    <div key={intervention.id} className="flex gap-4 p-4 bg-white/5 rounded-xl">
                      <div className={`w-1 rounded-full bg-gradient-to-b ${getTypeColor(intervention.type)}`} />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-white">{intervention.title}</h3>
                            <p className="text-sm text-[#8899aa]">{intervention.client}</p>
                          </div>
                          <Badge className={getStatusColor(intervention.status)}>
                            {intervention.status === "confirmed" ? "Confirmé" : "En attente"}
                          </Badge>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-[#b8c4d0]">
                            <Clock className="h-4 w-4" />
                            {intervention.startTime} - {intervention.endTime}
                          </div>
                          <div className="flex items-center gap-2 text-[#b8c4d0]">
                            <User className="h-4 w-4" />
                            {intervention.technician}
                          </div>
                          <div className="flex items-center gap-2 text-[#b8c4d0] col-span-2">
                            <MapPin className="h-4 w-4" />
                            {intervention.address}
                          </div>
                          {intervention.phone && (
                            <div className="flex items-center gap-2 text-[#b8c4d0]">
                              <Phone className="h-4 w-4" />
                              {intervention.phone}
                            </div>
                          )}
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm">Voir détails</Button>
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">Modifier</Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Résumé du jour</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b8c4d0]">Interventions</span>
                    <span className="font-bold text-white">{getInterventionsForDay(currentDate).length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b8c4d0]">Confirmées</span>
                    <span className="font-bold text-emerald-400">
                      {getInterventionsForDay(currentDate).filter(i => i.status === "confirmed").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b8c4d0]">En attente</span>
                    <span className="font-bold text-amber-400">
                      {getInterventionsForDay(currentDate).filter(i => i.status === "pending").length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Techniciens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {technicians.map(tech => (
                    <div key={tech.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-sm`}>
                          {tech.name.charAt(0)}
                        </div>
                        <span className="font-medium text-white">{tech.name}</span>
                      </div>
                      <span className="text-sm text-[#8899aa]">
                        {interventions.filter(i => i.technician === tech.name && isSameDay(i.date, currentDate)).length} inter.
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Month View */}
      {view === "month" && (
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-7 gap-1">
              {/* Week days header */}
              {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-[#8899aa]">
                  {day}
                </div>
              ))}

              {/* Days grid */}
              {(() => {
                const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
                const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
                const startOffset = (firstDay.getDay() + 6) % 7 // Convert to Monday start
                const days = []

                // Previous month days
                for (let i = 0; i < startOffset; i++) {
                  const day = new Date(firstDay)
                  day.setDate(day.getDate() - (startOffset - i))
                  days.push({ date: day, isCurrentMonth: false })
                }

                // Current month days
                for (let i = 1; i <= lastDay.getDate(); i++) {
                  days.push({ date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i), isCurrentMonth: true })
                }

                // Next month days
                const remaining = 42 - days.length
                for (let i = 1; i <= remaining; i++) {
                  const day = new Date(lastDay)
                  day.setDate(day.getDate() + i)
                  days.push({ date: day, isCurrentMonth: false })
                }

                return days.map(({ date, isCurrentMonth }, i) => {
                  const dayInterventions = getInterventionsForDay(date)
                  return (
                    <div 
                      key={i} 
                      className={`min-h-[100px] p-2 border border-white/10 rounded-lg ${
                        isCurrentMonth ? "bg-white/5" : "bg-white/[0.02]"
                      } ${isToday(date) ? "ring-2 ring-blue-500" : ""}`}
                    >
                      <p className={`text-sm font-medium ${
                        isCurrentMonth ? (isToday(date) ? "text-blue-400" : "text-white") : "text-[#667788]"
                      }`}>
                        {date.getDate()}
                      </p>
                      <div className="mt-1 space-y-1">
                        {dayInterventions.slice(0, 2).map((intervention) => (
                          <div 
                            key={intervention.id}
                            className={`text-xs p-1 rounded truncate ${getStatusColor(intervention.status)}`}
                          >
                            {intervention.startTime} - {intervention.title}
                          </div>
                        ))}
                        {dayInterventions.length > 2 && (
                          <p className="text-xs text-[#8899aa]">+{dayInterventions.length - 2} autres</p>
                        )}
                      </div>
                    </div>
                  )
                })
              })()}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
