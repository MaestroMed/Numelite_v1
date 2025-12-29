import { 
  Rocket, 
  Zap, 
  Target, 
  Users, 
  Share2, 
  Gift, 
  Star, 
  TrendingUp,
  CheckCircle,
  Play,
  Pause,
  Settings,
  BarChart3
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

const growthStrategies = [
  {
    id: 1,
    name: "Exit Intent Popup",
    category: "Capture",
    description: "Affiche une offre spéciale quand le visiteur s'apprête à quitter le site",
    status: "active",
    conversions: 45,
    rate: "3.2%",
    icon: Target
  },
  {
    id: 2,
    name: "Programme de Parrainage",
    category: "Viral",
    description: "20€ offerts au parrain et au filleul pour chaque nouveau client",
    status: "active",
    conversions: 28,
    rate: "15%",
    icon: Gift
  },
  {
    id: 3,
    name: "Avis Google Automatisés",
    category: "Social Proof",
    description: "Email automatique demandant un avis 48h après chaque intervention",
    status: "active",
    conversions: 35,
    rate: "40%",
    icon: Star
  },
  {
    id: 4,
    name: "Remarketing Dynamique",
    category: "Retargeting",
    description: "Publicités personnalisées pour les visiteurs n'ayant pas converti",
    status: "active",
    conversions: 52,
    rate: "8.5%",
    icon: Share2
  },
  {
    id: 5,
    name: "Lead Magnet - Guide Gratuit",
    category: "Capture",
    description: "Guide PDF '10 astuces pour accélérer votre PC' contre email",
    status: "paused",
    conversions: 120,
    rate: "25%",
    icon: Zap
  },
  {
    id: 6,
    name: "Notification Push Web",
    category: "Engagement",
    description: "Notifications push pour les offres et nouveaux articles de blog",
    status: "paused",
    conversions: 0,
    rate: "0%",
    icon: Users
  }
]

const experiments = [
  { name: "CTA Rouge vs Bleu", status: "running", traffic: "50/50", winner: null, improvement: null },
  { name: "Prix barré vs Sans", status: "completed", traffic: "50/50", winner: "Prix barré", improvement: "+18%" },
  { name: "Témoignages vidéo vs texte", status: "pending", traffic: "50/50", winner: null, improvement: null }
]

const metrics = {
  totalLeads: 450,
  leadGrowth: "+32%",
  viralCoefficient: 0.85,
  customerLTV: 185,
  acquisitionCost: 25
}

export default function AdminGrowthPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Rocket className="h-6 w-6 text-purple-600" />
            Growth Hacking
          </h1>
          <p className="text-[#8899aa]">Stratégies d&apos;acquisition et de croissance accélérée</p>
        </div>
        <Button className="gap-2">
          <Zap className="h-4 w-4" />
          Nouvelle stratégie
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Leads ce mois</p>
                <p className="text-2xl font-bold">{metrics.totalLeads}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Croissance</p>
                <p className="text-2xl font-bold text-emerald-600">{metrics.leadGrowth}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Share2 className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">Coef. Viral</p>
                <p className="text-2xl font-bold">{metrics.viralCoefficient}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Star className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">LTV Client</p>
                <p className="text-2xl font-bold">{metrics.customerLTV}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <Target className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-[#8899aa]">CAC</p>
                <p className="text-2xl font-bold">{metrics.acquisitionCost}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Growth Strategies */}
      <Card>
        <CardHeader>
          <CardTitle>Stratégies actives</CardTitle>
          <CardDescription>Gérez vos tactiques de croissance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {growthStrategies.map((strategy) => (
              <div 
                key={strategy.id} 
                className={`p-4 border rounded-xl transition-all ${
                  strategy.status === 'active' 
                    ? 'border-emerald-200 bg-emerald-50/50' 
                    : 'border-slate-200'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      strategy.status === 'active' ? 'bg-emerald-100' : 'bg-slate-100'
                    }`}>
                      <strategy.icon className={`h-6 w-6 ${
                        strategy.status === 'active' ? 'text-emerald-600' : 'text-slate-400'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{strategy.name}</h3>
                        <Badge variant="outline">{strategy.category}</Badge>
                        <Badge className={strategy.status === 'active' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-slate-100 text-slate-600'
                        }>
                          {strategy.status === 'active' ? 'Actif' : 'En pause'}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm">{strategy.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{strategy.conversions}</p>
                      <p className="text-xs text-[#8899aa]">Conversions</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-600">{strategy.rate}</p>
                      <p className="text-xs text-[#8899aa]">Taux</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch checked={strategy.status === 'active'} />
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* A/B Tests */}
      <Card>
        <CardHeader>
          <CardTitle>Tests A/B en cours</CardTitle>
          <CardDescription>Expérimentations pour optimiser les conversions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8899aa]">Expérience</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Statut</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Répartition</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Gagnant</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[#8899aa]">Amélioration</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-[#8899aa]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {experiments.map((exp) => (
                  <tr key={exp.name} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-medium">{exp.name}</td>
                    <td className="py-4 px-4 text-center">
                      <Badge className={
                        exp.status === 'running' ? 'bg-blue-100 text-blue-700' :
                        exp.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-slate-100 text-slate-600'
                      }>
                        {exp.status === 'running' ? 'En cours' :
                         exp.status === 'completed' ? 'Terminé' : 'En attente'}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-center">{exp.traffic}</td>
                    <td className="py-4 px-4 text-center">
                      {exp.winner ? (
                        <span className="font-medium text-emerald-600">✓ {exp.winner}</span>
                      ) : '-'}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {exp.improvement ? (
                        <Badge className="bg-emerald-100 text-emerald-700">{exp.improvement}</Badge>
                      ) : '-'}
                    </td>
                    <td className="py-4 px-4 text-right">
                      {exp.status === 'running' ? (
                        <Button variant="outline" size="sm" className="gap-1">
                          <Pause className="h-4 w-4" />
                          Stop
                        </Button>
                      ) : exp.status === 'pending' ? (
                        <Button size="sm" className="gap-1">
                          <Play className="h-4 w-4" />
                          Lancer
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="gap-1">
                          <BarChart3 className="h-4 w-4" />
                          Voir
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Growth Ideas */}
      <Card>
        <CardHeader>
          <CardTitle>Idées de croissance</CardTitle>
          <CardDescription>Prochaines stratégies à implémenter</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Chat Bot IA", description: "Assistant IA pour qualifier les leads 24/7", effort: "Medium", impact: "High" },
              { title: "Gamification Fidélité", description: "Points et niveaux pour les clients fidèles", effort: "High", impact: "Medium" },
              { title: "Contenu UGC", description: "Partage de contenu par les clients satisfaits", effort: "Low", impact: "High" },
              { title: "Webinaires Gratuits", description: "Formation gratuite pour attirer des leads qualifiés", effort: "Medium", impact: "High" },
              { title: "Partenariats Locaux", description: "Accords avec commerces locaux pour recommandations", effort: "Low", impact: "Medium" },
              { title: "App Mobile", description: "Application mobile pour clients et techniciens", effort: "High", impact: "High" }
            ].map((idea, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold mb-1">{idea.title}</h4>
                <p className="text-sm text-slate-600 mb-3">{idea.description}</p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">
                    Effort: {idea.effort}
                  </Badge>
                  <Badge className={
                    idea.impact === 'High' ? 'bg-emerald-100 text-emerald-700 text-xs' :
                    'bg-amber-100 text-amber-700 text-xs'
                  }>
                    Impact: {idea.impact}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

