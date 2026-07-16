import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import backgroundImage from '../assets/hero-img/2.png';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    CustomEase.create('luxuryEase', 'M0,0 C0.1,0.85 0.15,1 1,1');

    // Smooth staggered reveal for the overlay content
    gsap.fromTo('.about-reveal-item',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        stagger: 0.15,
        ease: 'luxuryEase',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Subtle scale-down effect on the background image for a cinematic entrance
    gsap.fromTo('.about-bg-image',
      { scale: 1.1 },
      {
        scale: 1,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-[90vh] flex items-center select-none overflow-hidden bg-neutral-950"
    >
      {/* Background Image Container with Ken Burns entrance effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={backgroundImage} 
          alt="Nilwadula Riverside Sanctuary" 
          className="about-bg-image w-full h-full object-cover opacity-75 transform-gpu"
        />
      </div>

      {/* Sophisticated dual-layer visual protection overlay */}
      {/* Layer 1: Global dark tint */}
      <div className="absolute inset-0 bg-neutral-950/45" />
      {/* Layer 2: Editorial gradient fading from the left where content lives */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24 py-24 sm:py-32 flex items-center">
        <div ref={contentRef} className="max-w-2xl flex flex-col items-start">
          
        


           <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/80 rounded-full mb-6 reveal-item opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white">
              About Us
            </span>
          </div>

          {/* Luxury Typography Heading */}
          <h2 className="about-reveal-item opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white uppercase leading-[1.15] mb-8 font-serif">
            A Peaceful <br />
            <span className="font-sans font-black tracking-normal text-white">RIVERSIDE RETREAT</span> <br />
            <span className="text-xl sm:text-2xl font-sans tracking-[0.15em] text-white/70 block mt-2">
              in Udawalawe
            </span>
          </h2>

          {/* Copy blocks styled for readability against background */}
          <div className="about-reveal-item opacity-0 text-white/80 text-sm sm:text-base font-light tracking-wide leading-relaxed flex flex-col gap-6 max-w-xl">
            <p className="font-medium text-white text-base sm:text-lg">
              Located just minutes from Udawalawe National Park, Nilwadula Hotel is surrounded by tropical greenery and overlooks a beautiful river that brings a sense of calm to every stay.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Our comfortable accommodation, refreshing swimming pool, delicious local cuisine, and warm hospitality make Nilwadula the ideal destination for travelers seeking both relaxation and adventure. Whether you're watching birds along the riverbank, enjoying a quiet afternoon by the pool, or heading out on an unforgettable safari, every experience is inspired by the natural beauty that surrounds us.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;