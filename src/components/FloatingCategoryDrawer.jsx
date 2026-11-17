import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  CakeSlice,
  Coffee,
  CupSoda,
  Droplets,
  Flame,
  LayoutGrid,
  Pizza,
  Snowflake,
  Utensils,
  X,
} from "lucide-react";

const CATEGORY_ICONS = {
  "espresso-leche": Coffee,
  "espresso-sin-leche": Flame,
  filtrados: Droplets,
  "otras-bebidas": CupSoda,
  "bebidas-frias": Snowflake,
  postres: CakeSlice,
  pizzas: Pizza,
  sandwich: Utensils,
};

export function FloatingCategoryDrawer({
  categories,
  activeCategory,
  onSelectCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  const totalProducts = categories.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );
  const activeObj = categories.find((cat) => cat.id === activeCategory);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBtn(window.scrollY > window.innerHeight * 0.65);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25 },
      );
      gsap.fromTo(
        drawerRef.current,
        { y: "100%", opacity: 0.7 },
        { y: "0%", opacity: 1, duration: 0.42, ease: "power4.out" },
      );
      gsap.fromTo(
        ".drawer-option",
        { opacity: 0, x: -12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.03,
          delay: 0.1,
          ease: "power2.out",
        },
      );
    });

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [isOpen]);

  const closeWithAnimation = (callback) => {
    if (!drawerRef.current || !backdropRef.current) {
      setIsOpen(false);
      callback?.();
      return;
    }

    gsap.to(backdropRef.current, { opacity: 0, duration: 0.2 });
    gsap.to(drawerRef.current, {
      y: "100%",
      duration: 0.28,
      ease: "power3.in",
      onComplete: () => {
        setIsOpen(false);
        callback?.();
      },
    });
  };

  return (
    <>
      {/* Botón flotante en zona del pulgar */}
      <div
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          showFloatingBtn && !isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#161410]/95 backdrop-blur-md border border-[#D4AF37]/70 text-[#F4EFE6] shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] active:scale-95 transition-all cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
            Categorías
          </span>
          <span className="text-xs text-[#A39A8A] border-l border-[#333] pl-3 max-w-[140px] truncate">
            {activeCategory === "all" ? "Todo el Menú" : activeObj?.title}
          </span>
        </button>
      </div>

      {/* Bottom Sheet Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          <div
            ref={backdropRef}
            onClick={() => closeWithAnimation()}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div
            ref={drawerRef}
            className="relative z-10 w-full max-w-lg bg-[#121212] border-t md:border border-[#2e2a20] rounded-t-3xl md:rounded-3xl p-6 pb-8 max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <div className="w-12 h-1.5 bg-[#333] rounded-full mx-auto mb-5 md:hidden" />

            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
                  Navegación Rápida
                </p>
                <h3 className="font-serif text-xl text-[#F4EFE6]">
                  Elige una categoría
                </h3>
              </div>

              <button
                onClick={() => closeWithAnimation()}
                className="w-9 h-9 rounded-full bg-[#1e1e1e] border border-[#333] flex items-center justify-center text-[#A39A8A] hover:text-[#F4EFE6] cursor-pointer"
                aria-label="Cerrar menú de categorías"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() =>
                  closeWithAnimation(() => onSelectCategory("all", true))
                }
                className={`drawer-option w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-[#D4AF37] text-[#0d0d0d] border-[#D4AF37] font-bold"
                    : "bg-[#181818] text-[#F4EFE6] border-[#292929] hover:border-[#D4AF37]/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <LayoutGrid className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-sm font-semibold">
                      Ver Toda la Carta
                    </div>
                    <div
                      className={`text-xs ${
                        activeCategory === "all"
                          ? "text-[#0d0d0d]/80"
                          : "text-[#888]"
                      }`}
                    >
                      Mostrar todas las secciones juntas
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-black/15">
                  {totalProducts}
                </span>
              </button>

              {categories.map((cat) => {
                const IconComponent = CATEGORY_ICONS[cat.id] || Coffee;
                const isSelected = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() =>
                      closeWithAnimation(() => onSelectCategory(cat.id, true))
                    }
                    className={`drawer-option w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#221c10] border-[#D4AF37] text-[#F4EFE6]"
                        : "bg-[#171717] border-[#262626] text-[#F4EFE6] hover:border-[#D4AF37]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isSelected
                            ? "bg-[#D4AF37] text-[#0d0d0d]"
                            : "bg-[#222] text-[#D4AF37]"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold flex items-center gap-2">
                          <span>{cat.title}</span>
                          <span className="text-[11px] text-[#D4AF37] font-normal">
                            • {cat.subtitle}
                          </span>
                        </div>
                        <div className="text-xs text-[#888]">
                          {cat.shortDesc}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs text-[#A39A8A] bg-[#222] px-2.5 py-1 rounded-full">
                      {cat.items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
