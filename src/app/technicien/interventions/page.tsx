"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  XCircle,
  Camera,
  FileText,
  Euro,
  Signature,
  Download
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const interventions = [
  {
    id: 1,
    date: "2025-01-20",
    time: "09:00 - 11:00",
    client: "Marie Dubois",
    address: "12 rue de Paris, 75015 Paris",
    phone: "06 12 34 56 78",
    type: "Dépannage PC - Virus",
    status: "completed",
    amount: 89,
    paid: true,
    notes: "Nettoyage complet effectué, installation antivirus",
    photos: 2
  },
  {
    id: 2,
    date: "2025-01-19",
    time: "14:00 - 16:00",
    client: "Restaurant Le Gourmet",
    address: "22 rue du Commerce, 75015 Paris",
    phone: "01 23 45 67 89",
    type: "Maintenance mensuelle",
    status: "completed",
    amount: 79,
    paid: true,
    notes: "Mises à jour système, sauvegarde effectuée",
    photos: 0
  },
  {
    id: 3,
    date: "2025-01-18",
    time: "10:00 - 12:00",
    client: "Cabinet PMC",
    address: "45 avenue Victor Hugo, 75016 Paris",
    phone: "01 23 45 67 89",
    type: "Installation réseau",
    status: "completed",
    amount: 290,
    paid: false,
    notes: "Câblage + configuration routeur",
    photos: 3
  },
  {
    id: 4,
    date: "2025-01-17",
    time: "16:00 - 17:00",
    client: "Jean Petit",
    address: "8 rue du Commerce, 75015 Paris",
    phone: "06 98 76 54 32",
    type: "Réparation écran",
    status: "cancelled",
    amount: 0,
    paid: false,
    notes: "Client absent au RDV",
    photos: 0
  },
  {
    id: 5,
    date: "2025-01-16",
    time: "09:00 - 10:00",
    client: "Sophie Laurent",
    address: "156 boulevard Haussmann, 75008 Paris",
    phone: "06 11 22 33 44",
    type: "Diagnostic",
    status: "completed",
    amount: 0,
    paid: false,
    notes: "Diagnostic effectué, devis envoyé pour remplacement SSD",
    photos: 1
  }
]

export default function InterventionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredInterventions = interventions.filter(i => {
    const matchesSearch = i.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         i.type.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || i.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalRevenue = interventions.filter(i => i.status === "completed").reduce((acc, i) => acc + i.amount, 0)
  const unpaidAmount = interventions.filter(i => i.status === "completed" && !i.paid).reduce((acc, i) => acc + i.amount, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Historique interventions</h1>
          <p className="text-[#8899aa]">Consultez et gérez vos interventions passées</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Exporter
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Ce mois</p>
            <p className="text-2xl font-bold">{interventions.filter(i => i.status === "completed").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Annulées</p>
            <p className="text-2xl font-bold text-red-600">{interventions.filter(i => i.status === "cancelled").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">CA total</p>
            <p className="text-2xl font-bold text-emerald-600">{totalRevenue}€</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">En attente paiement</p>
            <p className="text-2xl font-bold text-amber-600">{unpaidAmount}€</p>
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
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {["all", "completed", "cancelled"].map(status => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                >
                  {status === "all" ? "Toutes" : status === "completed" ? "Terminées" : "Annulées"}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interventions List */}
      <div className="space-y-4">
        {filteredInterventions.map((intervention) => (
          <Card key={intervention.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant={intervention.status === "completed" ? "success" : "secondary"}>
                      {intervention.status === "completed" ? (
                        <><CheckCircle className="h-3 w-3 mr-1" /> Terminée</>
                      ) : (
                        <><XCircle className="h-3 w-3 mr-1" /> Annulée</>
                      )}
                    </Badge>
                    {intervention.status === "completed" && !intervention.paid && (
                      <Badge className="bg-amber-100 text-amber-700">
                        <Euro className="h-3 w-3 mr-1" />
                        Non payé
                      </Badge>
                    )}
                    {intervention.photos > 0 && (
                      <Badge variant="outline">
                        <Camera className="h-3 w-3 mr-1" />
                        {intervention.photos} photos
                      </Badge>
                    )}
                  </div>

                  <h3 className="font-bold text-lg mb-1">{intervention.type}</h3>
                  <p className="text-slate-600 mb-3">{intervention.client}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-[#8899aa] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {intervention.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {intervention.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {intervention.address}
                    </span>
                  </div>

                  {intervention.notes && (
                    <p className="text-sm text-[#8899aa] italic">
                      📝 {intervention.notes}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end gap-3">
                  {intervention.amount > 0 && (
                    <span className="text-2xl font-bold text-emerald-600">{intervention.amount}€</span>
                  )}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-1">
                      <FileText className="h-4 w-4" />
                      Rapport
                    </Button>
                    {intervention.status === "completed" && !intervention.paid && (
                      <Button size="sm" className="gap-1 bg-emerald-600 hover:bg-emerald-700">
                        <Euro className="h-4 w-4" />
                        Encaisser
                      </Button>
                    )}
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

