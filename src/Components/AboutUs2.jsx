import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

// ✅ Lucide icons added
import {
  Wifi,
  ParkingCircle,
  Waves,
  UtensilsCrossed,
  Sparkles,
  Dumbbell
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const AboutUs2 = () => {
  const containerRef = useRef(null);
  const imageCardsRef = useRef([]);
  const facilitiesHeaderRef = useRef(null);
  const serviceItemsRef = useRef([]);

  const services = [
    {
      title: 'High Speed Wifi',
      desc: 'Scripta apeirian in his. Quo accusamus complectitur consectetuer eu, errem adipisci ocurreret an per.',
      icon: <Wifi className="w-5 h-5 text-[var(--primary-color)]/80" />,
    },
    {
      title: 'Parking Space',
      desc: 'Scripta apeirian in his. Quo accusamus complectitur consectetuer eu, errem adipisci ocurreret an per.',
      icon: <ParkingCircle className="w-5 h-5 text-[var(--primary-color)]/80" />,
    },
    {
      title: 'Swimming Pool',
      desc: 'Scripta apeirian in his. Quo accusamus complectitur consectetuer eu, errem adipisci ocurreret an per.',
      icon: <Waves className="w-5 h-5 text-[var(--primary-color)]/80" />,
    },
    {
      title: 'Restaurant & Bar',
      desc: 'Scripta apeirian in his. Quo accusamus complectitur consectetuer eu, errem adipisci ocurreret an per.',
      icon: <UtensilsCrossed className="w-5 h-5 text-[var(--primary-color)]/80" />,
    },
    {
      title: 'Spa Center',
      desc: 'Scripta apeirian in his. Quo accusamus complectitur consectetuer eu, errem adipisci ocurreret an per.',
      icon: <Sparkles className="w-5 h-5 text-[var(--primary-color)]/80" />,
    },
    {
      title: 'Fitness Center',
      desc: 'Scripta apeirian in his. Quo accusamus complectitur consectetuer eu, errem adipisci ocurreret an per.',
      icon: <Dumbbell className="w-5 h-5 text-[var(--primary-color)]/80" />,
    },
  ];

  useEffect(() => {
    CustomEase.create('luxuryEase', 'M0,0 C0.1,0.85 0.15,1 1,1');

    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    imageTl.fromTo(imageCardsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.6, stagger: 0.2, ease: 'luxuryEase' }
    );

    const facilitiesTl = gsap.timeline({
      scrollTrigger: {
        trigger: facilitiesHeaderRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    facilitiesTl.fromTo(facilitiesHeaderRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1.4, ease: 'luxuryEase' }
    );

    facilitiesTl.fromTo(serviceItemsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.08, ease: 'luxuryEase' },
      '-=1.0'
    );

  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-white text-neutral-900 py-16 md:pb-20 px-6 md:px-12 lg:px-20 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
          {services.map((item, index) => (
            <div 
              key={index}
              ref={el => serviceItemsRef.current[index] = el}
              className="w-full flex items-start gap-4 opacity-0 group"
            >
              <div className="w-8 h-8 flex items-center justify-center mt-0.5 shrink-0 transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              <div className="flex flex-col items-start">
                <h4 className="text-[1rem] font-medium tracking-wide text-neutral-800 mb-2.5 transition-colors duration-300 group-hover:text-[var(--primary-color)]">
                  {item.title}
                </h4>
                <p className="text-neutral-400 text-[14px] md:text-[.9rem] font-light leading-relaxed tracking-normal max-w-sm">
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

export default AboutUs2;