"use client";

import { ReactNode, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type MotionScopeProps = {
  children: ReactNode;
};

export function MotionScope({ children }: MotionScopeProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      const reduceMotion = prefersReducedMotion();
      const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]", scope.current);
      const revealChildren = gsap.utils.toArray<HTMLElement>("[data-reveal-child]", scope.current);
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]", scope.current);
      const heroCollage = gsap.utils.toArray<HTMLElement>("[data-hero-visual]", scope.current);
      const heroDecor = gsap.utils.toArray<HTMLElement>("[data-hero-decor]", scope.current);
      const parallaxItems = gsap.utils.toArray<HTMLElement>("[data-parallax]", scope.current);

      if (reduceMotion) {
        gsap.set([...revealItems, ...revealChildren, ...heroItems, ...heroCollage, ...heroDecor], {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          clearProps: "transform",
        });
        return;
      }

      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTimeline
        .fromTo(
          "[data-hero-header]",
          { autoAlpha: 0, y: -18 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
        )
        .fromTo(
          heroItems,
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, duration: 0.95, stagger: 0.09 },
          "-=0.48",
        )
        .fromTo(
          heroCollage,
          { autoAlpha: 0, y: 42, scale: 0.965, rotation: -1.5 },
          { autoAlpha: 1, y: 0, scale: 1, rotation: 0, duration: 1.25, ease: "power3.out" },
          "-=0.74",
        )
        .fromTo(
          heroDecor,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 1.15, stagger: 0.08 },
          "-=0.86",
        );

      revealItems.forEach((item) => {
        const variant = item.dataset.reveal;
        const x = variant === "fade-left" ? 34 : variant === "fade-right" ? -34 : 0;
        const y = variant === "scale" ? 18 : variant === "fade-left" || variant === "fade-right" ? 0 : 30;
        const scale = variant === "scale" ? 0.975 : 1;

        gsap.fromTo(
          item,
          { autoAlpha: 0, x, y, scale },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]", scope.current).forEach((group) => {
        const children = gsap.utils.toArray<HTMLElement>("[data-reveal-child]", group);
        if (!children.length) return;

        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 28, scale: 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.82,
            stagger: 0.085,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      const media = gsap.matchMedia(scope.current);
      media.add("(min-width: 1024px)", () => {
        parallaxItems.forEach((item) => {
          const distance = Number(item.dataset.parallax) || 24;
          gsap.to(item, {
            y: -distance,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });
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
