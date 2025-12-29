"use client"

import Link from "next/link"
import { Home, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-400px)] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="text-center px-6">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <span className="text-[150px] sm:text-[200px] font-bold text-slate-100 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center animate-bounce">
              <Search className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Page non trouvée
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          Oups ! La page que vous recherchez semble avoir disparu. 
          Peut-être a-t-elle été déplacée ou supprimée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Home className="h-5 w-5" />
              Retour à l&apos;accueil
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto gap-2"
            onClick={() => history.back()}
          >
            <ArrowLeft className="h-5 w-5" />
            Page précédente
          </Button>
        </div>

        <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm max-w-md mx-auto">
          <p className="text-slate-600 mb-4">Vous cherchez peut-être :</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/depannage" className="px-3 py-1 bg-slate-100 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors">
              Dépannage
            </Link>
            <Link href="/creation-site" className="px-3 py-1 bg-slate-100 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors">
              Création de sites
            </Link>
            <Link href="/tarifs" className="px-3 py-1 bg-slate-100 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors">
              Tarifs
            </Link>
            <Link href="/contact" className="px-3 py-1 bg-slate-100 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

