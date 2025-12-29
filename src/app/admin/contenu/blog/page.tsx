import { PlusCircle, Edit, Eye, Trash2, BookOpen, Calendar, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

const articles = [
  {
    id: "ART001",
    title: "Comment protéger son PC contre les virus en 2025",
    slug: "proteger-pc-virus-2025",
    status: "published",
    category: "Sécurité",
    publishedAt: "2025-01-18",
    author: "Thomas",
    views: 1250
  },
  {
    id: "ART002",
    title: "10 astuces pour accélérer votre ordinateur",
    slug: "accelerer-ordinateur-astuces",
    status: "published",
    category: "Optimisation",
    publishedAt: "2025-01-12",
    author: "Sophie",
    views: 890
  },
  {
    id: "ART003",
    title: "Pourquoi votre entreprise a besoin d'un site web en 2025",
    slug: "entreprise-site-web-2025",
    status: "published",
    category: "Création web",
    publishedAt: "2025-01-08",
    author: "Thomas",
    views: 650
  },
  {
    id: "ART004",
    title: "Guide complet : Sauvegarder ses données efficacement",
    slug: "guide-sauvegarde-donnees",
    status: "draft",
    category: "Tutoriel",
    publishedAt: null,
    author: "Admin",
    views: 0
  }
]

const categories = ["Sécurité", "Optimisation", "Création web", "Tutoriel", "Actualités", "Conseils"]

export default function AdminBlogPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Blog</h1>
          <p className="text-[#8899aa]">Gérez vos articles de blog et améliorez votre SEO</p>
        </div>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Nouvel article
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Articles publiés</p>
            <p className="text-2xl font-bold">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Brouillons</p>
            <p className="text-2xl font-bold text-amber-600">1</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Vues ce mois</p>
            <p className="text-2xl font-bold text-blue-600">2,790</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Catégories</p>
            <p className="text-2xl font-bold">{categories.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Articles List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Articles</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Rechercher..." className="w-48" />
            <Button variant="outline" size="sm">Filtrer</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="p-4 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <h3 className="font-bold">{article.title}</h3>
                      <Badge variant={article.status === 'published' ? 'success' : 'warning'}>
                        {article.status === 'published' ? 'Publié' : 'Brouillon'}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[#8899aa]">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.publishedAt || 'Non publié'}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </span>
                      <Badge variant="outline">{article.category}</Badge>
                      {article.views > 0 && <span>👁️ {article.views} vues</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Article Editor */}
      <Card>
        <CardHeader>
          <CardTitle>Éditeur d&apos;article</CardTitle>
          <CardDescription>Créez ou modifiez votre article</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Titre</Label>
            <Input placeholder="Titre de l'article" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Catégorie</Label>
              <select className="w-full h-12 px-4 rounded-xl border-2 border-slate-200">
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label>Slug (URL)</Label>
              <Input placeholder="titre-article-url" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Extrait</Label>
            <Textarea placeholder="Résumé de l'article pour la page blog..." />
          </div>
          <div className="space-y-2">
            <Label>Contenu</Label>
            <div className="border border-slate-200 rounded-xl p-4 min-h-[300px] bg-slate-50">
              <p className="text-slate-400 text-center py-8">
                Éditeur de contenu (Markdown/WYSIWYG)
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Image de couverture</Label>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center">
              <p className="text-slate-400">Glissez une image ou cliquez pour parcourir</p>
              <Button variant="outline" className="mt-4">Choisir une image</Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="articlePublished" />
            <Label htmlFor="articlePublished">Publier immédiatement</Label>
          </div>
          <div className="flex gap-2">
            <Button>Enregistrer</Button>
            <Button variant="outline">Prévisualiser</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

