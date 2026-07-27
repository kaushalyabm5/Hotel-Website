import React from 'react';
import logo from '../assets/loading-img/logo1.webp';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden select-none">
      
      {/* Inline Keyframes for Logo & Loading Bar Animations */}
      <style>{`
        @keyframes loadingProgress {
          0% {
            left: -40%;
            width: 30%;
          }
          50% {
            width: 60%;
          }
          100% {
            left: 100%;
            width: 30%;
          }
        }

        @keyframes logoShimmer {
          0% {
            transform: translateX(-150%) skewX(-20deg);
          }
          100% {
            transform: translateX(250%) skewX(-20deg);
          }
        }

        .animate-loading-bar {
          position: absolute;
          height: 100%;
          background-color: #171717;
          animation: loadingProgress 1.6s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-logo-shimmer {
          animation: logoShimmer 2.5s infinite ease-in-out;
        }
      `}</style>

      {/* Soft Ambient Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-neutral-100 blur-3xl opacity-60 animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Big WebP Logo with Pulse + Light Sweep Overlay */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center overflow-hidden animate-pulse">
          <img
            src={logo}
            alt="Hotel Logo"
            className="w-full h-full object-contain"
          />
          
          {/* Subtle Light Sweep Across Logo */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-logo-shimmer" />
          </div>
        </div>

        {/* Indeterminate Loading Bar */}
        <div className="mt-8 w-32 md:w-40 h-[2px] bg-neutral-100 overflow-hidden relative">
          <div className="animate-loading-bar" />
        </div>

      </div>

    </div>
  );
}