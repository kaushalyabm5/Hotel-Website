import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Importing local assets from src -> assets -> galleryImg folder
import img1 from '../assets/galleryImg/1.png';
import img2 from '../assets/galleryImg/2.png';
import img3 from '../assets/galleryImg/3.png';
import img4 from '../assets/galleryImg/4.png';
import img5 from '../assets/galleryImg/5.png';

// Swapped out external links for your local asset imports
const IMAGES = [
  { id: 1, url: img1, title: 'Alpine Serenity' },
  { id: 2, url: img2, title: 'Misty Ridge' },
  { id: 3, url: img3, title: 'Forest Sanctuary' },
  { id: 4, url: img4, title: 'Golden Valley' },
  { id: 5, url: img5, title: 'Ethereal Dunes' }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  // STOPS SCROLL COMPLETELY: Locks both body and html tag layers to prevent viewport bleeding
  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [modalImage]);

  const getVisibleImages = () => {
    const slots = [-1, 0, 1];
    return slots.map((position) => {
      let index = (currentIndex + position) % IMAGES.length;
      if (index < 0) index += IMAGES.length;
      return { ...IMAGES[index], position };
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-25 pb-15 text-black select-none">
      
      {/* Top Center Section Title */}
      <div className="w-full text-center mb-1">
        <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
          Visual Landscape
        </h3>
        <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
          A clean architectural presentation showing structural framing views in a continuous sequential rhythm.
        </p>
      </div>

      {/* 3-Image Container - Tightened mobile container heights to block empty padding */}
      <div className="relative flex h-[340px] sm:h-[420px] md:h-[520px] w-full items-center justify-center overflow-hidden">
        <div className="relative flex w-full max-w-7xl items-center justify-center px-4">
          <AnimatePresence initial={false} mode="popLayout">
            {getVisibleImages().map((item) => {
              const isCenter = item.position === 0;
              const absPos = Math.abs(item.position); 

              const getXPosition = () => {
                const baseWidth = window.innerWidth;
                if (baseWidth > 1280) return item.position * 320; 
                if (baseWidth > 1024) return item.position * 260; 
                if (baseWidth > 768) return item.position * 200;  
                return item.position * 140;                       
              };

              return (
                <motion.div
                  key={`${item.id}-${item.position}`}
                  layout
                  initial={{ 
                    opacity: 0, 
                    scale: 0.75,
                    x: item.position * 450 
                  }}
                  animate={{
                    opacity: 1, 
                    scale: isCenter ? 1.08 : 0.88, 
                    x: getXPosition(),
                    zIndex: 30 - absPos, 
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.75,
                    x: item.position * 450 
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 240,
                    damping: 28,
                  }}
                  onClick={() => isCenter && setModalImage(item)}
                  className={`absolute aspect-[16/10] w-[320px] sm:w-[360px] md:w-[560px] shrink-0 overflow-hidden bg-neutral-100 shadow-xl rounded-2xl transition-shadow duration-300 ${
                    isCenter ? 'cursor-pointer shadow-black/10' : 'pointer-events-none'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  
                  {isCenter && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/0 via-black/0 to-transparent p-4 sm:p-6 text-white">
                      
                    </div>
                  )}

                  {!isCenter && (
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px] transition-opacity duration-300" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Floating Navigation Controls */}
        <div className="absolute inset-x-0 top-1/2 z-40 mx-auto flex max-w-6xl -translate-y-1/2 justify-between px-4 sm:px-6 pointer-events-none">
          <button
            onClick={handlePrev}
            className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border border-neutral-300 bg-white/90 text-black shadow-md cursor-pointer transition-all hover:bg-black hover:text-white pointer-events-auto active:scale-95 rounded-full"
            aria-label="Slide Left to Right"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={handleNext}
            className="group flex cursor-pointer h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border border-neutral-300 bg-white/90 text-black shadow-md transition-all hover:bg-black hover:text-white pointer-events-auto active:scale-95 rounded-full"
            aria-label="Slide Right to Left"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center items-center gap-2">
        {IMAGES.map((_, idx) => (
          <span
            key={idx}
            className={`h-1 transition-all duration-300 rounded-full ${
              idx === currentIndex ? 'w-6 sm:w-8 bg-black' : 'w-1.5 sm:w-2 bg-neutral-200'
            }`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            onTouchMove={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 md:p-12 backdrop-blur-sm cursor-zoom-out touch-none overscroll-none"
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 cursor-pointer text-white backdrop-blur-md transition-all hover:bg-white hover:text-black active:scale-95 border border-white/20"
              aria-label="Close modal"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[85vh] aspect-[16/10] overflow-hidden bg-neutral-900 shadow-2xl rounded-2xl cursor-default"
            >
              <img
                src={modalImage.url}
                alt={modalImage.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 sm:p-6 text-white md:p-8">
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}