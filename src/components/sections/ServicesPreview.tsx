'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Sprout, Droplets, Recycle, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Sprout,
    title: 'Cultures Hors Sol',
    description: 'Solutions hydroponiques, aquaponiques, murs végétaux et bacs potagers pour une agriculture urbaine durable.',
    href: '/services/comite-etudes#cultures-hors-sol',
  },
  {
    icon: Droplets,
    title: 'Système d\'Irrigation',
    description: 'Conception de systèmes d\'irrigation modernes et efficaces pour optimiser la gestion de l\'eau.',
    href: '/services/comite-etudes#irrigation',
  },
  {
    icon: Recycle,
    title: 'Système Composteur',
    description: 'Solutions de gestion des déchets organiques et conception de systèmes de compostage.',
    href: '/services/comite-etudes#composteur',
  },
  {
    icon: FileText,
    title: 'Études et Conseil',
    description: 'Études de marché, techniques, de faisabilité et d\'impact environnemental pour vos projets.',
    href: '/services/comite-etudes#etudes',
  },
];

export function ServicesPreview() {
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
          Nos <span className="gradient-text">Services</span>
        </h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          Des solutions innovantes en ingénierie agronomique adaptées à vos besoins
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={service.href}>
              <div className="card-premium p-6 h-full cursor-pointer group">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-brand-black">
                  {service.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-brand-green text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  En savoir plus
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link href="/services">
          <Button variant="primary" size="lg" className="group">
            Découvrir tous nos services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
