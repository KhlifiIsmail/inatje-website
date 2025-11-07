'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center space-y-2"
      >
        {/* Mouse */}
        <div className="relative">
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 0px rgba(218, 165, 32, 0)',
                '0 0 20px rgba(218, 165, 32, 0.4)',
                '0 0 0px rgba(218, 165, 32, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-brand-green rounded-full shadow-lg"
            />
          </motion.div>
        </div>
        
        {/* Text */}
        <motion.p
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 text-xs font-medium tracking-wider"
        >
          SCROLL
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
