import React from "react";
import { motion } from "motion/react";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  glowColor?: string;
  imageSrc?: string;
  darkImageSrc?: string;
  alt?: string;
  darkMode?: boolean;
}

export default function PhoneMockup({
  children,
  className = "",
  glowColor = "rgba(26, 43, 76, 0.15)",
  imageSrc,
  darkImageSrc,
  alt,
  darkMode = false,
}: PhoneMockupProps) {
  const currentImageSrc = darkMode && darkImageSrc ? darkImageSrc : imageSrc;

  return (
    <div
      className={`relative mx-auto w-full select-none ${className}`}
      style={{ maxWidth: "305px" }}
    >
   
      
      {/* Outer Border (Obsidian Frame) */}
      <div className="relative aspect-[9/19.2] w-full rounded-[48px] bg-[#1C1D21] p-2.5 -2xl ring-1 ring-white/10 ring-inset">
        {/* Inner Screen Edge Bezel */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#0E0F12] shadow-inner ring-1 ring-black/80">
          
          {/* Wallpaper Subtle Gradient (Islamic Premium Deep Navy) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1626] via-[#152039] to-[#0A0D14]" />

          {/* iPhone 15 Pro Max style Dynamic Island (Notch) with LTR direction for correct camera/sensor placement */}
          <div dir="ltr" className="absolute top-2.5 left-1/2 h-[25px] w-[88px] -translate-x-1/2 rounded-[11px] bg-black z-40 flex items-center justify-end pr-3.5 pointer-events-none 
          //shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.02),0_1.5px_3.5px_rgba(0,0,0,0.6),0_0_1px_rgba(0,0,0,0.8)] border border-white/[0.005]">
            {/* Right side: Front-facing Camera Lens - Crafted to blend seamlessly with the black island (visible only under extreme focus) */}
            <div className="relative w-2.5 h-2.5 rounded-full bg-[#010102] flex items-center justify-center">
              {/* Faint lens reflection - extremely soft and dark */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#101420]/02 flex items-center justify-center">
                {/* Tiny deep dark-blue center-core, barely detectable */}
                <div className="w-1 h-1 rounded-full bg-[#1C2232]/02 flex items-center justify-center" />
              </div>
              {/* Ultra subtle reflection sheen - almost invisible to fit premium styling */}
              <div className="absolute top-[1.5px] right-[1.5px] w-[0.75px] h-[0.75px] rounded-full bg-white/2" />
            </div>
          </div>

          {/* Status Bar */}
          <div dir="ltr" className="hidden absolute top-0 inset-x-0 h-10 px-4.5 sm:px-5 flex items-center justify-between pointer-events-none z-30 select-none text-[10px] sm:text-[11px] font-medium text-white/95 tracking-tight font-sans">
            {/* Time */}
            <span className="font-semibold select-none leading-none">٩:٤١</span>

            {/* Icons */}
            <div className="flex items-center gap-1.5">
              {/* Cellular Signal Strength */}
              <svg className="w-4 h-3 text-white fill-current" viewBox="0 0 16 12">
                <rect x="0" y="8" width="2" height="4" rx="0.5" />
                <rect x="3" y="6" width="2" height="6" rx="0.5" />
                <rect x="6" y="4" width="2" height="8" rx="0.5" />
                <rect x="9" y="1" width="2" height="11" rx="0.5" className="opacity-95" />
                <rect x="12" y="0" width="2" height="12" rx="0.5" className="opacity-30" />
              </svg>

              {/* Wifi Icon */}
              <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 16 16">
                <path d="M15.3 4.3a1 1 0 0 0-1.4 0 10 10 0 0 0-11.8 0 1 1 0 0 0-1.4 1.4A12 12 0 0 1 15.3 5.7a1 1 0 0 0 0-1.4zm-2.8 2.8a1 1 0 0 0-1.4 0 6 6 0 0 0-6.2 0 1 1 0 0 0-1.4 1.4 8 8 0 0 1 9 0 1 1 0 0 0 0-1.4zm-2.8 2.8a1 1 0 0 0-1.4 0 2 2 0 0 0-2.6 0 1 1 0 0 0-1.4 1.4 4 4 0 0 1 5.4 0 1 1 0 0 0 0-1.4zm-1.4 2.8a1 1 0 1 0-1.4 0 1 1 0 0 0 1.4 0z" />
              </svg>

              {/* Battery */}
              <div className="relative w-5.5 h-2.5 rounded-[4px] border border-white/60 p-[1px] flex items-center">
                <div className="h-full w-[80%] rounded-[2px] bg-white" />
                <div className="absolute -right-[3px] top-[2.5px] w-[2.5px] h-[4px] rounded-r-[1px] bg-white/60" />
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="relative h-full w-full overflow-hidden z-20">
            {currentImageSrc ? (
              <img
                src={currentImageSrc}
                alt={alt || "شاشة التطبيق"}
                className="w-full h-full object-cover select-none transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="relative h-full w-full pt-10 pb-7 flex flex-col justify-between">
                {children}
              </div>
            )}
          </div>

          {/* Glossy Screen Overlay Highlight */}
          <div className="absolute inset-0 pointer-events-none z-40 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] mix-blend-overlay" />
          {/* Glass glare line */}
          <div 
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rotate-[35deg] pointer-events-none z-[42]"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 100%)"
            }}
          />

          {/* Home Bar Indicator */}
          <div className="absolute bottom-1.5 left-1/2 h-1.5 w-32 -translate-x-1/2 rounded-full bg-white/40 z-40" />
        </div>
      </div>

      {/* Shadow Effect beneath phone */}
      <div className="absolute bottom-2 inset-x-10 h-6 bg-black/60 blur-lg rounded-full -z-10" />
    </div>
  );
}
