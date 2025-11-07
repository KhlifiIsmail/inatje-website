"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  MapPin,
  Briefcase,
  TrendingUp,
  Network,
  Award,
  ExternalLink,
  ArrowRight,
  Building,
  GraduationCap,
  Clock,
  Star,
} from "lucide-react";
// import Image from 'next/image';
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

const forumStats = [
  { label: "Entreprises Participantes", value: "50+", icon: Building },
  { label: "Étudiants Présents", value: "500+", icon: GraduationCap },
  { label: "Opportunités d'Emploi", value: "200+", icon: Briefcase },
  { label: "Taux de Placement", value: "85%", icon: TrendingUp },
];

const forumFeatures = [
  {
    icon: Network,
    title: "Networking Professionnel",
    description:
      "Rencontres directes entre étudiants, diplômés et recruteurs des meilleures entreprises du secteur agricole.",
    benefits: [
      "Contacts qualifiés",
      "Opportunités immédiates",
      "Conseils d'experts",
      "Réseau durable",
    ],
  },
  {
    icon: Briefcase,
    title: "Opportunités d'Emploi",
    description:
      "Accès exclusif aux postes et stages dans l'ingénierie agronomique et secteurs connexes.",
    benefits: [
      "Offres exclusives",
      "Entretiens directs",
      "Stages qualifiants",
      "CDI proposés",
    ],
  },
  {
    icon: Award,
    title: "Ateliers de Formation",
    description:
      "Sessions spécialisées pour améliorer les compétences et la préparation professionnelle.",
    benefits: [
      "CV optimisé",
      "Techniques d'entretien",
      "Soft skills",
      "Personal branding",
    ],
  },
  {
    icon: TrendingUp,
    title: "Panels Sectoriels",
    description:
      "Conférences sur les tendances du marché et l'avenir de l'agriculture durable.",
    benefits: [
      "Vision marché",
      "Innovations",
      "Opportunités futures",
      "Expertise sectorielle",
    ],
  },
];

const timeline2025 = [
  {
    time: "09h00-09h30",
    activity: "Accueil & Inscription",
    type: "logistique",
  },
  { time: "09h30-10h00", activity: "Cérémonie d'Ouverture", type: "officiel" },
  {
    time: "10h00-12h00",
    activity: "Sessions Networking - Première Phase",
    type: "networking",
  },
  {
    time: "12h00-13h30",
    activity: "Pause Déjeuner & Networking Informel",
    type: "pause",
  },
  {
    time: "13h30-15h00",
    activity: "Ateliers de Formation Parallèles",
    type: "formation",
  },
  { time: "15h00-15h30", activity: "Pause-Café & Échanges", type: "pause" },
  {
    time: "15h30-17h00",
    activity: "Sessions Recrutement - Entretiens",
    type: "recrutement",
  },
  {
    time: "17h00-18h00",
    activity: "Panel: Avenir de l'Agriculture Durable",
    type: "conference",
  },
  {
    time: "18h00-18h30",
    activity: "Clôture & Networking Final",
    type: "cloture",
  },
];

const pastEditions = [
  { year: "2024", participants: "450+", companies: "45", placements: "82%" },
  { year: "2023", participants: "380+", companies: "38", placements: "78%" },
  { year: "2022", participants: "320+", companies: "32", placements: "75%" },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "officiel":
      return "from-brand-green to-emerald-600";
    case "networking":
      return "from-blue-500 to-cyan-600";
    case "formation":
      return "from-purple-500 to-indigo-600";
    case "recrutement":
      return "from-orange-500 to-red-500";
    case "conference":
      return "from-indigo-500 to-purple-600";
    default:
      return "from-gray-400 to-gray-600";
  }
};

