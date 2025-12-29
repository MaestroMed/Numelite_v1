"use client"

import { useState } from "react"
import {
  Plus,
  Code,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  Copy,
  ExternalLink
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const schemas = [
  {
    id: 1,
    type: "LocalBusiness",
    page: "/*",
    status: "valid",
    description: "Informations de l'entreprise (nom, adresse, téléphone, horaires)",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Numelite",
      "description": "Expert informatique en Île-de-France : dépannage rapide, création de sites web.",
      "telephone": "+33123456789",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      }
    }
  },
  {
    id: 2,
    type: "Service",
    page: "/depannage",
    status: "valid",
    description: "Service de dépannage informatique",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Dépannage Informatique",
      "description": "Intervention rapide pour tous vos problèmes informatiques",
      "provider": { "@type": "LocalBusiness", "name": "Numelite" },
      "areaServed": "Île-de-France"
    }
  },
  {
    id: 3,
    type: "FAQPage",
    page: "/faq",
    status: "valid",
    description: "Questions fréquemment posées",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quel est le délai d'intervention ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nous intervenons sous 24h en Île-de-France."
          }
        }
      ]
    }
  },
  {
    id: 4,
    type: "AggregateRating",
    page: "/*",
    status: "valid",
    description: "Note moyenne et nombre d'avis clients",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Numelite",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    }
  },
  {
    id: 5,
    type: "BreadcrumbList",
    page: "/*",
    status: "valid",
    description: "Fil d'Ariane pour la navigation",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": []
    }
  }
]

const schemaTypes = [
  "LocalBusiness",
  "Service",
  "FAQPage",
  "Article",
  "Product",
  "Review",
  "AggregateRating",
  "BreadcrumbList",
  "Organization",
  "WebSite"
]

export default function SchemaPage() {
  const [selectedSchema, setSelectedSchema] = useState<typeof schemas[0] | null>(null)

  const validCount = schemas.filter(s => s.status === "valid").length
  const warningCount = schemas.filter(s => s.status === "warning").length
  const errorCount = schemas.filter(s => s.status === "error").length

  const copySchema = (schema: object) => {
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Schema.org</h1>
          <p className="text-[#8899aa]">Gérez les données structurées de votre site</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Tester dans Google
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nouveau schéma
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Schémas actifs</p>
            <p className="text-2xl font-bold">{schemas.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Valides</p>
            <p className="text-2xl font-bold text-emerald-600">{validCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Avertissements</p>
            <p className="text-2xl font-bold text-amber-600">{warningCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Erreurs</p>
            <p className="text-2xl font-bold text-red-600">{errorCount}</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Add */}
      <Card>
        <CardHeader>
          <CardTitle>Ajouter un schéma rapidement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {schemaTypes.map(type => (
              <Button key={type} variant="outline" size="sm">
                <Plus className="h-3 w-3 mr-1" />
                {type}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Schemas Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {schemas.map((schema) => (
          <Card key={schema.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    schema.status === "valid" ? "bg-emerald-100" :
                    schema.status === "warning" ? "bg-amber-100" :
                    "bg-red-100"
                  }`}>
                    <Code className={`h-6 w-6 ${
                      schema.status === "valid" ? "text-emerald-600" :
                      schema.status === "warning" ? "text-amber-600" :
                      "text-red-600"
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-bold">{schema.type}</h3>
                    <code className="text-sm text-[#8899aa]">{schema.page}</code>
                  </div>
                </div>
                <Badge className={
                  schema.status === "valid" ? "bg-emerald-100 text-emerald-700" :
                  schema.status === "warning" ? "bg-amber-100 text-amber-700" :
                  "bg-red-100 text-red-700"
                }>
                  {schema.status === "valid" ? (
                    <><CheckCircle className="h-3 w-3 mr-1" /> Valide</>
                  ) : (
                    <><AlertCircle className="h-3 w-3 mr-1" /> {schema.status}</>
                  )}
                </Badge>
              </div>

              <p className="text-sm text-slate-600 mb-4">{schema.description}</p>

              {/* JSON Preview */}
              <div className="bg-slate-900 rounded-lg p-4 mb-4 overflow-hidden">
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{JSON.stringify(schema.schema, null, 2).slice(0, 200)}...</code>
                </pre>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-1">
                  <Edit className="h-3 w-3" />
                  Modifier
                </Button>
                <Button variant="outline" size="sm" className="gap-1" onClick={() => copySchema(schema.schema)}>
                  <Copy className="h-3 w-3" />
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Eye className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

