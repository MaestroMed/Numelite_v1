"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Zap,
  Monitor,
  Globe,
  Wrench,
  Target,
  Search,
  Play,
  Pause,
  ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Services data - images will be added via backoffice (16:9 format recommended)
const heroSlides = [
  {
    id: "depannage",
    icon: Wrench,
    badge: "⚡ Intervention urgente",
    badgeColor: "bg-orange-500/90 text-white border-orange-400",
    title: "Dépannage",
    titleHighlight: "Informatique",
    subtitle: "Intervention sous 24h en Île-de-France",
    description: "Virus, écran bleu, PC lent, panne matérielle... Nos techniciens certifiés interviennent rapidement chez vous ou au bureau.",
    cta: "Dépannage Urgent",
    ctaSecondary: "Voir les tarifs",
    href: "/depannage",
    hrefSecondary: "/tarifs",
    gradient: "from-orange-500 to-amber-400",
    // Image placeholder - 16:9 format recommended
    // Set via backoffice: "/images/hero/depannage.jpg"
    backgroundImage: "/images/hero/depannage.png",
  },
  {
    id: "creation-site",
    icon: Globe,
    badge: "🚀 Sites sur-mesure",
    badgeColor: "bg-blue-500/90 text-white border-blue-400",
    title: "Création de",
    titleHighlight: "Sites Web",
    subtitle: "Design moderne & SEO optimisé",
    description: "Sites vitrines, e-commerce, applications web. Des sites performants qui convertissent vos visiteurs en clients.",
    cta: "Créer mon site",
    ctaSecondary: "Portfolio",
    href: "/creation-site",
    hrefSecondary: "/portfolio",
    gradient: "from-blue-500 to-cyan-400",
    backgroundImage: "/images/hero/creation-site.png",
  },
  {
    id: "maintenance",
    icon: Monitor,
    badge: "🛡️ Protection continue",
    badgeColor: "bg-emerald-500/90 text-white border-emerald-400",
    title: "Maintenance",
    titleHighlight: "& Support",
    subtitle: "Zéro souci, zéro interruption",
    description: "Mises à jour, sauvegardes, sécurité, monitoring... Gardez vos équipements en parfait état 24/7.",
    cta: "Découvrir les forfaits",
    ctaSecondary: "Demander un devis",
    href: "/maintenance",
    hrefSecondary: "/contact",
    gradient: "from-emerald-500 to-green-400",
    backgroundImage: "/images/hero/maintenance.png",
  },
  {
    id: "google-ads",
    icon: Target,
    badge: "📈 Boostez vos ventes",
    badgeColor: "bg-purple-500/90 text-white border-purple-400",
    title: "Campagnes",
    titleHighlight: "Google Ads",
    subtitle: "Leads qualifiés garantis",
    description: "Des campagnes publicitaires optimisées qui génèrent des clients qualifiés et boostent votre chiffre d'affaires.",
    cta: "Audit gratuit",
    ctaSecondary: "En savoir plus",
    href: "/contact?service=google-ads",
    hrefSecondary: "/google-ads",
    gradient: "from-purple-500 to-violet-400",
    backgroundImage: "/images/hero/google-ads.png",
  },
  {
    id: "seo",
    icon: Search,
    badge: "🔍 1ère page Google",
    badgeColor: "bg-cyan-500/90 text-white border-cyan-400",
    title: "Référencement",
    titleHighlight: "SEO",
    subtitle: "Visibilité & trafic qualifié",
    description: "Améliorez votre visibilité sur les moteurs de recherche et attirez plus de clients naturellement.",
    cta: "Audit SEO gratuit",
    ctaSecondary: "Nos résultats",
    href: "/contact?service=seo",
    hrefSecondary: "/seo",
    gradient: "from-cyan-500 to-teal-400",
    backgroundImage: "/images/hero/seo.png",
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imageError, setImageError] = useState<Record<string, boolean>>({})

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }, [isTransitioning])

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(nextSlide, 7000)
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  const slide = heroSlides[currentSlide]
  const hasImage = slide.backgroundImage && !imageError[slide.id]

  return (
    <section 
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Images - Full Screen 16:9 */}
      <div className="absolute inset-0">
        {heroSlides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {s.backgroundImage && !imageError[s.id] ? (
              <Image
                src={s.backgroundImage}
                alt={`${s.title} ${s.titleHighlight}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                onError={() => setImageError(prev => ({ ...prev, [s.id]: true }))}
              />
            ) : (
              /* Fallback gradient background with icon */
              <div className={`absolute inset-0 bg-gradient-to-br from-[#0a0d10] via-[#0f1419] to-[#1a222d]`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient.replace('from-', 'from-').replace(' to-', '/20 to-')}/10`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <s.icon className="w-[800px] h-[800px]" />
                </div>
              </div>
            )}
            
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          </div>
        ))}
      </div>

      {/* Animated accent line */}
      <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${slide.gradient} transition-all duration-500`} style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }} />

      {/* Main Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="w-full max-w-3xl">
          {/* Badge */}
          <div 
            className={`inline-block mb-6 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <Badge className={`${slide.badgeColor} text-sm px-4 py-2 font-medium shadow-lg`}>
              {slide.badge}
            </Badge>
          </div>
          
          {/* Title */}
          <h1 
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="text-white block">{slide.title}</span>
            <span className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent block`}>
              {slide.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-xl sm:text-2xl text-white/90 mb-4 font-medium transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            style={{ transitionDelay: '300ms' }}
          >
            {slide.subtitle}
          </p>
          
          {/* Description */}
          <p 
            className={`text-lg text-white/70 mb-8 max-w-2xl leading-relaxed transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <Link href={slide.href}>
              <Button 
                size="xl" 
                className={`gap-3 group bg-gradient-to-r ${slide.gradient} hover:opacity-90 shadow-2xl text-white font-semibold px-8`}
              >
                <slide.icon className="h-5 w-5" />
                {slide.cta}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={slide.hrefSecondary}>
              <Button 
                size="xl" 
                variant="outline" 
                className="gap-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm font-medium px-8"
              >
                {slide.ctaSecondary}
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div 
            className={`flex flex-wrap items-center gap-8 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white text-sm font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-white/80 font-medium">+500 clients</span>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-white/80 font-medium ml-1">4.9/5</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Intervention 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Bottom */}
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-105"
              aria-label="Slide précédente"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-105"
              aria-label="Slide suivante"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Center: Slide Indicators with Labels */}
          <div className="hidden md:flex items-center gap-4">
            {heroSlides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => goToSlide(index)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white/20 backdrop-blur-md' 
                    : 'hover:bg-white/10'
                }`}
                aria-label={`Aller au slide ${s.titleHighlight}`}
              >
                <s.icon className={`h-4 w-4 transition-colors ${
                  index === currentSlide ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                }`} />
                <span className={`text-sm font-medium transition-colors ${
                  index === currentSlide ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                }`}>
                  {s.titleHighlight}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile: Simple dots */}
          <div className="flex md:hidden items-center gap-2">
            {heroSlides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Aller au slide ${s.titleHighlight}`}
              />
            ))}
          </div>

          {/* Right: Counter + Play/Pause */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-white/70 font-medium">
              <span className="text-white text-xl">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(heroSlides.length).padStart(2, '0')}</span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>

      {/* Side progress bar */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
        {heroSlides.map((s, index) => (
          <button
            key={s.id}
            onClick={() => goToSlide(index)}
            className={`w-1 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? `h-12 bg-gradient-to-b ${slide.gradient}` 
                : 'h-6 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Aller au slide ${s.titleHighlight}`}
          />
        ))}
      </div>
    </section>
  )
}
