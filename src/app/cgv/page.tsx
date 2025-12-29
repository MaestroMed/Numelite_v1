import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Numelite",
  description: "Conditions générales de vente de Numelite - Services informatiques et création de sites web.",
}

export default function CGVPage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Badge className="mb-4">Conditions commerciales</Badge>
        <h1 className="text-4xl font-bold mb-8">Conditions Générales de Vente</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Les présentes Conditions Générales de Vente (CGV) régissent les relations entre 
            Numelite et ses clients pour toute prestation de services informatiques.
          </p>

          <h2>Article 1 - Objet</h2>
          <p>
            Les présentes conditions générales de vente s&apos;appliquent à toutes les prestations 
            de services conclues entre Numelite et ses clients, qu&apos;ils soient particuliers 
            ou professionnels. Elles définissent les droits et obligations des parties dans 
            le cadre de la vente de services de :
          </p>
          <ul>
            <li>Dépannage et réparation informatique</li>
            <li>Création et développement de sites web</li>
            <li>Maintenance informatique</li>
            <li>Formation et conseil</li>
          </ul>

          <h2>Article 2 - Devis et commandes</h2>
          <h3>2.1 Devis</h3>
          <p>
            Les devis sont gratuits et valables 30 jours. Ils détaillent la nature des 
            prestations, les délais et les tarifs applicables. Toute modification du 
            périmètre initial fera l&apos;objet d&apos;un avenant.
          </p>
          
          <h3>2.2 Commande</h3>
          <p>
            La commande est réputée ferme et définitive après acceptation du devis par le 
            client (signature manuscrite ou validation électronique) et versement de 
            l&apos;acompte le cas échéant.
          </p>

          <h2>Article 3 - Tarifs</h2>
          <p>
            Les tarifs sont indiqués en euros TTC pour les particuliers et HT pour les 
            professionnels. Ils comprennent les prestations décrites dans le devis. 
            Le déplacement est inclus pour les interventions en Île-de-France (petite couronne).
          </p>
          <ul>
            <li>Diagnostic : 49€ TTC</li>
            <li>Intervention standard : 89€ TTC</li>
            <li>Forfait complet : 149€ TTC</li>
            <li>Majoration week-end : +50%</li>
          </ul>

          <h2>Article 4 - Paiement</h2>
          <h3>4.1 Modalités</h3>
          <p>Le paiement peut s&apos;effectuer par :</p>
          <ul>
            <li>Carte bancaire (en ligne ou sur place)</li>
            <li>Virement bancaire</li>
            <li>Espèces (pour les interventions sur place)</li>
            <li>Chèque (sous réserve d&apos;acceptation)</li>
          </ul>

          <h3>4.2 Échéances</h3>
          <ul>
            <li><strong>Dépannage :</strong> Paiement à la fin de l&apos;intervention</li>
            <li><strong>Création de site :</strong> 30% à la commande, 70% à la livraison</li>
            <li><strong>Maintenance :</strong> Prélèvement mensuel</li>
          </ul>

          <h3>4.3 Retard de paiement</h3>
          <p>
            En cas de retard de paiement, des pénalités de retard seront appliquées au taux 
            de 3 fois le taux d&apos;intérêt légal, ainsi qu&apos;une indemnité forfaitaire de 40€ 
            pour frais de recouvrement (professionnels uniquement).
          </p>

          <h2>Article 5 - Exécution des prestations</h2>
          <h3>5.1 Dépannage informatique</h3>
          <p>
            Les interventions sont réalisées au domicile ou au bureau du client, ou à distance 
            selon la nature du problème. Le délai d&apos;intervention standard est de 24 à 48h.
          </p>

          <h3>5.2 Création de site web</h3>
          <p>
            Le processus de création comprend : brief, maquettes, développement, intégration 
            du contenu et mise en ligne. Les délais indicatifs sont de 2 à 6 semaines selon 
            la complexité du projet.
          </p>

          <h3>5.3 Obligations du client</h3>
          <p>Le client s&apos;engage à :</p>
          <ul>
            <li>Fournir les informations et contenus nécessaires dans les délais convenus</li>
            <li>Valider les étapes intermédiaires (maquettes, développement)</li>
            <li>Assurer l&apos;accès aux locaux et équipements pour les interventions</li>
          </ul>

          <h2>Article 6 - Délais</h2>
          <p>
            Les délais indiqués dans les devis sont donnés à titre indicatif. Numelite 
            s&apos;efforce de les respecter mais ne pourra être tenu responsable des retards 
            liés à des causes extérieures (retard de fourniture de contenus par le client, 
            force majeure, etc.).
          </p>

          <h2>Article 7 - Garantie</h2>
          <h3>7.1 Dépannage</h3>
          <ul>
            <li>Diagnostic : garantie 7 jours</li>
            <li>Intervention standard : garantie 30 jours</li>
            <li>Forfait complet : garantie 90 jours</li>
          </ul>
          <p>
            La garantie couvre la réintervention gratuite pour le même problème. Elle 
            ne s&apos;applique pas en cas de nouvelle panne ayant une cause différente.
          </p>

          <h3>7.2 Sites web</h3>
          <p>
            Les sites web bénéficient d&apos;une garantie de 3 mois incluant la correction 
            des anomalies de fonctionnement. Les modifications de contenu ou les évolutions 
            fonctionnelles ne sont pas couvertes par la garantie.
          </p>

          <h2>Article 8 - Droit de rétractation</h2>
          <p>
            Conformément aux articles L.221-18 et suivants du Code de la consommation, 
            le client consommateur dispose d&apos;un délai de 14 jours pour exercer son droit 
            de rétractation à compter de la conclusion du contrat.
          </p>
          <p>
            <strong>Ce droit ne s&apos;applique pas :</strong>
          </p>
          <ul>
            <li>Aux services pleinement exécutés avant la fin du délai de rétractation 
            et dont l&apos;exécution a commencé avec l&apos;accord du consommateur</li>
            <li>Aux contenus numériques fournis sur un support immatériel dont 
            l&apos;exécution a commencé avec l&apos;accord du consommateur</li>
          </ul>

          <h2>Article 9 - Propriété intellectuelle</h2>
          <h3>9.1 Sites web</h3>
          <p>
            Le transfert des droits de propriété intellectuelle sur les créations réalisées 
            pour le compte du client s&apos;effectue au paiement intégral de la prestation.
          </p>

          <h3>9.2 Contenus client</h3>
          <p>
            Le client garantit détenir les droits sur tous les contenus (textes, images, 
            logos) qu&apos;il fournit et dégage Numelite de toute responsabilité à ce titre.
          </p>

          <h2>Article 10 - Responsabilité</h2>
          <p>
            La responsabilité de Numelite est limitée aux dommages directs et prévisibles 
            résultant d&apos;un manquement à ses obligations contractuelles. En tout état de 
            cause, la responsabilité de Numelite est limitée au montant de la prestation.
          </p>
          <p>
            Numelite ne saurait être tenu responsable des dommages indirects tels que perte 
            de données, perte de chiffre d&apos;affaires, préjudice d&apos;image, etc.
          </p>

          <h2>Article 11 - Force majeure</h2>
          <p>
            Numelite ne pourra être tenu responsable de l&apos;inexécution de ses obligations 
            en cas de force majeure, incluant notamment : catastrophes naturelles, incendie, 
            grève, guerre, pandémie, panne générale d&apos;internet, etc.
          </p>

          <h2>Article 12 - Confidentialité</h2>
          <p>
            Numelite s&apos;engage à traiter de manière confidentielle toutes les informations 
            et données du client auxquelles il pourrait avoir accès dans le cadre de 
            l&apos;exécution des prestations.
          </p>

          <h2>Article 13 - Protection des données</h2>
          <p>
            Le traitement des données personnelles est effectué conformément à notre{" "}
            <a href="/politique-confidentialite">politique de confidentialité</a>.
          </p>

          <h2>Article 14 - Résiliation</h2>
          <p>
            En cas de manquement grave de l&apos;une des parties à ses obligations, l&apos;autre 
            partie pourra résilier le contrat par lettre recommandée avec accusé de réception, 
            après mise en demeure restée sans effet pendant 15 jours.
          </p>

          <h2>Article 15 - Litiges</h2>
          <p>
            En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. 
            À défaut d&apos;accord, les tribunaux de Paris seront seuls compétents.
          </p>
          <p>
            Le client consommateur peut également recourir à la médiation de la consommation. 
            Le médiateur compétent est : [Nom du médiateur].
          </p>

          <h2>Article 16 - Droit applicable</h2>
          <p>
            Les présentes conditions générales de vente sont soumises au droit français.
          </p>

          <p className="text-sm text-slate-500 mt-12">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  )
}


