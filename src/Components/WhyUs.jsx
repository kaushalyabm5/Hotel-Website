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
    <section className="pt-17 pb-20 px-4 max-w-7xl mx-auto bg-white font-sans">
      {/* Top Center Section Title (Original Style Restored) */}
      <div className="w-full text-center mb-16 md:mb-20">
        <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
          Why Stay With Us
        </h3>
        <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
          Experience hospitality beyond accommodation.
        </p>
      </div>

      {/* Bento Grid Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className={`group relative h-[380px] rounded-2xl overflow-hidden shadow-sm bg-white border border-neutral-100 flex flex-col justify-end transition-all duration-300 hover:shadow-xl ${feature.gridClass}`}
            >
              {/* Image Layer Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={feature.imgUrl}
                  alt={feature.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/40 to-transparent" />
              </div>

              {/* Text & Content Layer */}
              <div className="relative z-10 p-6 md:p-8">
                {/* Icon Circle */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-600 text-white shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <IconComponent className="w-6 h-6 stroke-[1.75]" />
                </div>

                {/* Typography */}
                <h3 className="text-xl md:text-2xl font-medium mb-2 text-white font-serif">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-200 font-light leading-relaxed max-w-md opacity-90 group-hover:opacity-100 transition-opacity">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;