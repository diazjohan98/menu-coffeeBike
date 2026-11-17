import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  BookOpen,
  CakeSlice,
  Coffee,
  CupSoda,
  Droplets,
  Flame,
  LayoutGrid,
  Pizza,
  Snowflake,
  Utensils,
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

export function CategorySelector({
  categories,
  activeCategory,
  onSelectCategory,
  isReady,
}) {
  const gridRef = useRef(null);
  const totalProducts = categories.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );
  const activeObj = categories.find((cat) => cat.id === activeCategory);

  useEffect(() => {
    if (!isReady || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current.querySelectorAll(".bento-card");
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                cards,
                { opacity: 0, y: 24, scale: 0.94 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.55,
                  stagger: 0.05,
                  ease: "back.out(1.4)",
                  clearProps: "transform",
                },
              );
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 },
      );

      observer.observe(gridRef.current);
      return () => observer.disconnect();
    }, gridRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <div ref={gridRef} className="mb-16">
      {/* Cabecera explicativa + Botón Ver Todo */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4 p-3.5 rounded-2xl bg-[#141414]/90 border border-[#262626]">
        <div className="flex items-center gap-3 px-1">
          <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#A39A8A]">
              Explorar Menú
            </p>
            <p className="text-sm font-medium text-[#F4EFE6]">
              {activeCategory === "all"
                ? `Mostrando las ${categories.length} categorías (${totalProducts} productos)`
                : `Filtrado por: ${activeObj?.title} (${activeObj?.subtitle})`}
            </p>
          </div>
        </div>

        <button
          onClick={() => onSelectCategory("all", false)}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shrink-0 ${
            activeCategory === "all"
              ? "bg-[#D4AF37] text-[#0d0d0d] shadow-[0_0_25px_rgba(212,175,55,0.28)]"
              : "bg-[#1f1f1f] text-[#F4EFE6] border border-[#333] hover:border-[#D4AF37]"
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Ver Todo ({totalProducts})</span>
        </button>
      </div>

      {/* Grid de 8 Categorías visibles sin scroll horizontal */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {categories.map((cat) => {
          const IconComponent = CATEGORY_ICONS[cat.id] || Coffee;
          const isSelected = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() =>
                onSelectCategory(isSelected ? "all" : cat.id, !isSelected)
              }
              className={`bento-card group relative text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer active:scale-[0.97] flex flex-col justify-between min-h-[124px] ${
                isSelected
                  ? "bg-gradient-to-br from-[#231d11] to-[#14120e] border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.18)]"
                  : "bg-[#131313]/90 border-[#242424] hover:border-[#D4AF37]/50 hover:bg-[#181714]"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isSelected
                      ? "bg-[#D4AF37] text-[#0d0d0d]"
                      : "bg-[#1d1d1d] text-[#D4AF37] group-hover:bg-[#D4AF37]/20"
                  }`}
                >
                  <IconComponent className="w-4 h-4" strokeWidth={1.8} />
                </div>

                <span
                  className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                      : "bg-[#1c1c1c] text-[#888] group-hover:text-[#bbb]"
                  }`}
                >
                  {cat.items.length} opc.
                </span>
              </div>

              <div>
                <h3
                  className={`font-serif text-sm md:text-base font-bold leading-tight transition-colors ${
                    isSelected
                      ? "text-[#D4AF37]"
                      : "text-[#F4EFE6] group-hover:text-[#D4AF37]"
                  }`}
                >
                  {cat.title}
                </h3>
                <p className="text-[11px] font-medium text-[#D4AF37]/80 uppercase tracking-wider mt-0.5">
                  {cat.subtitle}
                </p>
                <p className="text-[11px] text-[#777] font-light mt-1 line-clamp-1">
                  {cat.shortDesc}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
