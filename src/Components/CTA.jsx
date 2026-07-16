import React from 'react';
// Import required icon from lucide-react
import { CalendarDays } from 'lucide-react';

// Import the requested image from src/assets/hero-img
import bgImg from '../assets/hero-img/2.png';

const CTA = () => {
  // Precise premium deep ambient shadow values matching your project style
  const containerShadow = {
    boxShadow: "0 20px 40px -15px rgba(28, 25, 23, 0.15), 0 0 0 1px rgba(28, 25, 23, 0.03)"
  };

  return (
    <section className="bg-white text-stone-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Main CTA Box with rounded corners, background image, and deep shadow */}
        <div 
          className="relative rounded-3xl overflow-hidden min-h-[420px] md:min-h-[480px] flex items-center justify-center p-8 md:p-16 text-center"
          style={containerShadow}
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src={bgImg} 
              alt="Nilwadula Riverside Nature Escape" 
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for extreme readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/80 to-stone-950/90" />
          </div>

          {/* Content Container (Forced white for crisp reading on dark overlay) */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="inline-flex items-center space-x-2 bg-green-500 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
              <span>Plan Your Retreat</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 font-serif leading-tight">
              Stay Close to Nature. <br />
              <span className="font-normal italic text-stone-200">Stay at Nilwadula.</span>
            </h2>

            <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed mb-8 max-w-2xl opacity-95">
              Experience peaceful riverside living, refreshing poolside relaxation, unforgettable safari adventures, and warm Sri Lankan hospitality all in one destination. Book your stay today and discover the natural beauty.
            </p>

            {/* Interactive Premium Booking Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-green-500 text-stone-900 font-semibold text-sm tracking-wide rounded-xl shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2">
                <CalendarDays className="w-4 h-4 text-white" />
                <span>Book Your Stay Today</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;