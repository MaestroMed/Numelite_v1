"use client"

import { useState, useEffect } from "react"
import { Plus, Users, Edit, Trash2, Mail, Phone, Building, Eye, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FormModal, DeleteConfirm } from "@/components/admin"

interface Client {
  id: string
  email: string
  first_name: string | null
  last_name: string | null
  phone: string | null
  company: string | null
  address: string | null
  city: string | null
  postal_code: string | null
  source: string | null
  status: string
  notes: string | null
  total_spent: number
  created_at: string
}

const statuses = ["lead", "prospect", "client"]
const sources = ["Google Ads", "Organique", "Referral", "Réseaux sociaux", "Direct", "Autre"]

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    postal_code: "",
    source: "Direct",
    status: "lead",
    notes: "",
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      const res = await fetch("/api/clients")
      const data = await res.json()
      setClients(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching clients:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredClients = clients.filter((client) => {
    if (!search) return true
    const searchLower = search.toLowerCase()
    return (
      client.email.toLowerCase().includes(searchLower) ||
      (client.first_name?.toLowerCase() || "").includes(searchLower) ||
      (client.last_name?.toLowerCase() || "").includes(searchLower) ||
      (client.company?.toLowerCase() || "").includes(searchLower)
    )
  })

  const openCreateModal = () => {
    setSelectedClient(null)
    setFormData({
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      postal_code: "",
      source: "Direct",
      status: "lead",
      notes: "",
    })
    setIsModalOpen(true)
  }

  const openEditModal = (client: Client) => {
    setSelectedClient(client)
    setFormData({
      email: client.email,
      first_name: client.first_name || "",
      last_name: client.last_name || "",
      phone: client.phone || "",
      company: client.company || "",
      address: client.address || "",
      city: client.city || "",
      postal_code: client.postal_code || "",
      source: client.source || "Direct",
      status: client.status,
      notes: client.notes || "",
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async () => {
    setSaving(true)
    try {
      if (selectedClient) {
        await fetch(`/api/clients/${selectedClient.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      } else {
        await fetch("/api/clients", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      }
      setIsModalOpen(false)
      fetchClients()
    } catch (error) {
      console.error("Error saving client:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedClient) return
    setSaving(true)
    try {
      await fetch(`/api/clients/${selectedClient.id}`, { method: "DELETE" })
      setIsDeleteOpen(false)
      setSelectedClient(null)
      fetchClients()
    } catch (error) {
      console.error("Error deleting client:", error)
    } finally {
      setSaving(false)
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "lead": return "Lead"
      case "prospect": return "Prospect"
      case "client": return "Client"
      default: return status
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "lead": return "default"
      case "prospect": return "warning"
      case "client": return "success"
      default: return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Clients & Leads</h1>
          <p className="text-[#8899aa]">Gérez votre base de contacts</p>
        </div>
        <Button onClick={openCreateModal} className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau contact
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Total</p>
                <p className="text-2xl font-bold text-white">{clients.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Leads</p>
                <p className="text-2xl font-bold text-white">
                  {clients.filter(c => c.status === "lead").length}
                </p>
              </div>
              <Users className="h-8 w-8 text-amber-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Prospects</p>
                <p className="text-2xl font-bold text-white">
                  {clients.filter(c => c.status === "prospect").length}
                </p>
              </div>
              <Users className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Clients</p>
                <p className="text-2xl font-bold text-white">
                  {clients.filter(c => c.status === "client").length}
                </p>
              </div>
              <Users className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Clients List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Tous les contacts</CardTitle>
              <CardDescription>Liste de vos clients et leads</CardDescription>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg w-full sm:w-64">
              <Search className="h-4 w-4 text-[#8899aa]" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border-0 outline-none text-sm w-full text-white placeholder:text-[#667788]"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
          ) : filteredClients.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-[#667788] mx-auto mb-3" />
              <p className="text-[#8899aa]">
                {search ? "Aucun résultat" : "Aucun contact pour le moment"}
              </p>
              {!search && (
                <p className="text-sm text-[#667788]">Cliquez sur &quot;Nouveau contact&quot; pour commencer</p>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Contact</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Entreprise</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Source</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Statut</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Total dépensé</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                            {(client.first_name?.[0] || client.email[0]).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium text-white">
                              {client.first_name || client.last_name 
                                ? `${client.first_name || ""} ${client.last_name || ""}`.trim()
                                : client.email
                              }
                            </p>
                            <p className="text-sm text-[#8899aa]">{client.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-[#b8c4d0]">
                        {client.company || "-"}
                      </td>
                      <td className="py-3 px-4 text-[#8899aa]">
                        {client.source || "-"}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={getStatusVariant(client.status) as "default" | "secondary" | "success" | "warning" | "destructive"}>
                          {getStatusLabel(client.status)}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right text-white font-medium">
                        {client.total_spent > 0 ? `${client.total_spent}€` : "-"}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditModal(client)}
                            className="text-[#8899aa] hover:text-white hover:bg-white/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedClient(client)
                              setIsDeleteOpen(true)
                            }}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Modal */}
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedClient ? "Modifier le contact" : "Nouveau contact"}
        onSubmit={handleSubmit}
        isLoading={saving}
        size="xl"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first_name">Prénom</Label>
              <Input
                id="first_name"
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                placeholder="Jean"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="last_name">Nom</Label>
              <Input
                id="last_name"
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                placeholder="Dupont"
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jean@exemple.fr"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="06 12 34 56 78"
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="company">Entreprise</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Société XYZ"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="address">Adresse</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="123 rue de la Paix"
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">Ville</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="Paris"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="postal_code">Code postal</Label>
              <Input
                id="postal_code"
                value={formData.postal_code}
                onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
                placeholder="75001"
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="source">Source</Label>
              <select
                id="source"
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                className="mt-1 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                {sources.map((s) => (
                  <option key={s} value={s} className="bg-[#1a1f2e]">{s}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="status">Statut</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="mt-1 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                {statuses.map((s) => (
                  <option key={s} value={s} className="bg-[#1a1f2e]">{getStatusLabel(s)}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Notes sur le contact..."
              rows={3}
              className="mt-1"
            />
          </div>
        </div>
      </FormModal>

      {/* Delete Confirmation */}
      <DeleteConfirm
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDelete}
        isLoading={saving}
        title="Supprimer le contact"
        message={`Êtes-vous sûr de vouloir supprimer ce contact ? Cette action est irréversible.`}
      />
    </div>
  )
}
