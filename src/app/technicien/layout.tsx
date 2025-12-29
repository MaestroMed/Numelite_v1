"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Calendar,
  Users,
  MapPin,
  ClipboardList,
  Settings,
  Menu,
  X,
  Bell,
  LogOut,
  Phone,
  ChevronDown,
  Zap
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NotificationDropdown } from "@/components/admin/notification-dropdown"

const navigation = [
  { name: "Dashboard", href: "/technicien", icon: LayoutDashboard },
  { name: "Planning", href: "/technicien/planning", icon: Calendar },
  { name: "Leads", href: "/technicien/leads", icon: Users },
  { name: "Interventions", href: "/technicien/interventions", icon: ClipboardList },
  { name: "Carte", href: "/technicien/carte", icon: MapPin },
  { name: "Optimisation", href: "/technicien/optimisation", icon: Zap },
  { name: "Paramètres", href: "/technicien/parametres", icon: Settings },
]

export default function TechnicienLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

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
        "fixed top-0 left-0 z-50 h-full w-64 bg-gradient-to-b from-[#0f1419] to-[#0a0d10] border-r border-white/10 text-white transition-transform duration-300 lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <Link href="/technicien" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="font-bold">Numelite Tech</span>
          </Link>
          <button 
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                isActive(item.href)
                  ? "bg-emerald-600 text-white"
                  : "text-[#8899aa] hover:text-white hover:bg-white/10"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
              {item.name === "Leads" && (
                <Badge className="ml-auto bg-amber-500 text-white">3</Badge>
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sm text-[#8899aa] mb-2">Prochaine intervention</p>
            <p className="font-medium text-white">14h00 - Paris 15e</p>
            <p className="text-sm text-[#8899aa]">Dépannage PC - Virus</p>
            <Button className="w-full mt-3 gap-2 bg-emerald-600 hover:bg-emerald-700">
              <MapPin className="h-4 w-4" />
              Ouvrir GPS
            </Button>
          </div>
        </div>
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
            
            <h1 className="text-lg font-bold text-white hidden sm:block">Bonjour, Thomas 👋</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick call */}
            <a href="tel:+33123456789">
              <Button variant="outline" size="sm" className="gap-2 border-white/20 text-white hover:bg-white/10">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Appeler support</span>
              </Button>
            </a>

            {/* Notifications */}
            <NotificationDropdown />

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white font-bold text-sm">
                T
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white">Thomas</p>
                <p className="text-xs text-[#8899aa]">Technicien</p>
              </div>
              <button className="p-2 hover:bg-white/10 rounded-lg">
                <LogOut className="h-4 w-4 text-[#8899aa]" />
              </button>
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
