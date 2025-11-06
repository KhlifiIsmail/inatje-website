'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Notre Mission',
    description: 'Créée en 2012 au sein de l\'Institut National Agronomique de Tunisie (INAT), INAT Junior Entreprise est une organisation étudiante à but non lucratif opérant sous l\'égide de la Confédération Tunisienne des Junior-Entreprises (JET).',
  },
  {
    icon: Lightbulb,
    title: 'Notre Rôle',
    description: 'Acteur majeur de l\'innovation étudiante en ingénierie agronomique, nous intervenons dans trois domaines clés : la formation, l\'organisation d\'événements et la réalisation de projets d\'étude et de conseil.',
  },
  {
    icon: Users,
    title: 'Nos Services',
    description: 'Nos services englobent un large éventail de missions : analyses de marché, évaluations d\'impact environnemental, ainsi que études techniques et économiques, menées selon des méthodologies scientifiques rigoureuses et adaptées aux besoins de nos clients.',
  },
  {
    icon: TrendingUp,
    title: 'Notre Force',
    description: 'Forte de son ancrage académique et de son réseau professionnel, INAT Junior Entreprise allie expertise théorique et application pratique pour accompagner ses clients dans la concrétisation de leurs projets.',
  },
];

export function AboutSection() {
  return (
    <section className="section-container bg-gradient-premium">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 font-bold mb-4">
            Plus qu'une Junior Entreprise,{' '}
            <span className="gradient-text">
              une aventure collective
            </span>
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Vers l'impact, l'apprentissage et l'innovation
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-premium p-8 group"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-heading font-semibold mb-3 text-brand-black">
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
