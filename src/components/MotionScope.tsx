"use client";

import { ReactNode, useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type MotionScopeProps = {
  children: ReactNode;
};

export function MotionScope({ children }: MotionScopeProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]", scope.current);

      if (reduceMotion) {
        gsap.set(revealItems, { autoAlpha: 1, y: 0, clearProps: "transform" });
        return;
      }

      revealItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay: Math.min(index * 0.025, 0.2),
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    },
    { scope },
  );

  return (
    <div ref={scope}>
      <div className="paper-grain" aria-hidden="true" />
      {children}
    </div>
  );
}
