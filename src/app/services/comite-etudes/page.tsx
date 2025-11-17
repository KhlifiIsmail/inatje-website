"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Droplets,
  Recycle,
  FileText,
  ArrowRight,
  Leaf,
  Beaker,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Play,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    id: "cultures-hors-sol",
    icon: Sprout,
    title: "Cultures Hors Sol",
    subtitle: "Agriculture urbaine et solutions innovantes",
    description:
      "Solutions complètes pour l'agriculture moderne sans sol traditionnel.",
    gradient: "from-green-500 to-emerald-600",
    presentationLink:
      "https://docs.google.com/presentation/d/1bd_tK8gQtUHi4Eh5aI_zGhedMvRqhcbu/edit?slide=id.p16#slide=id.p16",
    subServices: [
      {
        name: "Système Hydroponique",
        description:
          "Culture de plantes dans des solutions nutritives, sans sol. Rendements élevés et contrôle précis.",
        image: "/images/services/systeme-hydroponique-aeroponie.webp",
        benefits: [
          "Économie d'eau 90%",
          "Croissance 30% plus rapide",
          "Zéro pesticide",
          "Production toute l'année",
        ],
        applications: [
          "Agriculture commerciale",
          "Jardins urbains",
          "Serres modernes",
        ],
      },
      {
        name: "Système Aquaponique",
        description:
          "Combinaison de l'aquaculture et de l'hydroponie. Écosystème fermé et durable.",
        image: "/images/services/aquaponie-1024x574.webp",
        benefits: [
          "Double production",
          "Cycle fermé",
          "Écologique",
          "Économique",
        ],
        applications: ["Fermes urbaines", "Restaurants", "Centres éducatifs"],
      },
      {
        name: "Mur Végétal",
        description:
          "Solutions d'agriculture verticale pour optimiser l'espace et purifier l'air.",
        image: "/images/services/MurVegetal.webp",
        benefits: [
          "Gain d'espace",
          "Purification air",
          "Esthétique",
          "Isolation thermique",
        ],
        applications: ["Bureaux", "Centres commerciaux", "Habitations"],
      },
      {
        name: "Bac Potager",
        description:
          "Jardins surélevés pour agriculture urbaine et éducation environnementale.",
        image: "/images/services/BacPotager.webp",
        benefits: [
          "Facile à entretenir",
          "Ergonomique",
          "Productive",
          "Éducative",
        ],
        applications: ["Écoles", "Communautés", "Balcons urbains"],
      },
    ],
  },
  {
    id: "systeme-irrigation",
    icon: Droplets,
    title: "Système d'Irrigation",
    subtitle: "Gestion intelligente de l'eau",
    description:
      "Technologies avancées pour optimiser l'usage de l'eau en agriculture.",
    gradient: "from-blue-500 to-cyan-600",
    subServices: [
      {
        name: "Irrigation Goutte-à-Goutte",
        description: "Système de micro-irrigation précis et économe en eau.",
        image: "/images/services/arrosage-plantes-legumes-dans-champ-irrigation-goutte-goutte-agrandi-ai-genere.webp",
        benefits: [
          "Économie 50% d'eau",
          "Précision maximale",
          "Moins de maladies",
          "Automation possible",
        ],
        applications: [
          "Cultures maraîchères",
          "Arbres fruitiers",
          "Jardins paysagers",
        ],
      },
      {
        name: "Irrigation Intelligente",
        description:
          "Systèmes automatisés avec capteurs et contrôle à distance.",
        image: "/images/services/IrrigationIntelligente.webp",
        benefits: [
          "Contrôle IoT",
          "Économie d'énergie",
          "Optimisation automatique",
          "Monitoring temps réel",
        ],
        applications: [
          "Grandes exploitations",
          "Serres high-tech",
          "Agriculture de précision",
        ],
      },
      {
        name: "Gestion des Ressources",
        description: "Audit et optimisation de l'usage hydrique global.",
        image: "/images/services/GestiondesRessources.webp",
        benefits: [
          "Diagnostic complet",
          "Plan d'optimisation",
          "Formation équipes",
          "Suivi performance",
        ],
        applications: [
          "Exploitations agricoles",
          "Collectivités",
          "Industries",
        ],
      },
    ],
  },
  {
    id: "systeme-composteur",
    icon: Recycle,
    title: "Système Composteur",
    subtitle: "Valorisation des déchets organiques",
    description:
      "Solutions complètes de compostage pour transformer les déchets en ressources.",
    gradient: "from-amber-500 to-orange-600",
    subServices: [
      {
        name: "Compostage Industriel",
        description:
          "Systèmes à grande échelle pour traitement de volumes importants.",
        image: "/images/services/CompostageIndustriel.webp",
        benefits: [
          "Haute capacité",
          "Processus accéléré",
          "Contrôle qualité",
          "Rentabilité",
        ],
        applications: [
          "Industries agroalimentaires",
          "Collectivités",
          "Coopératives agricoles",
        ],
      },
      {
        name: "Compostage Urbain",
        description:
          "Solutions adaptées aux environnements urbains et péri-urbains.",
        image: "/images/services/CompostageUrbain.webp",
        benefits: ["Compact", "Sans odeurs", "Facile d'usage", "Éducatif"],
        applications: ["Restaurants", "Écoles", "Résidences", "Bureaux"],
      },
      {
        name: "Formation Compostage",
        description:
          "Programmes de formation pour maîtriser les techniques de compostage.",
        image: "/images/services/FormationCompostage.webp",
        benefits: [
          "Expertise technique",
          "Certification",
          "Support continu",
          "Réseau professionnel",
        ],
        applications: [
          "Agriculteurs",
          "Collectivités",
          "Entrepreneurs",
          "Étudiants",
        ],
      },
    ],
  },
  {
    id: "etudes",
    icon: FileText,
    title: "Études et Conseil",
    subtitle: "Expertise et accompagnement stratégique",
    description:
      "Études spécialisées pour éclairer vos décisions et optimiser vos projets.",
    gradient: "from-purple-500 to-indigo-600",
    subServices: [
      {
        name: "Étude de Marché",
        description:
          "Analyse approfondie des opportunités commerciales et de la concurrence.",
        image: "/images/services/etudedeMarche.webp",
        benefits: [
          "Données fiables",
          "Analyse concurrentielle",
          "Opportunités identifiées",
          "Stratégie recommandée",
        ],
        applications: [
          "Lancement produit",
          "Expansion géographique",
          "Investissements",
        ],
      },
      {
        name: "Étude Technique",
        description:
          "Évaluation de faisabilité technique et spécifications détaillées.",
        image: "/images/services/bureau-etude-technique.webp",
        benefits: [
          "Expertise pointue",
          "Solutions optimales",
          "Spécifications précises",
          "Validation technique",
        ],
        applications: ["Nouveaux projets", "Modernisation", "Innovation"],
      },
      {
        name: "Étude de Faisabilité",
        description:
          "Analyse globale de viabilité économique et technique des projets.",
        image: "/images/services/etudedeFaisabilite.webp",
        benefits: [
          "Vision globale",
          "ROI calculé",
          "Risques évalués",
          "Recommandations actionables",
        ],
        applications: [
          "Investissements majeurs",
          "Nouveaux marchés",
          "Innovations",
        ],
      },
      {
        name: "Étude d'Impact",
        description: "Évaluation des impacts environnementaux et sociétaux.",
        image: "/images/services/EtudedImpact.webp",
        benefits: [
          "Conformité réglementaire",
          "Durabilité",
          "Acceptabilité sociale",
          "Mitigation risques",
        ],
        applications: [
          "Grands projets",
          "Industrie",
          "Développement territorial",
        ],
      },
    ],
  },
];

