import React from "react";
import { Trees, BedDouble, HeartHandshake, MapPin } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      title: "Peaceful Environment",
      description: "Surrounded by nature and relaxing landscapes.",
      icon: Trees,
      imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      alt: "Peaceful nature environment",
      gridClass: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "Comfortable Accommodation",
      description: "Well-designed rooms with modern amenities.",
      icon: BedDouble,
      imgUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      alt: "Comfortable hotel room accommodation",
      gridClass: "md:col-span-1 lg:col-span-2",
    },
    {
      title: "Exceptional Hospitality",
      description: "Friendly and personalized guest experiences.",
      icon: HeartHandshake,
      imgUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      alt: "Personalized hospitality guest experience",
      gridClass: "md:col-span-1 lg:col-span-2",
    },
    {
      title: "Prime Location",
      description: "Easy access to attractions and transport.",
      icon: MapPin,
      imgUrl: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800&q=80",
      alt: "Prime luxury hotel location view",
      gridClass: "md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section id="why-us" className="w-full bg-[#FAF9F5] text-neutral-900 pt-24 pb-32 px-4 sm:px-8 md:px-16 lg:px-24 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Centered Header - Perfectly matching your Amenities section style */}
        <div className="w-full flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-neutral-400 mb-4">
            03 // THE DWELLING STANDARD
          </span>
          <h3 
            className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-neutral-950 uppercase font-serif mb-6"
            style={{ fontFamily: "'Cinzel', 'Didot', serif" }}
          >
            Why Stay <span className="italic font-normal text-neutral-600">With Us</span>
          </h3>
          <p className="text-neutral-500 text-xs sm:text-sm font-light max-w-xl leading-relaxed tracking-wide px-4">
            Experience hospitality beyond accommodation.
          </p>
        </div>

        {/* Premium Bento Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative h-[400px] rounded-2xl overflow-hidden bg-neutral-950 flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-950/10 ${feature.gridClass}`}
              >
                {/* Immersive Image Layer Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={feature.imgUrl}
                    alt={feature.alt}
                    className="w-full h-full object-cover opacity-40 transition-all duration-700 ease-out scale-100 group-hover:scale-105 group-hover:opacity-30"
                  />
                  {/* Luxury Ambient Deep Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/60" />
                </div>

                {/* Top Interactive Row: Clean Icon Container */}
                <div className="relative z-10 w-full flex justify-between items-start">
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-neutral-950">
                    <IconComponent className="w-4 h-4 text-white transition-colors duration-500 group-hover:text-neutral-950 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-white/30 group-hover:text-white/60 transition-colors duration-300">
                    [ 0{index + 1} ]
                  </span>
                </div>

                {/* Bottom Informational Block */}
                <div className="relative z-10 w-full flex flex-col items-start mt-auto">
                  <h4 className="text-lg sm:text-xl font-serif tracking-wide text-white mb-2 uppercase">
                    {feature.title}
                  </h4>
                  <p className="text-white/70 text-xs sm:text-[13px] font-light leading-relaxed tracking-wide max-w-sm transition-colors duration-300 group-hover:text-white">
                    {feature.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;