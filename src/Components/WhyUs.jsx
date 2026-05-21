import React from "react";
import { Trees, BedDouble, HeartHandshake, MapPin } from "lucide-react";

const WhyUs = () => {
  const cards = [
    {
      type: "image",
      imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      alt: "Peaceful nature environment",
    },
    {
      type: "text",
      title: "Peaceful Environment",
      description: "Surrounded by nature and relaxing landscapes.",
      icon: Trees,
      bgColor: "bg-emerald-200",
      textColor: "text-neutral-700",
      iconColor: "text-emerald-600",
    },
    {
      type: "image",
      imgUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      alt: "Comfortable hotel room accommodation",
    },
    {
      type: "text",
      title: "Comfortable Accommodation",
      description: "Well-designed rooms with modern amenities.",
      icon: BedDouble,
      bgColor: "bg-emerald-200", // Dark slate block from reference UI
      textColor: "text-neutral-700",
      iconColor: "text-emerald-600",
    },
    {
      type: "text",
      title: "Exceptional Hospitality",
      description: "Friendly and personalized guest experiences.",
      icon: HeartHandshake,
      bgColor: "bg-neutral-400", // Muted slate blue/gray block from reference UI
      textColor: "text-neutral-100",
      iconColor: "text-emerald-600",
    },
    {
      type: "image",
      imgUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      alt: "Personalized hospitality guest experience",
    },
    {
      type: "text",
      title: "Prime Location",
      description: "Easy access to attractions and transport.",
      icon: MapPin,
      bgColor: "bg-neutral-400",
      textColor: "text-neutral-100",
      iconColor: "text-emerald-600",
    },
    {
      type: "image",
      imgUrl: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800&q=80",
      alt: "Prime luxury hotel location view",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white font-sans">
     

      {/* Top Center Section Title */}
      <div className="w-full text-center mb-16 md:mb-20">
          
          <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
           Why Stay With Us
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
            Experience hospitality beyond accommodation.
          </p>

        </div>

      {/* Grid Structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {cards.map((card, index) => {
          if (card.type === "image") {
            return (
              <div
                key={index}
                className="relative h-[260px] md:h-[280px] lg:h-[300px] w-full rounded-3xl overflow-hidden group shadow-sm"
              >
                <img
                  src={card.imgUrl}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            );
          }

          // Dynamically instantiate the icon component
          const IconComponent = card.icon;

          return (
            <div
              key={index}
              className={`h-[260px] md:h-[280px] lg:h-[300px] p-8 rounded-3xl flex flex-col justify-start shadow-sm ${card.bgColor}`}
            >
              <div className="mb-5">
                <IconComponent className={`w-8 h-8 stroke-[1.5] ${card.iconColor}`} />
              </div>
              <div>
                <h3 className={`text-xl md:text-2xl font-semibold mb-3 leading-tight ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed opacity-85 ${card.textColor}`}>
                  {card.description}
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