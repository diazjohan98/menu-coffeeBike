import React from "react";

export function SplashScreen({ splashState }) {
  if (splashState === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d0d] transition-opacity duration-[800ms] ${
        splashState === "zooming"
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center ${
          splashState === "zooming" ? "animate-splash-zoom" : ""
        }`}
      >
        <div className="relative flex items-center justify-center w-36 h-36 rounded-full border-2 border-[#D4AF37] overflow-hidden bg-[#0d0d0d] shadow-[0_0_50px_rgba(212,175,55,0.3)]">
          <img
            src="/logo-coffe-bike1.png"
            alt="A Gramo Coffee Bike Logo"
            className="w-full h-full object-cover scale-[1.04]"
          />
        </div>
      </div>
    </div>
  );
}
