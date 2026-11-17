import React from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection({ isMounted, onExploreClick }) {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
      <div
        className={`mb-8 text-xs font-semibold tracking-[0.28em] text-[#D4AF37] uppercase transition-all duration-1000 ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Grano a Grano • Repostería • Horno
      </div>

      {/* LOGO REAL FLOTANTE */}
      <div
        className={`relative flex items-center justify-center w-36 h-36 md:w-40 md:h-40 mb-6 rounded-full bg-[#0d0d0d] shadow-[0_0_45px_rgba(212,175,55,0.2)] border-2 border-[#D4AF37]/70 animate-float overflow-hidden transition-all duration-1000 delay-[300ms] ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img
          src="/logo-coffe-bike1.png"
          alt="Coffee Bike"
          className="w-full h-full object-cover scale-[1.04]"
        />
      </div>

      <h1
        className={`mb-3 font-['Poppins',sans-serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F4EFE6] via-[#fff] to-[#dcd2be] drop-shadow-sm uppercase transition-all duration-1000 delay-[500ms] ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        COFFEE BIKE
      </h1>

      <div
        className={`flex items-center space-x-3 md:space-x-4 mb-16 transition-all duration-1000 delay-[700ms] ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-10 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
        <p className="font-['Poppins',sans-serif] text-xs sm:text-sm md:text-base font-normal tracking-[0.22em] text-[#D4AF37] uppercase">
          Café de Especialidad
        </p>
        <div className="w-10 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
      </div>

      <button
        onClick={onExploreClick}
        className={`absolute bottom-12 p-3 rounded-full hover:bg-white/5 flex flex-col items-center gap-2 cursor-pointer group animate-bounce-small transition-all duration-1000 delay-[900ms] ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        aria-label="Ver el menú"
      >
        <span className="text-[10px] font-medium tracking-[0.22em] text-[#A39A8A] group-hover:text-[#D4AF37] transition-colors">
          VER CARTA
        </span>
        <ChevronDown className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
      </button>
    </section>
  );
}
