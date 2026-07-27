import React from 'react';

import img1 from '../assets/places-img/1.png';
import img2 from '../assets/places-img/2.png';
import img3 from '../assets/places-img/3.png';
import img4 from '../assets/places-img/4.png';
import img5 from '../assets/places-img/5.png';
import img6 from '../assets/places-img/6.png';

const placesData = [
  {
    id: '01',
    name: 'Udawalawe National Park',
    subtitle: 'Wildlife & Safari',
    description:
      'Home to over 500 wild Asian elephants, vast grasslands, and pristine lakes. A premier game drive experience.',
    distance: '5 KM',
    bestTime: '06:00 AM',
    tag: 'Must Visit',
    image: img1,
  },
  {
    id: '02',
    name: 'Elephant Transit Home',
    subtitle: 'Conservation Centre',
    description:
      'A sanctuary caring for orphaned elephant calves. Visitors can watch public feeding sessions throughout the day.',
    distance: '3 KM',
    bestTime: '12:00 PM',
    tag: 'Sanctuary',
    image: img2,
  },
  {
    id: '03',
    name: 'Udawalawe Reservoir',
    subtitle: 'Scenic Sunset Point',
    description:
      'Expansive water reservoir offering panoramic views of the sunset against the Sabaragamuwa mountain range.',
    distance: '2 KM',
    bestTime: '05:30 PM',
    tag: 'Nature',
    image: img3,
  },
  {
    id: '04',
    name: 'Sankapala Temple',
    subtitle: 'Heritage & History',
    description:
      'Ancient rock cave monastery dating back to King Dutugemunu, featuring historic inscriptions and calm surroundings.',
    distance: '18 KM',
    bestTime: '08:00 AM',
    tag: 'History',
    image: img4,
  },
  {
    id: '05',
    name: 'Madunagala Hot Springs',
    subtitle: 'Natural Thermal Baths',
    description:
      'Natural geothermal hot springs surrounded by peaceful woodland, known for therapeutic warm bath basins.',
    distance: '28 KM',
    bestTime: '07:00 AM',
    tag: 'Wellness',
    image: img5,
  },
  {
    id: '06',
    name: 'Chandrika Lake',
    subtitle: 'Relaxation & Views',
    description:
      'A peaceful inland water body surrounded by lush greenery, perfect for relaxed evening walks and photography.',
    distance: '12 KM',
    bestTime: '04:30 PM',
    tag: 'Leisure',
    image: img6,
  },
];

export default function Places() {
  return (
    <section className="bg-white text-slate-900 py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Center Section Title */}
        <div className="w-full text-center mb-20">
          <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
            Discover Around Udawalawe
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            Handpicked natural landmarks, historical sites, and wildlife destinations located near Nilwadula.
          </p>
        </div>

        {/* Unique Light-Theme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placesData.map((place) => (
            <div
              key={place.id}
              className="group relative bg-slate-50/50 rounded-3xl p-4 border border-slate-200/80 hover:border-green-500/40 hover:bg-white shadow-xl  transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Floating Overlays */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-200">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

                  {/* Top Floating Tag */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-slate-900 shadow-sm">
                    {place.tag}
                  </div>

                  

                  {/* Subtitle Overlay */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium tracking-wide">
                    {place.subtitle}
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-6 px-2 pb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {place.description}
                  </p>
                </div>
              </div>

              {/* Bottom Info Pill Container */}
              <div className="pt-4 px-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500">
                <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{place.distance} Away</span>
                </div>

                <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Best {place.bestTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}