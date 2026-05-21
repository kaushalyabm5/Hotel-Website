import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

import galleryImg1 from '../assets/gallery-img1.jpg';
import galleryImg2 from '../assets/gallery-img2.jpg';
import galleryImg3 from '../assets/gallery-img3.jpg';
import galleryImg4 from '../assets/gallery-img4.jpg';
import galleryImg5 from '../assets/gallery-img5.jpg';
import galleryImg6 from '../assets/gallery-img6.jpg';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const Gallery = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridItemsRef = useRef([]);

  const galleryItems = [
    {
      title: 'This Miami Beach',
      location: 'South Beach',
      image: galleryImg1,
      sizeClass: 'col-span-12 md:col-span-7 lg:col-span-4 aspect-[16/10] md:aspect-auto md:h-[260px] lg:h-[240px]',
    },
    {
      title: 'Eden Villas',
      location: 'Firostefani, Caldera',
      image: galleryImg2,
      sizeClass: 'col-span-12 md:col-span-5 lg:col-span-3 row-span-1 lg:row-span-2 aspect-[4/5] md:aspect-auto md:h-[540px] lg:h-[504px]',
    },
    {
      title: 'Apartments Opens',
      location: 'Venice, Italy',
      image: galleryImg3,
      sizeClass: 'col-span-12 md:col-span-12 lg:col-span-5 aspect-[16/10] md:aspect-auto md:h-[260px] lg:h-[240px]',
    },
    {
      title: 'Locanda Vivaldi',
      location: 'Venice, Italy',
      image: galleryImg4,
      sizeClass: 'col-span-12 md:col-span-6 lg:col-span-2 aspect-[4/3] md:aspect-auto md:h-[260px] lg:h-[240px]',
    },
    {
      title: 'Homes Aqua',
      location: 'Aegean Sea',
      image: galleryImg5,
      sizeClass: 'col-span-12 md:col-span-6 lg:col-span-2 aspect-[4/3] md:aspect-auto md:h-[260px] lg:h-[240px]',
    },
    {
      title: 'Alba Cave Villa',
      location: 'Featuring a seasonal outdoor pool',
      image: galleryImg6,
      sizeClass: 'col-span-12 md:col-span-12 lg:col-span-5 aspect-[16/10] md:aspect-auto md:h-[260px] lg:h-[240px]',
    },
  ];

  useEffect(() => {
    CustomEase.create('luxuryEase', 'M0,0 C0.1,0.85 0.15,1 1,1');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // 1. Reveal Section Headers
    tl.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.4, ease: 'luxuryEase' }
    );

    // 2. Cascade Stagger for Gallery Grid Elements
    tl.fromTo(gridItemsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.6, stagger: 0.1, ease: 'luxuryEase' },
      '-=1.0'
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-neutral-50 text-neutral-900 py-20 md:py-28 px-6 md:px-12 lg:px-20 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Headings */}
        <div ref={headerRef} className="w-full text-center mb-16 md:mb-20 opacity-0">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[var(--primary-color)] block mb-3">
            Our Gallery
          </span>
          <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
            Moments Captured
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
            Explore the beauty and calm atmosphere of our hotel through real moments and surroundings.
          </p>
        </div>

        {/* Dynamic Architectural Grid Structure */}
        <div className="w-full grid grid-cols-12 gap-4 lg:gap-3 auto-rows-max">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              ref={el => gridItemsRef.current[idx] = el}
              className={`opacity-0 relative rounded-[1rem] group overflow-hidden cursor-pointer bg-neutral-200 border border-neutral-200/40 shadow-[0_4px_25px_rgba(0,0,0,0.01)] ${item.sizeClass}`}
            >
              {/* Image Layer Container */}
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-[1rem] h-full object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-105"
                />
                {/* Clean atmospheric vignette shadow block overlay */}
                <div className="absolute rounded-[1rem] inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
              </div>

             
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;