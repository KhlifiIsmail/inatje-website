"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowRight,
  ExternalLink,
  Star,
  Award,
  TrendingUp,
  Building,
  GraduationCap,
  Briefcase,
} from "lucide-react";
// import Image from 'next/image';
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

const upcomingEvent = {
  title: "Forum d'Emploi et de Stages 2025",
  date: "10 Décembre 2025",
  time: "09h00 - 18h30",
  location: "Institut National Agronomique de Tunisie",
  address: "43 Avenue Charles Nicolle, 1082 Tunis",
  description:
    "Ce rendez-vous incontournable permet aux futurs ingénieurs agronomes et aux jeunes diplômés de rencontrer des entreprises prestigieuses, d'explorer des opportunités de stages et d'emplois, tout en renforçant leurs réseaux professionnels.",
  fullDescription:
    "Au-delà des simples échanges, le Forum offre également des panels, des sessions de formations et des ateliers sur des thématiques cruciales. L'objectif est d'améliorer les profils des étudiants agronomes pour un avenir meilleur de notre écosystème.",
  canvaLink: "[PLACEHOLDER: Canva presentation link]",
  stats: [
    { label: "Entreprises Attendues", value: "50+", icon: Building },
    { label: "Participants Prévus", value: "500+", icon: Users },
    { label: "Opportunités d'Emploi", value: "200+", icon: Briefcase },
    { label: "Heures de Networking", value: "9h", icon: Clock },
  ],
};

