"use client";

import type { siteContent } from "@/content/site-content";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { LinkButton } from "./LinkButton";

type WorkWithUsPreviewProps = {
  content: typeof siteContent.workWithUs;
};

export function WorkWithUsPreview({ content }: WorkWithUsPreviewProps) {
  const visualRef = useRef<HTMLDivElement>(null);
  const backLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!backLayerRef.current) return;

      if (prefersReducedMotion()) {
        gsap.set(backLayerRef.current, { opacity: 1, x: 0, y: 0, rotation: -6 });
        return;
      }

      const layerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: visualRef.current,
          start: "top 82%",
          once: true,
        },
      });

      layerTimeline.fromTo(
        backLayerRef.current,
        { opacity: 0, x: -18, y: 22, rotation: -9 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: -6,
          duration: 1.05,
          ease: "power3.out",
        },
      ).to(backLayerRef.current, {
          y: -8,
          rotation: -5.25,
          duration: 3.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
        "-=0.2",
      );
    },
    { scope: visualRef },
  );

  return (
    <section id={content.id} className="relative flex w-full flex-col justify-center items-center px-4 pt-20 pb-0 sm:px-6 lg:px-8 lg:pt-32 lg:pb-0 bg-[#FDFCF8] z-20">
      
      {/* Background Texture (subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [background-image:linear-gradient(90deg,rgb(79_124_120)_1px,transparent_1px),linear-gradient(0deg,rgb(47_79_62)_1px,transparent_1px)] [background-size:46px_46px]" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-[76rem] grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 relative z-10">
        
        {/* Image/Visual Column (Left - Scrapbook) */}
        <div ref={visualRef} className="relative group order-2 lg:order-1 mt-12 lg:mt-0 flex justify-center lg:justify-start" data-reveal="fade-right">
          
          {/* Decorative Tape Element Top */}
          <div className="absolute -top-6 left-1/3 w-24 h-8 bg-tide/30 rotate-3 hidden lg:block mix-blend-multiply rounded-sm z-20 shadow-sm" />

          {/* Secondary Polaroid (Boat/UFO) - placed behind and angled */}
          {content.secondaryImage && (
            <div data-parallax="16" className="absolute -left-4 -bottom-14 z-10 w-3/4 sm:-left-12 sm:-bottom-24 sm:w-4/5">
              <div ref={backLayerRef} className="relative bg-[#FBFAF6] p-3 pb-10 opacity-0 shadow-[0_15px_50px_rgba(47,79,62,0.15)] ring-1 ring-tide/20 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:-rotate-4 motion-reduce:opacity-100 motion-reduce:hover:translate-y-0 motion-reduce:hover:-rotate-6">
                <div className="absolute -top-4 right-8 z-20 h-6 w-16 -rotate-12 rounded-sm bg-tide/20 mix-blend-multiply shadow-sm" />
                <img 
                  alt={content.secondaryImage.alt}
                  className="h-auto w-full aspect-[4/3] object-cover grayscale-[10%] sepia-[5%]"
                  src={content.secondaryImage.src}
                />
                <div className="absolute bottom-3 left-4">
                  <span className="font-sans italic text-xs text-lava/70 font-medium">{content.secondaryImage.caption}</span>
                </div>
              </div>
            </div>
          )}

          {/* Main Polaroid (Camera) */}
          <div className="bg-[#FBFAF6] p-3 sm:p-4 pb-10 sm:pb-14 shadow-[0_20px_60px_rgba(74,44,36,0.12)] transform rotate-3 transition-transform duration-700 ease-out hover:rotate-1 ring-1 ring-tide/20 relative z-20 w-full max-w-[20rem] sm:max-w-[24rem] ml-auto lg:ml-8">
            <img 
              alt={content.image.alt}
              className="w-full h-auto aspect-[4/5] object-cover grayscale-[10%] sepia-[10%] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:sepia-0"
              src={content.image.src}
            />
            <div className="absolute bottom-4 left-6">
              <span className="font-sans italic text-sm text-lava/70">{content.image.caption}</span>
            </div>
          </div>

          {/* Curated Experiences Paper Scrap */}
          <div data-parallax="22" className="absolute -left-6 sm:-left-16 top-1/3 w-32 sm:w-40 bg-[#EFEBE1] p-4 shadow-lg transform -rotate-12 z-30 border border-tide/10">
            <p className="font-sans text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-palm/80 leading-relaxed text-center">
              CURATED<br/>EXPERIENCES<br/>MEANINGFUL<br/>STORYTELLING
            </p>
          </div>

          {/* Hawaii Stamp */}
          <div className="absolute right-[-1rem] sm:right-[-2rem] bottom-0 w-24 h-24 rounded-full border-[1.5px] border-palm/40 flex flex-col items-center justify-center text-center transform rotate-12 z-30 opacity-70">
            <span className="font-sans text-[10px] tracking-widest text-palm uppercase absolute top-2">HAWAII</span>
            <span className="font-sans text-[8px] tracking-widest text-palm mt-6">EST. 1959</span>
            {/* Inner dashed ring */}
            <div className="absolute inset-1 rounded-full border border-dashed border-palm/30" />
          </div>

        </div>

        {/* Narrative Column (Right) */}
        <div className="flex flex-col justify-center order-1 lg:order-2 space-y-6 lg:space-y-8" data-reveal="fade-left">
          
          {/* Eyebrow */}
          {content.eyebrow && (
            <div className="flex items-center gap-4 border-b border-palm/20 pb-4">
              <span className="font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-palm/80">
                {content.eyebrow}
              </span>
              <svg className="w-4 h-4 text-palm/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 12 10 7 12C12 10 12 2 12 2ZM12 2C12 2 12 10 17 12C12 10 12 2 12 2ZM12 12V22M12 12C9 12 6 9 6 9C6 9 9 12 12 12ZM12 12C15 12 18 9 18 9C18 9 15 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}

          <div className="py-2 relative">
            <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-palm sm:text-6xl lg:text-[5.5rem] mb-6 relative z-10">
              WORK WITH<br/>US<span className="text-tide italic">{content.headingAccent}</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-lava/80 max-w-prose relative z-10">
              {content.body}
            </p>
          </div>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start">
            <LinkButton href={content.primaryButton.href}>
              {content.primaryButton.label}
            </LinkButton>
            <LinkButton href={content.secondaryButton.href} variant="secondary">
              {content.secondaryButton.label}
            </LinkButton>
          </div>
        </div>

      </div>

    </section>
  );
}
