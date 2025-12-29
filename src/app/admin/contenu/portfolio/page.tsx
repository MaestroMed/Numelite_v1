"use client"

import { useState, useEffect } from "react"
import { Plus, FolderOpen, Eye, Edit, Trash2, ExternalLink, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { FormModal, DeleteConfirm } from "@/components/admin"

interface PortfolioItem {
  id: string
  title: string
  slug: string
  description: string | null
  category: string
  client_name: string | null
  project_url: string | null
  cover_image: string | null
  technologies: string[] | null
  featured: boolean
  published: boolean
  completed_at: string | null
  created_at: string
}

const categories = ["Site Vitrine", "E-commerce", "Application Web", "Dépannage", "Maintenance"]

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    category: "Site Vitrine",
    client_name: "",
    project_url: "",
    technologies: "",
    featured: false,
    published: false,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/portfolio")
      const data = await res.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching portfolio items:", error)
    } finally {
      setLoading(false)
    }
  }

  const openCreateModal = () => {
    setSelectedItem(null)
    setFormData({
      title: "",
      slug: "",
      description: "",
      category: "Site Vitrine",
      client_name: "",
      project_url: "",
      technologies: "",
      featured: false,
      published: false,
    })
    setIsModalOpen(true)
  }

  const openEditModal = (item: PortfolioItem) => {
    setSelectedItem(item)
    setFormData({
      title: item.title,
      slug: item.slug,
      description: item.description || "",
      category: item.category,
      client_name: item.client_name || "",
      project_url: item.project_url || "",
      technologies: item.technologies?.join(", ") || "",
      featured: item.featured,
      published: item.published,
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async () => {
    setSaving(true)
    try {
      const payload = {
        ...formData,
        technologies: formData.technologies.split(",").map(t => t.trim()).filter(Boolean),
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-"),
      }

      if (selectedItem) {
        await fetch(`/api/portfolio/${selectedItem.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        await fetch("/api/portfolio", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      setIsModalOpen(false)
      fetchItems()
    } catch (error) {
      console.error("Error saving portfolio item:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedItem) return
    setSaving(true)
    try {
      await fetch(`/api/portfolio/${selectedItem.id}`, { method: "DELETE" })
      setIsDeleteOpen(false)
      setSelectedItem(null)
      fetchItems()
    } catch (error) {
      console.error("Error deleting portfolio item:", error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
          <p className="text-[#8899aa]">Gérez vos réalisations et projets</p>
        </div>
        <Button onClick={openCreateModal} className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau projet
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Total projets</p>
                <p className="text-2xl font-bold text-white">{items.length}</p>
              </div>
              <FolderOpen className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Publiés</p>
                <p className="text-2xl font-bold text-white">
                  {items.filter(i => i.published).length}
                </p>
              </div>
              <Eye className="h-8 w-8 text-emerald-400" />
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
              <Star className="h-8 w-8 text-amber-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Tous les projets</CardTitle>
          <CardDescription>Liste de vos réalisations</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <FolderOpen className="h-12 w-12 text-[#667788] mx-auto mb-3" />
              <p className="text-[#8899aa]">Aucun projet pour le moment</p>
              <p className="text-sm text-[#667788]">Cliquez sur &quot;Nouveau projet&quot; pour commencer</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors"
                >
                  {/* Image placeholder */}
                  <div className="h-40 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                    <FolderOpen className="h-12 w-12 text-[#667788]" />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-medium text-white">{item.title}</h3>
                      {item.featured && (
                        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      )}
                    </div>
                    
                    <p className="text-sm text-[#8899aa] mb-3 line-clamp-2">
                      {item.description || "Aucune description"}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{item.category}</Badge>
                      <Badge variant={item.published ? "success" : "secondary"}>
                        {item.published ? "Publié" : "Brouillon"}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditModal(item)}
                        className="flex-1 text-[#8899aa] hover:text-white hover:bg-white/10"
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Modifier
                      </Button>
                      {item.project_url && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-[#8899aa] hover:text-white hover:bg-white/10"
                        >
                          <a href={item.project_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
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
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Modal */}
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedItem ? "Modifier le projet" : "Nouveau projet"}
        onSubmit={handleSubmit}
        isLoading={saving}
        size="lg"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Titre du projet</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Mon super projet"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="mon-super-projet"
              className="mt-1"
            />
          </div>
          
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
            <Label htmlFor="client_name">Nom du client</Label>
            <Input
              id="client_name"
              value={formData.client_name}
              onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
              placeholder="Entreprise XYZ"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="project_url">URL du projet</Label>
            <Input
              id="project_url"
              value={formData.project_url}
              onChange={(e) => setFormData({ ...formData, project_url: e.target.value })}
              placeholder="https://example.com"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="technologies">Technologies (séparées par des virgules)</Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="React, Next.js, Tailwind CSS"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Description du projet..."
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
              <Label>Publié</Label>
              <p className="text-xs text-[#8899aa]">Visible sur le site public</p>
            </div>
            <Switch
              checked={formData.published}
              onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
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
        title="Supprimer le projet"
        message={`Êtes-vous sûr de vouloir supprimer "${selectedItem?.title}" ? Cette action est irréversible.`}
      />
    </div>
  )
}

