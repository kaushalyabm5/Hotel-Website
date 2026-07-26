import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import img1 from '../assets/galleryImg/12.png';
import img2 from '../assets/galleryImg/8.png';
import img3 from '../assets/hero-img/1.png';
import img4 from '../assets/galleryImg/13.png';
import { 
  Trees, 
  MapPin, 
  Waves, 
  Compass, 
  Utensils, 
  Camera, 
  Wifi, 
  Bed, 
  HeartHandshake, 
  MoonStar 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const WhyStayWithUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    CustomEase.create('editorialEase', 'M0,0 C0.25,1 0.5,1 1,1');

    // Smooth reveal for the intro text
    gsap.fromTo('.editorial-fade',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'editorialEase',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Elegant slide-up for the feature rows
    gsap.fromTo('.feature-row',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        stagger: 0.2,
        ease: 'editorialEase',
        scrollTrigger: {
          trigger: '.features-container',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  const primaryFeatures = [
    {
      number: "01",
      tag: "THE SANCTUARY",
      title: "Beautiful Riverside Location",
      desc: "Unwind beside peaceful, slowly flowing waters. Our space is completely wrapped in rich tropical greenery, designed to let you disconnect from the rush of modern life and tune into nature's quiet rhythm.",
      icon: <Trees className="w-5 h-5 text-neutral-800" />,
      image: img1
    },
    {
      number: "02",
      tag: "THE ADVENTURE",
      title: "Effortless National Park Access",
      desc: "We are situated just 30 minutes away from the gates of Udawalawe National Park. Enjoy curated private safari tours guided by experienced local trackers who know the exact paths of the wild herds.",
      icon: <Compass className="w-5 h-5 text-neutral-800" />,
      image: img2
    },
    {
      number: "03",
      tag: "THE STAY",
      title: "Appointed Rooms & Nature Pool",
      desc: "Rest deeply in clean, thoughtfully structured rooms utilizing local timber, organic linens, and natural airflow. Step outside to a pristine pool that opens directly up to raw wilderness views.",
      icon: <Bed className="w-5 h-5 text-neutral-800" />,
      image: img3
    },
    {
      number: "04",
      tag: "THE TABLE",
      title: "Authentic Local & Global Culinary",
      desc: "Savor nourishing, slow-cooked traditional Sri Lankan curries alongside simple, high-quality international favorites. Every dish is handcrafted using fresh ingredients sourced directly from nearby villages.",
      icon: <Utensils className="w-5 h-5 text-neutral-800" />,
      image: img4
    }
  ];

  const quickAmenities = [
    { icon: <MapPin className="w-4 h-4" />, text: "Prime, quiet coordinates" },
    { icon: <Waves className="w-4 h-4" />, text: "River-facing relaxation decks" },
    { icon: <MoonStar className="w-4 h-4" />, text: "Peaceful atmosphere & low light pollution" },
    { icon: <Camera className="w-4 h-4" />, text: "Bird watching & wildlife photography" },
    { icon: <Wifi className="w-4 h-4" />, text: "Complimentary high-speed Wi-Fi" },
    { icon: <HeartHandshake className="w-4 h-4" />, text: "Warm, highly personalized care" }
  ];

  return (
    <section 
      id='why-choose-us'
      ref={sectionRef}
      className="w-full bg-[#fbfbfa] text-neutral-900 py-16 md:py-24 lg:py-32 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Top Center Section Title */}
        <div className="w-full text-center mb-12 sm:mb-16 lg:mb-20 editorial-fade">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
            Why Stay With Us
          </h3>
          <p className="text-neutral-500 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            We believe true luxury lies in simplicity. At Nilwadula, we remove the noise of the modern world so you can immerse yourself fully in Sri Lanka's beautiful natural habitats.
          </p>
        </div>

        {/* Alternating Feature List */}
        <div className="features-container flex flex-col gap-12 sm:gap-16 lg:gap-24 mb-16 sm:mb-24">
          {primaryFeatures.map((feat, index) => {
            const isEven = index % 2 === 1;
            return (
              <div 
                key={index}
                className="feature-row opacity-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-neutral-200/60 pb-12 sm:pb-16 lg:pb-24 last:border-0 last:pb-0"
              >
                {/* Text Content Block */}
                <div className={`col-span-1 lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-last lg:pl-8' : 'lg:pr-8'}`}>
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <span className="text-xs font-mono font-medium text-green-600 tracking-wider">
                      {feat.number}
                    </span>
                    <span className="w-1.5 h-px bg-neutral-300" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-green-600">
                      {feat.tag}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500 rounded-xl text-green-100 border border-green-100">
                      {feat.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-neutral-950">
                      {feat.title}
                    </h3>
                  </div>

                  <p className="text-neutral-500 text-sm font-normal leading-relaxed tracking-wide">
                    {feat.desc}
                  </p>
                </div>

                {/* Scenic Image Block */}
                <div className={`col-span-1 lg:col-span-6 ${isEven ? 'lg:order-first' : ''}`}>
                  <div className="w-full h-[240px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden relative group shadow-sm">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${feat.image}')` }}
                    />
                    <div className="absolute inset-0 bg-neutral-950/5 mix-blend-multiply" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle, Minimal Amenities Bar */}
        <div className="border-t border-neutral-200/80 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="col-span-1 lg:col-span-4">
              <h4 className="text-sm sm:text-base uppercase tracking-[0.25em] font-bold text-neutral-700 mb-2">
                Essential Comforts
              </h4>
              <p className="text-neutral-500 text-xs sm:text-sm font-normal leading-relaxed">
                Modern conveniences naturally woven into a quiet wild setting.
              </p>
            </div>
            
            <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 lg:gap-x-8">
              {quickAmenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-3 text-neutral-600">
                  <div className="text-green-500 flex-shrink-0">
                    {amenity.icon}
                  </div>
                  <span className="text-sm font-normal tracking-wide">
                    {amenity.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyStayWithUs;