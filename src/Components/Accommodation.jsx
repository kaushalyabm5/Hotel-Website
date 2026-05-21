import React from "react";
import { Users } from "lucide-react";

const Accommodation = () => {
  // Dynamic room configurations array mapping directly to your fields
  const accommodationsData = [
    {
      id: "deluxe-suite",
      room_image_source: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      room_name_string: "Deluxe Ocean Suite",
      room_short_description: "Immerse yourself in complete tranquility with expansive floor-to-ceiling vistas of the horizon.",
      guest_capacity_count: 2,
      price_parameter: 350,
    },
    {
      id: "executive-villa",
      room_image_source: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      room_name_string: "Executive Sanctuary Villa",
      room_short_description: "A private, architectural haven offering unparalleled seclusion, standalone pool, and bespoke luxury services.",
      guest_capacity_count: 4,
      price_parameter: 620,
    },
    {
      id: "signature-room",
      room_image_source: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      room_name_string: "Signature Heritage Room",
      room_short_description: "A refined blend of mid-century minimalist aesthetics and state-of-the-art modern home automation systems.",
      guest_capacity_count: 2,
      price_parameter: 240,
    },
  ];

  return (
    <section id="accommodation" className="scroll-mt-10 pt-16 pb-16 px-4 max-w-7xl mx-auto bg-white">
      {/* Top Center Main Header and Subheadline */}
      {/* Top Center Section Title */}
      <div className="w-full text-center mb-16 md:mb-20">
          
          <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
          Our Accommodation
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
            Find the perfect stay designed for comfort and relaxation.
          </p>

        </div>

      {/* Responsive Grid Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {accommodationsData.map((room) => (
          <div 
            key={room.id} 
            className="flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            {/* Room Image Container */}
            <div className="relative h-[240px] w-full overflow-hidden bg-gray-100 group">
              <img
                src={room.room_image_source}
                alt={room.room_name_string}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div 
                className="absolute top-4 right-4 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-900 shadow-sm rounded-full"
              >
                ${room.price_parameter} <span className="text-[10px] text-gray-400 font-normal">/ Night</span>
              </div>
            </div>

            {/* Room Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Title and Capacity row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
                    {room.room_name_string}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 shrink-0 rounded-full">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <span>{room.guest_capacity_count} Guests</span>
                  </div>
                </div>

                {/* Short Capped Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {room.room_short_description}
                </p>
              </div>

              {/* Interactive Action Array Button Element System */}
              <div className="mt-auto">
            
                <a
                  href="https://www.booking.com/"
                  style={{ backgroundColor: "var(--primary-color)" }}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center text-xs font-bold uppercase tracking-wider text-white py-3 transition-opacity duration-200 hover:opacity-90 text-center rounded-full"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accommodation;