const eventHighlights = [
  {
    title: "Networking Professionnel",
    description:
      "Rencontres directes avec les recruteurs des meilleures entreprises du secteur",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Ateliers de Formation",
    description:
      "Sessions spécialisées pour améliorer vos compétences professionnelles",
    icon: GraduationCap,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Panels d'Experts",
    description:
      "Conférences sur les tendances et l'avenir de l'agriculture durable",
    icon: Award,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Opportunités Directes",
    description: "Accès exclusif aux offres de stages et d'emplois",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
];

const pastEvents = [
  {
    year: "2024",
    title: "Forum d'Emploi et de Stages 2024",
    participants: "450+",
    companies: "45",
    successRate: "82%",
    highlights: [
      "Premier forum post-COVID",
      "Record de participation",
      "Nouveau format hybride",
    ],
  },
  {
    year: "2023",
    title: "Forum d'Emploi et de Stages 2023",
    participants: "380+",
    companies: "38",
    successRate: "78%",
    highlights: [
      "Focus agriculture durable",
      "Ateliers innovation",
      "Partenariats internationaux",
    ],
  },
  {
    year: "2022",
    title: "Forum d'Emploi et de Stages 2022",
    participants: "320+",
    companies: "32",
    successRate: "75%",
    highlights: [
      "Première édition digitale",
      "Sessions virtuelles",
      "Innovation technologique",
    ],
  },
];

const eventTimeline = [
  { time: "09h00", activity: "Accueil des Participants", type: "registration" },
  { time: "09h30", activity: "Cérémonie d'Ouverture", type: "ceremony" },
  { time: "10h00", activity: "Sessions de Networking", type: "networking" },
  { time: "12h00", activity: "Pause Déjeuner & Networking", type: "break" },
  { time: "13h30", activity: "Ateliers de Formation", type: "workshop" },
  { time: "15h30", activity: "Entretiens de Recrutement", type: "interviews" },
  { time: "17h00", activity: "Panel d'Experts", type: "conference" },
  { time: "18h00", activity: "Networking Final & Clôture", type: "closing" },
];

const getTimelineColor = (type: string) => {
  const colors = {
    registration: "from-blue-500 to-cyan-600",
    ceremony: "from-brand-green to-emerald-600",
    networking: "from-purple-500 to-indigo-600",
    break: "from-gray-400 to-gray-600",
    workshop: "from-orange-500 to-red-500",
    interviews: "from-pink-500 to-rose-600",
    conference: "from-indigo-500 to-purple-600",
    closing: "from-brand-green to-blue-500",
  };
  return colors[type as keyof typeof colors] || "from-gray-400 to-gray-600";
};

export default function EvenementsPage() {
  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-darkgray via-brand-black to-purple-900/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-brand-green rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-brand-green to-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full shadow-lg"
            >
              <Calendar size={20} className="text-purple-400" />
              <span className="text-purple-400 font-semibold">
                Événements INAT JE
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Nos{" "}
              <span className="bg-gradient-to-r from-brand-green to-purple-400 bg-clip-text text-transparent">
                Événements
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed">
              Des rendez-vous incontournables pour votre développement
              professionnel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Upcoming Event */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Événement <span className="gradient-text">À Venir</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Ne manquez pas notre prochain rendez-vous majeur
          </p>
        </motion.div>

        {/* Main Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Event Visual */}
            <div className="lg:col-span-1 relative bg-gradient-to-br from-brand-green to-purple-600 p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                >
                  <Calendar size={64} className="text-white" />
                </motion.div>
                <div className="text-6xl font-bold mb-2">10</div>
                <div className="text-2xl font-semibold">Décembre</div>
                <div className="text-lg opacity-80">2025</div>
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-sm font-medium">
                  Événement Majeur
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="lg:col-span-2 p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-4">
                    {upcomingEvent.title}
                  </h3>
                  <p className="text-lg text-brand-gray leading-relaxed mb-6">
                    {upcomingEvent.description}
                  </p>
                  <p className="text-brand-gray leading-relaxed">
                    {upcomingEvent.fullDescription}
                  </p>
                </div>

                {/* Event Info Grid */}
                <div className="grid md:grid-cols-2 gap-4 py-6">
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-brand-green" />
                    <div>
                      <div className="font-semibold text-brand-black">
                        {upcomingEvent.date}
                      </div>
                      <div className="text-sm text-brand-gray">
                        {upcomingEvent.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-brand-green" />
                    <div>
                      <div className="font-semibold text-brand-black">
                        {upcomingEvent.location}
                      </div>
                      <div className="text-sm text-brand-gray">
                        {upcomingEvent.address}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button variant="primary" size="lg" className="group">
                    S'inscrire maintenant
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                  <Button variant="outline" size="lg">
                    En savoir plus
                    <ExternalLink size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {upcomingEvent.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-brand-green group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl font-bold text-brand-green mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-brand-gray">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Highlights */}
      <section className="section-container bg-brand-neutral/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Points <span className="gradient-text">Forts</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Ce qui rend notre Forum unique et incontournable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
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
                  className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <highlight.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-brand-black group-hover:text-brand-green transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-brand-gray group-hover:text-brand-darkgray transition-colors">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Timeline */}
      <section className="section-container bg-brand-darkgray text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Programme de la <span className="text-brand-green">Journée</span>
          </h2>
          <p className="text-lg text-brand-neutral max-w-2xl mx-auto">
            Un planning optimisé pour maximiser vos opportunités
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {eventTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center mb-8 last:mb-0 group"
            >
              <div className="flex-shrink-0 w-24 text-right mr-8">
                <div className="text-lg font-bold text-brand-green">
                  {item.time}
                </div>
              </div>

              <div className="flex-shrink-0 relative">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className={`w-4 h-4 bg-gradient-to-r ${getTimelineColor(
                    item.type
                  )} rounded-full border-4 border-white shadow-lg z-10 relative`}
                />
                {index < eventTimeline.length - 1 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-brand-green/50 to-transparent"></div>
                )}
              </div>

              <div className="flex-1 ml-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 group-hover:border-brand-green/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-brand-green transition-colors">
                    {item.activity}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Events Gallery */}
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
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Retour sur les succès de nos Forums passés
          </p>
        </motion.div>

        {/* Photo Gallery Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-neutral/30 rounded-3xl p-16 border-2 border-dashed border-brand-green/30 mb-16"
        >
          <Users size={80} className="mx-auto mb-6 text-brand-green/50" />
          <h3 className="text-2xl font-semibold mb-4 text-brand-black">
            Galerie Photo des Forums
          </h3>
          <p className="text-brand-gray mb-4">
            [PLACEHOLDER: Forum photos from Google Drive folders]
          </p>
          <p className="text-sm text-brand-green">
            Waiting for event gallery content from your team...
          </p>
          <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4 opacity-50">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-brand-green/10 rounded-lg flex items-center justify-center"
              >
                <span className="text-xs text-brand-green">Photo {i}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Past Events Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group"
            >
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-brand-green mb-2">
                  {event.year}
                </div>
                <h3 className="text-xl font-semibold text-brand-black group-hover:text-brand-green transition-colors">
                  {event.title}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray">Participants:</span>
                  <span className="font-semibold text-brand-black">
                    {event.participants}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray">Entreprises:</span>
                  <span className="font-semibold text-brand-black">
                    {event.companies}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray">Taux de succès:</span>
                  <span className="font-semibold text-brand-green">
                    {event.successRate}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-brand-black mb-3">
                  Points forts:
                </h4>
                <ul className="space-y-2">
                  {event.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-brand-gray"
                    >
                      <Star
                        size={12}
                        className="text-brand-green flex-shrink-0"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
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
            Documentation <span className="text-brand-green">Complète</span>
          </h2>
          <p className="text-lg text-brand-neutral mb-8">
            Consultez notre présentation détaillée pour tous les détails de
            l'événement
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <ExternalLink size={48} className="mx-auto mb-4 text-brand-green" />
            <h3 className="text-xl font-semibold mb-4">
              Présentation Forum 2025
            </h3>
            <p className="text-brand-neutral mb-6">{upcomingEvent.canvaLink}</p>
            <Button variant="primary" className="group">
              Voir la présentation complète
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
