"use client"

import { useState, useEffect } from "react"
import { Plus, Layers, Edit, Trash2, ToggleLeft, ToggleRight, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { FormModal, DeleteConfirm } from "@/components/admin"

interface Service {
  id: string
  name: string
  slug: string
  description: string | null
  short_description: string | null
  icon: string | null
  category: string
  price_from: number | null
  features: string[] | null
  active: boolean
  order_index: number
  created_at: string
}

const categories = ["Dépannage", "Création Web", "Maintenance", "Formation", "Conseil"]

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    short_description: "",
    category: "Dépannage",
    price_from: "",
    features: "",
    active: true,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/services")
      const data = await res.json()
      setServices(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching services:", error)
    } finally {
      setLoading(false)
    }
  }

  const openCreateModal = () => {
    setSelectedService(null)
    setFormData({
      name: "",
      slug: "",
      description: "",
      short_description: "",
      category: "Dépannage",
      price_from: "",
      features: "",
      active: true,
    })
    setIsModalOpen(true)
  }

  const openEditModal = (service: Service) => {
    setSelectedService(service)
    setFormData({
      name: service.name,
      slug: service.slug,
      description: service.description || "",
      short_description: service.short_description || "",
      category: service.category,
      price_from: service.price_from?.toString() || "",
      features: service.features?.join("\n") || "",
      active: service.active,
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async () => {
    setSaving(true)
    try {
      const payload = {
        name: formData.name,
        slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, "-"),
        description: formData.description || null,
        short_description: formData.short_description || null,
        category: formData.category,
        price_from: formData.price_from ? parseFloat(formData.price_from) : null,
        features: formData.features.split("\n").map(f => f.trim()).filter(Boolean),
        active: formData.active,
        order_index: selectedService?.order_index ?? services.length,
      }

      if (selectedService) {
        await fetch(`/api/services/${selectedService.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        await fetch("/api/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      setIsModalOpen(false)
      fetchServices()
    } catch (error) {
      console.error("Error saving service:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedService) return
    setSaving(true)
    try {
      await fetch(`/api/services/${selectedService.id}`, { method: "DELETE" })
      setIsDeleteOpen(false)
      setSelectedService(null)
      fetchServices()
    } catch (error) {
      console.error("Error deleting service:", error)
    } finally {
      setSaving(false)
    }
  }

  const toggleActive = async (service: Service) => {
    try {
      await fetch(`/api/services/${service.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !service.active }),
      })
      fetchServices()
    } catch (error) {
      console.error("Error toggling active:", error)
    }
  }

  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = []
    acc[service.category].push(service)
    return acc
  }, {} as Record<string, Service[]>)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Services</h1>
          <p className="text-[#8899aa]">Gérez vos services et prestations</p>
        </div>
        <Button onClick={openCreateModal} className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau service
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Total services</p>
                <p className="text-2xl font-bold text-white">{services.length}</p>
              </div>
              <Layers className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Actifs</p>
                <p className="text-2xl font-bold text-white">
                  {services.filter(s => s.active).length}
                </p>
              </div>
              <ToggleRight className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Catégories</p>
                <p className="text-2xl font-bold text-white">
                  {Object.keys(groupedServices).length}
                </p>
              </div>
              <Layers className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services List */}
      <Card>
        <CardHeader>
          <CardTitle>Tous les services</CardTitle>
          <CardDescription>Liste de vos services par catégorie</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
          ) : services.length === 0 ? (
            <div className="text-center py-12">
              <Layers className="h-12 w-12 text-[#667788] mx-auto mb-3" />
              <p className="text-[#8899aa]">Aucun service pour le moment</p>
              <p className="text-sm text-[#667788]">Cliquez sur &quot;Nouveau service&quot; pour commencer</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Catégorie</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Prix</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Statut</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-white">{service.name}</p>
                          <p className="text-sm text-[#8899aa] line-clamp-1">
                            {service.short_description || "Pas de description"}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary">{service.category}</Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {service.price_from ? (
                          <span className="text-white font-medium">
                            À partir de {service.price_from}€
                          </span>
                        ) : (
                          <span className="text-[#8899aa]">Sur devis</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button onClick={() => toggleActive(service)}>
                          <Badge variant={service.active ? "success" : "secondary"}>
                            {service.active ? "Actif" : "Inactif"}
                          </Badge>
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditModal(service)}
                            className="text-[#8899aa] hover:text-white hover:bg-white/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedService(service)
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
        title={selectedService ? "Modifier le service" : "Nouveau service"}
        onSubmit={handleSubmit}
        isLoading={saving}
        size="lg"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nom du service</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Dépannage PC"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="depannage-pc"
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Catégorie</Label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="mt-1 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#1a1f2e]">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="price_from">Prix à partir de (€)</Label>
              <Input
                id="price_from"
                type="number"
                value={formData.price_from}
                onChange={(e) => setFormData({ ...formData, price_from: e.target.value })}
                placeholder="49"
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="short_description">Description courte</Label>
            <Input
              id="short_description"
              value={formData.short_description}
              onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
              placeholder="Réparation rapide de votre ordinateur"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description complète</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Description détaillée du service..."
              rows={4}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="features">Caractéristiques (une par ligne)</Label>
            <Textarea
              id="features"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              placeholder="Diagnostic complet&#10;Réparation rapide&#10;Garantie 6 mois"
              rows={4}
              className="mt-1"
            />
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Service actif</Label>
              <p className="text-xs text-[#8899aa]">Visible sur le site et disponible à la vente</p>
            </div>
            <Switch
              checked={formData.active}
              onCheckedChange={(checked) => setFormData({ ...formData, active: checked })}
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
        title="Supprimer le service"
        message={`Êtes-vous sûr de vouloir supprimer le service "${selectedService?.name}" ? Cette action est irréversible.`}
      />
    </div>
  )
}
