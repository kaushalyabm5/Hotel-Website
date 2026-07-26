import React, { useState, useEffect } from 'react';

// Dynamic import array for 36 images from src/assets/more-img/
const images = Array.from({ length: 36 }, (_, i) => {
  return new URL(`../assets/more-img/${i + 1}.webp`, import.meta.url).href;
});

// Split images into 3 distinct sets of 12 for the rows
const row1 = images.slice(0, 12);
const row2 = images.slice(12, 24);
const row3 = images.slice(24, 36);

export default function Gallery2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimate, setIsAnimate] = useState(false);

  const openModal = (img) => {
    setSelectedImage(img);
    setTimeout(() => setIsAnimate(true), 30);
  };

  const closeModal = () => {
    setIsAnimate(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="bg-white text-zinc-900 py-16 px-4 max-w-7xl mx-auto font-sans relative overflow-hidden">
      {/* CSS Keyframes - Changed duration from 35s to 85s for much slower scrolling */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: marquee-left 85s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: marquee-right 85s linear infinite;
        }
        .marquee-container:hover .animate-scroll-left,
        .marquee-container:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase font-serif">
            Photo Gallery
          </h2>
        </div>
        <p className="text-neutral-600 max-w-xs text-sm md:text-base font-normal leading-relaxed">
          Curated snapshots of our hotel interiors and scenic surroundings.
        </p>
      </div>

      {/* --- Auto-Scrolling Interactive Rows --- */}
      <div className="marquee-container flex flex-col gap-5 relative">
        {/* Row 1: Slow Scroll Left */}
        <div className="overflow-hidden w-full rounded-xl">
          <div className="animate-scroll-left gap-4">
            {[...row1, ...row1].map((img, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-64 md:w-80 h-44 md:h-56 shrink-0 rounded-xl overflow-hidden bg-zinc-100 cursor-pointer group relative"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Gallery item ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Slow Scroll Right */}
        <div className="overflow-hidden w-full rounded-xl">
          <div className="animate-scroll-right gap-4">
            {[...row2, ...row2].map((img, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-64 md:w-80 h-44 md:h-56 shrink-0 rounded-xl overflow-hidden bg-zinc-100 cursor-pointer group relative"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Gallery item ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Slow Scroll Left */}
        <div className="overflow-hidden w-full rounded-xl">
          <div className="animate-scroll-left gap-4">
            {[...row3, ...row3].map((img, idx) => (
              <div
                key={`r3-${idx}`}
                className="w-64 md:w-80 h-44 md:h-56 shrink-0 rounded-xl overflow-hidden bg-zinc-100 cursor-pointer group relative"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Gallery item ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Lightbox Modal --- */}
      {selectedImage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out backdrop-blur-md bg-black/90 ${
            isAnimate ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeModal}
        >
          <button
            className={`absolute top-6 right-6 text-white hover:text-zinc-400 p-2 focus:outline-none transition-all duration-300 delay-100 ${
              isAnimate ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
            onClick={closeModal}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className={`max-w-5xl max-h-[85vh] flex items-center justify-center bg-transparent transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) ${
              isAnimate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[85vh] object-contain select-none rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}