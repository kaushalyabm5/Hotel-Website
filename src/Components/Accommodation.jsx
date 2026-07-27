import React, { useState } from 'react';
// Import required icons from lucide-react
import { 
  Wind, BedDouble, Bath, Wifi, Tv, Coffee, 
  Sparkles, Sparkle, Palmtree, ArrowRight,
  ChevronLeft, ChevronRight 
} from 'lucide-react';

// Import main images (PNG) from src/assets/rooms-img
import img2 from '../assets/rooms-img/2.png';
import img3 from '../assets/rooms-img/3.png';

// Import Double Room images (WEBP)
import d1 from '../assets/rooms-img/d-1.png';
import d2 from '../assets/rooms-img/d-2.webp';
import d3 from '../assets/rooms-img/d-3.webp';

// Import Triple Room images (WEBP)
import t1 from '../assets/rooms-img/t-1.webp';
import t2 from '../assets/rooms-img/t-2.webp';
import t3 from '../assets/rooms-img/t-3.webp';
import t4 from '../assets/rooms-img/t-4.webp';
import t5 from '../assets/rooms-img/t-5.webp';
import t6 from '../assets/rooms-img/t-6.webp';

// Import Family Room images (WEBP)
import f1 from '../assets/rooms-img/f-1.webp';
import f2 from '../assets/rooms-img/f-2.webp';
import f3 from '../assets/rooms-img/f-3.webp';
import f4 from '../assets/rooms-img/f-4.webp';
import f5 from '../assets/rooms-img/f-5.webp';
import f6 from '../assets/rooms-img/f-6.webp';

const Accommodation = () => {
  // WhatsApp Configuration
  const WHATSAPP_PHONE = '94762002755'; // Formatted without '+' or spaces for wa.me link

  // Function to generate pre-filled WhatsApp URL
  const getWhatsAppLink = (room) => {
    const message = `Hello! I would like to book a room.\n\n` +
      `*Room Type:* ${room.type}\n` +
      `*View:* ${room.view}\n` +
      `*Bedding:* ${room.bedding}\n\n` +
      `Please let me know the availability and pricing. Thank you!`;

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

  const rooms = [
    {
      id: 0,
      images: [d1, d2, d3],
      type: "Deluxe Double Room",
      view: "River View",
      bedding: "1 King size double bed",
      description: "Perfect for couples seeking a serene escape with soothing views of the flowing river."
    },
    {
      id: 1,
      images: [img2, t1, t2, t3, t4, t5, t6],
      type: "Deluxe Triple Room",
      view: "Pool View",
      bedding: "1 Single bed & 1 Double bed",
      description: "Spacious and comfortable, offering direct visual connection to our sparkling pool."
    },
    {
      id: 2,
      images: [img3, f1, f2, f3, f4, f5, f6],
      type: "Deluxe Family Room",
      view: "Pool View",
      bedding: "2 Double beds",
      description: "Designed for families to bond and unwind together in absolute comfort."
    }
  ];

  // Track current image index for each room card independently
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    0: 0,
    1: 0,
    2: 0
  });

  const nextImage = (roomId, totalImages) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % totalImages
    }));
  };

  const prevImage = (roomId, totalImages) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [roomId]: (prev[roomId] - 1 + totalImages) % totalImages
    }));
  };

  // Features mapped to beautiful modern icons
  const features = [
    { text: "Air Conditioning", icon: Wind },
    { text: "Comfortable Beds", icon: BedDouble },
    { text: "Private Hot Water Bath", icon: Bath },
    { text: "Free High-Speed Wi-Fi", icon: Wifi },
    { text: "Smart TV", icon: Tv },
    { text: "Tea & Coffee Facilities", icon: Coffee },
    { text: "Complimentary Toiletries", icon: Sparkles },
    { text: "Daily Housekeeping", icon: Sparkle },
    { text: "Garden & Nature Views", icon: Palmtree }
  ];

  return (
    <section id='accommodation' className="bg-white text-stone-900 py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Center Section Title */}
        <div className="w-full text-center mb-12 md:mb-20">
          <h3 className="text-3xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
            Our Accommodation
          </h3>
          <p className="text-neutral-500 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Designed for rest and relaxation, our rooms provide a peaceful retreat after a day exploring Udawalawe. Wake up to fresh air, scenic garden views, and the gentle sounds of the nearby river.
          </p>
        </div>

        {/* Room Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24">
          {rooms.map((room) => {
            const currentIdx = activeImageIndexes[room.id];
            return (
              <div 
                key={room.id} 
                className="group bg-stone-50 overflow-hidden rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2"
                style={{
                  boxShadow: "0 20px 40px -15px rgba(28, 25, 23, 0.4), 0 0 0 1px rgba(28, 25, 23, 0.02)"
                }}
              >
                {/* Image Container / Custom Slider */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <img 
                    src={room.images[currentIdx]} 
                    alt={`${room.type} view ${currentIdx + 1}`} 
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  
                  {/* View Tag Label */}
                  <div className="absolute top-4 left-4 z-10 bg-green-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1.5 font-semibold rounded-full shadow-sm">
                    {room.view}
                  </div>

                  {/* Left / Right Carousel Buttons */}
                  <div className="absolute inset-0 flex items-center justify-between px-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => prevImage(room.id, room.images.length)}
                      className="p-1.5 cursor-pointer bg-white/80 hover:bg-white text-stone-900 shadow-md transition-colors backdrop-blur-sm rounded-full"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => nextImage(room.id, room.images.length)}
                      className="p-1.5 cursor-pointer bg-white/80 hover:bg-white text-stone-900 shadow-md transition-colors backdrop-blur-sm rounded-full"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Tiny Pagination Dots Indicator */}
                  <div className="absolute bottom-3 right-3 bg-stone-900/60 text-white text-[10px] px-2 py-0.5 backdrop-blur-xs font-mono rounded-md">
                    {currentIdx + 1} / {room.images.length}
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium uppercase tracking-tight text-stone-900 mb-1">
                      {room.type}
                    </h3>
                    <p className="text-xs tracking-wide text-green-600 font-semibold mb-4">
                      {room.bedding}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {room.description}
                    </p>
                  </div>
                  
                  {/* Action Booking Link - Redirects to WhatsApp */}
                  <div className="pt-4 border-t border-stone-100">
                    <a 
                      href={getWhatsAppLink(room)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-500 rounded-full shadow-sm"
                    >
                      <span>Book This Room</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Features Section */}
        <div className="bg-white shadow-2xl p-6 sm:p-8 md:p-12 border border-stone-100/80 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4">
              <div className="inline-flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <span>Included with stay</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900">
                Premium <br className="hidden lg:block" />
                <span className="font-semibold text-green-500">In-Room Amenities</span>
              </h3>
              <p className="text-stone-600 text-sm mt-4 leading-relaxed">
                Thoughtfully curated essentials to ensure your wilderness stay demands zero compromises on comfort.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex items-center space-x-4 p-4 bg-white border border-stone-200/60 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md rounded-xl"
                  >
                    <div className="w-10 h-10 bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <IconComponent className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-stone-800 text-sm font-medium tracking-wide">
                      {feature.text}
                    </span>
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

export default Accommodation;