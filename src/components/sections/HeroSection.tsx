"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Leaf, Mouse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/simpleLogo.png";

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

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

  useEffect(() => {
    if (imageLoaded) {
      // Show scroll indicator after 3 seconds
      const showTimer = setTimeout(() => {
        setShowScrollIndicator(true);
      }, 3000);

      // Hide scroll indicator after 4 seconds (total 7 seconds from load)
      const hideTimer = setTimeout(() => {
        setShowScrollIndicator(false);
      }, 7000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [imageLoaded]);

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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center mx-auto mb-4"
                >
                  <Image
                    src={logo}
                    alt="INAT Junior Entreprise Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </motion.div>
                <h2 className="text-2xl font-heading font-bold text-white mb-2">
                  INAT{" "}
                  <span className="font-light text-brand-neutral">
                    Junior Entreprise
                  </span>
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black/70 z-10" />

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
              <span className="text-sm font-medium text-white">
                Depuis 2012
              </span>
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
              <span className="text-brand-green font-semibold">
                l'innovation
              </span>
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
                <Button
                  variant="primary"
                  size="lg"
                  className="group shadow-2xl"
                >
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
        </div>

        {/* Auto-disappearing Mouse Scroll Indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group z-30"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              {/* Perfectly centered blurred background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black/40 backdrop-blur-md rounded-full border border-white/10" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex flex-col items-center justify-center space-y-2 p-6"
              >
                {/* Actual Mouse Icon - Perfectly Centered */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-white group-hover:text-brand-green transition-colors duration-300 flex items-center justify-center"
                >
                  <Mouse size={28} className="drop-shadow-lg" />
                </motion.div>

                {/* Text - Perfectly Centered */}
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <p className="text-white/80 text-[10px] font-medium tracking-wider group-hover:text-brand-green transition-colors duration-300">
                    SCROLL
                  </p>
                  <motion.div
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="h-px bg-brand-green mt-0.5 origin-center w-8 ml-1"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
