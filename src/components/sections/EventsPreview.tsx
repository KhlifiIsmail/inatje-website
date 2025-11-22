"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Award,
  Target,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const FEATURED_EVENT = {
  title: "Forum d'Emploi et de Stages 2025",
  subtitle: "AGROFERA - 13ème Édition",
  date: "10 Décembre 2025",
  time: "08h30 - 17h00",
  venue: "Institut National Agronomique de Tunisie",
  address: "43 Avenue Charles Nicolle, 1082 Tunis",
  overview:
    "Ce rendez-vous incontournable permet aux futurs ingénieurs agronomes et aux jeunes diplômés de rencontrer des entreprises prestigieuses, d'explorer des opportunités de stages et d'emplois, tout en renforçant leurs réseaux professionnels.",
  mission:
    "Au-delà des simples échanges, le Forum offre également des panels, des sessions de formations et des ateliers sur des thématiques cruciales. L'objectif est d'améliorer les profils des étudiants agronomes pour un avenir meilleur de notre écosystème.",
  registrationLink: "/contact",
  eventLink:
    "https://www.facebook.com/events/2287714738343501?acontext=%7B%22event_action_history%22%3A%5B%7B%22surface%22%3A%22home%22%7D%2C%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D%5D%2C%22ref_notif_type%22%3Anull%7D",
  bannerImage: "/images/events/event.jpg",
  edition: "13ème Édition",
} as const;

export function EventsPreview() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full mb-4">
          <Calendar className="w-4 h-4 text-brand-green" />
          <span className="text-sm font-semibold text-brand-green">
            À ne pas manquer
          </span>
        </div>
        <h2 className="text-h2 font-bold mb-4">
          Événement <span className="gradient-text">Phare</span>
        </h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          Rejoignez-nous pour le rendez-vous annuel incontournable de
          l'agriculture tunisienne
        </p>
      </motion.div>

      {/* Featured Event Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
          {/* Hero Banner */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-900">
            <Image
              src={FEATURED_EVENT.bannerImage}
              alt={FEATURED_EVENT.title}
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Edition Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-6 right-6 flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border-2 border-yellow-400"
            >
              <Award className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-bold text-slate-900">
                {FEATURED_EVENT.edition}
              </span>
            </motion.div>

            {/* Floating Info Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 left-6 px-5 py-3 bg-brand-green/95 backdrop-blur-sm rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3 text-white">
                <Calendar className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium opacity-90">
                    Mercredi, 10 Décembre 2025
                  </p>
                  <p className="text-xs opacity-75">{FEATURED_EVENT.time}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Event Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Title & Description */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-black leading-tight">
                {FEATURED_EVENT.title}
              </h3>
              <p className="text-lg text-brand-gray leading-relaxed">
                {FEATURED_EVENT.overview}
              </p>
            </div>

            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date & Time Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative overflow-hidden p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-yellow-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-yellow-900" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-yellow-800 mb-1">
                      Date & Horaire
                    </p>
                    <p className="text-lg font-bold text-yellow-900">
                      {FEATURED_EVENT.date}
                    </p>
                    <p className="text-sm text-yellow-700">
                      {FEATURED_EVENT.time}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative overflow-hidden p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-brand-green rounded-xl shadow-md group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-800 mb-1">
                      Lieu de l'événement
                    </p>
                    <p className="text-lg font-bold text-emerald-900">
                      {FEATURED_EVENT.venue}
                    </p>
                    <p className="text-sm text-emerald-700">
                      {FEATURED_EVENT.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Link href={FEATURED_EVENT.registrationLink} className="flex-1">
                <Button
                  variant="primary"
                  size="lg"
                  className="group w-full text-base md:text-lg font-semibold shadow-xl shadow-brand-green/20 hover:shadow-2xl hover:shadow-brand-green/30 transition-all"
                >
                  <Target className="w-4 h-4 md:w-5 md:h-5" />
                  S'inscrire maintenant
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/evenements" className="flex-1">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-base md:text-lg font-semibold border-2 hover:bg-slate-50"
                >
                  En savoir plus
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </motion.div>

      {/* View All Events Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-12"
      >
        <Link
          href="/evenements"
          className="text-brand-green font-medium hover:underline inline-flex items-center gap-2"
        >
          Voir tous les événements
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
