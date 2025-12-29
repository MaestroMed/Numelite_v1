import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Mentions Légales | Numelite",
  description: "Mentions légales du site Numelite - Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
}

export default function MentionsLegalesPage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Badge className="mb-4">Informations légales</Badge>
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 
            pour la Confiance dans l&apos;économie numérique, dite L.C.E.N., nous portons à la connaissance 
            des utilisateurs et visiteurs du site numelite.fr les informations suivantes :
          </p>

          <h2>1. Informations légales</h2>
          
          <h3>Éditeur du site</h3>
          <p>
            <strong>Raison sociale :</strong> Numelite<br />
            <strong>Forme juridique :</strong> [À compléter - SARL, SAS, Auto-entrepreneur, etc.]<br />
            <strong>Capital social :</strong> [À compléter]<br />
            <strong>SIRET :</strong> [À compléter]<br />
            <strong>RCS :</strong> [À compléter]<br />
            <strong>N° TVA intracommunautaire :</strong> [À compléter]<br />
            <strong>Siège social :</strong> [Adresse complète à compléter], France<br />
            <strong>Téléphone :</strong> 01 23 45 67 89<br />
            <strong>Email :</strong> contact@numelite.fr
          </p>

          <h3>Directeur de la publication</h3>
          <p>
            <strong>Nom :</strong> [Nom du dirigeant]<br />
            <strong>Qualité :</strong> [Gérant / Président / etc.]
          </p>

          <h3>Hébergeur du site</h3>
          <p>
            <strong>Raison sociale :</strong> Vercel Inc.<br />
            <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
            <strong>Site web :</strong> https://vercel.com
          </p>

          <h2>2. Conditions d&apos;utilisation</h2>
          <p>
            L&apos;utilisation du site numelite.fr implique l&apos;acceptation pleine et entière des conditions 
            générales d&apos;utilisation décrites ci-après. Ces conditions d&apos;utilisation sont susceptibles 
            d&apos;être modifiées ou complétées à tout moment.
          </p>

          <h2>3. Description des services fournis</h2>
          <p>
            Le site numelite.fr a pour objet de fournir une information concernant l&apos;ensemble des 
            activités de la société Numelite, notamment :
          </p>
          <ul>
            <li>Services de dépannage informatique</li>
            <li>Création de sites web</li>
            <li>Maintenance informatique</li>
            <li>Formation et conseil</li>
          </ul>
          <p>
            Numelite s&apos;efforce de fournir sur le site des informations aussi précises que possible. 
            Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des 
            carences dans la mise à jour.
          </p>

          <h2>4. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu du site numelite.fr (textes, images, graphismes, logo, icônes, etc.) 
            est la propriété exclusive de Numelite, à l&apos;exception des marques, logos ou contenus 
            appartenant à d&apos;autres sociétés partenaires ou auteurs.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
            même partielle, de ces différents éléments est strictement interdite sans l&apos;accord exprès 
            par écrit de Numelite.
          </p>

          <h2>5. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens hypertextes vers d&apos;autres sites. Numelite n&apos;exerce aucun 
            contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Le site numelite.fr peut collecter automatiquement des informations standard. Pour plus 
            d&apos;informations, veuillez consulter notre <a href="/politique-cookies">politique de cookies</a>.
          </p>

          <h2>7. Protection des données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez 
            d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant. 
            Pour plus d&apos;informations, consultez notre{" "}
            <a href="/politique-confidentialite">politique de confidentialité</a>.
          </p>

          <h2>8. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, 
            les tribunaux français seront seuls compétents.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
          </p>
          <ul>
            <li>Par email : contact@numelite.fr</li>
            <li>Par téléphone : 01 23 45 67 89</li>
            <li>Par courrier : [Adresse postale]</li>
          </ul>

          <p className="text-sm text-slate-500 mt-12">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  )
}


