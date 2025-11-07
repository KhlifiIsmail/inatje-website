'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicatorArrow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <div className="relative flex flex-col items-center">
        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, -60],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-brand-green rounded-full"
            style={{ top: -10 - i * 8 }}
          />
        ))}
        
        {/* Main arrow container */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-brand-green/20 rounded-full blur-md"
          />
          
          {/* Arrow */}
          <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:bg-brand-green/20 transition-all duration-300">
            <ChevronDown className="w-6 h-6 text-brand-green" />
          </div>
        </motion.div>
        
        {/* Text */}
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-xs font-medium mt-2 tracking-widest"
        >
          DÉCOUVRIR
        </motion.p>
      </div>
    </motion.div>
  );
}
