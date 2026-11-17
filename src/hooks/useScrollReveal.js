import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useScrollReveal(isReady, dependencyKey = "all") {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isReady || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const sections = containerRef.current.querySelectorAll(".menu-section");

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll(".reveal-item");
              gsap.fromTo(
                items,
                { opacity: 0, y: 26, scale: 0.98 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.65,
                  stagger: 0.06,
                  ease: "power3.out",
                  clearProps: "transform",
                },
              );
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06 },
      );

      sections.forEach((sec) => observer.observe(sec));

      return () => observer.disconnect();
    }, containerRef);

    return () => ctx.revert();
  }, [isReady, dependencyKey]);

  return containerRef;
}
