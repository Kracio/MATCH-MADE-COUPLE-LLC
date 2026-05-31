"use client";

import type { siteContent } from "@/content/site-content";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type IslandGuideProps = {
  content: typeof siteContent.islands;
};

export function IslandGuide({ content }: IslandGuideProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !rightContainerRef.current) return;

    const cardsCount = content.cards.length;
    const reduceMotion = prefersReducedMotion();
    
    // Create a pinning scroll trigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${cardsCount * 60}%`, // Reduced scroll distance for faster scrolling
        pin: true,
        scrub: reduceMotion ? true : 0.1, // Almost instant scrubbing catch-up
        snap: reduceMotion ? undefined : {
          snapTo: 1 / (cardsCount - 1),
          duration: 0.3, // Faster snap animation
          delay: 0, // No delay before snapping
          ease: "power2.inOut"
        },
        onUpdate: (self) => {
          // Update active index based on progress
          const progress = self.progress;
          const index = Math.round(progress * (cardsCount - 1));
          
          setActiveIndex((prev) => (prev !== index ? index : prev));
          
          // Update visual progress bar (moving top down)
          if (progressRef.current) {
            gsap.set(progressRef.current, { yPercent: progress * 300 });
          }
        }
      }
    });

    // Move the right panel up as we scroll
    tl.to(rightContainerRef.current, {
      y: `-${(cardsCount - 1) * 100}svh`,
      ease: "none"
    });

    return () => {
      tl.kill();
    };
  }, { scope: sectionRef, dependencies: [content.cards.length] });

  useGSAP(() => {
    if (!sectionRef.current) return;

    const reduceMotion = prefersReducedMotion();
    const activePanel = sectionRef.current.querySelector<HTMLElement>(`[data-island-panel="${activeIndex}"]`);
    if (!activePanel) return;

    const elements = gsap.utils.toArray<HTMLElement>("[data-island-reveal]", activePanel);
    if (reduceMotion) {
      gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1, clearProps: "transform" });
      return;
    }

    gsap.fromTo(
      elements,
      { autoAlpha: 0, y: 26, scale: 0.985 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.72, stagger: 0.08, ease: "power3.out", overwrite: "auto" },
    );
  }, { scope: sectionRef, dependencies: [activeIndex] });

  const scrollToIsland = (index: number) => {
    const st = ScrollTrigger.getAll().find(t => t.trigger === sectionRef.current);
    if (st) {
      // Calculate scroll position in the document
      const scrollPos = st.start + (st.end - st.start) * (index / (content.cards.length - 1));
      
      // Native smooth scroll to the calculated position
      window.scrollTo({
        top: scrollPos,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });
    }
  };

  return (
    <section id={content.id} ref={sectionRef} className="relative flex w-full h-[100svh] overflow-hidden bg-[#FBFAF6] border-y border-palm/10">
      
      {/* Left Side: Navigation */}
      <aside className="hidden md:flex flex-col justify-start pt-[20vh] w-[30%] xl:w-1/3 h-full border-r border-palm/15 px-8 lg:px-16 xl:px-20 relative z-20 bg-[#FBFAF6]">
        <div className="flex flex-col gap-10 lg:gap-14">
          {content.cards.map((island, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={island.name}
                onClick={() => scrollToIsland(index)}
                className={`group relative cursor-pointer transition-all duration-500 text-left flex items-center ${
                  isActive ? "text-palm opacity-100 translate-x-5" : "text-palm/40 opacity-60 hover:opacity-100"
                }`}
              >
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest absolute -left-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight">
                  {island.name}
                </h2>
              </button>
            );
          })}
        </div>
        
        {/* Quote at bottom left */}
        <div className="absolute bottom-12 lg:bottom-16 left-8 lg:left-16 xl:left-20 pr-8">
          <p className="font-display italic text-sm lg:text-base xl:text-lg text-lava/70 max-w-[16rem]">
            "The islands are more than places on a map. They are a state of being, a breath of life, the mana of the Pacific."
          </p>
        </div>
      </aside>

      {/* Right Side: GSAP Scrolled Content */}
      <div className="flex-1 h-[100svh] overflow-hidden relative">
        <div ref={rightContainerRef} className="w-full h-full will-change-transform">
          {content.cards.map((island, index) => {
            const id = island.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            const isEven = index % 2 !== 0;
            return (
              <div 
                key={island.name}
                id={id} 
                data-island-panel={index}
                className="island-section relative w-full h-[100svh] overflow-hidden"
              >
                {/* Background styling for each section */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFF8EE_0%,#F4E8D5_48%,#E7F4DC_100%)]"></div>
                <div className="absolute inset-0 z-0 opacity-[0.05] [background-image:linear-gradient(90deg,rgb(79_124_120_/_0.32)_1px,transparent_1px),linear-gradient(0deg,rgb(47_79_62_/_0.2)_1px,transparent_1px)] [background-size:46px_46px]" aria-hidden="true" />

                <div className={`relative z-10 w-full h-full flex flex-col ${isEven ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-center justify-center gap-10 xl:gap-12 p-6 md:p-12 lg:p-16`}>
                  
                  {/* Image Polaroid */}
                  <div data-island-reveal className={`flex-1 flex justify-center ${isEven ? 'xl:justify-start' : 'xl:justify-end'} w-full`}>
                    <div className={`bg-[#FBFAF6] p-4 sm:p-5 pb-10 sm:pb-12 ring-1 ring-tide/20 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] w-full max-w-[18rem] sm:max-w-sm md:max-w-md ${isEven ? 'rotate-2 hover:rotate-0' : '-rotate-2 hover:rotate-0'} hover:-translate-y-4 hover:shadow-[0_35px_60px_-15px_rgba(47,79,62,0.3)]`}>
                      <div className="aspect-[4/5] overflow-hidden bg-palm/10 mb-6">
                        <img alt={island.image.alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src={island.image.src}/>
                      </div>
                      <div className="px-2 text-center">
                        <h4 className="font-display text-xl sm:text-2xl italic text-palm relative inline-block">
                          {island.name}
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-palm/30 -skew-x-12"></span>
                        </h4>
                        <p className="font-sans text-[9px] sm:text-[10px] font-bold tracking-widest mt-4 text-lava/60 uppercase">{island.coordinates}</p>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div data-island-reveal className={`flex-1 max-w-xl text-center ${isEven ? 'xl:text-right' : 'xl:text-left'} px-2 sm:px-0`}>
                    <span className="font-sans text-[10px] sm:text-xs font-bold text-lava/60 mb-3 sm:mb-4 block tracking-[0.3em] uppercase">{island.subtitle}</span>
                    <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-palm mb-4 sm:mb-6 font-medium leading-[1.1]">{island.title}</h3>
                    <p className="text-base sm:text-lg text-lava/80 leading-relaxed mb-6 sm:mb-8">{island.description}</p>
                    
                    {island.href ? (
                      <a href={island.href} className={`group inline-flex items-center gap-3 sm:gap-4 text-hibiscus font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest mx-auto xl:mx-0 ${isEven ? 'xl:ml-auto' : ''}`}>
                        EXPLORE THE WILD <span className="transition-transform group-hover:translate-x-2">→</span>
                      </a>
                    ) : (
                      <span className={`inline-flex items-center gap-3 sm:gap-4 text-lava/50 font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest mx-auto xl:mx-0 ${isEven ? 'xl:ml-auto' : ''}`}>
                        {island.status}
                      </span>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="hidden md:flex absolute top-[50svh] right-0 h-0 z-40 items-center justify-end pointer-events-none w-0">
        <div className="absolute right-6 xl:right-12 -translate-y-1/2 w-[2px] h-32 bg-palm/10 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="absolute top-0 left-0 w-full h-1/4 bg-palm/60 rounded-full will-change-transform" 
          />
        </div>
      </div>

    </section>
  );
}
