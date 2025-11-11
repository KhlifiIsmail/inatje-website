"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="section-container bg-brand-darkgray text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lightgreen rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-green/20 backdrop-blur-sm border border-brand-green/30 rounded-full mb-6"
        >
          <Sparkles size={16} className="text-brand-green" />
          <span className="text-sm font-medium">
            Prêt à démarrer votre projet ?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight"
        >
          Transformons vos idées en{" "}
          <span className="text-brand-green">solutions durables</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-brand-neutral mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Que vous soyez une entreprise, une organisation ou un porteur de
          projet, notre équipe d'experts est prête à vous accompagner dans la
          réalisation de vos ambitions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="group bg-brand-green hover:bg-brand-lightgreen w-full sm:w-auto"
            >
              Contactez-nous
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-black w-full sm:w-auto"
            >
              Découvrir nos services
            </Button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-white/10"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-green mb-2">
                150+
              </div>
              <div className="text-sm text-brand-neutral">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green mb-2">
                13 ans
              </div>
              <div className="text-sm text-brand-neutral">D'expérience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green mb-2">
                90%
              </div>
              <div className="text-sm text-brand-neutral">
                Satisfaction client
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
