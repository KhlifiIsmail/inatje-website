"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Real partner logos from heropartners folder
const partnerLogos = [
  { name: "Partner 1", logo: "/images/heropartners/1.webp" },
  { name: "Partner 2", logo: "/images/heropartners/2.jpg" },
  { name: "Partner 3", logo: "/images/heropartners/3.jpg" },
  { name: "Partner 4", logo: "/images/heropartners/4.jpg" },
  { name: "Partner 5", logo: "/images/heropartners/eis.jpg" },
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
          Une collaboration fondée sur la confiance mutuelle, l'engagement et la
          volonté commune de créer un impact durable.
        </p>
      </motion.div>

      {/* Partner Logos Grid - Desktop Only */}
      <div className="relative overflow-hidden">
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 flex items-center justify-center h-32 group hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Auto-scrolling carousel for mobile - No Grayscale */}
        <div className="md:hidden relative overflow-hidden mb-8">
          <motion.div
            animate={{ x: [0, -100 * partnerLogos.length] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex space-x-4"
          >
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={`mobile-${partner.name}-${index}`}
                className="flex-shrink-0 w-28 h-20 bg-white rounded-lg p-3 flex items-center justify-center shadow-md"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={60}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link href="/partenaires">
          <Button variant="primary" size="lg" className="group">
            Voir tous nos partenaires
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
