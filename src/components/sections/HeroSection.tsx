"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Preload the image
    const img = new window.Image();
    img.src = "/images/team/team-inat.jpg";
    img.onload = () => {
      setImageLoaded(true);
      // Keep loader for a bit longer for smooth transition
      setTimeout(() => setShowLoader(false), 800);
    };
    img.onerror = () => {
      // Fallback if image fails to load
      setImageLoaded(true);
      setShowLoader(false);
    };
  }, []);

  return (
    <>
      {/* Loading Animation */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-brand-black flex items-center justify-center"
          >
            <div className="text-center">
              {/* Logo Animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="w-20 h-20 bg-brand-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-3xl">IJ</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-white mb-2">
                  INAT <span className="font-light text-brand-neutral">Junior Entreprise</span>
                </h2>
              </motion.div>
              
              {/* Loading Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center justify-center space-x-2"
              >
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="w-3 h-3 bg-brand-green rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Animation */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={imageLoaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/60 to-brand-black/75 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black/40 z-10" />
          
          <Image
            src="/images/team/team-inat.jpg"
            alt="INAT JE Team"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={imageLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-green/15 backdrop-blur-sm border border-brand-green/30 rounded-full shadow-lg"
            >
              <Leaf size={16} className="text-brand-green" />
              <span className="text-sm font-medium text-white">Depuis 2012</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
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
              animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-xl lg:text-2xl text-brand-neutral max-w-5xl mx-auto leading-relaxed"
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
              animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="/services">
                <Button variant="primary" size="lg" className="group shadow-2xl">
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
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-brand-black backdrop-blur-sm shadow-xl"
                >
                  Nous contacter
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={imageLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={imageLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
              className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-lightgreen/15 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
