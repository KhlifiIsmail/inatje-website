"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Briefcase,
  Calendar,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Facebook,
    label: "Facebook",
    value: 5200,
    suffix: "+",
    color: "#1877F2",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: 3800,
    suffix: "+",
    color: "#E4405F",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: 2400,
    suffix: "+",
    color: "#0A66C2",
  },
  {
    icon: Briefcase,
    label: "Projets Réalisés",
    value: 150,
    suffix: "+",
    color: "#daa520",
  },
  {
    icon: Calendar,
    label: "Années d'Expérience",
    value: 13,
    suffix: "",
    color: "#daa520",
  },
  {
    icon: Users,
    label: "Membres Actifs",
    value: 60,
    suffix: "+",
    color: "#daa520",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span ref={countRef}>
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="section-container bg-brand-darkgray text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-h2 font-bold mb-4">
          Notre Impact en <span className="text-brand-green">Chiffres</span>
        </h2>
        <p className="text-lg text-brand-neutral max-w-2xl mx-auto">
          Des résultats concrets qui témoignent de notre engagement
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-heading font-bold mb-2 text-brand-green">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm text-brand-neutral">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
