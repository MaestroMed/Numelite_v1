"use client"

import { useState } from "react"
import {
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  Check,
  Star,
  Zap
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    id: 1,
    name: "Diagnostic",
    description: "Analyse complète de votre problème informatique",
    price: 0,
    unit: "unique",
    category: "Dépannage",
    features: [
      "Analyse du problème",
      "Devis détaillé",
      "Conseils personnalisés"
    ],
    popular: false,
    status: "active"
  },
  {
    id: 2,
    name: "Intervention Standard",
    description: "Dépannage classique avec garantie satisfaction",
    price: 49,
    unit: "unique",
    category: "Dépannage",
    features: [
      "Intervention sous 48h",
      "1h de main d'œuvre incluse",
      "Garantie 30 jours",
      "Support téléphonique"
    ],
    popular: false,
    status: "active"
  },
  {
    id: 3,
    name: "Intervention Express",
    description: "Intervention prioritaire en 24h maximum",
    price: 89,
    unit: "unique",
    category: "Dépannage",
    features: [
      "Intervention sous 24h",
      "2h de main d'œuvre incluses",
      "Garantie 60 jours",
      "Support prioritaire",
      "Déplacement gratuit"
    ],
    popular: true,
    status: "active"
  },
  {
    id: 4,
    name: "Site Vitrine",
    description: "Site web professionnel pour présenter votre activité",
    price: 990,
    unit: "unique",
    category: "Création Web",
    features: [
      "Design sur-mesure",
      "5 pages",
      "Responsive mobile",
      "SEO de base",
      "1 an hébergement offert"
    ],
    popular: false,
    status: "active"
  },
  {
    id: 5,
    name: "Site E-commerce",
    description: "Boutique en ligne complète avec paiement sécurisé",
    price: 2490,
    unit: "unique",
    category: "Création Web",
    features: [
      "Design premium",
      "Catalogue produits illimité",
      "Paiement sécurisé",
      "Gestion stocks",
      "Dashboard admin",
      "Formation incluse"
    ],
    popular: true,
    status: "active"
  },
  {
    id: 6,
    name: "Maintenance Essentielle",
    description: "Maintenance de base pour garder votre site à jour",
    price: 29,
    unit: "monthly",
    category: "Maintenance",
    features: [
      "Mises à jour mensuelles",
      "Sauvegardes hebdomadaires",
      "Monitoring uptime",
      "Support email"
    ],
    popular: false,
    status: "active"
  },
  {
    id: 7,
    name: "Maintenance Premium",
    description: "Maintenance complète avec support prioritaire",
    price: 79,
    unit: "monthly",
    category: "Maintenance",
    features: [
      "Mises à jour hebdomadaires",
      "Sauvegardes quotidiennes",
      "Monitoring 24/7",
      "Support prioritaire",
      "Interventions illimitées",
      "Rapport mensuel"
    ],
    popular: true,
    status: "active"
  },
  {
    id: 8,
    name: "Google Ads Starter",
    description: "Lancement de vos premières campagnes publicitaires",
    price: 299,
    unit: "monthly",
    category: "Marketing",
    features: [
      "Configuration compte",
      "1 campagne Search",
      "Optimisation hebdo",
      "Rapport mensuel"
    ],
    popular: false,
    status: "active"
  },
  {
    id: 9,
    name: "Google Ads Pro",
    description: "Gestion complète de vos campagnes pour maximiser le ROI",
    price: 599,
    unit: "monthly",
    category: "Marketing",
    features: [
      "Campagnes illimitées",
      "Search + Display + Shopping",
      "Optimisation quotidienne",
      "A/B testing",
      "Remarketing",
      "Reporting avancé"
    ],
    popular: true,
    status: "active"
  }
]

const categories = ["Tous", "Dépannage", "Création Web", "Maintenance", "Marketing"]

export default function TarifsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredPlans = pricingPlans.filter(plan => 
    selectedCategory === "Tous" || plan.category === selectedCategory
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Grille tarifaire</h1>
          <p className="text-[#8899aa]">Gérez vos offres et tarifs</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau tarif
        </Button>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory !== cat ? "border-white/20 text-white hover:bg-white/10" : ""}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`overflow-hidden hover:shadow-lg transition-shadow ${
              plan.popular ? "ring-2 ring-blue-500" : ""
            }`}
          >
            {plan.popular && (
              <div className="bg-blue-500 text-white text-center text-sm py-1 font-medium">
                <Star className="h-3 w-3 inline mr-1" />
                Plus populaire
              </div>
            )}
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="secondary" className="mb-2">{plan.category}</Badge>
                  <h3 className="font-bold text-lg text-white">{plan.name}</h3>
                  <p className="text-sm text-[#8899aa]">{plan.description}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-[#8899aa] hover:text-white hover:bg-white/10">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <div className="my-6">
                <div className="flex items-baseline">
                  {plan.price === 0 ? (
                    <span className="text-3xl font-bold text-emerald-400">Gratuit</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-white">{plan.price}€</span>
                      {plan.unit === "monthly" && (
                        <span className="text-[#8899aa] ml-1">/mois</span>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#b8c4d0]">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-emerald-400" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-4 border-t border-white/10">
                <Button variant="outline" size="sm" className="flex-1 gap-1 border-white/20 text-white hover:bg-white/10">
                  <Edit className="h-3 w-3" />
                  Modifier
                </Button>
                <Button variant="outline" size="sm" className="text-red-400 hover:bg-red-500/10 border-white/20">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
