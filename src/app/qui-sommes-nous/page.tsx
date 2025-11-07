"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";
// import Image from 'next/image';
import { Button } from "@/components/ui/Button";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";
import Link from "next/link";

const aboutFeatures = [
  {
    icon: Target,
    title: "Notre Introduction",
    description:
      "Créée en 2012 au sein de l'Institut National Agronomique de Tunisie (INAT), INAT Junior Entreprise est une organisation étudiante à but non lucratif opérant sous l'égide de la Confédération Tunisienne des Junior-Entreprises (JET).",
    gradient: "from-brand-green/20 to-purple-500/20",
  },
  {
    icon: Lightbulb,
    title: "Notre Rôle",
    description:
      "Acteur majeur de l'innovation étudiante en ingénierie agronomique, nous intervenons dans trois domaines clés : la formation, l'organisation d'événements et la réalisation de projets d'étude et de conseil.",
    gradient: "from-blue-500/20 to-brand-green/20",
  },
  {
    icon: Users,
    title: "Nos Services",
    description:
      "Nos services englobent un large éventail de missions : analyses de marché, évaluations d'impact environnemental, ainsi que études techniques et économiques, menées selon des méthodologies scientifiques rigoureuses et adaptées aux besoins de nos clients.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: TrendingUp,
    title: "Notre Force",
    description:
      "Forte de son ancrage académique et de son réseau professionnel, INAT Junior Entreprise allie expertise théorique et application pratique pour accompagner ses clients dans la concrétisation de leurs projets.",
    gradient: "from-amber-500/20 to-brand-green/20",
  },
];

const timeline = [
  {
    year: "2012",
    event: "Création d'INAT Junior Entreprise",
    description:
      "Fondation officielle au sein de l'Institut National Agronomique",
  },
  {
    year: "2015",
    event: "Premier Forum d'Emploi",
    description: "Lancement de notre événement phare de networking",
  },
  {
    year: "2018",
    event: "Expansion des Services",
    description: "Développement des services en hydroponie et irrigation",
  },
  {
    year: "2022",
    event: "Innovation Durable",
    description: "Focus sur les solutions agronomiques durables",
  },
  {
    year: "2025",
    event: "Leadership Régional",
    description: "Positionnement comme leader en innovation agronomique",
  },
];

const values = [
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "Pionnier dans les solutions agronomiques",
  },
  {
    title: "Excellence",
    icon: Award,
    description: "Standards professionnels élevés",
  },
  {
    title: "Durabilité",
    icon: Target,
    description: "Engagement environnemental fort",
  },
  {
    title: "Collaboration",
    icon: Users,
    description: "Travail d'équipe et partenariats",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen  overflow-hidden">
      {/* Premium Hero Section with Glassmorphism */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-darkgray via-brand-black to-brand-darkgray">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-green to-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-brand-green rounded-full blur-3xl"
          />
        </div>

        {/* Glassmorphism Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto px-6"
        >
          <div className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-2xl bg-white/5 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-green/20 backdrop-blur-sm border border-brand-green/30 rounded-full mb-8 shadow-lg"
              >
                <Calendar size={20} className="text-brand-green" />
                <span className="text-brand-green font-semibold">
                  Depuis 2012
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight">
                Plus qu'une{" "}
                <span className="bg-gradient-to-r from-brand-green to-blue-400 bg-clip-text text-transparent">
                  Junior Entreprise
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl md:text-2xl text-brand-neutral mb-8 leading-relaxed max-w-4xl mx-auto"
              >
                Une aventure collective vers l'impact, l'apprentissage et
                l'innovation
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group shadow-2xl"
                  >
                    Rejoignez-nous
                    <Users
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white hover:text-brand-black backdrop-blur-sm"
                  >
                    Nos Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section with Premium Cards */}
      <section className="section-container bg-gradient-to-b from-brand-neutral/20 to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {aboutFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-brand-green/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-lightgreen rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-brand-gray leading-relaxed group-hover:text-brand-darkgray transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <StatsSection />

      {/* Premium Timeline Section */}
      <section className="section-container bg-brand-darkgray text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-h2 font-bold mb-4">
              Notre <span className="text-brand-green">Parcours</span>
            </h2>
            <p className="text-lg text-brand-neutral max-w-2xl mx-auto">
              13 années d'innovation et de croissance continue
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-green to-transparent"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 pr-8 pl-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="text-3xl font-bold text-brand-green mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.event}</h3>
                    <p className="text-brand-neutral">{item.description}</p>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 bg-brand-green rounded-full border-4 border-white shadow-lg z-10"
                />

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-gradient-to-br from-brand-neutral/30 to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Nos <span className="gradient-text">Valeurs</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Les principes qui guident notre mission quotidienne
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-brand-green to-brand-lightgreen rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 text-brand-black group-hover:text-brand-green transition-colors">
                {value.title}
              </h3>
              <p className="text-brand-gray group-hover:text-brand-darkgray transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Notre <span className="gradient-text">Équipe</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto mb-8">
            Les talents qui font la différence chaque jour
          </p>
          <div className="bg-brand-neutral/20 rounded-xl p-8 border-2 border-dashed border-brand-green/30">
            <Users size={64} className="mx-auto mb-4 text-brand-green/50" />
            <p className="text-brand-gray">
              [PLACEHOLDER: Team photos and bios will be added here]
            </p>
            <p className="text-sm text-brand-green mt-2">
              Waiting for team content from your team...
            </p>
          </div>
        </motion.div>
      </section>

      <CTASection />
    </main>
  );
}
