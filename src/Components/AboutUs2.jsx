import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import {
  Wifi,
  ParkingCircle,
  Waves,
  UtensilsCrossed,
  Sparkles,
  Dumbbell
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const Amenities = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const serviceItemsRef = useRef([]);

  const services = [
    {
      title: 'Ultra-Fi Connectivity',
      desc: 'Seamless high-speed fiber lines running discretely across the entire reserve ground to keep you connected.',
      icon: <Wifi className="w-5 h-5 stroke-[1.25] text-neutral-800" />,
    },
    {
      title: 'Private Valet & Charging',
      desc: 'Complimentary secure parking complete with advanced hyper-charging bays reserved for electric powertrains.',
      icon: <ParkingCircle className="w-5 h-5 stroke-[1.25] text-neutral-800" />,
    },
    {
      title: 'Infinity Hydration Pool',
      desc: 'A pristine, salt-filtrated architectural water sanctuary positioned along the dynamic cliff boundaries.',
      icon: <Waves className="w-5 h-5 stroke-[1.25] text-neutral-800" />,
    },
    {
      title: 'Epicurean Hearth & Bar',
      desc: 'Locally grown organic ingredients prepared over raw firewood flames by award-winning resident culinary masters.',
      icon: <UtensilsCrossed className="w-5 h-5 stroke-[1.25] text-neutral-800" />,
    },
    {
      title: 'Thermal Wellness Spa',
      desc: 'Holistic sonic stone therapies and locally sourced botanical treatments built to restore physical baselines.',
      icon: <Sparkles className="w-5 h-5 stroke-[1.25] text-neutral-800" />,
    },
    {
      title: 'Kinetic Performance Hub',
      desc: 'State-of-the-art strength devices set within panoramic glass enclosures over looking the wild landscape.',
      icon: <Dumbbell className="w-5 h-5 stroke-[1.25] text-neutral-800" />,
    },
  ];

  useEffect(() => {
    CustomEase.create('luxuryEase', 'M0,0 C0.1,0.85 0.15,1 1,1');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Elegant text entrance sequence
    tl.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.4, ease: 'luxuryEase' }
    );

    // Staggered matrix card deployment
    tl.fromTo(serviceItemsRef.current,
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.6, 
        stagger: 0.08, 
        ease: 'luxuryEase' 
      },
      '-=1.0'
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      id='amenities'
      className="w-full bg-[#FAF9F5] text-neutral-900 pt-24 pb-32 px-4 sm:px-8 md:px-16 lg:px-24 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Premium Header Layout */}
        <div ref={headerRef} className="w-full flex flex-col items-center text-center mb-16 md:mb-24 opacity-0">
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-neutral-400 mb-4">
            02 // EXCLUSIVE CURATION
          </span>
          <h3 
            className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-neutral-950 uppercase font-serif mb-6"
            style={{ fontFamily: "'Cinzel', 'Didot', serif" }}
          >
            Elevated <span className="italic font-normal text-neutral-600">Provisions</span>
          </h3>
          <p className="text-neutral-500 text-xs sm:text-sm font-light max-w-xl leading-relaxed tracking-wide px-4">
            Every technical asset and human service throughout Nilwadula is tailored to preserve continuous peace of mind.
          </p>
        </div>

        {/* Architectural Premium Card Matrix */}
        <div 
          ref={gridRef}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((item, index) => (
            <div 
              key={index}
              ref={el => serviceItemsRef.current[index] = el}
              className="w-full bg-transparent border border-neutral-950/5 hover:border-transparent rounded-2xl p-6 sm:p-8 flex flex-col items-start justify-between min-h-[220px] transition-all duration-500 group hover:bg-white shadow-xl shadow-neutral-950/[0.3] opacity-0"
            >
              {/* Minimalist Rounded Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-neutral-900/[0.03] flex items-center justify-center transition-all duration-500 group-hover:bg-neutral-950 group-hover:text-white mb-6">
                <div className="transition-transform duration-500 group-hover:scale-110 group-hover:invert group-hover:brightness-200">
                  {item.icon}
                </div>
              </div>

              {/* Informational Text Frame */}
              <div className="w-full flex flex-col items-start">
                <h4 className="text-sm font-semibold tracking-[0.05em] uppercase text-neutral-900 mb-3 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-neutral-500 text-xs sm:text-[13px] font-light leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Amenities;