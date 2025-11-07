'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
  Linkedin,
  User,
  Building,
  MessageSquare
} from 'lucide-react';
// import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

const contactInfo = {
  email: 'contact1.inatje@gmail.com',
  phone: '+216 99 197 400',
  address: 'Institut National Agronomique de Tunisie (INAT)',
  fullAddress: '43 Avenue Charles Nicolle, 1082 Tunis, Tunisia',
  hours: 'Lundi - Vendredi: 9h00 - 17h00',
  responseTime: 'Nous répondons dans les 24-48 heures'
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-[#1877F2]', bg: 'hover:bg-[#1877F2]' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-[#E4405F]', bg: 'hover:bg-[#E4405F]' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-[#0A66C2]', bg: 'hover:bg-[#0A66C2]' },
];

const contactReasons = [
  { value: 'general', label: 'Demande générale' },
  { value: 'project', label: 'Demande de projet' },
  { value: 'partnership', label: 'Partenariat' },
  { value: 'join', label: 'Rejoindre INAT JE' },
  { value: 'forum', label: 'Forum d\'emploi' },
  { value: 'other', label: 'Autre' }
];

const officeFeatures = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Réponse garantie sous 24-48h',
    value: contactInfo.email,
    action: `mailto:${contactInfo.email}`
  },
  {
    icon: Phone,
    title: 'Téléphone',
    description: 'Disponible aux heures ouvrables',
    value: contactInfo.phone,
    action: `tel:${contactInfo.phone.replace(/\s/g, '')}`
  },
  {
    icon: MapPin,
    title: 'Adresse',
    description: 'Campus INAT, Tunis',
    value: contactInfo.address,
    action: 'https://maps.google.com/?q=INAT+Tunis'
  },
  {
    icon: Clock,
    title: 'Horaires',
    description: 'Lundi au Vendredi',
    value: '9h00 - 17h00',
    action: null
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // TODO: Implement actual form submission logic
    // This could be EmailJS, Formspree, or your own backend
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-brand-darkgray via-brand-black to-emerald-900/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500 to-brand-green rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-brand-green to-blue-500 rounded-full blur-3xl"
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
              className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full shadow-lg"
            >
              <MessageSquare size={20} className="text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Nous Contacter</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Parlons de Votre{' '}
              <span className="bg-gradient-to-r from-brand-green to-emerald-400 bg-clip-text text-transparent">
                Projet
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed">
              Notre équipe est là pour vous accompagner dans tous vos projets agronomiques
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <CheckCircle className="w-8 h-8 text-brand-green" />
                </div>
                <div className="text-lg font-semibold text-white mb-1">Réponse Rapide</div>
                <div className="text-sm text-brand-neutral">Sous 24-48h</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <User className="w-8 h-8 text-brand-green" />
                </div>
                <div className="text-lg font-semibold text-white mb-1">Experts Qualifiés</div>
                <div className="text-sm text-brand-neutral">13 ans d'expérience</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Building className="w-8 h-8 text-brand-green" />
                </div>
                <div className="text-lg font-semibold text-white mb-1">Solutions Sur Mesure</div>
                <div className="text-sm text-brand-neutral">Adaptées à vos besoins</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <h2 className="text-3xl font-heading font-bold mb-8 text-brand-black">
                Envoyez-nous un <span className="gradient-text">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-darkgray mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-darkgray mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-darkgray mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-darkgray mb-2">
                      Organisation/Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Nom de l'organisation"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-darkgray mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300 bg-white"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {contactReasons.map((reason) => (
                      <option key={reason.value} value={reason.value}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-darkgray mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300 bg-white resize-none"
                    placeholder="Décrivez votre projet ou votre demande en détail..."
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formStatus === 'loading'}
                    className="w-full group"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <CheckCircle size={20} className="text-green-600" />
                    <p className="text-green-700 font-medium">
                      Message envoyé avec succès ! Nous vous répondrons sous 24-48h.
                    </p>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <AlertCircle size={20} className="text-red-600" />
                    <p className="text-red-700 font-medium">
                      Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info and Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Image Placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-green to-emerald-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Building size={80} className="mx-auto mb-4 opacity-30" />
                  <p className="text-lg opacity-80">[PLACEHOLDER: Contact Image]</p>
                  <p className="text-sm opacity-60 mt-2">Provided photo on right side of contact section</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {officeFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                  onClick={() => feature.action && window.open(feature.action, feature.action.startsWith('http') ? '_blank' : '_self')}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-brand-black group-hover:text-brand-green transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-brand-gray text-sm mb-1">{feature.description}</p>
                      <p className="text-brand-black font-medium">{feature.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-brand-black mb-6">
                Suivez-nous sur les <span className="gradient-text">Réseaux Sociaux</span>
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-gray-100 rounded-xl transition-all duration-300 ${social.bg} hover:text-white group`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} className="transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-brand-gray mt-4">
                Restez connectés pour nos dernières actualités et événements
              </p>
            </div>

            {/* Response Time Notice */}
            <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <Clock size={24} className="text-brand-green" />
                <div>
                  <h3 className="font-semibold text-brand-black">{contactInfo.responseTime}</h3>
                  <p className="text-sm text-brand-gray">
                    Notre équipe s'engage à vous répondre rapidement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container bg-brand-neutral/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4">
            Notre <span className="gradient-text">Localisation</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Venez nous rendre visite sur le campus de l'INAT
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-3xl aspect-[16/10] flex items-center justify-center shadow-xl"
            >
              <div className="text-center text-gray-600">
                <MapPin size={64} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Carte Google Maps</h3>
                <p className="text-sm">Intégration de la carte Google Maps</p>
                <p className="text-xs mt-2 text-brand-green">INAT Campus Location</p>
              </div>
            </motion.div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-brand-black mb-4">
                Informations d'Accès
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-brand-green mt-1" />
                  <div>
                    <p className="font-medium text-brand-black">{contactInfo.address}</p>
                    <p className="text-sm text-brand-gray">{contactInfo.fullAddress}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-brand-green mt-1" />
                  <div>
                    <p className="font-medium text-brand-black">Horaires d'ouverture</p>
                    <p className="text-sm text-brand-gray">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-brand-black mb-4">
                Transport
              </h3>
              <div className="space-y-3 text-sm text-brand-gray">
                <p>• Métro: Station Bab Alioua (Ligne 1)</p>
                <p>• Bus: Lignes 3, 15, 20</p>
                <p>• Taxi/Uber: Accessible facilement</p>
                <p>• Parking disponible sur le campus</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="outline" size="lg" className="w-full group">
                Obtenir l'itinéraire
                <MapPin size={20} className="group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
