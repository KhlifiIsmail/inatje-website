"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Droplets,
  Recycle,
  FileText,
  ArrowRight,
  Beaker,
  Leaf,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

const mainServices = [
  {
    id: "comite-etudes",
    title: "Comité Études et Projets",
    subtitle: "Solutions techniques et innovations agronomiques",
    icon: Beaker,
    description:
      "Notre expertise principale couvre quatre domaines stratégiques pour l'agriculture moderne et durable.",
    gradient: "from-brand-green to-emerald-600",
    href: "/services/comite-etudes",
    categories: [
      {
        name: "Cultures Hors Sol",
        icon: Sprout,
        items: [
          "Système Hydroponique",
          "Système Aquaponique",
          "Mur Végétal",
          "Bac Potager",
        ],
      },
      {
        name: "Système d'Irrigation",
        icon: Droplets,
        items: [
          "Irrigation goutte-à-goutte",
          "Systèmes intelligents",
          "Gestion de l'eau",
        ],
      },
      {
        name: "Système Composteur",
        icon: Recycle,
        items: [
          "Compostage industriel",
          "Solutions urbaines",
          "Gestion déchets organiques",
        ],
      },
      {
        name: "Études et Conseil",
        icon: FileText,
        items: [
          "Étude de Marché",
          "Étude Technique",
          "Étude de Faisabilité",
          "Étude d'Impact",
        ],
      },
    ],
  },
  {
    id: "developpement-commercial",
    title: "Développement Commercial",
    subtitle: "Networking et opportunités professionnelles",
    icon: TrendingUp,
    description:
      "Nous connectons les talents avec les opportunités à travers notre Forum d'Emploi et de Stages annuel.",
    gradient: "from-blue-600 to-brand-green",
    href: "/services/developpement-commercial",
    categories: [
      {
        name: "Forum d'Emploi et de Stages",
        icon: Users,
        items: [
          "Networking professionnel",
          "Opportunités de stages",
          "Recrutement direct",
          "Ateliers de formation",
        ],
      },
    ],
  },
];

const serviceStats = [
  { label: "Projets Réalisés", value: "70+", icon: FileText },
  { label: "Clients Satisfaits", value: "100+", icon: Users },
  { label: "Solutions Développées", value: "50+", icon: Beaker },
  { label: "Années d'Expérience", value: "13", icon: TrendingUp },
];

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <main className="min-h-screen ">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-darkgray via-brand-black to-brand-green/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-green to-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-brand-green rounded-full blur-3xl"
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
              className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-green/20 backdrop-blur-sm border border-brand-green/30 rounded-full shadow-lg"
            >
              <Leaf size={20} className="text-brand-green" />
              <span className="text-brand-green font-semibold">
                Excellence & Innovation
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Nos{" "}
              <span className="bg-gradient-to-r from-brand-green to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed">
              Des solutions innovantes en ingénierie agronomique pour un avenir
              durable
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {serviceStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-green/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-brand-green/30">
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

      {/* Main Services Cards */}
      <section className="section-container">
        <div className="space-y-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Service Header */}
                <div
                  className="p-8 cursor-pointer"
                  onClick={() =>
                    setExpandedService(
                      expandedService === service.id ? null : service.id
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-heading font-bold text-brand-black mb-2 group-hover:text-brand-green transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-brand-green font-medium mb-2">
                          {service.subtitle}
                        </p>
                        <p className="text-brand-gray max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Link href={service.href}>
                        <Button variant="primary" size="md" className="group">
                          Explorer
                          <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Button>
                      </Link>
                      <motion.div
                        animate={{
                          rotate: expandedService === service.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={24} className="text-brand-gray" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-4 bg-gradient-to-r from-brand-neutral/20 to-transparent">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {service.categories.map((category, catIndex) => (
                            <motion.div
                              key={category.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: catIndex * 0.1 }}
                              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                            >
                              <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                                  <category.icon className="w-5 h-5 text-brand-green" />
                                </div>
                                <h4 className="font-semibold text-brand-black">
                                  {category.name}
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start space-x-2 text-sm text-brand-gray"
                                  >
                                    <ChevronRight
                                      size={14}
                                      className="text-brand-green mt-0.5 flex-shrink-0"
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container bg-brand-darkgray text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Notre <span className="text-brand-green">Processus</span>
          </h2>
          <p className="text-lg text-brand-neutral max-w-2xl mx-auto">
            Une approche méthodique pour garantir l'excellence
          </p>
        </motion.div>

        <div className="grid grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Analyse",
              description: "Étude approfondie de vos besoins et contraintes",
            },
            {
              step: "02",
              title: "Conception",
              description: "Développement de solutions personnalisées",
            },
            {
              step: "03",
              title: "Réalisation",
              description: "Mise en œuvre avec suivi rigoureux",
            },
            {
              step: "04",
              title: "Accompagnement",
              description: "Support continu et optimisation",
            },
          ].map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 mx-auto mb-6 bg-brand-green rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:shadow-2xl transition-all duration-300"
              >
                {process.step}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-green transition-colors">
                {process.title}
              </h3>
              <p className="text-brand-neutral group-hover:text-white transition-colors">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