export default function ComiteEtudesPage() {
  const [activeService, setActiveService] = useState<string>(services[0].id);
  const [activeSubService, setActiveSubService] = useState<number>(0);

  const currentService =
    services.find((s) => s.id === activeService) || services[0];

  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-darkgray via-brand-black to-brand-green/10 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-green to-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-green/20 backdrop-blur-sm border border-brand-green/30 rounded-full mb-8 shadow-lg"
            >
              <Beaker size={20} className="text-brand-green" />
              <span className="text-brand-green font-semibold">
                Expertise Technique
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Comité{" "}
              <span className="bg-gradient-to-r from-brand-green to-emerald-400 bg-clip-text text-transparent">
                Études & Projets
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed">
              Solutions innovantes en agriculture durable et ingénierie
              agronomique
            </p>

            <div className="mt-12">
              <Button variant="primary" size="lg" className="group shadow-2xl">
                Découvrir nos réalisations
                <Play
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => {
                  setActiveService(service.id);
                  setActiveSubService(0);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeService === service.id
                    ? "bg-brand-green text-white shadow-lg"
                    : "bg-brand-neutral/50 text-brand-darkgray hover:bg-brand-green/10 hover:text-brand-green"
                }`}
              >
                <service.icon size={18} />
                <span>{service.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {/* Service Header */}
            <div className="text-center mb-16">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${currentService.gradient} flex items-center justify-center shadow-2xl`}
              >
                <currentService.icon className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-heading font-bold mb-4 text-brand-black">
                {currentService.title}
              </h2>
              <p className="text-xl text-brand-green mb-4">
                {currentService.subtitle}
              </p>
              <p className="text-lg text-brand-gray max-w-3xl mx-auto">
                {currentService.description}
              </p>
            </div>

            {/* Sub-Services Grid */}
            <div className="grid lg:grid-cols-4 gap-6 mb-16">
              {currentService.subServices.map((subService, index) => (
                <motion.div
                  key={subService.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveSubService(index)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    activeSubService === index
                      ? "bg-white border-brand-green shadow-lg scale-105"
                      : "bg-brand-neutral/30 border-gray-200 hover:border-brand-green/50 hover:shadow-md"
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-3 text-brand-black">
                    {subService.name}
                  </h3>
                  <p className="text-sm text-brand-gray line-clamp-3">
                    {subService.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Active Sub-Service Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeService}-${activeSubService}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-12">
                    <h3 className="text-3xl font-heading font-bold mb-6 text-brand-black">
                      {currentService.subServices[activeSubService].name}
                    </h3>

                    <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                      {currentService.subServices[activeSubService].description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4 text-brand-black flex items-center">
                        <CheckCircle
                          size={20}
                          className="text-brand-green mr-2"
                        />
                        Avantages Clés
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {currentService.subServices[
                          activeSubService
                        ].benefits.map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center space-x-2 text-brand-gray"
                          >
                            <CheckCircle
                              size={16}
                              className="text-brand-green flex-shrink-0"
                            />
                            <span className="text-sm">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4 text-brand-black flex items-center">
                        <TrendingUp
                          size={20}
                          className="text-brand-green mr-2"
                        />
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentService.subServices[
                          activeSubService
                        ].applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary" className="group">
                        Demander un devis
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Button>
                      {activeService === "cultures-hors-sol" ? (
                        <Link
                          href={currentService.presentationLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" className="group">
                            En savoir plus
                            <ExternalLink
                              size={18}
                              className="group-hover:scale-110 transition-transform"
                            />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant="outline"
                          disabled
                          className="opacity-50 cursor-not-allowed"
                        >
                          <span className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span>Documentation bientôt disponible</span>
                          </span>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Visual Content */}
                  <div className="relative overflow-hidden rounded-r-3xl min-h-[500px] lg:min-h-full">
                    <img
                      src={currentService.subServices[activeSubService].image}
                      alt={currentService.subServices[activeSubService].name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Reference Document Section */}
      <section className="section-container bg-brand-neutral/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-heading font-bold mb-6 text-brand-black">
            Documentation <span className="gradient-text">Technique</span>
          </h2>
          <p className="text-lg text-brand-gray mb-8">
            Consultez notre présentation détaillée avec spécifications
            techniques et études de cas
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-green/20">
            <FileText size={48} className="mx-auto mb-4 text-brand-green" />
            <h3 className="text-xl font-semibold mb-4">
              Présentation Technique Complète
            </h3>
            <p className="text-brand-gray mb-6">
              [PLACEHOLDER: Link to presentation with technical details]
            </p>
            <Button variant="primary" className="group">
              Télécharger la documentation
              <ExternalLink
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </Button>
          </div>
        </motion.div>
      </section>

      <CTASection />
    </main>
  );
}
