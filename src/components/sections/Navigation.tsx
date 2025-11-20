"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/images/simpleLogo.png";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Qui Sommes-Nous", href: "/qui-sommes-nous" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    subItems: [
      {
        name: "Comité Études et Projets",
        href: "/services/comite-etudes",
        description: "Solutions techniques et études spécialisées",
        icon: "📊",
      },
      {
        name: "Développement Commercial",
        href: "/services/developpement-commercial",
        description: "Forum d'emploi et opportunités professionnelles",
        icon: "🤝",
      },
      {
        name: "Comité Marketing",
        href: "/services/comite-marketing",
        description: "Communication digitale et présence terrain",
        icon: "📢",
      },
    ],
  },
  { name: "Partenaires", href: "/partenaires" },
  { name: "Événements", href: "/evenements" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [activeDropdown]);

  // Same behavior for ALL pages: start transparent/dark, become white on scroll
  const shouldUseScrolledStyle = isScrolled;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        shouldUseScrolledStyle
          ? "bg-white/95 backdrop-blur-md shadow-xl py-4 border-b border-brand-green/10"
          : "bg-black/20 backdrop-blur-md py-5 border-b border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group ">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center transition-all duration-300 "
            >
              <Image
                src={logo}
                alt="INAT Junior Entreprise Logo"
                width={48}
                height={48}
                className="object-contain  mt-2"
                priority
              />
            </motion.div>
            <div className="hidden sm:block">
              <span
                className={cn(
                  "text-xl font-heading font-bold transition-colors duration-300",
                  shouldUseScrolledStyle ? "text-brand-black" : "text-white"
                )}
              >
                INAT{" "}
              </span>
              <span
                className={cn(
                  "text-xl font-heading font-light transition-colors duration-300",
                  shouldUseScrolledStyle
                    ? "text-brand-gray"
                    : "text-brand-neutral"
                )}
              >
                Junior Entreprise
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.subItems &&
                  item.subItems.some((sub) => pathname === sub.href));

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="flex items-center">
                      {/* Services Link */}
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2.5 text-sm font-medium transition-all duration-300 relative group rounded-l-lg",
                          shouldUseScrolledStyle
                            ? "text-brand-darkgray hover:text-brand-green hover:bg-brand-green/5"
                            : "text-white/90 hover:text-brand-green hover:bg-white/10",
                          isActive && "text-brand-green"
                        )}
                      >
                        {item.name}
                        <span
                          className={cn(
                            "absolute bottom-1 left-4 right-4 h-0.5 bg-brand-green transition-transform duration-300 rounded-full",
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          )}
                        />
                      </Link>

                      {/* Dropdown Trigger Area */}
                      <button
                        className={cn(
                          "px-2 py-2.5 text-sm font-medium transition-all duration-300 rounded-r-lg",
                          shouldUseScrolledStyle
                            ? "text-brand-darkgray hover:text-brand-green hover:bg-brand-green/5"
                            : "text-white/90 hover:text-brand-green hover:bg-white/10"
                        )}
                      >
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-300",
                            activeDropdown === item.name ? "rotate-180" : ""
                          )}
                        />
                      </button>
                    </div>

                    {/* Premium Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={cn(
                            "absolute top-full left-0 mt-2 w-80 backdrop-blur-xl rounded-2xl shadow-2xl border overflow-hidden z-50 transition-all duration-500",
                            shouldUseScrolledStyle
                              ? "bg-white/95 border-white/20"
                              : "bg-black/90 border-white/10"
                          )}
                        >
                          {/* Glassmorphism overlay */}
                          <div
                            className={cn(
                              "absolute inset-0 backdrop-blur-xl transition-all duration-500",
                              shouldUseScrolledStyle
                                ? "bg-gradient-to-br from-white/80 via-white/60 to-white/40"
                                : "bg-gradient-to-br from-black/80 via-black/60 to-black/40"
                            )}
                          />

                          {/* Content */}
                          <div className="relative p-2">
                            {item.subItems?.map((subItem, index) => (
                              <Link key={subItem.href} href={subItem.href}>
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className={cn(
                                    "flex items-start p-4 rounded-xl transition-all duration-300 group hover:shadow-lg",
                                    shouldUseScrolledStyle
                                      ? "hover:bg-gradient-to-r hover:from-brand-green/10 hover:to-blue-500/10"
                                      : "hover:bg-gradient-to-r hover:from-brand-green/20 hover:to-blue-500/20",
                                    pathname === subItem.href
                                      ? shouldUseScrolledStyle
                                        ? "bg-brand-green/10 shadow-md"
                                        : "bg-brand-green/20 shadow-md"
                                      : ""
                                  )}
                                >
                                  {/* Icon */}
                                  <div
                                    className={cn(
                                      "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300",
                                      shouldUseScrolledStyle
                                        ? "bg-gradient-to-br from-brand-green/20 to-blue-500/20"
                                        : "bg-gradient-to-br from-brand-green/30 to-blue-500/30"
                                    )}
                                  >
                                    <span className="text-lg">
                                      {subItem.icon}
                                    </span>
                                  </div>

                                  {/* Content */}
                                  <div className="flex-1 min-w-0">
                                    <h4
                                      className={cn(
                                        "font-semibold text-sm mb-1 transition-colors duration-300",
                                        pathname === subItem.href
                                          ? "text-brand-green"
                                          : shouldUseScrolledStyle
                                          ? "text-brand-darkgray group-hover:text-brand-green"
                                          : "text-white group-hover:text-brand-green"
                                      )}
                                    >
                                      {subItem.name}
                                    </h4>
                                    <p
                                      className={cn(
                                        "text-xs leading-relaxed transition-colors duration-300",
                                        shouldUseScrolledStyle
                                          ? "text-brand-gray"
                                          : "text-gray-300"
                                      )}
                                    >
                                      {subItem.description}
                                    </p>
                                  </div>

                                  {/* Active indicator */}
                                  {pathname === subItem.href && (
                                    <div className="flex-shrink-0 w-2 h-2 bg-brand-green rounded-full ml-2" />
                                  )}
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

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
                  <span
                    className={cn(
                      "absolute bottom-1 left-4 right-4 h-0.5 bg-brand-green transition-transform duration-300 rounded-full",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-2">
                {navItems.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.name} className="space-y-1">
                        {/* Main Services Link */}
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 border",
                              shouldUseScrolledStyle
                                ? "text-brand-darkgray hover:bg-brand-green/5 hover:text-brand-green hover:border-brand-green/20 border-transparent"
                                : "text-white hover:bg-white/10 hover:text-brand-green hover:border-white/20 border-transparent",
                              pathname === item.href &&
                                "text-brand-green border-brand-green/20"
                            )}
                          >
                            {item.name}
                          </Link>
                        </motion.div>

                        {/* Sub-items */}
                        <div className="ml-4 space-y-1">
                          {item.subItems?.map((subItem, index) => (
                            <motion.div
                              key={subItem.href}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                            >
                              <Link
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 border",
                                  shouldUseScrolledStyle
                                    ? "text-brand-gray hover:bg-brand-green/5 hover:text-brand-green hover:border-brand-green/20 border-transparent"
                                    : "text-gray-300 hover:bg-white/10 hover:text-brand-green hover:border-white/20 border-transparent",
                                  pathname === subItem.href &&
                                    "text-brand-green border-brand-green/20 bg-brand-green/5"
                                )}
                              >
                                <span className="mr-3 text-base">
                                  {subItem.icon}
                                </span>
                                <div>
                                  <div className="font-medium">
                                    {subItem.name}
                                  </div>
                                  <div
                                    className={cn(
                                      "text-xs mt-0.5",
                                      shouldUseScrolledStyle
                                        ? "text-brand-gray/70"
                                        : "text-gray-400"
                                    )}
                                  >
                                    {subItem.description}
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 border",
                          shouldUseScrolledStyle
                            ? "text-brand-darkgray hover:bg-brand-green/5 hover:text-brand-green hover:border-brand-green/20 border-transparent"
                            : "text-white hover:bg-white/10 hover:text-brand-green hover:border-white/20 border-transparent",
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
      </div>
    </motion.nav>
  );
}
