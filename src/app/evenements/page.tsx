"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowRight,
  ExternalLink,
  Star,
  Award,
  TrendingUp,
  Building,
  GraduationCap,
  Briefcase,
  Sparkles,
  Target,
  Heart,
  Mic,
  Network,
  Coffee,
  Lightbulb,
  UserCheck,
  Trophy,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface EventStat {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
}

interface EventHighlight {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  features: string[];
}

interface PastEvent {
  year: string;
  edition: string;
  participants: string;
  companies: string;
  satisfactionRate: string;
  keyHighlights: string[];
  theme: string;
}

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  type: TimelineEventType;
}

type TimelineEventType =
  | "registration"
  | "ceremony"
  | "networking"
  | "break"
  | "workshop"
  | "interview"
  | "panel"
  | "closing";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

const FEATURED_EVENT = {
  title: "Forum d'Emploi et de Stages 2025",
  subtitle: "AGROFERA - 13ème Édition",
  date: "10 Décembre 2025",
  time: "09h00 - 18h30",
  venue: "Institut National Agronomique de Tunisie",
  address: "43 Avenue Charles Nicolle, 1082 Tunis",
  overview:
    "Ce rendez-vous incontournable permet aux futurs ingénieurs agronomes et aux jeunes diplômés de rencontrer des entreprises prestigieuses, d'explorer des opportunités de stages et d'emplois, tout en renforçant leurs réseaux professionnels.",
  mission:
    "Au-delà des simples échanges, le Forum offre également des panels, des sessions de formations et des ateliers sur des thématiques cruciales. L'objectif est d'améliorer les profils des étudiants agronomes pour un avenir meilleur de notre écosystème.",
  registrationLink: "/contact",
  eventLink:
    "https://www.facebook.com/events/2287714738343501?acontext=%7B%22event_action_history%22%3A%5B%7B%22surface%22%3A%22home%22%7D%2C%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D%5D%2C%22ref_notif_type%22%3Anull%7D",
  presentationLink: "#",
  bannerImage: "/images/events/event.jpg",
  edition: "13ème Édition",
} as const;

const EVENT_STATISTICS: EventStat[] = [
  {
    label: "Entreprises Partenaires",
    value: "50+",
    icon: Building,
    color: "from-blue-500 via-blue-600 to-cyan-600",
  },
  {
    label: "Participants Attendus",
    value: "500+",
    icon: Users,
    color: "from-purple-500 via-purple-600 to-indigo-600",
  },
  {
    label: "Opportunités Disponibles",
    value: "200+",
    icon: Briefcase,
    color: "from-emerald-500 via-emerald-600 to-green-600",
  },
  {
    label: "Heures de Networking",
    value: "9h",
    icon: Clock,
    color: "from-orange-500 via-orange-600 to-amber-600",
  },
];

const EVENT_HIGHLIGHTS: EventHighlight[] = [
  {
    title: "Networking Professionnel",
    description:
      "Connectez-vous directement avec les décideurs des entreprises leaders du secteur agricole",
    icon: Users,
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    features: [
      "Rencontres one-to-one avec les recruteurs",
      "Speed networking organisé",
      "Échanges informels durant les pauses",
    ],
  },
  {
    title: "Competiton INAT JEnovate",
    description:
      "Competition de pitch entre des porteurs de projets de diffrents ecoles et instituts.",
    icon: GraduationCap,
    gradient: "from-purple-500 via-purple-600 to-indigo-600",
    features: [
      "Recompense pour les vainquers",
      "Opportunite de pitch et presentation",
      "Encouragement des jeunes porteurs de projets",
      "Visibilite specialise",
    ],
  },
  {
    title: "Panels d'Experts",
    description:
      "Assistez à des conférences inspirantes sur les tendances de l'agriculture durable et les opportunités de carrière",
    icon: Award,
    gradient: "from-emerald-500 via-emerald-600 to-green-600",
    features: [
      "Agriculture de précision et innovation",
      "Transition écologique du secteur",
      "Entrepreneuriat dans l'agrobusiness",
    ],
  },
  {
    title: "Opportunités Directes",
    description:
      "Accédez en exclusivité à des centaines d'offres de stages, PFE et emplois dans le secteur agricole",
    icon: TrendingUp,
    gradient: "from-orange-500 via-orange-600 to-red-500",
    features: [
      "Offres de stages de fin d'études",
      "Postes CDI pour jeunes diplômés",
      "Programmes de formation internationale",
    ],
  },
];

