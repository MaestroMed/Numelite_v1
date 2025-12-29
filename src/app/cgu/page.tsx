import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Numelite",
  description: "Conditions générales d'utilisation du site Numelite.",
}

export default function CGUPage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Badge className="mb-4">Conditions d&apos;utilisation</Badge>
        <h1 className="text-4xl font-bold mb-8">Conditions Générales d&apos;Utilisation</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Les présentes conditions générales d&apos;utilisation (CGU) régissent l&apos;accès et 
            l&apos;utilisation du site internet numelite.fr.
          </p>

          <h2>Article 1 - Objet</h2>
          <p>
            Les présentes CGU ont pour objet de définir les conditions d&apos;accès et d&apos;utilisation 
            du site numelite.fr (ci-après &quot;le Site&quot;) édité par Numelite.
          </p>
          <p>
            L&apos;accès au Site implique l&apos;acceptation sans réserve des présentes CGU. Si vous 
            n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le Site.
          </p>

          <h2>Article 2 - Accès au site</h2>
          <p>
            Le Site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à 
            internet. Numelite met tout en œuvre pour permettre l&apos;accès au Site 24h/24 et 
            7j/7, mais ne peut garantir une disponibilité permanente.
          </p>
          <p>
            L&apos;accès peut être temporairement suspendu pour des raisons de maintenance, de 
            mise à jour ou pour toute autre raison technique.
          </p>

          <h2>Article 3 - Services proposés</h2>
          <p>Le Site propose les fonctionnalités suivantes :</p>
          <ul>
            <li>Présentation des services de Numelite</li>
            <li>Demande de devis en ligne</li>
            <li>Prise de rendez-vous</li>
            <li>Espace client (pour les clients enregistrés)</li>
            <li>Blog et ressources informatives</li>
          </ul>

          <h2>Article 4 - Inscription et compte utilisateur</h2>
          <h3>4.1 Création de compte</h3>
          <p>
            Certains services nécessitent la création d&apos;un compte utilisateur. L&apos;utilisateur 
            s&apos;engage à fournir des informations exactes et à les maintenir à jour.
          </p>

          <h3>4.2 Identifiants</h3>
          <p>
            L&apos;utilisateur est responsable de la confidentialité de ses identifiants de 
            connexion. Toute utilisation du compte est réputée faite par l&apos;utilisateur 
            lui-même.
          </p>

          <h3>4.3 Sécurité</h3>
          <p>
            En cas de perte, vol ou utilisation non autorisée de ses identifiants, 
            l&apos;utilisateur doit en informer immédiatement Numelite.
          </p>

          <h2>Article 5 - Comportement de l&apos;utilisateur</h2>
          <p>L&apos;utilisateur s&apos;engage à :</p>
          <ul>
            <li>Utiliser le Site conformément à sa destination</li>
            <li>Ne pas tenter de nuire au fonctionnement du Site</li>
            <li>Ne pas collecter d&apos;informations sur les autres utilisateurs</li>
            <li>Ne pas diffuser de contenu illicite, diffamatoire ou portant atteinte aux droits de tiers</li>
            <li>Ne pas utiliser le Site à des fins commerciales non autorisées</li>
          </ul>

          <h2>Article 6 - Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments du Site (textes, images, logos, design, code source, etc.) 
            sont protégés par le droit de la propriété intellectuelle et appartiennent à 
            Numelite ou à ses partenaires.
          </p>
          <p>
            Toute reproduction, représentation, modification ou exploitation non autorisée 
            de ces éléments est interdite et peut engager la responsabilité de l&apos;utilisateur.
          </p>

          <h2>Article 7 - Contenus utilisateurs</h2>
          <p>
            Les utilisateurs peuvent être amenés à publier des contenus (commentaires, avis, 
            messages). En publiant du contenu, l&apos;utilisateur garantit :
          </p>
          <ul>
            <li>Être l&apos;auteur ou détenir les droits nécessaires</li>
            <li>Que le contenu ne viole aucun droit de tiers</li>
            <li>Que le contenu est conforme aux lois en vigueur</li>
          </ul>
          <p>
            Numelite se réserve le droit de supprimer tout contenu inapproprié sans préavis.
          </p>

          <h2>Article 8 - Liens hypertextes</h2>
          <p>
            Le Site peut contenir des liens vers des sites tiers. Numelite n&apos;exerce aucun 
            contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>

          <h2>Article 9 - Responsabilité</h2>
          <h3>9.1 Limitations</h3>
          <p>
            Numelite s&apos;efforce de fournir des informations exactes et à jour mais ne peut 
            garantir l&apos;absence d&apos;erreurs ou d&apos;omissions.
          </p>

          <h3>9.2 Exclusions</h3>
          <p>Numelite ne saurait être tenu responsable :</p>
          <ul>
            <li>Des dommages résultant de l&apos;utilisation du Site</li>
            <li>Des interruptions ou dysfonctionnements du Site</li>
            <li>De la présence de virus ou malwares</li>
            <li>Des contenus publiés par les utilisateurs</li>
          </ul>

          <h2>Article 10 - Protection des données</h2>
          <p>
            Le traitement des données personnelles est effectué conformément à notre{" "}
            <a href="/politique-confidentialite">politique de confidentialité</a> et aux 
            dispositions du RGPD.
          </p>

          <h2>Article 11 - Cookies</h2>
          <p>
            Le Site utilise des cookies. Pour en savoir plus, consultez notre{" "}
            <a href="/politique-cookies">politique de cookies</a>.
          </p>

          <h2>Article 12 - Modification des CGU</h2>
          <p>
            Numelite se réserve le droit de modifier les présentes CGU à tout moment. 
            Les modifications prennent effet dès leur publication sur le Site. 
            L&apos;utilisateur est invité à consulter régulièrement les CGU.
          </p>

          <h2>Article 13 - Résiliation</h2>
          <p>
            Numelite se réserve le droit de suspendre ou de résilier l&apos;accès d&apos;un 
            utilisateur au Site en cas de non-respect des présentes CGU, sans préavis 
            ni indemnité.
          </p>

          <h2>Article 14 - Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, les 
            parties s&apos;efforceront de trouver une solution amiable. À défaut, les 
            tribunaux de Paris seront seuls compétents.
          </p>

          <h2>Article 15 - Contact</h2>
          <p>
            Pour toute question relative aux présentes CGU :<br />
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