export default function DeveloppementCommercialPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-darkgray via-brand-black to-blue-900/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-brand-green rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-brand-green to-purple-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Event Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full shadow-lg"
            >
              <Calendar size={20} className="text-blue-400" />
              <span className="text-blue-400 font-semibold">
                10 Décembre 2025
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Forum d'Emploi{" "}
              <span className="bg-gradient-to-r from-brand-green to-blue-400 bg-clip-text text-transparent">
                & de Stages
              </span>{" "}
              2025
            </h1>

            <p className="text-xl md:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed">
              Ce rendez-vous incontournable permet aux futurs ingénieurs
              agronomes et aux jeunes diplômés de rencontrer des entreprises
              prestigieuses
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="primary" size="lg" className="group shadow-2xl">
                S'inscrire maintenant
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-brand-black backdrop-blur-sm"
              >
                Télécharger le programme
                <ExternalLink size={20} />
              </Button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {forumStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <stat.icon className="w-8 h-8 text-brand-green" />
                  </div>
                  <div className="text-3xl font-bold text-brand-green mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-brand-neutral">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-6">
            Un Événement <span className="gradient-text">Incontournable</span>
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-brand-gray leading-relaxed space-y-6">
            <p>
              Ce rendez-vous incontournable permet aux futurs ingénieurs
              agronomes et aux jeunes diplômés de rencontrer des entreprises
              prestigieuses, d'explorer des opportunités de stages et d'emplois,
              tout en renforçant leurs réseaux professionnels.
            </p>
            <p>
              Au-delà des simples échanges, le Forum offre également des panels,
              des sessions de formations et des ateliers sur des thématiques
              cruciales. L'objectif est d'améliorer les profils des étudiants
              agronomes pour un avenir meilleur de notre écosystème.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {forumFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-brand-green to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-brand-gray mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                        <span className="text-sm text-brand-gray">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-green to-blue-500 rounded-3xl p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Calendar size={48} className="text-white/80" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Date</h3>
                <p className="text-xl">10 Décembre 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin size={48} className="text-white/80" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Lieu</h3>
                <p className="text-xl">INAT Campus</p>
                <p className="text-sm opacity-80">
                  43 Avenue Charles Nicolle, Tunis
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock size={48} className="text-white/80" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Horaires</h3>
                <p className="text-xl">09h00 - 18h30</p>
                <p className="text-sm opacity-80">Journée complète</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="section-container bg-brand-neutral/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Programme <span className="gradient-text">Détaillé</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Une journée complète d'opportunités et d'apprentissage
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline2025.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center mb-8 group"
            >
              <div className="flex-shrink-0 w-32 text-right mr-8">
                <div className="text-lg font-semibold text-brand-black">
                  {item.time}
                </div>
              </div>

              <div className="flex-shrink-0 relative">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-4 h-4 bg-gradient-to-r ${getTypeColor(
                    item.type
                  )} rounded-full border-4 border-white shadow-lg z-10 relative`}
                />
                {index < timeline2025.length - 1 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-brand-green/50 to-transparent"></div>
                )}
              </div>

              <div className="flex-1 ml-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-brand-green/30"
                >
                  <h3 className="text-xl font-semibold mb-2 text-brand-black group-hover:text-brand-green transition-colors">
                    {item.activity}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(
                        item.type
                      )} text-white text-xs font-medium rounded-full`}
                    >
                      {item.type}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Éditions <span className="gradient-text">Précédentes</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto mb-8">
            Revivez les moments forts de nos Forums précédents
          </p>

          {/* Gallery Placeholder */}
          <div className="bg-brand-neutral/30 rounded-3xl p-16 border-2 border-dashed border-brand-green/30">
            <Users size={80} className="mx-auto mb-6 text-brand-green/50" />
            <h3 className="text-2xl font-semibold mb-4 text-brand-black">
              Galerie Photo
            </h3>
            <p className="text-brand-gray mb-4">
              [PLACEHOLDER: Forum photos from Google Drive folders]
            </p>
            <p className="text-sm text-brand-green">
              Waiting for photo gallery content from your team...
            </p>
          </div>
        </motion.div>

        {/* Past Editions Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pastEditions.map((edition, index) => (
            <motion.div
              key={edition.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-brand-green mb-4">
                {edition.year}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-brand-gray">Participants:</span>
                  <span className="font-semibold text-brand-black">
                    {edition.participants}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">Entreprises:</span>
                  <span className="font-semibold text-brand-black">
                    {edition.companies}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">Taux de placement:</span>
                  <span className="font-semibold text-brand-green">
                    {edition.placements}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Canva Link Section */}
      <section className="section-container bg-brand-darkgray text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-h2 font-bold mb-6">
            Plus d'<span className="text-brand-green">Informations</span>
          </h2>
          <p className="text-lg text-brand-neutral mb-8">
            Découvrez tous les détails de l'événement dans notre présentation
            complète
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <ExternalLink size={48} className="mx-auto mb-4 text-brand-green" />
            <h3 className="text-xl font-semibold mb-4">
              Présentation Complète
            </h3>
            <p className="text-brand-neutral mb-6">
              [PLACEHOLDER: Link to Canva presentation]
            </p>
            <Button variant="primary" className="group">
              Voir la présentation détaillée
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
