import React from 'react';
// Import required icons from lucide-react
import { 
  Waves, Utensils, TreePine, Wifi, Car, 
  Compass as SafariIcon, MapPin, Coffee, CheckCircle2
} from 'lucide-react';

// Import images from src/assets/hero-img
import img1 from '../assets/hero-img/1.png';
import img2 from '../assets/hero-img/2.png';
import img3 from '../assets/food-img/1.png';
import img4 from '../assets/galleryImg/3.png';

const Facilities = () => {
  // Main showcase facilities with background images and helpful status details
  const mainFacilities = [
    {
      id: 1,
      title: "Outdoor Swimming Pool",
      description: "Relax and unwind in our refreshing swimming pool surrounded by lush greenery.",
      tag: "Wellness",
      status: "Open 7:00 AM - 7:00 PM",
      icon: Waves,
      bgImage: img1
    },
    {
      id: 2,
      title: "Riverside Relaxation",
      description: "Enjoy peaceful moments by the Walawe River, perfect for reading, photography, or simply listening to the sounds of nature.",
      tag: "Nature",
      status: "Accessible 24/7",
      icon: TreePine,
      bgImage: img2
    },
    {
      id: 3,
      title: "Authentic Restaurant",
      description: "Enjoy authentic home-style Sri Lankan cuisine alongside a selection of international favourites prepared with fresh local ingredients.",
      tag: "Dining",
      status: "Daily Buffet & A La Carte",
      icon: Utensils,
      bgImage: img3
    },
    {
      id: 4,
      title: "Safari Experiences",
      description: "Discover elephants, birds, and other incredible wildlife with professionally arranged safari tours to Udawalawe National Park.",
      tag: "Adventure",
      status: "Morning & Evening Tours",
      icon: SafariIcon,
      bgImage: img4
    }
  ];

  // Essential convenience facilities grouped neatly at the bottom
  const additionalFacilities = [
    { text: "Outdoor & Open-Air Dining", icon: Coffee, desc: "Enjoy breakfast or dinner surrounded by nature." },
    { text: "Free High-Speed Wi-Fi", icon: Wifi, desc: "Stay connected throughout your entire visit." },
    { text: "Secure Free Parking", icon: Car, desc: "Convenient and secure parking space for all guests." },
    { text: "Transport & Airport Transfers", icon: MapPin, desc: "Taxi services and local transport arranged upon request." }
  ];

  // Precise premium deep ambient shadow values matching your cards
  const cardShadow = {
    boxShadow: "0 20px 40px -15px rgba(28, 25, 23, 0.3), 0 0 0 1px rgba(28, 25, 23, 0.02)"
  };

  return (
    <section id='services' className="bg-white text-stone-900 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Center Section Title */}
        <div className="w-full text-center mb-20">
          <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
            Our Facilities
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            Immerse yourself in exceptional convenience and natural luxury. From refreshing dips to wild safaris, every detail is tailored for your Udawalawe getaway.
          </p>
        </div>

        {/* Premium Core Facilities Grid with Background Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainFacilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div 
                key={facility.id} 
                className="group relative min-h-[320px] p-8 md:p-10 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5"
                style={cardShadow}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={facility.bgImage} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                  />
                  {/* Heavy dark gradient overlay targeting text area directly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/70 to-stone-900/20 transition-opacity duration-300 group-hover:via-stone-950/80" />
                </div>

                {/* Top Content Container */}
                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md text-green-500 flex items-center justify-center border border-white/20">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white font-semibold bg-green-500 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                      {facility.tag}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-2">
                    {facility.title}
                  </h4>
                  <p className="text-stone-200 text-xs md:text-sm leading-relaxed max-w-xl opacity-95 tracking-wide">
                    {facility.description}
                  </p>
                </div>

                {/* Bottom Informational Badge (Meaningful but non-interactive) */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500" strokeWidth={2} />
                    <span className="text-xs font-medium tracking-wide">
                      {facility.status}
                    </span>
                  </div>
                  
                </div>

              </div>
            );
          })}
        </div>

        {/* Secondary Services Bento-Style Footer Panel */}
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-stone-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4">
              <div className="inline-flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <span>Guest Conveniences</span>
              </div>
              <h3 className="text-3xl font-light tracking-tight text-neutral-900">
                Thoughtful <br />
                <span className="font-semibold text-green-500">Stay Additions</span>
              </h3>
              <p className="text-stone-600 text-sm mt-4 leading-relaxed">
                We take care of the essentials so you can seamlessly dive into your wilderness retreat without friction.
              </p>
            </div>
            
            {/* Essential Utilities Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalFacilities.map((item, idx) => {
                const MiniIcon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex items-start space-x-4 p-5 bg-white rounded-xl border border-stone-200/60 transition-all duration-300 hover:border-emerald-200"
                    style={cardShadow}
                  >
                    <div className="w-10 h-10 rounded-lg bg-stone-50 text-stone-700 flex items-center justify-center flex-shrink-0 border border-stone-100">
                      <MiniIcon className="w-5 h-5 text-green-500" strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="text-stone-900 text-sm font-semibold tracking-wide block">
                        {item.text}
                      </span>
                      <span className="text-stone-500 text-xs mt-0.5 block leading-normal">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;