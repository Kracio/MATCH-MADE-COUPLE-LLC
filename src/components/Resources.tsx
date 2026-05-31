"use client";

import type { siteContent } from "@/content/site-content";
import { useRef } from "react";
import { ScrollTrigger, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type ResourcesProps = {
  content: typeof siteContent.resources;
};

export function Resources({ content }: ResourcesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    if (!sectionRef.current) return;
    if (prefersReducedMotion()) return;
    
    // Briefly pin the section so it perfectly frames the screen, hiding the green line below
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=50%", // Pin for a short scroll distance to ensure it owns the viewport
      pin: true,
      pinSpacing: true,
    });
  }, { scope: sectionRef });

  const rotationClasses = ["-rotate-3", "rotate-2", "-rotate-2"];
  const originClasses = ["origin-bottom-right", "origin-center", "origin-bottom-left"];
  const mtClasses = ["", "mt-8 md:mt-0", "mt-8 md:mt-0"];
  const zIndexClasses = ["z-0", "z-10", "z-0"];

  return (
    <section ref={sectionRef} id={content.id} className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-24 lg:pt-8 bg-[#FBFAF6]">
      <div className="mx-auto w-full max-w-7xl">
        <div data-reveal className="mb-4 lg:mb-6 max-w-3xl">
          <p className="mb-3 inline-flex rounded-full bg-tide/10 px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-tide">
            Journal
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.035em] text-lava sm:text-5xl lg:text-6xl xl:text-7xl">
            {content.heading}
          </h2>
        </div>

        {/* Description below title */}
        {content.body && (
          <p data-reveal className="mb-4 lg:mb-6 max-w-3xl text-base sm:text-lg leading-relaxed text-lava/80">
            {content.body}
          </p>
        )}

        <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center justify-center relative">
        {content.items.map((item, index) => (
          <article
            key={item.label}
            data-reveal-child
            className={`group bg-[#FBFAF6] p-4 sm:p-5 pb-8 sm:pb-10 shadow-[0_8px_30px_rgba(74,44,36,0.08)] transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(74,44,36,0.15)] flex flex-col mx-auto w-full max-w-[19rem] lg:max-w-[22rem] ring-1 ring-tide/20 hover:z-20 hover:-translate-y-2 hover:rotate-0 ${rotationClasses[index % 3]} ${originClasses[index % 3]} ${mtClasses[index % 3]} ${zIndexClasses[index % 3]}`}
          >
            <div className="relative w-full aspect-square bg-palm/10 overflow-hidden mb-6">
              <img 
                alt={item.image.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={item.image.src} 
              />
            </div>
            
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl lg:text-3xl text-palm mb-3 leading-tight">{item.label}</h3>
                {item.description && (
                  <p className="font-sans italic text-sm lg:text-base text-lava/70 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              <a 
                href={item.href}
                className="inline-flex items-center text-palm hover:text-hibiscus transition-colors group/link mt-auto"
              >
                <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mr-3">READ ENTRY</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
