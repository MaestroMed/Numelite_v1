import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Numelite",
  description: "Politique de confidentialité et protection des données personnelles de Numelite. Conformité RGPD.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Badge className="mb-4">RGPD</Badge>
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Numelite s&apos;engage à protéger la vie privée des utilisateurs de son site internet. 
            Cette politique de confidentialité explique comment nous collectons, utilisons et 
            protégeons vos données personnelles conformément au Règlement Général sur la 
            Protection des Données (RGPD).
          </p>

          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données est :<br />
            <strong>Numelite</strong><br />
            [Adresse complète]<br />
            Email : contact@numelite.fr<br />
            Téléphone : 01 23 45 67 89
          </p>

          <h2>2. Données collectées</h2>
          <p>Nous collectons les données suivantes :</p>
          
          <h3>Données fournies directement par vous :</h3>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Adresse postale (si intervention à domicile)</li>
            <li>Informations relatives à votre demande ou projet</li>
            <li>Données de facturation</li>
          </ul>

          <h3>Données collectées automatiquement :</h3>
          <ul>
            <li>Adresse IP</li>
            <li>Type de navigateur</li>
            <li>Pages visitées et temps passé</li>
            <li>Source du trafic (référent)</li>
            <li>Données de cookies (voir notre politique de cookies)</li>
          </ul>

          <h2>3. Finalités du traitement</h2>
          <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
          <ul>
            <li>Traitement de vos demandes de contact et devis</li>
            <li>Exécution des prestations de services</li>
            <li>Gestion de la relation client</li>
            <li>Facturation et comptabilité</li>
            <li>Envoi de communications marketing (avec votre consentement)</li>
            <li>Amélioration de nos services et de notre site</li>
            <li>Analyse statistique du trafic</li>
            <li>Respect de nos obligations légales</li>
          </ul>

          <h2>4. Base légale du traitement</h2>
          <p>Le traitement de vos données repose sur :</p>
          <ul>
            <li><strong>L&apos;exécution d&apos;un contrat :</strong> pour la fourniture de nos services</li>
            <li><strong>Votre consentement :</strong> pour l&apos;envoi de newsletters et communications marketing</li>
            <li><strong>Notre intérêt légitime :</strong> pour l&apos;amélioration de nos services et la sécurité du site</li>
            <li><strong>Nos obligations légales :</strong> pour la conservation des factures et documents comptables</li>
          </ul>

          <h2>5. Durée de conservation</h2>
          <p>Nous conservons vos données pour les durées suivantes :</p>
          <ul>
            <li><strong>Données clients :</strong> 5 ans après la fin de la relation commerciale</li>
            <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
            <li><strong>Données de prospection :</strong> 3 ans après le dernier contact</li>
            <li><strong>Cookies :</strong> 13 mois maximum</li>
          </ul>

          <h2>6. Destinataires des données</h2>
          <p>Vos données peuvent être partagées avec :</p>
          <ul>
            <li>Notre équipe interne (service client, technique, comptabilité)</li>
            <li>Nos sous-traitants techniques (hébergement, emailing, paiement)</li>
            <li>Les autorités compétentes si la loi l&apos;exige</li>
          </ul>
          <p>
            Nous ne vendons jamais vos données personnelles à des tiers. Nos sous-traitants 
            sont contractuellement tenus de respecter la confidentialité de vos données.
          </p>

          <h2>7. Transferts hors UE</h2>
          <p>
            Certains de nos sous-traitants peuvent être situés hors de l&apos;Union Européenne. 
            Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place 
            (clauses contractuelles types, certification Privacy Shield, etc.).
          </p>

          <h2>8. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
            <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
            <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
            <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
            <li><strong>Droit de retirer votre consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
          </ul>

          <p>
            Pour exercer ces droits, contactez-nous par email à contact@numelite.fr ou par 
            courrier à notre adresse postale. Nous répondrons dans un délai d&apos;un mois.
          </p>

          <h2>9. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
            pour protéger vos données contre tout accès non autorisé, modification, divulgation 
            ou destruction :
          </p>
          <ul>
            <li>Chiffrement SSL/TLS pour toutes les transmissions</li>
            <li>Accès restreint aux données personnelles</li>
            <li>Sauvegardes régulières et sécurisées</li>
            <li>Mises à jour de sécurité régulières</li>
          </ul>

          <h2>10. Cookies</h2>
          <p>
            Notre site utilise des cookies. Pour en savoir plus sur les cookies que nous 
            utilisons et comment les gérer, consultez notre{" "}
            <a href="/politique-cookies">politique de cookies</a>.
          </p>

          <h2>11. Réclamation</h2>
          <p>
            Si vous estimez que le traitement de vos données ne respecte pas la réglementation, 
            vous avez le droit d&apos;introduire une réclamation auprès de la CNIL :
          </p>
          <p>
            <strong>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong><br />
            3 Place de Fontenoy - TSA 80715<br />
            75334 Paris Cedex 07<br />
            www.cnil.fr
          </p>

          <h2>12. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout 
            moment. Toute modification sera publiée sur cette page avec la date de mise à jour.
          </p>

          <h2>13. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou vos données 
            personnelles, contactez-nous :
          </p>
          <ul>
            <li>Email : contact@numelite.fr</li>
            <li>Téléphone : 01 23 45 67 89</li>
          </ul>

          <p className="text-sm text-slate-500 mt-12">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  )
}


