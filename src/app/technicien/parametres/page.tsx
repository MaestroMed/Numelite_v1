"use client"

import {
  User,
  Bell,
  MapPin,
  Smartphone,
  Clock,
  Calendar
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function TechnicienParametresPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Paramètres</h1>
        <p className="text-[#8899aa]">Gérez vos préférences et informations personnelles</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profil
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white text-2xl font-bold">
                T
              </div>
              <Button variant="outline">Modifier la photo</Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Prénom</Label>
                <Input defaultValue="Thomas" />
              </div>
              <div className="space-y-2">
                <Label>Nom</Label>
                <Input defaultValue="Martin" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" defaultValue="thomas@numelite.fr" />
            </div>

            <div className="space-y-2">
              <Label>Téléphone</Label>
              <Input type="tel" defaultValue="06 12 34 56 78" />
            </div>

            <Button>Enregistrer</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: "new-lead", label: "Nouveau lead", description: "Recevoir une notification pour chaque nouveau lead", enabled: true },
              { id: "rdv-reminder", label: "Rappel RDV", description: "30 min avant chaque intervention", enabled: true },
              { id: "planning-change", label: "Modification planning", description: "Quand le planning est modifié", enabled: true },
              { id: "message", label: "Message client", description: "Quand un client vous envoie un message", enabled: false },
              { id: "daily-summary", label: "Résumé quotidien", description: "Résumé de la journée à 19h", enabled: false }
            ].map((notif) => (
              <div key={notif.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">{notif.label}</p>
                  <p className="text-sm text-[#8899aa]">{notif.description}</p>
                </div>
                <Switch defaultChecked={notif.enabled} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Zones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Zones d&apos;intervention
            </CardTitle>
            <CardDescription>Définissez vos zones de travail préférées</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Adresse de base</Label>
              <Input defaultValue="75015 Paris" />
            </div>

            <div className="space-y-2">
              <Label>Rayon maximum (km)</Label>
              <Input type="number" defaultValue="25" />
            </div>

            <div className="space-y-2">
              <Label>Zones préférées</Label>
              <div className="flex flex-wrap gap-2">
                {["Paris 15e", "Paris 16e", "Paris 7e", "Boulogne", "Issy"].map((zone) => (
                  <span key={zone} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                    {zone} ✕
                  </span>
                ))}
                <Button variant="outline" size="sm">+ Ajouter</Button>
              </div>
            </div>

            <Button>Enregistrer</Button>
          </CardContent>
        </Card>

        {/* Disponibilités */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Disponibilités
            </CardTitle>
            <CardDescription>Définissez vos horaires de travail habituels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { day: "Lundi", start: "09:00", end: "18:00", enabled: true },
              { day: "Mardi", start: "09:00", end: "18:00", enabled: true },
              { day: "Mercredi", start: "09:00", end: "18:00", enabled: true },
              { day: "Jeudi", start: "09:00", end: "18:00", enabled: true },
              { day: "Vendredi", start: "09:00", end: "18:00", enabled: true },
              { day: "Samedi", start: "10:00", end: "14:00", enabled: false },
              { day: "Dimanche", start: "-", end: "-", enabled: false }
            ].map((day) => (
              <div key={day.day} className="flex items-center justify-between">
                <div className="flex items-center gap-3 w-24">
                  <Switch defaultChecked={day.enabled} />
                  <span className={day.enabled ? "font-medium" : "text-slate-400"}>{day.day}</span>
                </div>
                {day.enabled ? (
                  <div className="flex items-center gap-2">
                    <Input type="time" defaultValue={day.start} className="w-28" />
                    <span>-</span>
                    <Input type="time" defaultValue={day.end} className="w-28" />
                  </div>
                ) : (
                  <span className="text-slate-400">Non disponible</span>
                )}
              </div>
            ))}

            <Button className="mt-4">Enregistrer</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

