'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// TODO: Replace with actual partner logos from public/images/partners/
const partnerLogos = [
  { name: 'Partner 1', logo: '/images/placeholders/partner-1.png' },
  { name: 'Partner 2', logo: '/images/placeholders/partner-2.png' },
  { name: 'Partner 3', logo: '/images/placeholders/partner-3.png' },
  { name: 'Partner 4', logo: '/images/placeholders/partner-4.png' },
  { name: 'Partner 5', logo: '/images/placeholders/partner-5.png' },
  { name: 'Partner 6', logo: '/images/placeholders/partner-6.png' },
  { name: 'Partner 7', logo: '/images/placeholders/partner-7.png' },
  { name: 'Partner 8', logo: '/images/placeholders/partner-8.png' },
];

export function PartnersPreview() {
  return (
    <section className="section-container bg-brand-neutral/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-h2 font-bold mb-4">
          Nos <span className="gradient-text">Partenaires</span>
        </h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          Ils nous font confiance et collaborent avec nous
        </p>
      </motion.div>

      {/* Partner Logos Grid */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl p-8 flex items-center justify-center h-32 group hover:shadow-xl transition-all duration-300"
            >
              {/* TODO: Replace with actual <Image> component */}
              {/* <Image src={partner.logo} alt={partner.name} width={120} height={60} className="grayscale group-hover:grayscale-0 transition-all duration-300" /> */}
              <div className="w-full h-full bg-brand-green/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-brand-green font-medium">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Link href="/partenaires">
          <Button variant="primary" size="lg" className="group">
            Voir tous nos partenaires
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