const EVENT_SCHEDULE: TimelineEvent[] = [
  {
    time: "08h00-17h00",
    title: "Salle d'exposition",
    description:
      "Rencontres avec les entreprises exposantes tout au long de la journée",
    type: "networking",
  },
  {
    time: "08h30",
    title: "Mot d'ouverture",
    description: "Discours d'ouverture et présentation du programme",
    type: "ceremony",
  },
  {
    time: "09h00",
    title: "Panel 1 - 3 intervenants",
    description: "Première table ronde avec trois experts du secteur",
    type: "panel",
  },
  {
    time: "10h30",
    title: "Pause-café",
    description: "Pause networking et échanges informels",
    type: "break",
  },
  {
    time: "11h00",
    title: "Panel 2",
    description: "Deuxième table ronde sur des thématiques clés",
    type: "panel",
  },
  {
    time: "12h00",
    title: "Pause-déjeuner",
    description: "Déjeuner networking",
    type: "break",
  },
  {
    time: "13h30",
    title: "Compétition INAT JEnovate",
    description: "Pitchs des porteurs de projets",
    type: "workshop",
  },
  {
    time: "15h30",
    title: "Délibération des lauréats",
    description: "Annonce des gagnants de la compétition",
    type: "interview",
  },
  {
    time: "16h00",
    title: "Cérémonie de clôture",
    description: "Remise des prix et clôture officielle",
    type: "closing",
  },
];

