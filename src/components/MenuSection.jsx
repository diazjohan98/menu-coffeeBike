import React, { useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { MENU_CATEGORIES } from "../data/menuData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CategorySelector } from "./CategorySelector";
import { FloatingCategoryDrawer } from "./FloatingCategoryDrawer";

export function MenuSection({ isReady }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filterAnimKey, setFilterAnimKey] = useState(0);
  const resultsRef = useRef(null);
  const menuContainerRef = useScrollReveal(
    isReady,
    `${activeCategory}-${filterAnimKey}`,
  );

  const handleSelectCategory = (categoryId, shouldScrollToResults = true) => {
    setActiveCategory(categoryId);
    setFilterAnimKey((prev) => prev + 1);

    if (shouldScrollToResults && resultsRef.current) {
      setTimeout(() => {
        const yOffset = -24;
        const y =
          resultsRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  };

  const filteredCategories =
    activeCategory === "all"
      ? MENU_CATEGORIES
      : MENU_CATEGORIES.filter((cat) => cat.id === activeCategory);

  const activeCategoryObj = MENU_CATEGORIES.find(
    (cat) => cat.id === activeCategory,
  );

  return (
    <section
      id="menu-section"
      ref={menuContainerRef}
      className="relative z-10 max-w-5xl mx-auto px-5 md:px-6 py-20 pb-36"
    >
      <div className="text-center mb-10">
        <span className="inline-block text-[11px] font-bold tracking-[0.28em] text-[#D4AF37] uppercase mb-3">
          ¿Qué se te antoja hoy?
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#F4EFE6] mb-3">
          Nuestra Carta
        </h2>
        <p className="text-[#A39A8A] font-light max-w-xl mx-auto text-sm md:text-base">
          Toca una categoría para ir directo a lo que buscas o explora toda la
          carta completa.
        </p>
      </div>

      {/* Selector Visual Interactivo (Bento Grid) */}
      <CategorySelector
        categories={MENU_CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        isReady={isReady}
      />

      {/* Resultados de Productos */}
      <div
        ref={resultsRef}
        key={filterAnimKey}
        className="space-y-20 scroll-mt-8"
      >
        {activeCategory !== "all" && (
          <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/30">
            <span className="text-xs uppercase tracking-widest text-[#A39A8A]">
              Mostrando solo:{" "}
              <strong className="text-[#D4AF37]">
                {activeCategoryObj?.title} ({activeCategoryObj?.subtitle})
              </strong>
            </span>
            <button
              onClick={() => handleSelectCategory("all", false)}
              className="text-xs text-[#D4AF37] underline underline-offset-4 hover:text-[#F4EFE6] cursor-pointer"
            >
              Mostrar todo el menú
            </button>
          </div>
        )}

        {filteredCategories.map((category) => (
          <div key={category.id} className="menu-section">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#333] pb-4 mb-8 reveal-item gap-2">
              <h3 className="text-xl md:text-2xl font-serif text-[#F4EFE6] uppercase tracking-widest">
                {category.title}
              </h3>
              {category.subtitle && (
                <span className="text-xs font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
                  {category.subtitle}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="group relative reveal-item">
                  {item.variants ? (
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h4 className="text-lg font-medium text-[#F4EFE6] group-hover:text-[#D4AF37] transition-colors duration-300">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          {item.variants.map((variant, vIdx) => (
                            <span
                              key={vIdx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#181818] border border-[#2f2f2f] text-xs"
                            >
                              <span className="text-[#A39A8A] uppercase tracking-wider text-[10px]">
                                {variant.label}
                              </span>
                              <span className="text-[#D4AF37] font-semibold">
                                {variant.price}
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-[#888] font-light">
                        {item.desc}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="text-base md:text-lg font-medium text-[#F4EFE6] group-hover:text-[#D4AF37] transition-colors duration-300">
                          {item.name}
                        </h4>
                        <div className="flex-grow mx-3 border-b border-dotted border-[#444] group-hover:border-[#D4AF37]/50 transition-colors duration-300" />
                        <span className="text-[#D4AF37] font-semibold shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-[#888] font-light mt-1">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {category.footerNote && (
              <div className="mt-8 p-4 rounded-xl bg-[#14120e] border border-[#D4AF37]/30 flex items-center justify-center gap-2 text-center reveal-item">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs md:text-sm tracking-wider text-[#F4EFE6] font-medium">
                  {category.footerNote}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botón Flotante y Drawer Deslizable con GSAP */}
      <FloatingCategoryDrawer
        categories={MENU_CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />
    </section>
  );
}
