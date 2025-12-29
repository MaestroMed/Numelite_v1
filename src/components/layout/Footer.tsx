import Link from "next/link"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Clock,
  Shield,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const services = [
  { name: "Dépannage Informatique", href: "/depannage" },
  { name: "Création de Sites Web", href: "/creation-site" },
  { name: "Maintenance", href: "/maintenance" },
  { name: "Google Ads", href: "/google-ads" },
  { name: "SEO / Référencement", href: "/seo" },
]

const company = [
  { name: "À propos", href: "/a-propos" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Témoignages", href: "/temoignages" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

const legal = [
  { name: "Mentions légales", href: "/mentions-legales" },
  { name: "Politique de confidentialité", href: "/politique-confidentialite" },
  { name: "CGV", href: "/cgv" },
  { name: "CGU", href: "/cgu" },
  { name: "Politique des cookies", href: "/politique-cookies" },
]

const zones = [
  "Paris", "Boulogne-Billancourt", "Saint-Denis", "Montreuil", 
  "Nanterre", "Créteil", "Versailles", "Neuilly-sur-Seine"
]

export function Footer() {
  return (
    <footer className="relative bg-[#0a0d10] border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-[#2d8cf0]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="glass rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Restez informé</h3>
              <p className="text-[#8899aa]">Recevez nos conseils et offres exclusives par email</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="glass-input"
              />
              <Button className="whitespace-nowrap bg-gradient-to-r from-[#2d8cf0] to-[#4da6ff] hover:from-[#4da6ff] hover:to-[#22d3ee] shadow-lg shadow-[#4da6ff]/25 border-0">
                S&apos;inscrire
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              {/* Triangle Logo */}
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4da6ff] to-[#22d3ee] opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                <svg viewBox="0 0 48 48" className="w-12 h-12 drop-shadow-lg">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4da6ff" />
                      <stop offset="50%" stopColor="#2d8cf0" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="footerLogoSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f0f4f8" />
                      <stop offset="50%" stopColor="#b8c4d0" />
                      <stop offset="100%" stopColor="#667788" />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="24,4 44,40 4,40" 
                    fill="none" 
                    stroke="url(#footerLogoGradient)" 
                    strokeWidth="2"
                  />
                  <polygon 
                    points="24,14 36,36 12,36" 
                    fill="none" 
                    stroke="url(#footerLogoSilver)" 
                    strokeWidth="1.5"
                  />
                  <polygon 
                    points="24,22 30,32 18,32" 
                    fill="url(#footerLogoGradient)" 
                    opacity="0.8"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold gradient-text">Numelite</span>
            </Link>
            <p className="text-[#8899aa] mb-6 max-w-sm leading-relaxed">
              Votre partenaire informatique en Île-de-France. Dépannage rapide, création de sites web professionnels et maintenance sur mesure.
            </p>
            
            <div className="space-y-3 mb-6">
              <a href="tel:+33123456789" className="flex items-center gap-3 text-[#b8c4d0] hover:text-[#4da6ff] transition-colors group">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:bg-[#4da6ff]/10 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[#667788]">Téléphone</p>
                  <p className="font-semibold">01 23 45 67 89</p>
                </div>
              </a>
              <a href="mailto:contact@numelite.fr" className="flex items-center gap-3 text-[#b8c4d0] hover:text-[#4da6ff] transition-colors group">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:bg-[#4da6ff]/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[#667788]">Email</p>
                  <p className="font-semibold">contact@numelite.fr</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-[#b8c4d0]">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[#667788]">Horaires</p>
                  <p className="font-semibold">Lun-Ven: 9h-19h | Sam: 10h-17h</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[#8899aa] hover:bg-[#4da6ff] hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[#8899aa] hover:bg-[#4da6ff] hover:text-white transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[#8899aa] hover:bg-[#4da6ff] hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[#8899aa] hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#8899aa] hover:text-[#4da6ff] transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4da6ff]/50 group-hover:bg-[#4da6ff] transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#8899aa] hover:text-[#4da6ff] transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4da6ff]/50 group-hover:bg-[#4da6ff] transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Zones d&apos;intervention</h4>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="h-5 w-5 text-[#4da6ff] shrink-0 mt-0.5" />
              <p className="text-[#b8c4d0]">Île-de-France</p>
            </div>
            <ul className="space-y-2">
              {zones.map((zone) => (
                <li key={zone}>
                  <span className="text-[#667788] text-sm">{zone}</span>
                </li>
              ))}
            </ul>
            <Link href="/zones" className="inline-flex items-center gap-1 mt-4 text-[#4da6ff] hover:text-[#22d3ee] text-sm font-medium transition-colors">
              Voir toutes les zones
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/5">
          <div className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">Garantie Satisfaction</p>
              <p className="text-sm text-[#667788]">Satisfait ou reintervenons</p>
            </div>
          </div>
          <div className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2d8cf0] to-[#4da6ff] flex items-center justify-center shadow-lg shadow-[#4da6ff]/25">
              <Clock className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">Intervention Rapide</p>
              <p className="text-sm text-[#667788]">Sous 24h en Île-de-France</p>
            </div>
          </div>
          <div className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center shadow-lg shadow-amber-500/25">
              <Award className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">+500 Clients Satisfaits</p>
              <p className="text-sm text-[#667788]">Note moyenne: 4.9/5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#667788] text-sm">
              © {new Date().getFullYear()} Numelite. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {legal.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-[#667788] hover:text-[#b8c4d0] text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
