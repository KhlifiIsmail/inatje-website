"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Handshake,
  TrendingUp,
  Users,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

const partnerLogos = [
  {
    name: "ANETI",
    logo: "/images/partners/agence_nationale_pour_lemploi_et_le_travail_indpendant_aneti_logo.jpg",
    category: "Institutions",
    website: "#",
  },
  {
    name: "APBS",
    logo: "/images/partners/apbs-logo.jpg",
    category: "Institutions",
    website: "#",
  },
  {
    name: "APIA",
    logo: "/images/partners/Apia.jpg",
    category: "Institutions",
    website: "#",
  },
  {
    name: "Bayer",
    logo: "/images/partners/bayer.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Bioprotection",
    logo: "/images/partners/bioprotection.jpg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Bouderbala",
    logo: "/images/partners/boud.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "CIRAD",
    logo: "/images/partners/cirad.jpg",
    category: "Institutions",
    website: "#",
  },
  {
    name: "COT",
    logo: "/images/partners/cot.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "GID",
    logo: "/images/partners/gid.png",
    category: "Institutions",
    website: "#",
  },
  {
    name: "GIF",
    logo: "/images/partners/GIF.jpg",
    category: "Institutions",
    website: "#",
  },
  {
    name: "GIL",
    logo: "/images/partners/GIL.JPG",
    category: "Institutions",
    website: "#",
  },
  {
    name: "GIPP",
    logo: "/images/partners/GIPP.png",
    category: "Institutions",
    website: "#",
  },
  {
    name: "INGC",
    logo: "/images/partners/ingc.png",
    category: "Institutions",
    website: "#",
  },
  {
    name: "Innovinat",
    logo: "/images/partners/innovinat (1).png",
    category: "ONG",
    website: "#",
  },
  {
    name: "Instant M",
    logo: "/images/partners/instant M.jpg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "INSTM",
    logo: "/images/partners/INSTM.png",
    category: "Institutions",
    website: "#",
  },
  {
    name: "LBM",
    logo: "/images/partners/lbm.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Essenia",
    logo: "/images/partners/logo essenia0002.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "RET",
    logo: "/images/partners/logo ret (1) (1).jpg",
    category: "ONG",
    website: "#",
  },
  {
    name: "Epi d'Or",
    logo: "/images/partners/logo-epi-dor.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Mabrouka",
    logo: "/images/partners/mabrouka.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Manar Thon",
    logo: "/images/partners/manar thon.jpg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Maz",
    logo: "/images/partners/maz.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "MDIM",
    logo: "/images/partners/mdim.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Medifit",
    logo: "/images/partners/medifit.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Microcreed",
    logo: "/images/partners/Microcreed.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Planète Verte",
    logo: "/images/partners/planète verte.jpg",
    category: "ONG",
    website: "#",
  },
  {
    name: "Poul",
    logo: "/images/partners/poul.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Rayen Food",
    logo: "/images/partners/Rayen food.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Partner",
    logo: "/images/partners/received_261334910269184.jpeg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Sadira",
    logo: "/images/partners/sadira.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "SAG",
    logo: "/images/partners/sag.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Sanlucar",
    logo: "/images/partners/sanlucar.jpg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "SCET",
    logo: "/images/partners/scet.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "SFBT",
    logo: "/images/partners/sfbt.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "SMBG",
    logo: "/images/partners/SMBG.jpg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "SNA",
    logo: "/images/partners/sna.png",
    category: "Institutions",
    website: "#",
  },
  {
    name: "Solagri",
    logo: "/images/partners/solagri.jpg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Sonalika",
    logo: "/images/partners/sonalika.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Sosec",
    logo: "/images/partners/sosec.jpg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Sosem",
    logo: "/images/partners/Sosem.jpg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "STB",
    logo: "/images/partners/stb.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "Telecom",
    logo: "/images/partners/telecom.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "TTM",
    logo: "/images/partners/TTM.jpg",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "UP TUN",
    logo: "/images/partners/UP TUN-01.png",
    category: "Entreprises",
    website: "#",
  },
  {
    name: "VIT",
    logo: "/images/partners/vit.png",
    category: "Entreprises",
    website: "#",
  },
];

const partnerStats = [
  { label: "Partenaires Actifs", value: "50+", icon: Building2 },
  { label: "Projets Collaboratifs", value: "80+", icon: Handshake },
  { label: "Années de Partenariat", value: "13", icon: TrendingUp },
  { label: "Étudiants Bénéficiaires", value: "1000+", icon: Users },
];

const partnerCategories = [
  {
    title: "Entreprises Privées",
    description: "Partenaires commerciaux et industriels du secteur agricole",
    icon: Building2,
    count: partnerLogos.filter((p) => p.category === "Entreprises").length,
  },
  {
    title: "Institutions Académiques",
    description: "Universités et centres de recherche collaborateurs",
    icon: Users,
    count: partnerLogos.filter((p) => p.category === "Institutions").length,
  },
  {
    title: "ONG & Associations",
    description: "Organisations à but non lucratif partenaires",
    icon: Handshake,
    count: partnerLogos.filter((p) => p.category === "ONG").length,
  },
];

