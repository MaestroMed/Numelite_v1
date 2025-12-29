"use client"

import { useState, useEffect } from "react"
import { Plus, FileText, Eye, Edit, Trash2, ExternalLink, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { FormModal, DeleteConfirm } from "@/components/admin"

interface Page {
  id: string
  title: string
  slug: string
  content: string | null
  seo_title: string | null
  seo_description: string | null
  published: boolean
  created_at: string
  updated_at: string
}

export default function PagesPage() {
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedPage, setSelectedPage] = useState<Page | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    seo_title: "",
    seo_description: "",
    published: false,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchPages()
  }, [])

  const fetchPages = async () => {
    try {
      const res = await fetch("/api/pages")
      const data = await res.json()
      setPages(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching pages:", error)
    } finally {
      setLoading(false)
    }
  }

  const openCreateModal = () => {
    setSelectedPage(null)
    setFormData({
      title: "",
      slug: "",
      content: "",
      seo_title: "",
      seo_description: "",
      published: false,
    })
    setIsModalOpen(true)
  }

  const openEditModal = (page: Page) => {
    setSelectedPage(page)
    setFormData({
      title: page.title,
      slug: page.slug,
      content: page.content || "",
      seo_title: page.seo_title || "",
      seo_description: page.seo_description || "",
      published: page.published,
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async () => {
    setSaving(true)
    try {
      const payload = {
        ...formData,
        slug: formData.slug || `/${formData.title.toLowerCase().replace(/\s+/g, "-")}`,
      }

      if (selectedPage) {
        await fetch(`/api/pages/${selectedPage.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        await fetch("/api/pages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      setIsModalOpen(false)
      fetchPages()
    } catch (error) {
      console.error("Error saving page:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedPage) return
    setSaving(true)
    try {
      await fetch(`/api/pages/${selectedPage.id}`, { method: "DELETE" })
      setIsDeleteOpen(false)
      setSelectedPage(null)
      fetchPages()
    } catch (error) {
      console.error("Error deleting page:", error)
    } finally {
      setSaving(false)
    }
  }

  const togglePublished = async (page: Page) => {
    try {
      await fetch(`/api/pages/${page.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !page.published }),
      })
      fetchPages()
    } catch (error) {
      console.error("Error toggling published:", error)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Pages</h1>
          <p className="text-[#8899aa]">Gérez les pages de votre site</p>
        </div>
        <Button onClick={openCreateModal} className="gap-2">
          <Plus className="h-4 w-4" />
          Nouvelle page
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Total pages</p>
                <p className="text-2xl font-bold text-white">{pages.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Publiées</p>
                <p className="text-2xl font-bold text-white">
                  {pages.filter(p => p.published).length}
                </p>
              </div>
              <Globe className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Brouillons</p>
                <p className="text-2xl font-bold text-white">
                  {pages.filter(p => !p.published).length}
                </p>
              </div>
              <FileText className="h-8 w-8 text-amber-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pages List */}
      <Card>
        <CardHeader>
          <CardTitle>Toutes les pages</CardTitle>
          <CardDescription>Liste des pages du site</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
          ) : pages.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-[#667788] mx-auto mb-3" />
              <p className="text-[#8899aa]">Aucune page pour le moment</p>
              <p className="text-sm text-[#667788]">Cliquez sur &quot;Nouvelle page&quot; pour commencer</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Page</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">URL</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Statut</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page) => (
                    <tr key={page.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-white">{page.title}</p>
                          <p className="text-sm text-[#8899aa]">
                            {page.seo_title || "Pas de titre SEO"}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <code className="text-sm text-[#b8c4d0] bg-white/5 px-2 py-1 rounded">
                          {page.slug}
                        </code>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button onClick={() => togglePublished(page)}>
                          <Badge variant={page.published ? "success" : "secondary"}>
                            {page.published ? "Publié" : "Brouillon"}
                          </Badge>
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="text-[#8899aa] hover:text-white hover:bg-white/10"
                          >
                            <a href={page.slug} target="_blank" rel="noopener noreferrer">
                              <Eye className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditModal(page)}
                            className="text-[#8899aa] hover:text-white hover:bg-white/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedPage(page)
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
        title={selectedPage ? "Modifier la page" : "Nouvelle page"}
        onSubmit={handleSubmit}
        isLoading={saving}
        size="xl"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Titre de la page</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Accueil"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="slug">URL (slug)</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="/accueil"
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="content">Contenu</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Contenu de la page..."
              rows={8}
              className="mt-1 font-mono text-sm"
            />
            <p className="text-xs text-[#667788] mt-1">
              Vous pouvez utiliser du HTML ou du Markdown
            </p>
          </div>
          
          <div className="border-t border-white/10 pt-4">
            <h4 className="font-medium text-white mb-3">Référencement (SEO)</h4>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="seo_title">Titre SEO</Label>
                <Input
                  id="seo_title"
                  value={formData.seo_title}
                  onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                  placeholder="Titre pour les moteurs de recherche"
                  className="mt-1"
                />
                <p className="text-xs text-[#667788] mt-1">
                  {formData.seo_title.length}/60 caractères recommandés
                </p>
              </div>
              
              <div>
                <Label htmlFor="seo_description">Méta description</Label>
                <Textarea
                  id="seo_description"
                  value={formData.seo_description}
                  onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                  placeholder="Description pour les moteurs de recherche"
                  rows={3}
                  className="mt-1"
                />
                <p className="text-xs text-[#667788] mt-1">
                  {formData.seo_description.length}/160 caractères recommandés
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-2 border-t border-white/10 pt-4">
            <div>
              <Label>Publier la page</Label>
              <p className="text-xs text-[#8899aa]">Rendre la page visible sur le site</p>
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
        title="Supprimer la page"
        message={`Êtes-vous sûr de vouloir supprimer la page "${selectedPage?.title}" ? Cette action est irréversible.`}
      />
    </div>
  )
}
