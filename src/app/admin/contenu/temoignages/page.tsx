"use client"

import { useState, useEffect } from "react"
import { Plus, MessageSquare, Star, Edit, Trash2, Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { FormModal, DeleteConfirm } from "@/components/admin"

interface Testimonial {
  id: string
  name: string
  company: string | null
  role: string | null
  content: string
  rating: number
  avatar: string | null
  featured: boolean
  approved: boolean
  created_at: string
}

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Testimonial | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    content: "",
    rating: 5,
    featured: false,
    approved: true,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/testimonials")
      const data = await res.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching testimonials:", error)
    } finally {
      setLoading(false)
    }
  }

  const openCreateModal = () => {
    setSelectedItem(null)
    setFormData({
      name: "",
      company: "",
      role: "",
      content: "",
      rating: 5,
      featured: false,
      approved: true,
    })
    setIsModalOpen(true)
  }

  const openEditModal = (item: Testimonial) => {
    setSelectedItem(item)
    setFormData({
      name: item.name,
      company: item.company || "",
      role: item.role || "",
      content: item.content,
      rating: item.rating,
      featured: item.featured,
      approved: item.approved,
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async () => {
    setSaving(true)
    try {
      if (selectedItem) {
        await fetch(`/api/testimonials/${selectedItem.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      } else {
        await fetch("/api/testimonials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      }
      setIsModalOpen(false)
      fetchItems()
    } catch (error) {
      console.error("Error saving testimonial:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedItem) return
    setSaving(true)
    try {
      await fetch(`/api/testimonials/${selectedItem.id}`, { method: "DELETE" })
      setIsDeleteOpen(false)
      setSelectedItem(null)
      fetchItems()
    } catch (error) {
      console.error("Error deleting testimonial:", error)
    } finally {
      setSaving(false)
    }
  }

  const toggleApproval = async (item: Testimonial) => {
    try {
      await fetch(`/api/testimonials/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approved: !item.approved }),
      })
      fetchItems()
    } catch (error) {
      console.error("Error toggling approval:", error)
    }
  }

  const avgRating = items.length > 0
    ? (items.reduce((sum, i) => sum + i.rating, 0) / items.length).toFixed(1)
    : "0"

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Témoignages</h1>
          <p className="text-[#8899aa]">Gérez les avis clients</p>
        </div>
        <Button onClick={openCreateModal} className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau témoignage
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Total</p>
                <p className="text-2xl font-bold text-white">{items.length}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Approuvés</p>
                <p className="text-2xl font-bold text-white">
                  {items.filter(i => i.approved).length}
                </p>
              </div>
              <Check className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Note moyenne</p>
                <p className="text-2xl font-bold text-white">{avgRating}/5</p>
              </div>
              <Star className="h-8 w-8 text-amber-400 fill-amber-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Mis en avant</p>
                <p className="text-2xl font-bold text-white">
                  {items.filter(i => i.featured).length}
                </p>
              </div>
              <Star className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials List */}
      <Card>
        <CardHeader>
          <CardTitle>Tous les témoignages</CardTitle>
          <CardDescription>Liste des avis clients</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-[#667788] mx-auto mb-3" />
              <p className="text-[#8899aa]">Aucun témoignage pour le moment</p>
              <p className="text-sm text-[#667788]">Cliquez sur &quot;Nouveau témoignage&quot; pour commencer</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {item.name.charAt(0).toUpperCase()}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-white">{item.name}</h3>
                          {item.featured && (
                            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                          )}
                        </div>
                        
                        {(item.role || item.company) && (
                          <p className="text-sm text-[#8899aa] mb-2">
                            {item.role}
                            {item.role && item.company && " chez "}
                            {item.company}
                          </p>
                        )}
                        
                        {/* Stars */}
                        <div className="flex items-center gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= item.rating
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-[#667788]"
                              }`}
                            />
                          ))}
                        </div>
                        
                        <p className="text-[#b8c4d0]">&quot;{item.content}&quot;</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className="flex items-center gap-2">
                        <Badge variant={item.approved ? "success" : "warning"}>
                          {item.approved ? "Approuvé" : "En attente"}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleApproval(item)}
                          className={item.approved 
                            ? "text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            : "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                          }
                        >
                          {item.approved ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openEditModal(item)}
                          className="text-[#8899aa] hover:text-white hover:bg-white/10"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedItem(item)
                            setIsDeleteOpen(true)
                          }}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Modal */}
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedItem ? "Modifier le témoignage" : "Nouveau témoignage"}
        onSubmit={handleSubmit}
        isLoading={saving}
        size="lg"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nom du client</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Jean Dupont"
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="role">Fonction</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="Directeur"
                className="mt-1"
              />
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
          </div>
          
          <div>
            <Label>Note</Label>
            <div className="flex items-center gap-2 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= formData.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-[#667788]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="content">Témoignage</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Un excellent service..."
              rows={4}
              className="mt-1"
            />
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Mis en avant</Label>
              <p className="text-xs text-[#8899aa]">Afficher en priorité sur le site</p>
            </div>
            <Switch
              checked={formData.featured}
              onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
            />
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Approuvé</Label>
              <p className="text-xs text-[#8899aa]">Visible sur le site public</p>
            </div>
            <Switch
              checked={formData.approved}
              onCheckedChange={(checked) => setFormData({ ...formData, approved: checked })}
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
        title="Supprimer le témoignage"
        message={`Êtes-vous sûr de vouloir supprimer le témoignage de "${selectedItem?.name}" ? Cette action est irréversible.`}
      />
    </div>
  )
}
