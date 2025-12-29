import { Metadata } from "next"
import Link from "next/link"
import { HelpCircle, Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | Questions Fréquentes | Numelite",
  description: "Trouvez les réponses à vos questions sur nos services de dépannage informatique et création de sites web.",
}

const faqCategories = [
  {
    category: "Dépannage Informatique",
    questions: [
      {
        question: "Combien coûte une intervention de dépannage ?",
        answer: "Nos tarifs sont transparents : Diagnostic à 49€, Intervention Standard à 89€, et Forfait Complet à 149€. Le déplacement est inclus en Île-de-France. Les pièces détachées sont facturées en supplément si nécessaire."
      },
      {
        question: "Sous quel délai pouvez-vous intervenir ?",
        answer: "Nous intervenons généralement sous 24 à 48h en Île-de-France. Pour les urgences, nous proposons des interventions le jour même avec un supplément."
      },
      {
        question: "Intervenez-vous à domicile ou dois-je me déplacer ?",
        answer: "Nous nous déplaçons à votre domicile ou sur votre lieu de travail. Pour les problèmes complexes nécessitant un atelier, nous pouvons récupérer votre matériel et vous le restituer une fois réparé."
      },
      {
        question: "Réparez-vous les Mac ou uniquement les PC ?",
        answer: "Nous intervenons sur PC Windows et Mac. Nos techniciens sont formés sur les deux environnements."
      },
      {
        question: "Quelle est votre garantie sur les réparations ?",
        answer: "Toutes nos interventions sont garanties : 7 jours pour le diagnostic, 30 jours pour l'intervention standard, et 90 jours pour le forfait complet. Si le même problème revient, nous réintervenons gratuitement."
      },
      {
        question: "Comment puis-je payer ?",
        answer: "Nous acceptons le paiement par carte bancaire, espèces, virement ou chèque. Le paiement s'effectue à la fin de l'intervention."
      },
    ]
  },
  {
    category: "Création de Sites Web",
    questions: [
      {
        question: "Combien coûte un site web ?",
        answer: "Nos tarifs varient selon vos besoins : Site Vitrine à partir de 990€, Site Pro à partir de 1990€, et E-commerce à partir de 3490€. Un devis personnalisé gratuit est établi pour chaque projet."
      },
      {
        question: "Combien de temps pour créer un site ?",
        answer: "Le délai dépend du type de site : 2-3 semaines pour un site vitrine, 3-4 semaines pour un site pro, et 4-6 semaines pour un e-commerce. Ces délais peuvent varier selon la complexité et votre réactivité pour fournir les contenus."
      },
      {
        question: "Pourrai-je modifier mon site moi-même ?",
        answer: "Oui ! Nous utilisons des systèmes de gestion de contenu simples qui vous permettent de modifier textes et images sans connaissances techniques. Une formation est incluse dans tous nos forfaits."
      },
      {
        question: "Qu'est-ce qui est inclus dans le prix ?",
        answer: "Le prix inclut : le design personnalisé, le développement, l'hébergement et le nom de domaine pour 1 an, le certificat SSL, l'optimisation SEO de base, et une formation à la gestion du site."
      },
      {
        question: "Proposez-vous des facilités de paiement ?",
        answer: "Oui, vous pouvez payer en 2 ou 3 fois sans frais : 30% à la commande, le reste à la livraison ou en mensualités."
      },
      {
        question: "Et après la première année ?",
        answer: "L'hébergement et le nom de domaine sont renouvelables à 120€/an pour un site vitrine, 150€/an pour un site pro, et 180€/an pour un e-commerce. Des forfaits de maintenance sont disponibles à partir de 29€/mois."
      },
    ]
  },
  {
    category: "Maintenance & Support",
    questions: [
      {
        question: "Proposez-vous des contrats de maintenance ?",
        answer: "Oui ! Nous proposons trois formules : Essentiel à 29€/mois, Business à 79€/mois, et Premium à 149€/mois. Chaque formule inclut les mises à jour, sauvegardes, et un support adapté."
      },
      {
        question: "Que comprend la maintenance ?",
        answer: "Selon la formule : mises à jour de sécurité, sauvegardes régulières, monitoring, support technique, modifications mineures, et optimisation continue."
      },
      {
        question: "Comment contacter le support ?",
        answer: "Vous pouvez nous contacter par téléphone, email, ou WhatsApp. Les délais de réponse varient selon votre formule : 48h pour Essentiel, 24h pour Business, et 4h pour Premium."
      },
    ]
  },
  {
    category: "Paiement & Facturation",
    questions: [
      {
        question: "Quels modes de paiement acceptez-vous ?",
        answer: "Nous acceptons : carte bancaire (en ligne ou sur place), virement bancaire, chèque, et espèces pour les interventions sur place."
      },
      {
        question: "Émettez-vous des factures ?",
        answer: "Oui, une facture est systématiquement émise et envoyée par email après chaque prestation. Vous pouvez également les retrouver dans votre espace client."
      },
      {
        question: "Puis-je avoir un devis avant de m'engager ?",
        answer: "Absolument ! Tous nos devis sont gratuits et sans engagement. Nous vous fournissons un devis détaillé sous 48h."
      },
    ]
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4">FAQ</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Questions <span className="gradient-text">Fréquentes</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-slate-50 rounded-xl px-6 border-0"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vous n&apos;avez pas trouvé votre réponse ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Notre équipe est là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33123456789">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 gap-2">
                <Phone className="h-5 w-5" />
                01 23 45 67 89
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 gap-2">
                <MessageCircle className="h-5 w-5" />
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}


