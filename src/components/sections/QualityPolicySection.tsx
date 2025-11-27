"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Award, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function QualityPolicySection() {
  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full mb-4">
            <Award className="w-4 h-4 text-brand-green" />
            <span className="text-sm font-semibold text-brand-green">
              Engagement Qualité
            </span>
          </div>
          <h2 className="text-h2 font-bold mb-4">
            Notre <span className="text-brand-green">Politique Qualité</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Un engagement fort envers l'excellence et la satisfaction de nos
            partenaires
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-premium p-8 lg:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon Section */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold mb-4 text-brand-black">
                Découvrez Notre Démarche Qualité
              </h3>
              <p className="text-brand-gray mb-6 leading-relaxed">
                INAT Junior Entreprise s'engage à fournir des services de haute
                qualité conformes aux normes les plus exigeantes. Notre
                politique qualité définit nos principes et nos engagements
                envers nos clients et partenaires.
              </p>

              {/* Key Points */}
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-brand-gray">
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Excellence opérationnelle</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-gray">
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Amélioration continue</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-gray">
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Satisfaction client</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-gray">
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Respect des engagements</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="/pdf/PQ-Version-com.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="group shadow-xl shadow-brand-green/20 hover:shadow-2xl hover:shadow-brand-green/30 transition-all"
                >
                  Consulter notre Politique Qualité
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
