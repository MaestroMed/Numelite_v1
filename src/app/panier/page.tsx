"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  CreditCard,
  Shield,
  Gift,
  Clock,
  CheckCircle,
  Tag,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Star,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

// Mock cart items
const initialCartItems = [
  {
    id: 1,
    name: "Intervention Standard",
    description: "Dépannage informatique à domicile",
    price: 89,
    quantity: 1,
    type: "service"
  }
]

const promoOffers = [
  {
    title: "Pack Sérénité",
    description: "Ajoutez 3 mois de support prioritaire",
    price: 49,
    originalPrice: 79,
    badge: "-38%"
  },
  {
    title: "Formation 1h",
    description: "Apprenez à optimiser votre PC",
    price: 39,
    originalPrice: 49,
    badge: "Populaire"
  }
]

const testimonials = [
  { name: "Marie D.", text: "Intervention rapide et efficace !", rating: 5 },
  { name: "Pierre M.", text: "Technicien très professionnel", rating: 5 }
]

export default function PanierPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const discount = 0
  const total = subtotal - discount

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0d10] via-[#0f1419] to-[#1a1f26]">
      {/* Hero */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 70% 80%, rgba(34, 211, 238, 0.2) 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Votre Panier</h1>
              <p className="text-slate-400">{cartItems.length} article{cartItems.length > 1 ? 's' : ''}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Items */}
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                      <p className="text-slate-400 mb-4">Votre panier est vide</p>
                      <Link href="/tarifs">
                        <Button>Découvrir nos services</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div 
                          key={item.id} 
                          className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                        >
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                            <Zap className="h-8 w-8 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-white">{item.name}</h3>
                            <p className="text-sm text-slate-400">{item.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-white">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-white">{item.price * item.quantity}€</p>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1"
                            >
                              <Trash2 className="h-3 w-3" />
                              Retirer
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Promo Offers */}
              <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-xl border-amber-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Gift className="h-5 w-5 text-amber-400" />
                    Offres recommandées pour vous
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {promoOffers.map((offer, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-amber-500/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                            {offer.badge}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-white mb-1">{offer.title}</h4>
                        <p className="text-sm text-slate-400 mb-3">{offer.description}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-white">{offer.price}€</span>
                            <span className="text-sm text-slate-500 line-through ml-2">{offer.originalPrice}€</span>
                          </div>
                          <Button size="sm" variant="outline" className="border-amber-500/50 text-amber-300 hover:bg-amber-500/20">
                            <Plus className="h-4 w-4 mr-1" />
                            Ajouter
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    Ce que disent nos clients
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-xl">
                        <div className="flex gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-slate-300 text-sm mb-2">&quot;{testimonial.text}&quot;</p>
                        <p className="text-slate-500 text-sm">{testimonial.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Summary */}
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">Récapitulatif</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-slate-300">
                      <span>Sous-total</span>
                      <span>{subtotal}€</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Réduction</span>
                        <span>-{discount}€</span>
                      </div>
                    )}
                    <div className="flex justify-between text-white text-lg font-bold pt-2 border-t border-white/10">
                      <span>Total</span>
                      <span>{total}€</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input 
                        placeholder="Code promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="pl-10 bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Appliquer
                    </Button>
                  </div>

                  {/* Trust badges */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Shield className="h-4 w-4 text-emerald-400" />
                      Paiement sécurisé SSL
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="h-4 w-4 text-blue-400" />
                      Intervention sous 48h
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      Garantie satisfaction
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Login/Register */}
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isLogin ? 'bg-blue-600 text-white' : 'bg-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      Connexion
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                        !isLogin ? 'bg-blue-600 text-white' : 'bg-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      Inscription
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    {!isLogin && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-slate-300">Prénom</Label>
                          <Input 
                            placeholder="Jean" 
                            className="bg-white/5 border-white/20 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-300">Nom</Label>
                          <Input 
                            placeholder="Dupont" 
                            className="bg-white/5 border-white/20 text-white"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Label className="text-slate-300">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input 
                          type="email"
                          placeholder="jean@exemple.fr" 
                          className="pl-10 bg-white/5 border-white/20 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Mot de passe</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input 
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••" 
                          className="pl-10 pr-10 bg-white/5 border-white/20 text-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    {!isLogin && (
                      <div className="flex items-start gap-2">
                        <Checkbox id="terms" className="mt-1" />
                        <Label htmlFor="terms" className="text-sm text-slate-400 font-normal">
                          J&apos;accepte les{" "}
                          <Link href="/cgu" className="text-blue-400 hover:underline">CGU</Link>
                          {" "}et la{" "}
                          <Link href="/politique-confidentialite" className="text-blue-400 hover:underline">
                            politique de confidentialité
                          </Link>
                        </Label>
                      </div>
                    )}

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500">
                      {isLogin ? "Se connecter" : "Créer mon compte"}
                    </Button>

                    {isLogin && (
                      <div className="text-center">
                        <Link href="/mot-de-passe-oublie" className="text-sm text-blue-400 hover:underline">
                          Mot de passe oublié ?
                        </Link>
                      </div>
                    )}
                  </form>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-[#0f1419] text-slate-500">ou continuer en tant qu&apos;invité</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10 gap-2"
                  >
                    <CreditCard className="h-4 w-4" />
                    Commander sans compte
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


