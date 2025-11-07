'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Qui Sommes-Nous', href: '/qui-sommes-nous' },
  { name: 'Services', href: '/services' },
  { name: 'Partenaires', href: '/partenaires' },
  { name: 'Événements', href: '/evenements' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Reset scroll state when pathname changes
    if (isHomePage) {
      // Reset to initial state for homepage
      setIsScrolled(window.scrollY > 50);
    } else {
      // Always use scrolled style for other pages
      setIsScrolled(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Only add scroll listener on homepage
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage, pathname]); // Added pathname to dependency array

  // Determine navbar style based on page and scroll
  const shouldUseScrolledStyle = !isHomePage || isScrolled;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        shouldUseScrolledStyle
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-4 border-b border-brand-green/10'
          : 'bg-black/20 backdrop-blur-md py-6 border-b border-white/10'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg",
                shouldUseScrolledStyle ? "shadow-brand-green/20" : "shadow-black/30"
              )}
            >
              <span className="text-white font-bold text-xl">IJ</span>
            </motion.div>
            <div className="hidden sm:block">
              <span className={cn(
                "text-xl font-heading font-bold transition-colors duration-300",
                shouldUseScrolledStyle ? "text-brand-black" : "text-white"
              )}>
                INAT{' '}
              </span>
              <span className={cn(
                "text-xl font-heading font-light transition-colors duration-300",
                shouldUseScrolledStyle ? "text-brand-gray" : "text-brand-neutral"
              )}>
                Junior Entreprise
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2.5 text-sm font-medium transition-all duration-300 relative group rounded-lg",
                    shouldUseScrolledStyle 
                      ? "text-brand-darkgray hover:text-brand-green hover:bg-brand-green/5" 
                      : "text-white/90 hover:text-brand-green hover:bg-white/10",
                    isActive && "text-brand-green"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute bottom-1 left-4 right-4 h-0.5 bg-brand-green transition-transform duration-300 rounded-full",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-3 rounded-xl transition-all duration-300 backdrop-blur-sm border",
              shouldUseScrolledStyle 
                ? "hover:bg-brand-green/5 border-brand-green/20 text-brand-darkgray" 
                : "hover:bg-white/10 border-white/20 text-white"
            )}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "lg:hidden border-t overflow-hidden backdrop-blur-md",
              shouldUseScrolledStyle 
                ? "bg-white/95 border-brand-green/10" 
                : "bg-black/30 border-white/10"
            )}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 border border-transparent",
                        shouldUseScrolledStyle 
                          ? "text-brand-darkgray hover:bg-brand-green/5 hover:text-brand-green hover:border-brand-green/20" 
                          : "text-white hover:bg-white/10 hover:text-brand-green hover:border-white/20",
                        isActive && "text-brand-green border-brand-green/20"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
