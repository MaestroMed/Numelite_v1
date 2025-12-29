"use client"

import { useState, useEffect } from "react"
import { Plus, HelpCircle, Edit, Trash2, GripVertical, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { FormModal, DeleteConfirm } from "@/components/admin"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string | null
  order_index: number
  published: boolean
  created_at: string
}

const categories = ["Général", "Dépannage", "Sites Web", "Maintenance", "Tarifs", "Autre"]

export default function FAQPage() {
  const [items, setItems] = useState<FAQItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<FAQItem | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "Général",
    published: true,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/faq")
      const data = await res.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching FAQ items:", error)
    } finally {
      setLoading(false)
    }
  }

  const openCreateModal = () => {
    setSelectedItem(null)
    setFormData({
      question: "",
      answer: "",
      category: "Général",
      published: true,
    })
    setIsModalOpen(true)
  }

  const openEditModal = (item: FAQItem) => {
    setSelectedItem(item)
    setFormData({
      question: item.question,
      answer: item.answer,
      category: item.category || "Général",
      published: item.published,
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async () => {
    setSaving(true)
    try {
      const payload = {
        ...formData,
        order_index: selectedItem?.order_index ?? items.length,
      }

      if (selectedItem) {
        await fetch(`/api/faq/${selectedItem.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        await fetch("/api/faq", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      setIsModalOpen(false)
      fetchItems()
    } catch (error) {
      console.error("Error saving FAQ item:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedItem) return
    setSaving(true)
    try {
      await fetch(`/api/faq/${selectedItem.id}`, { method: "DELETE" })
      setIsDeleteOpen(false)
      setSelectedItem(null)
      fetchItems()
    } catch (error) {
      console.error("Error deleting FAQ item:", error)
    } finally {
      setSaving(false)
    }
  }

  const moveItem = async (item: FAQItem, direction: "up" | "down") => {
    const currentIndex = items.findIndex(i => i.id === item.id)
    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1
    
    if (newIndex < 0 || newIndex >= items.length) return
    
    const otherItem = items[newIndex]
    
    try {
      await Promise.all([
        fetch(`/api/faq/${item.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order_index: otherItem.order_index }),
        }),
        fetch(`/api/faq/${otherItem.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order_index: item.order_index }),
        }),
      ])
      fetchItems()
    } catch (error) {
      console.error("Error reordering FAQ items:", error)
    }
  }

  const groupedItems = items.reduce((acc, item) => {
    const cat = item.category || "Autre"
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(item)
    return acc
  }, {} as Record<string, FAQItem[]>)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">FAQ</h1>
          <p className="text-[#8899aa]">Gérez les questions fréquentes</p>
        </div>
        <Button onClick={openCreateModal} className="gap-2">
          <Plus className="h-4 w-4" />
          Nouvelle question
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Total questions</p>
                <p className="text-2xl font-bold text-white">{items.length}</p>
              </div>
              <HelpCircle className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Publiées</p>
                <p className="text-2xl font-bold text-white">
                  {items.filter(i => i.published).length}
                </p>
              </div>
              <HelpCircle className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Catégories</p>
                <p className="text-2xl font-bold text-white">
                  {Object.keys(groupedItems).length}
                </p>
              </div>
              <HelpCircle className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ List */}
      <Card>
        <CardHeader>
          <CardTitle>Toutes les questions</CardTitle>
          <CardDescription>Cliquez sur une question pour voir la réponse</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-[#667788] mx-auto mb-3" />
              <p className="text-[#8899aa]">Aucune question pour le moment</p>
              <p className="text-sm text-[#667788]">Cliquez sur &quot;Nouvelle question&quot; pour commencer</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
                >
                  <div
                    className="flex items-center gap-3 p-4 cursor-pointer hover:bg-white/5"
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  >
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          moveItem(item, "up")
                        }}
                        disabled={index === 0}
                        className="p-1 hover:bg-white/10 rounded disabled:opacity-30"
                      >
                        <ChevronUp className="h-3 w-3 text-[#8899aa]" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          moveItem(item, "down")
                        }}
                        disabled={index === items.length - 1}
                        className="p-1 hover:bg-white/10 rounded disabled:opacity-30"
                      >
                        <ChevronDown className="h-3 w-3 text-[#8899aa]" />
                      </button>
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-medium text-white">{item.question}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{item.category || "Autre"}</Badge>
                        <Badge variant={item.published ? "success" : "secondary"}>
                          {item.published ? "Publié" : "Brouillon"}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          openEditModal(item)
                        }}
                        className="text-[#8899aa] hover:text-white hover:bg-white/10"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedItem(item)
                          setIsDeleteOpen(true)
                        }}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <ChevronDown
                        className={`h-5 w-5 text-[#8899aa] transition-transform ${
                          expandedId === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  
                  {expandedId === item.id && (
                    <div className="px-4 pb-4 pt-2 border-t border-white/10">
                      <p className="text-[#b8c4d0] whitespace-pre-wrap">{item.answer}</p>
                    </div>
                  )}
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
        title={selectedItem ? "Modifier la question" : "Nouvelle question"}
        onSubmit={handleSubmit}
        isLoading={saving}
        size="lg"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="question">Question</Label>
            <Input
              id="question"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              placeholder="Comment puis-je..."
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
            <Label htmlFor="answer">Réponse</Label>
            <Textarea
              id="answer"
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              placeholder="La réponse à cette question..."
              rows={6}
              className="mt-1"
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
        title="Supprimer la question"
        message="Êtes-vous sûr de vouloir supprimer cette question ? Cette action est irréversible."
      />
    </div>
  )
}
