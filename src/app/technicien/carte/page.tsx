"use client"

import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Car,
  Maximize2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const todayInterventions = [
  {
    id: 1,
    time: "09:00",
    client: "Marie Dubois",
    address: "12 rue de Paris, 75015 Paris",
    type: "Dépannage PC",
    status: "completed",
    lat: 48.8456,
    lng: 2.2878
  },
  {
    id: 2,
    time: "14:00",
    client: "Cabinet PMC",
    address: "45 avenue Victor Hugo, 75016 Paris",
    type: "Installation réseau",
    status: "current",
    lat: 48.8697,
    lng: 2.2847
  },
  {
    id: 3,
    time: "18:00",
    client: "Jean Petit",
    address: "8 rue du Commerce, 75015 Paris",
    type: "Réparation écran",
    status: "upcoming",
    lat: 48.8491,
    lng: 2.2934
  }
]

export default function CartePage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-emerald-600"
      case "current": return "text-amber-600"
      case "upcoming": return "text-blue-600"
      default: return "text-slate-600"
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case "completed": return "bg-emerald-100 border-emerald-300"
      case "current": return "bg-amber-100 border-amber-300"
      case "upcoming": return "bg-blue-100 border-blue-300"
      default: return "bg-slate-100 border-slate-300"
    }
  }

  const totalDistance = "12.5 km"
  const totalTime = "45 min"

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Carte du jour</h1>
          <p className="text-[#8899aa]">Visualisez et optimisez vos déplacements</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Car className="h-4 w-4" />
            Optimiser trajet
          </Button>
          <Button className="gap-2">
            <Navigation className="h-4 w-4" />
            Démarrer navigation
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <Card className="lg:col-span-2">
          <CardContent className="p-0">
            <div className="relative h-[600px] bg-slate-200 rounded-xl overflow-hidden">
              {/* Placeholder for map - in production would use Mapbox or Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-[#8899aa] text-lg">Carte interactive</p>
                  <p className="text-slate-400 text-sm">Intégration Google Maps / Mapbox</p>
                </div>
              </div>

              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button size="icon" variant="secondary" className="bg-white shadow-md">
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Route info overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-slate-400" />
                      <div>
                        <p className="text-sm text-[#8899aa]">Distance totale</p>
                        <p className="font-bold">{totalDistance}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-slate-400" />
                      <div>
                        <p className="text-sm text-[#8899aa]">Temps de trajet</p>
                        <p className="font-bold">{totalTime}</p>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="gap-2">
                    <Navigation className="h-4 w-4" />
                    GPS
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interventions List */}
        <Card>
          <CardHeader>
            <CardTitle>Interventions du jour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayInterventions.map((intervention, index) => (
                <div key={intervention.id}>
                  <div className={`p-4 rounded-xl border ${getStatusBg(intervention.status)}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        intervention.status === "completed" ? "bg-emerald-200 text-emerald-700" :
                        intervention.status === "current" ? "bg-amber-200 text-amber-700" :
                        "bg-blue-200 text-blue-700"
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{intervention.client}</p>
                        <p className="text-sm text-slate-600">{intervention.type}</p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(intervention.status)}>
                        {intervention.time}
                      </Badge>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-[#8899aa] pl-11">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{intervention.address}</span>
                    </div>

                    <div className="flex gap-2 mt-3 pl-11">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(intervention.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline" className="gap-1">
                          <Navigation className="h-3 w-3" />
                          Itinéraire
                        </Button>
                      </a>
                      <Button size="sm" variant="outline" className="gap-1">
                        <Phone className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < todayInterventions.length - 1 && (
                    <div className="flex items-center gap-2 py-2 pl-4">
                      <div className="w-0.5 h-8 bg-slate-200 ml-3.5" />
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Car className="h-3 w-3" />
                        <span>15 min • 4.2 km</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

