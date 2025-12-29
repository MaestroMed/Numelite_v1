"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Users,
  ShoppingCart,
  Calendar,
  Mail,
  Search as SearchIcon,
  BarChart3,
  Megaphone,
  Settings,
  Menu,
  X,
  Bell,
  ChevronDown,
  LogOut,
  User,
  Globe,
  Image as ImageIcon,
  MessageSquare,
  HelpCircle,
  FolderOpen,
  Tag,
  Gift,
  Layers,
  Link2,
  Code,
  Target,
  Zap
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NotificationDropdown } from "@/components/admin/notification-dropdown"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  {
    name: "Contenu",
    icon: FileText,
    children: [
      { name: "Pages", href: "/admin/contenu/pages", icon: FileText },
      { name: "Blog", href: "/admin/contenu/blog", icon: FileText },
      { name: "Témoignages", href: "/admin/contenu/temoignages", icon: MessageSquare },
      { name: "Portfolio", href: "/admin/contenu/portfolio", icon: FolderOpen },
      { name: "FAQ", href: "/admin/contenu/faq", icon: HelpCircle },
      { name: "Médias", href: "/admin/contenu/medias", icon: ImageIcon },
    ]
  },
  {
    name: "Catalogue",
    icon: Tag,
    children: [
      { name: "Services", href: "/admin/catalogue/services", icon: Layers },
      { name: "Tarifs", href: "/admin/catalogue/tarifs", icon: Tag },
      { name: "Options", href: "/admin/catalogue/options", icon: Zap },
      { name: "Promotions", href: "/admin/catalogue/promotions", icon: Gift },
    ]
  },
  { name: "Clients", href: "/admin/clients", icon: Users },
  { name: "Commandes", href: "/admin/commandes", icon: ShoppingCart },
  { name: "Planning", href: "/admin/planning", icon: Calendar },
  {
    name: "Marketing",
    icon: Megaphone,
    children: [
      { name: "Campagnes", href: "/admin/marketing/campagnes", icon: Target },
      { name: "Emails", href: "/admin/marketing/emails", icon: Mail },
      { name: "Séquences", href: "/admin/marketing/sequences", icon: Zap },
      { name: "Popups", href: "/admin/marketing/popups", icon: Layers },
      { name: "Parrainage", href: "/admin/marketing/parrainage", icon: Gift },
      { name: "Codes promo", href: "/admin/marketing/codes-promo", icon: Tag },
      { name: "Growth", href: "/admin/marketing/growth", icon: Target },
    ]
  },
  {
    name: "SEO",
    icon: SearchIcon,
    children: [
      { name: "Méta pages", href: "/admin/seo/pages", icon: FileText },
      { name: "Redirections", href: "/admin/seo/redirections", icon: Link2 },
      { name: "Sitemap", href: "/admin/seo/sitemap", icon: Globe },
      { name: "Schema.org", href: "/admin/seo/schema", icon: Code },
    ]
  },
  {
    name: "Analytics",
    icon: BarChart3,
    children: [
      { name: "Dashboard", href: "/admin/analytics", icon: BarChart3 },
      { name: "Conversions", href: "/admin/analytics/conversions", icon: Target },
      { name: "Sources", href: "/admin/analytics/sources", icon: Globe },
      { name: "Rapports", href: "/admin/analytics/rapports", icon: FileText },
    ]
  },
  { name: "Paramètres", href: "/admin/parametres", icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])
  const pathname = usePathname()

  const toggleMenu = (name: string) => {
    setExpandedMenus(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    )
  }

  const isActive = (href: string) => pathname === href
  const isParentActive = (children?: { href: string }[]) => 
    children?.some(child => pathname.startsWith(child.href))

  return (
    <div className="min-h-screen bg-[#0a0d10]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-[#0f1419] border-r border-white/10 text-white transition-transform duration-300 lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="font-bold">Numelite Admin</span>
          </Link>
          <button 
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={cn(
                      "flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm transition-colors",
                      isParentActive(item.children)
                        ? "bg-white/10 text-white"
                        : "text-[#8899aa] hover:text-white hover:bg-white/5"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      expandedMenus.includes(item.name) && "rotate-180"
                    )} />
                  </button>
                  {expandedMenus.includes(item.name) && (
                    <div className="mt-1 ml-4 pl-4 border-l border-white/10 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                            isActive(child.href)
                              ? "bg-blue-600 text-white"
                              : "text-[#8899aa] hover:text-white hover:bg-white/5"
                          )}
                        >
                          <child.icon className="h-4 w-4" />
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                    isActive(item.href)
                      ? "bg-blue-600 text-white"
                      : "text-[#8899aa] hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 h-16 bg-[#0f1419]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            
            {/* Search */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg w-64">
              <SearchIcon className="h-4 w-4 text-[#8899aa]" />
              <input 
                type="text" 
                placeholder="Rechercher..."
                className="bg-transparent border-0 outline-none text-sm w-full text-white placeholder:text-[#667788]"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Actions */}
            <Link href="/" target="_blank">
              <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex text-[#8899aa] hover:text-white hover:bg-white/10">
                <Globe className="h-4 w-4" />
                Voir le site
              </Button>
            </Link>

            {/* Notifications */}
            <NotificationDropdown />

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white">Admin</p>
                <p className="text-xs text-[#8899aa]">admin@numelite.fr</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
