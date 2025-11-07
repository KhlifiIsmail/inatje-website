"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - TODO: Replace with actual hero image from public/images/hero/hero-bg.jpg */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-brand-black/50 z-10" />
        <Image
          src="/images/team/team-inat.jpg"
          alt="INAT JE Team"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-green/10 backdrop-blur-sm border border-brand-green/20 rounded-full"
          >
            <Leaf size={16} className="text-brand-green" />
            <span className="text-sm font-medium text-white">Depuis 2012</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
          >
            INAT{" "}
            <span className="text-brand-neutral font-light">
              Junior Entreprise
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-brand-neutral max-w-4xl mx-auto leading-relaxed"
          >
            Leader de son écosystème — Une organisation étudiante engagée pour{" "}
            <span className="text-brand-green font-semibold">l'innovation</span>
            ,{" "}
            <span className="text-brand-green font-semibold">
              le développement durable
            </span>{" "}
            et{" "}
            <span className="text-brand-green font-semibold">
              l'excellence professionnelle
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/services">
              <Button variant="primary" size="lg" className="group">
                Découvrir nos services
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-black"
              >
                Nous contacter
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Elements - Decorative */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-lightgreen/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
