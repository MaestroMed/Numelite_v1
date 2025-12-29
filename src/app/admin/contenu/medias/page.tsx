import { Upload, Image, File, Trash2, Download, Search, Grid, List, FolderPlus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const medias = [
  { id: 1, name: "hero-background.jpg", type: "image", size: "2.4 MB", date: "2025-01-20", url: "/images/hero.jpg" },
  { id: 2, name: "logo-numelite.svg", type: "image", size: "12 KB", date: "2025-01-15", url: "/images/logo.svg" },
  { id: 3, name: "team-thomas.jpg", type: "image", size: "850 KB", date: "2025-01-18", url: "/images/thomas.jpg" },
  { id: 4, name: "service-depannage.jpg", type: "image", size: "1.2 MB", date: "2025-01-10", url: "/images/depannage.jpg" },
  { id: 5, name: "service-creation.jpg", type: "image", size: "980 KB", date: "2025-01-10", url: "/images/creation.jpg" },
  { id: 6, name: "conditions-generales.pdf", type: "document", size: "156 KB", date: "2025-01-05", url: "/docs/cgv.pdf" },
  { id: 7, name: "favicon.ico", type: "image", size: "4 KB", date: "2025-01-01", url: "/favicon.ico" },
  { id: 8, name: "og-image.png", type: "image", size: "450 KB", date: "2025-01-15", url: "/og-image.png" }
]

export default function AdminMediasPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Médiathèque</h1>
          <p className="text-[#8899aa]">Gérez vos images, documents et fichiers</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <FolderPlus className="h-4 w-4" />
            Nouveau dossier
          </Button>
          <Button className="gap-2">
            <Upload className="h-4 w-4" />
            Téléverser
          </Button>
        </div>
      </div>

      {/* Upload Zone */}
      <Card>
        <CardContent className="p-8">
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center hover:border-blue-400 transition-colors cursor-pointer">
            <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="font-medium text-lg mb-2">Glissez vos fichiers ici</h3>
            <p className="text-[#8899aa] mb-4">ou cliquez pour parcourir</p>
            <p className="text-sm text-slate-400">
              JPG, PNG, GIF, SVG, PDF, DOC jusqu&apos;à 10 MB
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Rechercher un fichier..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <select className="h-12 px-4 rounded-xl border-2 border-slate-200">
            <option value="">Tous les types</option>
            <option value="image">Images</option>
            <option value="document">Documents</option>
          </select>
          <Button variant="outline" size="icon">
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Total fichiers</p>
            <p className="text-2xl font-bold">{medias.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Images</p>
            <p className="text-2xl font-bold">{medias.filter(m => m.type === 'image').length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Documents</p>
            <p className="text-2xl font-bold">{medias.filter(m => m.type === 'document').length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-[#8899aa]">Espace utilisé</p>
            <p className="text-2xl font-bold">6.1 MB</p>
          </CardContent>
        </Card>
      </div>

      {/* Media Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Fichiers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {medias.map((media) => (
              <div
                key={media.id}
                className="group relative border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              >
                {/* Preview */}
                <div className="aspect-square bg-slate-100 flex items-center justify-center">
                  {media.type === 'image' ? (
                    <Image className="h-12 w-12 text-slate-400" />
                  ) : (
                    <File className="h-12 w-12 text-slate-400" />
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Info */}
                <div className="p-2">
                  <p className="text-xs font-medium truncate">{media.name}</p>
                  <p className="text-xs text-[#8899aa]">{media.size}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

