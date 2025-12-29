import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Politique des Cookies | Numelite",
  description: "Politique d'utilisation des cookies sur le site Numelite. Informations RGPD sur les cookies.",
}

const cookies = [
  {
    category: "Cookies nécessaires",
    description: "Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.",
    cookies: [
      { name: "session_id", purpose: "Identification de la session utilisateur", duration: "Session" },
      { name: "csrf_token", purpose: "Protection contre les attaques CSRF", duration: "Session" },
      { name: "cookie_consent", purpose: "Mémorisation de votre choix de cookies", duration: "1 an" },
    ]
  },
  {
    category: "Cookies analytiques",
    description: "Ces cookies nous permettent de mesurer l'audience du site et d'améliorer son fonctionnement.",
    cookies: [
      { name: "_ga", purpose: "Identification des visiteurs (Google Analytics)", duration: "2 ans" },
      { name: "_ga_*", purpose: "Conservation de l'état de session", duration: "2 ans" },
      { name: "_gid", purpose: "Identification des visiteurs", duration: "24 heures" },
    ]
  },
  {
    category: "Cookies marketing",
    description: "Ces cookies sont utilisés pour le remarketing et les publicités ciblées.",
    cookies: [
      { name: "_gcl_au", purpose: "Google Ads - Attribution des conversions", duration: "90 jours" },
      { name: "_fbp", purpose: "Facebook Pixel - Remarketing", duration: "90 jours" },
      { name: "ads_consent", purpose: "Consentement publicitaire", duration: "1 an" },
    ]
  }
]

export default function PolitiqueCookiesPage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Badge className="mb-4">Cookies</Badge>
        <h1 className="text-4xl font-bold mb-8">Politique des Cookies</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Cette politique explique comment Numelite utilise les cookies et technologies 
            similaires sur son site web, conformément aux exigences du RGPD et de la 
            directive ePrivacy.
          </p>

          <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, 
            smartphone, tablette) lorsque vous visitez un site web. Les cookies permettent 
            au site de mémoriser vos actions et préférences (identifiant de connexion, 
            langue, taille de police, etc.) pendant une durée déterminée.
          </p>

          <h2>2. Comment utilisons-nous les cookies ?</h2>
          <p>Nous utilisons différents types de cookies :</p>
          <ul>
            <li><strong>Cookies nécessaires :</strong> pour le fonctionnement technique du site</li>
            <li><strong>Cookies analytiques :</strong> pour comprendre comment les visiteurs utilisent le site</li>
            <li><strong>Cookies marketing :</strong> pour personnaliser les publicités et mesurer leur efficacité</li>
          </ul>
        </div>

        {/* Cookies Table */}
        <div className="my-12 space-y-8">
          {cookies.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
                <p className="text-slate-600">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-semibold">Cookie</th>
                        <th className="text-left py-3 px-4 font-semibold">Finalité</th>
                        <th className="text-left py-3 px-4 font-semibold">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.cookies.map((cookie, i) => (
                        <tr key={i} className="border-b border-slate-100">
                          <td className="py-3 px-4 font-mono text-sm">{cookie.name}</td>
                          <td className="py-3 px-4 text-slate-600">{cookie.purpose}</td>
                          <td className="py-3 px-4 text-slate-500">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>3. Comment gérer vos préférences ?</h2>
          <h3>Via notre bandeau de consentement</h3>
          <p>
            Lors de votre première visite, un bandeau vous permet de choisir quels cookies 
            vous acceptez. Vous pouvez modifier vos préférences à tout moment en cliquant 
            sur le lien &quot;Gérer les cookies&quot; en bas de page.
          </p>

          <h3>Via votre navigateur</h3>
          <p>
            Vous pouvez également configurer votre navigateur pour accepter, refuser ou 
            supprimer les cookies. Voici les liens vers les instructions des principaux 
            navigateurs :
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <p>
            <strong>Attention :</strong> La désactivation de certains cookies peut affecter 
            votre expérience de navigation et limiter l&apos;accès à certaines fonctionnalités 
            du site.
          </p>

          <h2>4. Cookies tiers</h2>
          <p>
            Certains cookies sont déposés par des services tiers que nous utilisons :
          </p>
          <ul>
            <li><strong>Google Analytics :</strong> analyse d&apos;audience (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politique de confidentialité Google</a>)</li>
            <li><strong>Google Ads :</strong> publicité et remarketing</li>
            <li><strong>Stripe :</strong> paiement sécurisé (<a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer">Politique Stripe</a>)</li>
          </ul>

          <h2>5. Durée de conservation</h2>
          <p>
            Les cookies ne sont pas conservés au-delà de 13 mois. Votre consentement est 
            renouvelé tous les 12 mois.
          </p>

          <h2>6. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et 
            de suppression des données collectées via les cookies. Pour exercer ces droits, 
            contactez-nous à contact@numelite.fr.
          </p>

          <h2>7. Modifications</h2>
          <p>
            Cette politique peut être modifiée à tout moment. Nous vous informerons de tout 
            changement significatif via une notification sur le site.
          </p>

          <h2>8. Contact</h2>
          <p>
            Pour toute question concernant notre utilisation des cookies :<br />
            Email : contact@numelite.fr<br />
            Téléphone : 01 23 45 67 89
          </p>

          <p className="text-sm text-slate-500 mt-12">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  )
}


