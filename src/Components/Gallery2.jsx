import React, { useState, useEffect } from 'react';

// Dynamic import array for 36 images from src/assets/more-img/
const images = Array.from({ length: 36 }, (_, i) => {
  return new URL(`../assets/more-img/${i + 1}.webp`, import.meta.url).href;
});

export default function Gallery2() {
  // State to manage the currently active image source for modal
  const [selectedImage, setSelectedImage] = useState(null);
  // Separate state to trigger the visual animation classes smoothly
  const [isAnimate, setIsAnimate] = useState(false);
  
  // State to manage pagination: initially show 12 images
  const [visibleCount, setVisibleCount] = useState(12);

  // Handle open transition smoothly
  const openModal = (img) => {
    setSelectedImage(img);
    // Tiny timeout ensures the DOM node mounts before standard CSS classes apply
    setTimeout(() => setIsAnimate(true), 30);
  };

  // Handle close transition smoothly
  const closeModal = () => {
    setIsAnimate(false);
    // Match the duration-300 transition time before unmounting from the DOM
    setTimeout(() => setSelectedImage(null), 300);
  };

  // Escape key listener to close modal natively
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter images based on current visible scale
  const visibleImages = images.slice(0, visibleCount);

  // Dynamically split visible images into 3 columns for desktop masonry layout
  const col1 = visibleImages.filter((_, idx) => idx % 3 === 0);
  const col2 = visibleImages.filter((_, idx) => idx % 3 === 1);
  const col3 = visibleImages.filter((_, idx) => idx % 3 === 2);

  // Load more pagination sequence logic (12 -> 24 -> 36)
  const handleLoadMore = () => {
    if (visibleCount === 12) {
      setVisibleCount(24); // Show next 12 images
    } else if (visibleCount === 24) {
      setVisibleCount(36); // Show all remaining images
    }
  };

  // Reset pagination sequence logic back to start
  const handleShowLess = () => {
    setVisibleCount(12);
  };

  return (
    <section className="bg-white text-zinc-900 py-16 px-4 max-w-7xl mx-auto font-sans relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
         
          <h2 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase font-serif">
            Photo Gallery
          </h2>
        </div>
        <p className="text-neutral-600 max-w-xs text-sm md:text-base font-normal leading-relaxed">
         Curated snapshots of our hotel interiors and scenic surroundings.
        </p>
      </div>

      {/* --- Mobile View Only (Horizontal Touch Carousel) --- */}
      <div className="flex md:hidden overflow-x-auto gap-4 scrollbar-none snap-x snap-mandatory pb-6">
        {visibleImages.map((img, index) => (
          <div 
            key={index} 
            className="min-w-[85vw] sm:min-w-[60vw] snap-center aspect-[3/4] overflow-hidden bg-zinc-100 cursor-pointer rounded-lg"
            onClick={() => openModal(img)}
          >
            <img 
              src={img} 
              alt={`Gallery Mobile ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* --- Desktop View Only (Premium Dynamic 3-Column Masonry) --- */}
      <div className="hidden md:grid grid-cols-3 gap-6 items-start">
        {/* Column 1 */}
        <div className="grid gap-6">
          {col1.map((img, idx) => (
            <div 
              key={idx} 
              className="overflow-hidden bg-zinc-100 group cursor-pointer rounded-lg"
              onClick={() => openModal(img)}
            >
              <img 
                src={img} 
                alt="Gallery Asset" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="grid gap-6">
          {col2.map((img, idx) => (
            <div 
              key={idx} 
              className="overflow-hidden bg-zinc-100 group cursor-pointer rounded-lg"
              onClick={() => openModal(img)}
            >
              <img 
                src={img} 
                alt="Gallery Asset" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="grid gap-6">
          {col3.map((img, idx) => (
            <div 
              key={idx} 
              className="overflow-hidden bg-zinc-100 group cursor-pointer rounded-lg"
              onClick={() => openModal(img)}
            >
              <img 
                src={img} 
                alt="Gallery Asset" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- Dynamic Pagination Action Trigger Zone --- */}
      <div className="flex justify-center mt-12">
        {visibleCount < 36 ? (
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 border bg-green-500 text-white text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer rounded-lg font-medium"
          >
            Load More (12 More)
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="px-6 py-3 cursor-pointer border border-zinc-900 bg-transparent text-zinc-900 text-sm tracking-wider uppercase transition-all duration-300 hover:bg-zinc-900 hover:text-white focus:outline-none rounded-lg font-medium"
          >
            Show Less
          </button>
        )}
      </div>

      {/* --- Immersive Smooth Lightbox Modal --- */}
      {selectedImage && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out backdrop-blur-md bg-black/90 ${
            isAnimate ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeModal}
        >
          {/* Close Button */}
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

          {/* Animating Modal Image Container */}
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