const PAST_EDITIONS: PastEvent[] = [
  {
    year: "2024",
    edition: "12ème Édition",
    participants: "600+",
    companies: "40",
    satisfactionRate: "90%",
    theme: "Agriculture Résiliente",
    keyHighlights: [
      "Record de nombre des entreprises présentes",
      "Record de participation étudiante",
      "Nouveau format hybride intégré",
    ],
  },
  {
    year: "2023",
    edition: "11ème Édition",
    participants: "580+",
    companies: "38",
    satisfactionRate: "85%",
    theme: "Agriculture Durable",
    keyHighlights: [
      "Focus sur l'innovation technologique",
      "Ateliers pratiques sur la permaculture",
      "Partenariats internationaux renforcés",
    ],
  },
  {
    year: "2022",
    edition: "10ème Édition",
    participants: "550+",
    companies: "35",
    satisfactionRate: "80%",
    theme: "Digital Agriculture",
    keyHighlights: [
      "Première édition 100% digitale",
      "Plateforme virtuelle interactive",
      "Sessions de formation en ligne",
    ],
  },
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const getTimelineColor = (type: TimelineEventType): string => {
  const colorMap: Record<TimelineEventType, string> = {
    registration: "from-blue-500 to-cyan-600",
    ceremony: "from-emerald-500 to-green-600",
    networking: "from-purple-500 to-indigo-600",
    break: "from-gray-400 to-gray-600",
    workshop: "from-orange-500 to-amber-600",
    interview: "from-pink-500 to-rose-600",
    panel: "from-indigo-500 to-purple-600",
    closing: "from-emerald-500 to-blue-500",
  };
  return colorMap[type];
};

const getTimelineIcon = (type: TimelineEventType): React.ElementType => {
  const iconMap: Record<TimelineEventType, React.ElementType> = {
    registration: Store,
    ceremony: Mic,
    networking: Store,
    break: Coffee,
    workshop: Lightbulb,
    interview: UserCheck,
    panel: Users,
    closing: Trophy,
  };
  return iconMap[type];
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-brand-darkgray to-slate-800">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-brand-green/30 to-emerald-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 100, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={scaleInVariants} className="inline-block">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold text-sm tracking-wide">
                Événements INAT Junior Entreprise
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUpVariants}
            className="text-6xl md:text-8xl font-heading font-black text-white leading-[1.1] tracking-tight"
          >
            Nos{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brand-green via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Événements
              </span>
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-brand-green/20 to-emerald-400/20 blur-2xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Des rendez-vous stratégiques pour{" "}
            <span className="text-white font-semibold">
              propulser votre carrière
            </span>{" "}
            dans l'agriculture de demain
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-6 px-4"
          >
            <Link href="#featured-event" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-2xl shadow-brand-green/30 hover:shadow-brand-green/50 transition-all duration-300"
              >
                Découvrir l'événement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Nous contacter
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

const FeaturedEventCard: React.FC = () => {
  return (
    <section id="featured-event" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
        className="space-y-16"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUpVariants} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-brand-green" />
            <span className="text-sm font-semibold text-brand-green">
              À ne pas manquer
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-black mb-4">
            Événement{" "}
            <span className="bg-gradient-to-r from-brand-green to-emerald-600 bg-clip-text text-transparent">
              Phare
            </span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Rejoignez-nous pour le rendez-vous annuel incontournable de
            l'agriculture tunisienne
          </p>
        </motion.div>

        {/* Event Card */}
        <motion.article
          variants={fadeInUpVariants}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-500"
        >
          {/* Hero Banner */}
          <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden bg-gray-900">
            <Image
              src={FEATURED_EVENT.bannerImage}
              alt={FEATURED_EVENT.title}
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Edition Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-6 right-6 flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border-2 border-yellow-400"
            >
              <Award className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-bold text-slate-900">
                {FEATURED_EVENT.edition}
              </span>
            </motion.div>

            {/* Floating Info Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 left-6 px-5 py-3 bg-brand-green/95 backdrop-blur-sm rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3 text-white">
                <Calendar className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium opacity-90">
                    Mercredi, 10 Décembre 2025
                  </p>
                  <p className="text-xs opacity-75">09h00 - 18h30</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Event Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Title & Description */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-black leading-tight">
                {FEATURED_EVENT.title}
              </h3>
              <p className="text-lg md:text-xl text-brand-gray leading-relaxed">
                {FEATURED_EVENT.overview}
              </p>
              <p className="text-base text-brand-gray/80 leading-relaxed">
                {FEATURED_EVENT.mission}
              </p>
            </div>

            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date & Time Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative overflow-hidden p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-yellow-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-yellow-900" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-yellow-800 mb-1">
                      Date & Horaire
                    </p>
                    <p className="text-lg font-bold text-yellow-900">
                      {FEATURED_EVENT.date}
                    </p>
                    <p className="text-sm text-yellow-700">
                      {FEATURED_EVENT.time}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative overflow-hidden p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-brand-green rounded-xl shadow-md group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-800 mb-1">
                      Lieu de l'événement
                    </p>
                    <p className="text-lg font-bold text-emerald-900">
                      {FEATURED_EVENT.venue}
                    </p>
                    <p className="text-sm text-emerald-700">
                      {FEATURED_EVENT.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Link href={FEATURED_EVENT.registrationLink} className="flex-1">
                <Button
                  variant="primary"
                  size="lg"
                  className="group w-full text-base md:text-lg font-semibold shadow-xl shadow-brand-green/20 hover:shadow-2xl hover:shadow-brand-green/30 transition-all"
                >
                  <Target className="w-4 h-4 md:w-5 md:h-5" />
                  S'inscrire maintenant
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <a
                href={FEATURED_EVENT.eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-base md:text-lg font-semibold border-2 hover:bg-slate-50"
                >
                  En savoir plus
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.article>

        {/* Event Statistics */}
        <motion.div
          variants={staggerContainerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {EVENT_STATISTICS.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={scaleInVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative text-center space-y-3">
                <div
                  className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-br from-brand-black to-slate-700 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-brand-gray font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const EventHighlightsSection: React.FC = () => {
  return (
    <section className="section-container bg-gradient-to-b from-slate-50 to-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
        className="space-y-16"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUpVariants} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              Ce qui nous distingue
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-black mb-4">
            Points{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Forts
            </span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Une expérience complète pour maximiser votre réussite
            professionnelle
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {EVENT_HIGHLIGHTS.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              variants={fadeInUpVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 overflow-hidden"
            >
              {/* Background Decoration */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}
              />

              <div className="relative space-y-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-brand-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-green group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                      {highlight.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-brand-gray leading-relaxed">
                  {highlight.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {highlight.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-brand-gray"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mt-0.5`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const EventTimelineSection: React.FC = () => {
  return (
    <section className="section-container bg-gradient-to-br from-slate-900 via-brand-darkgray to-slate-800 text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
        className="space-y-16"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUpVariants} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Clock className="w-4 h-4 text-brand-green" />
            <span className="text-sm font-semibold text-brand-green">
              Programme détaillé
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Planning de la <span className="text-brand-green">Journée</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Un agenda soigneusement conçu pour optimiser vos opportunités
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <motion.div variants={staggerContainerVariants} className="space-y-6">
            {EVENT_SCHEDULE.map((event, index) => (
              <motion.div
                key={index}
                variants={slideInLeftVariants}
                className="group relative"
              >
                <div className="flex items-start gap-8">
                  {/* Time */}
                  <div className="flex-shrink-0 w-28 text-right">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-block px-4 py-2 bg-brand-green/20 backdrop-blur-sm rounded-lg border border-brand-green/30"
                    >
                      <p className="text-lg font-bold text-brand-green">
                        {event.time}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot & Line */}
                  <div className="flex-shrink-0 relative pt-3">
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${getTimelineColor(
                        event.type
                      )} shadow-lg relative z-10`}
                    />
                    {index < EVENT_SCHEDULE.length - 1 && (
                      <div className="absolute top-7 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+1rem)] bg-gradient-to-b from-brand-green/50 to-transparent" />
                    )}
                  </div>

                  {/* Event Card */}
                  <motion.div
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-brand-green/50 group-hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-green/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                        {React.createElement(getTimelineIcon(event.type), {
                          className: "w-6 h-6 text-brand-green",
                        })}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline - Mobile Card Style */}
        <div className="md:hidden space-y-4 px-4">
          {EVENT_SCHEDULE.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${getTimelineColor(
                      event.type
                    )}`}
                  />
                  <span className="text-lg font-bold text-brand-green">
                    {event.time}
                  </span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-brand-green/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                  {React.createElement(getTimelineIcon(event.type), {
                    className: "w-5 h-5 text-brand-green",
                  })}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const PastEventsSection: React.FC = () => {
  return (
    <section className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
        className="space-y-16"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUpVariants} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4">
            <Heart className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">
              Notre historique
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-black mb-4">
            Éditions{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Précédentes
            </span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Trois années d'excellence et d'innovation dans le networking
            agricole
          </p>
        </motion.div>

        {/* Past Events Grid */}
        <motion.div
          variants={staggerContainerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {PAST_EDITIONS.map((event, index) => (
            <motion.article
              key={event.year}
              variants={scaleInVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500"
            >
              {/* Year Header with Gradient */}
              <div className="relative h-32 bg-gradient-to-br from-brand-green via-emerald-600 to-green-600 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="relative text-center z-10">
                  <p className="text-6xl font-black text-white/90">
                    {event.year}
                  </p>
                  <p className="text-sm font-semibold text-white/80 tracking-wide">
                    {event.edition}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Theme Badge */}
                <div className="inline-block px-4 py-1.5 bg-brand-green/10 rounded-full">
                  <p className="text-sm font-semibold text-brand-green">
                    {event.theme}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-slate-50 rounded-xl">
                    <p className="text-2xl font-bold text-brand-black">
                      {event.participants}
                    </p>
                    <p className="text-xs text-brand-gray mt-1">Participants</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-xl">
                    <p className="text-2xl font-bold text-brand-black">
                      {event.companies}
                    </p>
                    <p className="text-xs text-brand-gray mt-1">Entreprises</p>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-xl">
                    <p className="text-2xl font-bold text-brand-green">
                      {event.satisfactionRate}
                    </p>
                    <p className="text-xs text-emerald-700 mt-1">
                      Satisfaction
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-brand-black">
                    Points marquants:
                  </p>
                  <ul className="space-y-2">
                    {event.keyHighlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-brand-gray"
                      >
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Photo Gallery Placeholder */}
        <motion.div
          variants={fadeInUpVariants}
          className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-16 border-2 border-dashed border-slate-300 overflow-hidden"
        >
          <div className="relative z-10 text-center space-y-4">
            <Users className="w-20 h-20 mx-auto text-slate-400" />
            <h3 className="text-2xl font-bold text-slate-700">
              Galerie Photo des Forums
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Découvrez les moments forts de nos éditions précédentes à travers
              notre collection de photos.
            </p>
            <p className="text-sm text-brand-green font-semibold">
              Galerie à venir prochainement...
            </p>
          </div>

          {/* Decorative Grid */}
          <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4 opacity-40">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-slate-200 rounded-xl animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedEventCard />
      <EventHighlightsSection />
      <EventTimelineSection />
      <PastEventsSection />
      <CTASection />
    </main>
  );
}
