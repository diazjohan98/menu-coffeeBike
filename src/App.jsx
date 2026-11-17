import React from "react";
import { useSplashScreen } from "./hooks/useSplashScreen";
import { SplashScreen } from "./components/SplashScreen";
import { BackgroundBike } from "./components/BackgroundBike";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { Footer } from "./components/Footer";

export default function App() {
  const { splashState, isMounted } = useSplashScreen(1200, 2000);

  const handleScrollToMenu = () => {
    const menuEl = document.getElementById("menu-section");
    menuEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#F4EFE6] font-sans selection:bg-[#D4AF37] selection:text-[#0d0d0d] overflow-x-hidden">
      <SplashScreen splashState={splashState} />

      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2a2012]/40 via-[#0d0d0d] to-[#0d0d0d]" />

      <BackgroundBike />

      <main>
        <HeroSection
          isMounted={isMounted}
          onScrollToMenu={handleScrollToMenu}
        />
        <MenuSection isReady={isMounted} />
      </main>

      <Footer />
    </div>
  );
}