const partnershipBenefits = [
  {
    title: "Accès aux Talents",
    description:
      "Recrutement direct des meilleurs étudiants et diplômés en agronomie",
    icon: Users,
  },
  {
    title: "Innovation Collaborative",
    description:
      "Projets de R&D conjoints et développement de solutions innovantes",
    icon: TrendingUp,
  },
  {
    title: "Réseau Professionnel",
    description: "Intégration dans notre écosystème d'excellence agronomique",
    icon: Handshake,
  },
  {
    title: "Visibilité & Branding",
    description: "Exposition auprès de la communauté étudiante et académique",
    icon: Building2,
  },
];

export default function PartenairesPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll effect like JET Tunisia
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-darkgray via-brand-black to-brand-green/10 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-green to-blue-500 rounded-full blur-3xl"
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
              <Handshake size={20} className="text-brand-green" />
              <span className="text-brand-green font-semibold">
                Écosystème Collaboratif
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Nos{" "}
              <span className="bg-gradient-to-r from-brand-green to-blue-400 bg-clip-text text-transparent">
                Partenaires
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed">
              Ils nous font confiance et collaborent avec nous pour l'innovation
              agronomique
            </p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {partnerStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
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

      {/* Partner Categories */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Types de <span className="gradient-text">Partenariats</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Diversité et complémentarité de notre réseau partenaire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-brand-green to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <category.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors">
                {category.title}
              </h3>
              <p className="text-brand-gray mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-green/10 text-brand-green rounded-full font-semibold">
                <span>{category.count} partenaires</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Partner Carousel - Similar to JET Tunisia */}
      <section className="section-container bg-brand-neutral/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Galerie des <span className="gradient-text">Partenaires</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Découvrez les organisations qui nous accompagnent
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on Mobile */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollCarousel("left")}
            className="hidden md:flex absolute left-0 top-[40%] transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollCarousel("right")}
            className="hidden md:flex absolute right-0 top-[40%] transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300"
          >
            <ArrowRight size={20} />
          </motion.button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 py-8 px-4 md:px-16"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() =>
              carouselRef.current?.style.setProperty(
                "animation-play-state",
                "paused"
              )
            }
            onMouseLeave={() =>
              carouselRef.current?.style.setProperty(
                "animation-play-state",
                "running"
              )
            }
          >
            {/* Duplicate items for infinite scroll effect */}
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group cursor-pointer"
                onClick={() => window.open(partner.website, "_blank")}
              >
                {/* Placeholder for partner logo */}
                {/* <div className="w-full h-full bg-brand-green/10 rounded-lg flex flex-col items-center justify-center group-hover:bg-brand-green/20 transition-colors duration-300">
                  <div className="w-16 h-16 bg-brand-green/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-brand-green/30">
                    <Building2 size={24} className="text-brand-green" />
                  </div>
                  <span className="text-xs text-brand-green font-medium text-center">
                    {partner.name}
                  </span>
                  <span className="text-xs text-brand-gray mt-1">
                    {partner.category}
                  </span>
                </div> */}
                {/* TODO: Replace with actual image */}
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Grid for Mobile */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          {partnerLogos.slice(0, 6).map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
            >
              <div className="w-full h-20 bg-brand-green/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-brand-green font-medium">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Avantages du <span className="gradient-text">Partenariat</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Découvrez ce que nos partenaires gagnent en collaborant avec nous
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-brand-green to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300"
              >
                <benefit.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3 text-brand-black group-hover:text-brand-green transition-colors">
                {benefit.title}
              </h3>
              <p className="text-brand-gray group-hover:text-brand-darkgray transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="section-container bg-brand-darkgray text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-h2 font-bold mb-6">
            Devenez Notre <span className="text-brand-green">Partenaire</span>
          </h2>
          <p className="text-lg text-brand-neutral mb-8 leading-relaxed">
            Rejoignez notre réseau d'excellence et contribuez au développement
            de l'agronomie durable. Ensemble, construisons l'avenir de
            l'agriculture tunisienne.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="group shadow-2xl">
              Devenir partenaire
              <Handshake
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-brand-black backdrop-blur-sm"
            >
              Télécharger la brochure
              <ExternalLink size={20} />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-brand-neutral mb-4">
              Pour plus d'informations sur nos partenariats:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:contact1.inatje@gmail.com"
                className="text-brand-green hover:underline"
              >
                contact1.inatje@gmail.com
              </a>
              <a
                href="tel:+21699197400"
                className="text-brand-green hover:underline"
              >
                +216 99 197 400
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <CTASection />
    </main>
  );
}
