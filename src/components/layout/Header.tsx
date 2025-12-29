"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown, 
  Globe, 
  Wrench,
  ShoppingCart,
  User,
  LogIn,
  Target,
  Search,
  Settings
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Accueil", href: "/" },
  { 
    name: "Services", 
    href: "#",
    children: [
      { name: "Dépannage Informatique", href: "/depannage", icon: Wrench, description: "Intervention rapide en Île-de-France" },
      { name: "Création de Sites Web", href: "/creation-site", icon: Globe, description: "Sites vitrines et e-commerce" },
      { name: "Maintenance", href: "/maintenance", icon: Settings, description: "Support et maintenance continue" },
      { name: "Google Ads", href: "/google-ads", icon: Target, description: "Campagnes publicitaires rentables" },
      { name: "SEO / Référencement", href: "/seo", icon: Search, description: "Visibilité sur Google" },
    ]
  },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "glass-nav shadow-2xl shadow-black/20" 
          : "bg-transparent"
      )}
    >
      {/* Top bar - Glassmorphism */}
      <div className="hidden lg:block bg-gradient-to-r from-[#0a0d10] via-[#0f1419] to-[#0a0d10] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between text-sm">
          <p className="text-[#b8c4d0] flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Dépannage informatique en Île-de-France - Intervention sous 24h
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:+33123456789" className="flex items-center gap-2 text-[#d8e0e8] hover:text-[#4da6ff] transition-colors">
              <div className="w-6 h-6 rounded-full bg-[#4da6ff]/10 flex items-center justify-center">
                <Phone className="h-3 w-3 text-[#4da6ff]" />
              </div>
              01 23 45 67 89
            </a>
            <span className="text-white/10">|</span>
            <span className="text-[#8899aa]">Lun-Ven: 9h-19h | Sam: 10h-17h</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Triangle Logo inspired by the design */}
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4da6ff] to-[#22d3ee] opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
              <svg viewBox="0 0 48 48" className="w-12 h-12 drop-shadow-lg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4da6ff" />
                    <stop offset="50%" stopColor="#2d8cf0" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <linearGradient id="logoSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f0f4f8" />
                    <stop offset="50%" stopColor="#b8c4d0" />
                    <stop offset="100%" stopColor="#667788" />
                  </linearGradient>
                </defs>
                {/* Outer triangle */}
                <polygon 
                  points="24,4 44,40 4,40" 
                  fill="none" 
                  stroke="url(#logoGradient)" 
                  strokeWidth="2"
                  className="drop-shadow-lg"
                />
                {/* Inner triangle */}
                <polygon 
                  points="24,14 36,36 12,36" 
                  fill="none" 
                  stroke="url(#logoSilver)" 
                  strokeWidth="1.5"
                />
                {/* Center accent */}
                <polygon 
                  points="24,22 30,32 18,32" 
                  fill="url(#logoGradient)" 
                  opacity="0.8"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold gradient-text tracking-tight">
              Numelite
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                        "text-[#b8c4d0] hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", servicesOpen && "rotate-180")} />
                    </button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-80 glass-strong rounded-2xl overflow-hidden"
                        >
                          <div className="p-2">
                            {item.children.map((child, idx) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                              >
                                <div className="w-10 h-10 rounded-lg glass-blue flex items-center justify-center text-[#4da6ff] group-hover:bg-[#4da6ff] group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#4da6ff]/25">
                                  <child.icon className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-semibold text-white">{child.name}</p>
                                  <p className="text-sm text-[#8899aa]">{child.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                      pathname === item.href
                        ? "text-[#4da6ff] bg-[#4da6ff]/10"
                        : "text-[#b8c4d0] hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            <Link 
              href="/panier" 
              className="relative p-2.5 text-[#b8c4d0] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#4da6ff] to-[#22d3ee] text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-[#4da6ff]/30">
                0
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              <Link href="/connexion">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-2 text-[#b8c4d0] hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <LogIn className="h-4 w-4" />
                  Connexion
                </Button>
              </Link>
              <Link href="/depannage">
                <Button 
                  size="sm" 
                  className="gap-2 bg-gradient-to-r from-[#2d8cf0] to-[#4da6ff] hover:from-[#4da6ff] hover:to-[#22d3ee] text-white shadow-lg shadow-[#4da6ff]/25 hover:shadow-xl hover:shadow-[#4da6ff]/30 transition-all duration-300 btn-shine"
                >
                  <Phone className="h-4 w-4" />
                  Dépannage Urgent
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2.5 text-[#b8c4d0] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - Solid dark background for readability */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0f1419] border-t border-white/10 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-2">
                      <p className="font-semibold text-white">{item.name}</p>
                      <div className="pl-4 space-y-2 border-l border-white/10">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center gap-3 py-2 text-[#8899aa] hover:text-[#4da6ff] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <child.icon className="h-5 w-5" />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 font-medium transition-colors",
                        pathname === item.href ? "text-[#4da6ff]" : "text-white hover:text-[#4da6ff]"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link href="/connexion" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                  >
                    <User className="h-4 w-4" />
                    Connexion / Inscription
                  </Button>
                </Link>
                <Link href="/depannage" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full gap-2 bg-gradient-to-r from-[#2d8cf0] to-[#4da6ff] hover:from-[#4da6ff] hover:to-[#22d3ee] shadow-lg shadow-[#4da6ff]/25">
                    <Phone className="h-4 w-4" />
                    Dépannage Urgent
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
