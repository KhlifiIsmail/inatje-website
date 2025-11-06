'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
        <h2 className="text-h2 font-bold mb-4">
          Événement <span className="gradient-text">À Venir</span>
        </h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          Ne manquez pas notre prochain événement majeur
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
        <div className="card-premium overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Event Image */}
            <div className="md:col-span-2 relative h-64 md:h-auto bg-gradient-to-br from-brand-green to-brand-lightgreen">
              {/* TODO: Replace with actual event image */}
              {/* <Image src="/images/events/forum-2025.jpg" alt="Forum d'Emploi et de Stages" fill className="object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Calendar size={80} className="text-white/30" />
              </div>
              
              {/* Date Badge */}
              <div className="absolute top-6 left-6 bg-white rounded-xl p-4 text-center shadow-xl">
                <div className="text-3xl font-bold text-brand-green">10</div>
                <div className="text-sm font-medium text-brand-gray">Décembre</div>
                <div className="text-xs text-brand-gray">2025</div>
              </div>
            </div>

            {/* Event Details */}
            <div className="md:col-span-3 p-8 md:p-10">
              <div className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
                Événement Majeur
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-brand-black">
                Forum d'Emploi et de Stages 2025
              </h3>
              
              <p className="text-brand-gray mb-6 leading-relaxed">
                Ce rendez-vous incontournable permet aux futurs ingénieurs agronomes et aux jeunes diplômés 
                de rencontrer des entreprises prestigieuses, d'explorer des opportunités de stages et d'emplois, 
                tout en renforçant leurs réseaux professionnels.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-brand-gray">
                  <Calendar size={20} className="text-brand-green" />
                  <span className="text-sm">10 Décembre 2025</span>
                </div>
                <div className="flex items-center space-x-3 text-brand-gray">
                  <MapPin size={20} className="text-brand-green" />
                  <span className="text-sm">Institut National Agronomique de Tunisie</span>
                </div>
                <div className="flex items-center space-x-3 text-brand-gray">
                  <Users size={20} className="text-brand-green" />
                  <span className="text-sm">Étudiants, diplômés et entreprises</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/evenements">
                  <Button variant="primary" size="md" className="group w-full sm:w-auto">
                    En savoir plus
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="md" className="w-full sm:w-auto">
                    S'inscrire
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* View All Events Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-12"
      >
        <Link href="/evenements" className="text-brand-green font-medium hover:underline inline-flex items-center gap-2">
          Voir tous les événements
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
