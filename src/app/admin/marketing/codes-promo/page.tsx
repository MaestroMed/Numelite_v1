"use client"

import { useState, useEffect } from "react"
import { Plus, Tag, Edit, Trash2, Copy, Check, Percent, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { FormModal, DeleteConfirm } from "@/components/admin"

interface PromoCode {
  id: string
  code: string
  description: string | null
  discount_type: string
  discount_value: number
  min_purchase: number | null
  max_uses: number | null
  used_count: number
  valid_from: string
  valid_until: string
  active: boolean
  created_at: string
}

export default function PromoCodesPage() {
  const [codes, setCodes] = useState<PromoCode[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedCode, setSelectedCode] = useState<PromoCode | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    code: "",
    description: "",
    discount_type: "percentage",
    discount_value: "",
    min_purchase: "",
    max_uses: "",
    valid_from: "",
    valid_until: "",
    active: true,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchCodes()
  }, [])

  const fetchCodes = async () => {
    try {
      const res = await fetch("/api/promo-codes")
      const data = await res.json()
      setCodes(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching promo codes:", error)
    } finally {
      setLoading(false)
    }
  }

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const openCreateModal = () => {
    setSelectedCode(null)
    const now = new Date()
    const nextMonth = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
    setFormData({
      code: "",
      description: "",
      discount_type: "percentage",
      discount_value: "",
      min_purchase: "",
      max_uses: "",
      valid_from: now.toISOString().split("T")[0],
      valid_until: nextMonth.toISOString().split("T")[0],
      active: true,
    })
    setIsModalOpen(true)
  }

  const openEditModal = (code: PromoCode) => {
    setSelectedCode(code)
    setFormData({
      code: code.code,
      description: code.description || "",
      discount_type: code.discount_type,
      discount_value: code.discount_value.toString(),
      min_purchase: code.min_purchase?.toString() || "",
      max_uses: code.max_uses?.toString() || "",
      valid_from: code.valid_from.split("T")[0],
      valid_until: code.valid_until.split("T")[0],
      active: code.active,
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async () => {
    setSaving(true)
    try {
      const payload = {
        code: formData.code.toUpperCase(),
        description: formData.description || null,
        discount_type: formData.discount_type,
        discount_value: parseFloat(formData.discount_value),
        min_purchase: formData.min_purchase ? parseFloat(formData.min_purchase) : null,
        max_uses: formData.max_uses ? parseInt(formData.max_uses) : null,
        valid_from: formData.valid_from,
        valid_until: formData.valid_until,
        active: formData.active,
      }

      if (selectedCode) {
        await fetch(`/api/promo-codes/${selectedCode.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        await fetch("/api/promo-codes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      setIsModalOpen(false)
      fetchCodes()
    } catch (error) {
      console.error("Error saving promo code:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedCode) return
    setSaving(true)
    try {
      await fetch(`/api/promo-codes/${selectedCode.id}`, { method: "DELETE" })
      setIsDeleteOpen(false)
      setSelectedCode(null)
      fetchCodes()
    } catch (error) {
      console.error("Error deleting promo code:", error)
    } finally {
      setSaving(false)
    }
  }

  const toggleActive = async (code: PromoCode) => {
    try {
      await fetch(`/api/promo-codes/${code.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !code.active }),
      })
      fetchCodes()
    } catch (error) {
      console.error("Error toggling active:", error)
    }
  }

  const isExpired = (code: PromoCode) => new Date(code.valid_until) < new Date()
  const isNotStarted = (code: PromoCode) => new Date(code.valid_from) > new Date()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Codes Promo</h1>
          <p className="text-[#8899aa]">Gérez vos codes promotionnels</p>
        </div>
        <Button onClick={openCreateModal} className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau code
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Total codes</p>
                <p className="text-2xl font-bold text-white">{codes.length}</p>
              </div>
              <Tag className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Actifs</p>
                <p className="text-2xl font-bold text-white">
                  {codes.filter(c => c.active && !isExpired(c)).length}
                </p>
              </div>
              <Tag className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Utilisations totales</p>
                <p className="text-2xl font-bold text-white">
                  {codes.reduce((sum, c) => sum + c.used_count, 0)}
                </p>
              </div>
              <Tag className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Codes List */}
      <Card>
        <CardHeader>
          <CardTitle>Tous les codes</CardTitle>
          <CardDescription>Liste de vos codes promotionnels</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-[#8899aa]">Chargement...</div>
          ) : codes.length === 0 ? (
            <div className="text-center py-12">
              <Tag className="h-12 w-12 text-[#667788] mx-auto mb-3" />
              <p className="text-[#8899aa]">Aucun code promo pour le moment</p>
              <p className="text-sm text-[#667788]">Cliquez sur &quot;Nouveau code&quot; pour commencer</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Code</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Réduction</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Utilisations</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Validité</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Statut</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {codes.map((code) => (
                    <tr key={code.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <code className="text-lg font-mono font-bold text-white bg-white/5 px-3 py-1 rounded">
                            {code.code}
                          </code>
                          <button
                            onClick={() => copyCode(code.code, code.id)}
                            className="p-1 hover:bg-white/10 rounded transition-colors"
                          >
                            {copiedId === code.id ? (
                              <Check className="h-4 w-4 text-emerald-400" />
                            ) : (
                              <Copy className="h-4 w-4 text-[#8899aa]" />
                            )}
                          </button>
                        </div>
                        {code.description && (
                          <p className="text-sm text-[#8899aa] mt-1">{code.description}</p>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {code.discount_type === "percentage" ? (
                            <>
                              <Percent className="h-4 w-4 text-blue-400" />
                              <span className="text-white font-medium">{code.discount_value}%</span>
                            </>
                          ) : (
                            <>
                              <DollarSign className="h-4 w-4 text-emerald-400" />
                              <span className="text-white font-medium">{code.discount_value}€</span>
                            </>
                          )}
                        </div>
                        {code.min_purchase && (
                          <p className="text-xs text-[#8899aa]">Min. {code.min_purchase}€</p>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="text-white font-medium">{code.used_count}</span>
                        {code.max_uses && (
                          <span className="text-[#8899aa]">/{code.max_uses}</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm text-[#b8c4d0]">
                          Du {new Date(code.valid_from).toLocaleDateString("fr-FR")}
                        </p>
                        <p className="text-sm text-[#b8c4d0]">
                          Au {new Date(code.valid_until).toLocaleDateString("fr-FR")}
                        </p>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button onClick={() => toggleActive(code)}>
                          {isExpired(code) ? (
                            <Badge variant="destructive">Expiré</Badge>
                          ) : isNotStarted(code) ? (
                            <Badge variant="warning">Programmé</Badge>
                          ) : code.active ? (
                            <Badge variant="success">Actif</Badge>
                          ) : (
                            <Badge variant="secondary">Inactif</Badge>
                          )}
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditModal(code)}
                            className="text-[#8899aa] hover:text-white hover:bg-white/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedCode(code)
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
        title={selectedCode ? "Modifier le code" : "Nouveau code promo"}
        onSubmit={handleSubmit}
        isLoading={saving}
        size="lg"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="code">Code promo</Label>
            <Input
              id="code"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
              placeholder="PROMO2024"
              className="mt-1 font-mono uppercase"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Réduction de printemps"
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="discount_type">Type de réduction</Label>
              <select
                id="discount_type"
                value={formData.discount_type}
                onChange={(e) => setFormData({ ...formData, discount_type: e.target.value })}
                className="mt-1 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                <option value="percentage" className="bg-[#1a1f2e]">Pourcentage (%)</option>
                <option value="fixed" className="bg-[#1a1f2e]">Montant fixe (€)</option>
              </select>
            </div>
            <div>
              <Label htmlFor="discount_value">Valeur</Label>
              <Input
                id="discount_value"
                type="number"
                value={formData.discount_value}
                onChange={(e) => setFormData({ ...formData, discount_value: e.target.value })}
                placeholder="10"
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="min_purchase">Montant min. d&apos;achat (€)</Label>
              <Input
                id="min_purchase"
                type="number"
                value={formData.min_purchase}
                onChange={(e) => setFormData({ ...formData, min_purchase: e.target.value })}
                placeholder="50"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="max_uses">Nombre max d&apos;utilisations</Label>
              <Input
                id="max_uses"
                type="number"
                value={formData.max_uses}
                onChange={(e) => setFormData({ ...formData, max_uses: e.target.value })}
                placeholder="100"
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="valid_from">Date de début</Label>
              <Input
                id="valid_from"
                type="date"
                value={formData.valid_from}
                onChange={(e) => setFormData({ ...formData, valid_from: e.target.value })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="valid_until">Date de fin</Label>
              <Input
                id="valid_until"
                type="date"
                value={formData.valid_until}
                onChange={(e) => setFormData({ ...formData, valid_until: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <Label>Code actif</Label>
              <p className="text-xs text-[#8899aa]">Peut être utilisé par les clients</p>
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
        title="Supprimer le code promo"
        message={`Êtes-vous sûr de vouloir supprimer le code "${selectedCode?.code}" ? Cette action est irréversible.`}
      />
    </div>
  )
}
