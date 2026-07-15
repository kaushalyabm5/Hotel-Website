import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import firstImage from '../assets/about-img1.jpg'; 
import secondImage from '../assets/about-img2.jpg';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const Welcome = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    CustomEase.create('luxuryEase', 'M0,0 C0.1,0.85 0.15,1 1,1');

    // 1. Text & Left Side Animation Set
    gsap.fromTo('.reveal-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'luxuryEase',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 2. Interlocking Cards Deluxe Entrance
    gsap.fromTo('.welcome-card-left',
      { opacity: 0, y: 60, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        ease: 'luxuryEase',
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo('.welcome-card-right',
      { opacity: 0, y: 100, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: 'luxuryEase',
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      id='about-us'
      className="w-full bg-[#fcfbfa] text-neutral-900 pt-24 pb-32 px-4 sm:px-8 md:px-16 lg:px-24 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* Left Layout Pane: Narrative Blocks */}
        <div ref={leftColRef} className="w-full lg:w-[40%] flex flex-col items-start">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900/5 rounded-full mb-6 reveal-item opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-600">
              The Living Space
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-950 uppercase leading-[1.15] mb-6 font-serif reveal-item opacity-0">
            A quiet <br />
            <span className="font-sans font-black tracking-normal text-neutral-900">REVOLUTION</span> <br />
            in luxury.
          </h2>

          <p className="text-neutral-500 text-sm font-light tracking-wide leading-relaxed max-w-md mb-8 reveal-item opacity-0">
            Nilwadula balances pure architectural lines with the fluid, organic contours of the island terrain. Built entirely out of locally sourced timber and smooth cast stone, these spaces are designed to soften your day-to-day rhythms.
          </p>
          
          <div className="reveal-item opacity-0 w-full sm:w-auto">
            <button className="w-full sm:w-auto cursor-pointer px-7 py-3.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-neutral-950 text-white rounded-xl transition-all duration-300 hover:bg-neutral-800 shadow-xl shadow-neutral-950/10 hover:shadow-neutral-950/20">
              View Spaces
            </button>
          </div>
        </div>

        {/* Right Layout Pane: Dynamic Rounded Interlocking Grid */}
        <div 
          ref={cardsContainerRef} 
          className="w-full lg:w-[55%] grid grid-cols-12 gap-4 sm:gap-6 relative items-center py-6"
        >
          
          {/* Main Dominant Left Rounded Panel */}
          <div className="welcome-card-left col-span-12 sm:col-span-7 group relative overflow-hidden rounded-3xl bg-neutral-100 aspect-[4/5] shadow-2xl shadow-neutral-900/5 opacity-0 transform-gpu">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <img 
                src={firstImage} 
                alt="Architectural Reserve Interior" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-105 group-hover:scale-100"
              />
            </div>
            
            {/* Visual protection mask overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Context Card Copy Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col items-start text-white">
              <span className="text-[9px] tracking-[0.3em] font-bold text-white/60 uppercase mb-2">01 // PRIVATE RESIDENCE</span>
              <h4 className="text-lg sm:text-xl font-serif font-light tracking-wide">The Sanctuary Pavilion</h4>
            </div>
          </div>

          {/* Elevated Staggered Secondary Right Card */}
          <div className="welcome-card-right col-span-12 sm:col-span-5 group relative overflow-hidden rounded-2xl bg-neutral-100 aspect-square sm:aspect-[3/4] shadow-2xl shadow-neutral-900/10 sm:-translate-y-12 opacity-0 transform-gpu z-10">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img 
                src={secondImage} 
                alt="Coastal Textures View" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-105 group-hover:scale-100"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start text-white">
              <span className="text-[9px] tracking-[0.3em] font-bold text-white/60 uppercase mb-1">02 // ESCAPE OUTLOOK</span>
              <h4 className="text-base font-serif font-light tracking-wide">Shore Access Routes</h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Welcome;