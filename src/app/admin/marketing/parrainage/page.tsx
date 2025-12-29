"use client"

import { useState } from "react"
import {
  Gift,
  Users,
  DollarSign,
  TrendingUp,
  Copy,
  MoreHorizontal,
  Edit,
  Search
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const referralConfig = {
  rewardParrain: 20,
  rewardFilleul: 10,
  minPurchase: 50,
  status: "active"
}

const topReferrers = [
  { id: 1, name: "Marie Dubois", email: "marie@exemple.fr", referrals: 12, earned: 240, pending: 2 },
  { id: 2, name: "Pierre Martin", email: "pierre@exemple.fr", referrals: 8, earned: 160, pending: 1 },
  { id: 3, name: "Sophie Laurent", email: "sophie@exemple.fr", referrals: 6, earned: 120, pending: 0 },
  { id: 4, name: "Jean Petit", email: "jean@exemple.fr", referrals: 5, earned: 100, pending: 1 },
  { id: 5, name: "Claire Dupont", email: "claire@exemple.fr", referrals: 4, earned: 80, pending: 0 }
]

const recentReferrals = [
  { id: 1, parrain: "Marie Dubois", filleul: "Thomas Bernard", date: "2025-01-20", status: "completed", amount: 89 },
  { id: 2, parrain: "Pierre Martin", filleul: "Julie Morel", date: "2025-01-19", status: "pending", amount: 0 },
  { id: 3, parrain: "Marie Dubois", filleul: "Luc Roux", date: "2025-01-18", status: "completed", amount: 49 },
  { id: 4, parrain: "Sophie Laurent", filleul: "Emma Blanc", date: "2025-01-17", status: "completed", amount: 990 },
  { id: 5, parrain: "Jean Petit", filleul: "Hugo Petit", date: "2025-01-15", status: "cancelled", amount: 0 }
]

export default function ParrainagePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const totalReferrals = topReferrers.reduce((acc, r) => acc + r.referrals, 0)
  const totalEarned = topReferrers.reduce((acc, r) => acc + r.earned, 0)
  const avgValue = totalEarned / totalReferrals

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Programme de Parrainage</h1>
          <p className="text-[#8899aa]">Gérez votre programme de parrainage client</p>
        </div>
        <Button className="gap-2">
          <Edit className="h-4 w-4" />
          Configurer
        </Button>
      </div>

      {/* Config Card */}
      <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Configuration actuelle</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/70 text-sm">Récompense parrain</p>
                  <p className="text-2xl font-bold">{referralConfig.rewardParrain}€</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Récompense filleul</p>
                  <p className="text-2xl font-bold">{referralConfig.rewardFilleul}€</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Badge className="bg-white/20 text-white border-0">
                Actif
              </Badge>
              <p className="text-white/70 text-sm mt-2">
                Achat minimum : {referralConfig.minPurchase}€
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Parrains actifs</p>
                <p className="text-2xl font-bold">{topReferrers.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Gift className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Parrainages réussis</p>
                <p className="text-2xl font-bold">{totalReferrals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Récompenses versées</p>
                <p className="text-2xl font-bold">{totalEarned}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Valeur moy. client</p>
                <p className="text-2xl font-bold">{avgValue.toFixed(0)}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Referrers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Parrains</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topReferrers.map((referrer, index) => (
                <div key={referrer.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                      index === 0 ? "bg-amber-500" :
                      index === 1 ? "bg-slate-400" :
                      index === 2 ? "bg-amber-700" :
                      "bg-slate-300"
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{referrer.name}</p>
                      <p className="text-sm text-[#8899aa]">{referrer.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{referrer.referrals} parrainages</p>
                    <p className="text-sm text-emerald-600">{referrer.earned}€ gagnés</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Referrals */}
        <Card>
          <CardHeader>
            <CardTitle>Parrainages récents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReferrals.map((referral) => (
                <div key={referral.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium">{referral.filleul}</p>
                    <p className="text-sm text-[#8899aa]">
                      Parrainé par {referral.parrain}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      referral.status === "completed" ? "success" :
                      referral.status === "pending" ? "warning" :
                      "secondary"
                    }>
                      {referral.status === "completed" ? "Validé" :
                       referral.status === "pending" ? "En attente" :
                       "Annulé"}
                    </Badge>
                    {referral.amount > 0 && (
                      <p className="text-sm text-[#8899aa] mt-1">
                        {referral.amount}€
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

