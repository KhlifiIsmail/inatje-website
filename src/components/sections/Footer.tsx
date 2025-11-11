"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "Qui Sommes-Nous", href: "/qui-sommes-nous" },
  { name: "Services", href: "/services" },
  { name: "Partenaires", href: "/partenaires" },
];

const services = [
  {
    name: "Cultures Hors Sol",
    href: "/services/comite-etudes#cultures-hors-sol",
  },
  { name: "Système d'Irrigation", href: "/services/comite-etudes#irrigation" },
  { name: "Études et Conseil", href: "/services/comite-etudes#etudes" },
  { name: "Forum Emploi", href: "/services/developpement-commercial" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/INAT.Junior.Entreprise",
    color: "hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/inat_junior_entreprise/",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/junior-entreprise-inat/posts/?feedView=all",
    color: "hover:text-[#0A66C2]",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-darkgray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold mb-2">
                INAT <span className="font-light">Junior Entreprise</span>
              </h3>
              <p className="text-brand-neutral text-sm leading-relaxed">
                Leader de son écosystème — Une organisation étudiante engagée
                pour l'innovation, le développement durable et l'excellence
                professionnelle.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 bg-white/10 rounded-lg transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-4">
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-neutral hover:text-brand-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-4">
              Nos Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-brand-neutral hover:text-brand-green transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail
                  size={18}
                  className="text-brand-green mt-0.5 flex-shrink-0"
                />
                <a
                  href="mailto:contact1.inatje@gmail.com"
                  className="text-brand-neutral hover:text-brand-green transition-colors duration-300"
                >
                  contact1.inatje@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone
                  size={18}
                  className="text-brand-green mt-0.5 flex-shrink-0"
                />
                <a
                  href="tel:+21699197400"
                  className="text-brand-neutral hover:text-brand-green transition-colors duration-300"
                >
                  +216 99 197 400
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin
                  size={18}
                  className="text-brand-green mt-0.5 flex-shrink-0"
                />
                <span className="text-brand-neutral">
                  43 Avenue Charles Nicolle, 1082 Tunis, Tunisia
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-brand-neutral text-sm">
            © {new Date().getFullYear()} INAT Junior Entreprise. Tous droits
            réservés.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-lightgreen transition-colors duration-300"
          >
            <span className="text-sm font-medium">Retour en haut</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
