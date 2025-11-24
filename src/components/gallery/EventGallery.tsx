"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface GalleryImage {
  src: string;
  alt: string;
  size: "small" | "medium" | "large"; // For masonry variety
}

interface EventGalleryProps {
  images: GalleryImage[];
  initialLoadCount?: number;
  loadMoreCount?: number;
}

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// ============================================================================
// MASONRY CONFIGURATION
// ============================================================================

const breakpointColumns = {
  default: 4,
  1536: 4, // 2xl
  1280: 3, // xl
  1024: 3, // lg
  768: 2, // md
  640: 1, // sm
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

interface GalleryCardProps {
  image: GalleryImage;
  index: number;
  onClick: () => void;
  onMouseMove: (e: React.MouseEvent, index: number) => void;
  onMouseLeave: () => void;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  image,
  index,
  onClick,
  onMouseMove,
  onMouseLeave,
  cardRefs,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Determine aspect ratio class based on size
  const getAspectClass = () => {
    switch (image.size) {
      case "large":
        return "aspect-[4/5]"; // Portrait
      case "medium":
        return "aspect-square";
      case "small":
        return "aspect-[3/2]"; // Landscape
      default:
        return "aspect-square";
    }
  };

  return (
    <motion.div
      ref={(el) => {
        if (cardRefs.current) cardRefs.current[index] = el;
      }}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 12) * 0.05 }}
      style={{ x: springX, y: springY }}
      className="mb-6 break-inside-avoid"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave();
      }}
      onMouseMove={(e) => onMouseMove(e, index)}
    >
      <motion.div
        whileHover={{ scale: 1.05, zIndex: 10 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group relative cursor-pointer overflow-hidden rounded-2xl"
        onClick={onClick}
      >
        {/* Main Image Container */}
        <div className={`relative ${getAspectClass()} overflow-hidden bg-slate-200`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Dark Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black"
          />

          {/* Gold Gradient Border */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-2xl border-2 border-[#DAA520] shadow-[0_0_20px_rgba(218,165,32,0.5)]"
          />

          {/* Glassmorphism Frame */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

          {/* Expand Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-xl"
          >
            <Maximize2 className="w-5 h-5 text-[#DAA520]" />
          </motion.div>
        </div>

        {/* Bottom Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#DAA520]/30 blur-xl rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const EventGallery: React.FC<EventGalleryProps> = ({
  images,
  initialLoadCount = 12,
  loadMoreCount = 12,
}) => {
  const [visibleCount, setVisibleCount] = useState(initialLoadCount);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  // Magnetic repulsion effect
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (cardRefs.current.length === 0) return;
    setHoveredIndex(index);

    const hoveredCard = cardRefs.current[index];
    if (!hoveredCard) return;

    const hoveredRect = hoveredCard.getBoundingClientRect();
    const hoveredCenterX = hoveredRect.left + hoveredRect.width / 2;
    const hoveredCenterY = hoveredRect.top + hoveredRect.height / 2;

    // Apply magnetic repulsion to nearby cards
    cardRefs.current.forEach((card, i) => {
      if (!card || i === index) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = centerX - hoveredCenterX;
      const distanceY = centerY - hoveredCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Apply repulsion within 300px radius
      if (distance < 300) {
        const force = (300 - distance) / 300; // Normalize 0-1
        const pushX = (distanceX / distance) * force * 20; // Max 20px push
        const pushY = (distanceY / distance) * force * 20;

        const cardElement = card as HTMLElement;
        const motionDiv = cardElement.querySelector("div[style]") as HTMLElement;
        if (motionDiv) {
          motionDiv.style.transform = `translate(${pushX}px, ${pushY}px)`;
        }
      }
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    // Reset all cards
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const cardElement = card as HTMLElement;
      const motionDiv = cardElement.querySelector("div[style]") as HTMLElement;
      if (motionDiv) {
        motionDiv.style.transform = "translate(0px, 0px)";
      }
    });
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, images.length));
  };

  // Prepare lightbox slides
  const lightboxSlides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <div className="space-y-12">
      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-6 w-auto"
        columnClassName="pl-6 bg-clip-padding"
      >
        {visibleImages.map((image, index) => (
          <GalleryCard
            key={`gallery-${index}-${image.src}`}
            image={image}
            index={index}
            onClick={() => openLightbox(index)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            cardRefs={cardRefs}
          />
        ))}
      </Masonry>

      {/* Load More Button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Button
            onClick={loadMore}
            variant="outline"
            size="lg"
            className="group px-8 py-4 text-lg font-semibold border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#DAA520]/30"
          >
            Afficher plus de photos
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </Button>
        </motion.div>
      )}

      {/* Premium Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={currentIndex}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(20px)",
          },
          slide: {
            padding: "40px",
          },
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
          buttonClose: () => null,
        }}
        toolbar={{
          buttons: [
            <button
              key="close-button"
              className="group p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-red-500 hover:border-red-500 transition-all duration-300 shadow-xl"
              onClick={() => setLightboxOpen(false)}
              type="button"
            >
              <X className="w-6 h-6 text-white" />
            </button>,
          ],
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        carousel={{
          finite: false,
          preload: 2,
        }}
        animation={{
          fade: 300,
          swipe: 300,
        }}
      />
    </div>
  );
};
