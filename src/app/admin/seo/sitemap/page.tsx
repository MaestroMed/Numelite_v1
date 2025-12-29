"use client"

import { useState } from "react"
import {
  RefreshCw,
  Download,
  Send,
  Globe,
  FileText,
  CheckCircle,
  Clock,
  ExternalLink
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const sitemapPages = [
  { url: "/", priority: 1.0, changefreq: "daily", lastmod: "2025-01-20", included: true },
  { url: "/depannage", priority: 0.9, changefreq: "weekly", lastmod: "2025-01-18", included: true },
  { url: "/creation-site", priority: 0.9, changefreq: "weekly", lastmod: "2025-01-15", included: true },
  { url: "/maintenance", priority: 0.8, changefreq: "monthly", lastmod: "2025-01-10", included: true },
  { url: "/google-ads", priority: 0.8, changefreq: "monthly", lastmod: "2025-01-10", included: true },
  { url: "/seo", priority: 0.8, changefreq: "monthly", lastmod: "2025-01-10", included: true },
  { url: "/tarifs", priority: 0.7, changefreq: "weekly", lastmod: "2025-01-15", included: true },
  { url: "/contact", priority: 0.6, changefreq: "monthly", lastmod: "2025-01-01", included: true },
  { url: "/a-propos", priority: 0.5, changefreq: "monthly", lastmod: "2025-01-01", included: true },
  { url: "/faq", priority: 0.5, changefreq: "monthly", lastmod: "2025-01-01", included: true },
  { url: "/temoignages", priority: 0.5, changefreq: "weekly", lastmod: "2025-01-15", included: true },
  { url: "/portfolio", priority: 0.5, changefreq: "monthly", lastmod: "2025-01-01", included: true },
  { url: "/mentions-legales", priority: 0.1, changefreq: "yearly", lastmod: "2024-01-01", included: false },
  { url: "/cgv", priority: 0.1, changefreq: "yearly", lastmod: "2024-01-01", included: false },
  { url: "/cgu", priority: 0.1, changefreq: "yearly", lastmod: "2024-01-01", included: false },
  { url: "/politique-confidentialite", priority: 0.1, changefreq: "yearly", lastmod: "2024-01-01", included: false },
  { url: "/politique-cookies", priority: 0.1, changefreq: "yearly", lastmod: "2024-01-01", included: false }
]

const searchConsoleStatus = {
  lastSubmit: "2025-01-15",
  status: "success",
  indexed: 12,
  crawled: 17,
  errors: 0
}

export default function SitemapPage() {
  const [pages, setPages] = useState(sitemapPages)

  const toggleInclude = (url: string) => {
    setPages(prev => prev.map(p => 
      p.url === url ? { ...p, included: !p.included } : p
    ))
  }

  const includedCount = pages.filter(p => p.included).length
  const excludedCount = pages.filter(p => !p.included).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Sitemap</h1>
          <p className="text-[#8899aa]">Gérez votre sitemap XML et soumettez-le à Google</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Télécharger XML
          </Button>
          <Button variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Régénérer
          </Button>
          <Button className="gap-2">
            <Send className="h-4 w-4" />
            Soumettre à Google
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">URLs incluses</p>
            <p className="text-2xl font-bold text-emerald-600">{includedCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">URLs exclues</p>
            <p className="text-2xl font-bold text-slate-400">{excludedCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Indexées (GSC)</p>
            <p className="text-2xl font-bold">{searchConsoleStatus.indexed}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Erreurs</p>
            <p className="text-2xl font-bold text-emerald-600">{searchConsoleStatus.errors}</p>
          </CardContent>
        </Card>
      </div>

      {/* Google Search Console Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Google Search Console
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium">Sitemap soumis avec succès</p>
                <p className="text-sm text-[#8899aa]">
                  Dernière soumission : {searchConsoleStatus.lastSubmit}
                </p>
              </div>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <p className="text-2xl font-bold">{searchConsoleStatus.crawled}</p>
                <p className="text-sm text-[#8899aa]">Crawlées</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">{searchConsoleStatus.indexed}</p>
                <p className="text-sm text-[#8899aa]">Indexées</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">{searchConsoleStatus.errors}</p>
                <p className="text-sm text-[#8899aa]">Erreurs</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Ouvrir GSC
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sitemap URLs */}
      <Card>
        <CardHeader>
          <CardTitle>URLs du Sitemap</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">URL</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Priorité</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Fréquence</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Dernière modif.</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Inclus</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page.url} className={`border-b border-slate-100 hover:bg-slate-50 ${!page.included ? "opacity-50" : ""}`}>
                    <td className="py-3 px-4">
                      <code className="text-sm">{page.url}</code>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant={page.priority >= 0.8 ? "default" : page.priority >= 0.5 ? "secondary" : "outline"}>
                        {page.priority}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-slate-600">
                      {page.changefreq}
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-[#8899aa]">
                      {page.lastmod}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => toggleInclude(page.url)}
                        className={`w-10 h-6 rounded-full transition-colors ${
                          page.included ? "bg-emerald-500" : "bg-slate-300"
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform mx-1 ${
                          page.included ? "translate-x-4" : ""
                        }`} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

