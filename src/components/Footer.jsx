import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-[#222] bg-[#080808] py-16">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-8 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-[#D4AF37]/60 overflow-hidden mb-4 bg-[#0d0d0d] shadow-[0_0_25px_rgba(212,175,55,0.18)]">
            <img
              src="/logo-coffe-bike.png"
              alt="Coffee Bike Footer"
              className="w-full h-full object-cover scale-[1.04]"
            />
          </div>
          <h4 className="font-['Poppins',sans-serif] font-extrabold text-2xl text-[#F4EFE6] tracking-wide uppercase">
            COFFEE BIKE
          </h4>
          <p className="text-[#D4AF37] font-normal tracking-[0.25em] text-xs mt-2 uppercase">
            Café de Especialidad • Grano a Grano
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="mb-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2a2a2a] bg-[#121212] text-xs tracking-widest uppercase text-[#A39A8A] hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all duration-300 cursor-pointer"
        >
          <span>Volver arriba</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        <div className="text-[10px] text-[#444] tracking-widest uppercase">
          © {new Date().getFullYear()} Coffee Bike • Café de Especialidad. Todos
          los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
