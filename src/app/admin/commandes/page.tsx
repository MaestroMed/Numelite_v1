"use client"

import { useState, useEffect } from "react"
import { Plus, ShoppingCart, Edit, Trash2, Eye, Search, DollarSign, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FormModal, DeleteConfirm } from "@/components/admin"

interface Order {
  id: string
  order_number: string
  client_id: string | null
  service_id: string | null
  status: string
  total_amount: number
  paid_amount: number
  payment_status: string
  notes: string | null
  created_at: string
  clients?: { first_name: string | null; last_name: string | null; email: string } | null
  services?: { name: string } | null
}

const orderStatuses = ["pending", "in_progress", "completed", "cancelled"]
const paymentStatuses = ["pending", "partial", "paid"]

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [formData, setFormData] = useState({
    status: "pending",
    total_amount: "",
    paid_amount: "",
    payment_status: "pending",
    notes: "",
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders")
      const data = await res.json()
      setOrders(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredOrders = orders.filter((order) => {
    if (!search) return true
    const searchLower = search.toLowerCase()
    return (
      order.order_number.toLowerCase().includes(searchLower) ||
      (order.clients?.email || "").toLowerCase().includes(searchLower) ||
      (order.services?.name || "").toLowerCase().includes(searchLower)
    )
  })

  const openEditModal = (order: Order) => {
    setSelectedOrder(order)
    setFormData({
      status: order.status,
      total_amount: order.total_amount.toString(),
      paid_amount: order.paid_amount.toString(),
      payment_status: order.payment_status,
      notes: order.notes || "",
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async () => {
    if (!selectedOrder) return
    setSaving(true)
    try {
      await fetch(`/api/orders/${selectedOrder.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          total_amount: parseFloat(formData.total_amount),
          paid_amount: parseFloat(formData.paid_amount),
        }),
      })
      setIsModalOpen(false)
      fetchOrders()
    } catch (error) {
      console.error("Error saving order:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedOrder) return
    setSaving(true)
    try {
      await fetch(`/api/orders/${selectedOrder.id}`, { method: "DELETE" })
      setIsDeleteOpen(false)
      setSelectedOrder(null)
      fetchOrders()
    } catch (error) {
      console.error("Error deleting order:", error)
    } finally {
      setSaving(false)
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending": return "En attente"
      case "in_progress": return "En cours"
      case "completed": return "Terminée"
      case "cancelled": return "Annulée"
      default: return status
    }
  }

  const getPaymentLabel = (status: string) => {
    switch (status) {
      case "pending": return "Non payée"
      case "partial": return "Partiel"
      case "paid": return "Payée"
      default: return status
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "pending": return "secondary"
      case "in_progress": return "warning"
      case "completed": return "success"
      case "cancelled": return "destructive"
      default: return "secondary"
    }
  }

  const getPaymentVariant = (status: string) => {
    switch (status) {
      case "pending": return "secondary"
      case "partial": return "warning"
      case "paid": return "success"
      default: return "secondary"
    }
  }

  const totalRevenue = orders.reduce((sum, o) => sum + o.paid_amount, 0)
  const pendingRevenue = orders.reduce((sum, o) => sum + (o.total_amount - o.paid_amount), 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Commandes</h1>
          <p className="text-[#8899aa]">Gérez vos commandes et factures</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Total commandes</p>
                <p className="text-2xl font-bold text-white">{orders.length}</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">CA encaissé</p>
                <p className="text-2xl font-bold text-white">{totalRevenue}€</p>
              </div>
              <DollarSign className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">En attente</p>
                <p className="text-2xl font-bold text-white">{pendingRevenue}€</p>
              </div>
              <Clock className="h-8 w-8 text-amber-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8899aa]">Terminées</p>
                <p className="text-2xl font-bold text-white">
                  {orders.filter(o => o.status === "completed").length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Toutes les commandes</CardTitle>
              <CardDescription>Liste de vos commandes</CardDescription>
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
          ) : filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-12 w-12 text-[#667788] mx-auto mb-3" />
              <p className="text-[#8899aa]">
                {search ? "Aucun résultat" : "Aucune commande pour le moment"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">N° Commande</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Client</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Service</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Montant</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Statut</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Paiement</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4">
                        <code className="text-sm text-white font-mono bg-white/5 px-2 py-1 rounded">
                          {order.order_number}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        {order.clients ? (
                          <div>
                            <p className="text-white">
                              {order.clients.first_name || order.clients.last_name 
                                ? `${order.clients.first_name || ""} ${order.clients.last_name || ""}`.trim()
                                : order.clients.email
                              }
                            </p>
                            <p className="text-sm text-[#8899aa]">{order.clients.email}</p>
                          </div>
                        ) : (
                          <span className="text-[#8899aa]">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-[#b8c4d0]">
                        {order.services?.name || "-"}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div>
                          <p className="text-white font-medium">{order.total_amount}€</p>
                          {order.paid_amount > 0 && order.paid_amount < order.total_amount && (
                            <p className="text-sm text-emerald-400">{order.paid_amount}€ payé</p>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={getStatusVariant(order.status) as "default" | "secondary" | "success" | "warning" | "destructive"}>
                          {getStatusLabel(order.status)}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={getPaymentVariant(order.payment_status) as "default" | "secondary" | "success" | "warning" | "destructive"}>
                          {getPaymentLabel(order.payment_status)}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditModal(order)}
                            className="text-[#8899aa] hover:text-white hover:bg-white/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedOrder(order)
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

      {/* Edit Modal */}
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modifier la commande"
        onSubmit={handleSubmit}
        isLoading={saving}
        size="lg"
      >
        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded-lg mb-4">
            <p className="text-sm text-[#8899aa]">Commande</p>
            <p className="text-lg font-mono text-white">{selectedOrder?.order_number}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="total_amount">Montant total (€)</Label>
              <Input
                id="total_amount"
                type="number"
                value={formData.total_amount}
                onChange={(e) => setFormData({ ...formData, total_amount: e.target.value })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="paid_amount">Montant payé (€)</Label>
              <Input
                id="paid_amount"
                type="number"
                value={formData.paid_amount}
                onChange={(e) => setFormData({ ...formData, paid_amount: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="status">Statut de la commande</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="mt-1 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                {orderStatuses.map((s) => (
                  <option key={s} value={s} className="bg-[#1a1f2e]">{getStatusLabel(s)}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="payment_status">Statut du paiement</Label>
              <select
                id="payment_status"
                value={formData.payment_status}
                onChange={(e) => setFormData({ ...formData, payment_status: e.target.value })}
                className="mt-1 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                {paymentStatuses.map((s) => (
                  <option key={s} value={s} className="bg-[#1a1f2e]">{getPaymentLabel(s)}</option>
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
              placeholder="Notes sur la commande..."
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
        title="Supprimer la commande"
        message={`Êtes-vous sûr de vouloir supprimer la commande ${selectedOrder?.order_number} ? Cette action est irréversible.`}
      />
    </div>
  )
}
