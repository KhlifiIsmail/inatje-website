"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Globe,
  Share2,
  FileText,
  Radio,
  Calendar,
  Users,
  TrendingUp,
  ExternalLink,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Monitor,
  Newspaper,
  Tv,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

const marketingStats = [
  { label: "Portée Mensuelle", value: "50K+", icon: TrendingUp },
  { label: "Événements Couverts", value: "20+", icon: Calendar },
  { label: "Partenaires Média", value: "15+", icon: Radio },
  { label: "Engagement Rate", value: "12%", icon: Users },
];

const onlineServices = [
  {
    icon: Share2,
    title: "Réseaux Sociaux",
    description:
      "Gestion stratégique de nos présences sur les principales plateformes sociales pour maximiser notre visibilité et engagement.",
    features: [
      "Stratégie de contenu ciblée",
      "Community management actif",
      "Campagnes publicitaires",
      "Analytics et reporting",
    ],
    platforms: [
      { name: "Instagram", icon: Instagram, color: "from-purple-500 to-pink-500" },
      { name: "Facebook", icon: Facebook, color: "from-blue-600 to-blue-400" },
      { name: "LinkedIn", icon: Linkedin, color: "from-blue-700 to-blue-500" },
    ],
  },
  {
    icon: Globe,
    title: "Site Web",
    description:
      "Développement et maintenance de notre plateforme web pour présenter nos services et faciliter l'interaction avec nos clients.",
    features: [
      "Design moderne et responsive",
      "Optimisation SEO",
      "Expérience utilisateur optimale",
      "Mise à jour régulière",
    ],
    platforms: [
      { name: "Website", icon: Monitor, color: "from-brand-green to-emerald-600" },
    ],
  },
  {
    icon: FileText,
    title: "Articles et Newsletter",
    description:
      "Création de contenu éditorial de qualité pour informer et engager notre communauté sur les actualités agronomiques.",
    features: [
      "Articles techniques et vulgarisés",
      "Newsletter mensuelle",
      "Études de cas",
      "Actualités sectorielles",
    ],
    platforms: [
      { name: "Newsletter", icon: Newspaper, color: "from-orange-500 to-red-500" },
    ],
  },
];

const offlineServices = [
  {
    icon: Tv,
    title: "Passages Médiatiques",
    description:
      "Visibilité dans les médias traditionnels pour renforcer notre crédibilité et atteindre un public plus large.",
    features: [
      "Interviews TV et radio",
      "Communiqués de presse",
      "Relations publiques",
      "Couverture médiatique événements",
    ],
    stats: { value: "15+", label: "Passages médiatiques annuels" },
  },
  {
    icon: MapPin,
    title: "Présence aux Événements et Foires",
    description:
      "Participation active aux événements professionnels et foires agricoles pour créer des connexions directes et promouvoir nos services.",
    features: [
      "Stands professionnels",
      "Présentations et démonstrations",
      "Networking ciblé",
      "Distribution de supports marketing",
    ],
    stats: { value: "20+", label: "Événements par an" },
  },
];

export default function ComiteMarketingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-darkgray via-brand-black to-purple-900/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-500 to-brand-green rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [180, 90, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-brand-green to-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full shadow-lg"
            >
              <Megaphone size={20} className="text-purple-400" />
              <span className="text-sm md:text-base text-purple-400 font-semibold">
                Communication & Marketing
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white leading-tight px-2">
              Comité{" "}
              <span className="bg-gradient-to-r from-brand-green to-purple-400 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed px-4">
              Stratégie digitale et présence terrain pour amplifier notre impact
            </p>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 px-4"
            >
              {marketingStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-green" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-green mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-brand-neutral">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Online Marketing Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-green/10 rounded-full mb-6">
            <Monitor size={20} className="text-brand-green" />
            <span className="text-brand-green font-semibold">Digital</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-brand-black">
            Marketing <span className="gradient-text">Online</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Stratégies digitales pour maximiser notre visibilité et engagement en ligne
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {onlineServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-brand-green to-purple-500 rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-brand-gray mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-brand-gray">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Platforms */}
              <div className="flex flex-wrap gap-2">
                {service.platforms.map((platform, idx) => (
                  <motion.div
                    key={platform.name}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r ${platform.color} rounded-full text-white text-xs font-medium shadow-md`}
                  >
                    <platform.icon size={14} />
                    <span>{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offline Marketing Section */}
      <section className="section-container bg-brand-neutral/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-500/10 rounded-full mb-6">
            <MapPin size={20} className="text-purple-600" />
            <span className="text-purple-600 font-semibold">Terrain</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-brand-black">
            Marketing <span className="bg-gradient-to-r from-purple-600 to-brand-green bg-clip-text text-transparent">Offline</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Présence physique et relations médias pour ancrer notre notoriété
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {offlineServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-brand-green rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-brand-black group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-brand-green">
                      {service.stats.value}
                    </span>
                    <span className="text-sm text-brand-gray">
                      {service.stats.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-brand-gray mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-brand-gray">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-green to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <Megaphone size={64} className="mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Notre Impact Marketing
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Grâce à notre stratégie marketing intégrée, nous amplifions la visibilité d'INAT Junior Entreprise et créons des connexions significatives avec nos partenaires et clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-brand-green backdrop-blur-sm group"
              >
                Nos réalisations
                <ExternalLink
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-brand-green backdrop-blur-sm group"
              >
                Nous rejoindre
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <CTASection />
    </main>
  );
}
