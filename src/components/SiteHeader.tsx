"use client";

import type { siteContent } from "@/content/site-content";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  content: typeof siteContent.header;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateScrollState = () => {
      frameId = 0;
      setIsScrolled(window.scrollY > 16);
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <header
      data-hero-header
      data-scrolled={isScrolled ? "true" : "false"}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8"
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-shell focus:px-5 focus:py-3 focus:text-lava focus:shadow-[0_18px_48px_rgb(74_44_36_/_0.16)]">
        Skip to content
      </a>
      <div
        className={`mx-auto flex max-h-[calc(100dvh-1.25rem)] max-w-7xl flex-col gap-2 overflow-y-auto rounded-[1.75rem] border p-2 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] sm:gap-3 sm:rounded-[2.25rem] sm:p-2.5 lg:max-h-none lg:flex-row lg:items-center lg:justify-between lg:overflow-visible lg:rounded-full ${
          isScrolled || isMenuOpen
            ? "translate-y-0 border-lava/10 bg-shell shadow-[0_18px_54px_rgb(74_44_36_/_0.18),0_2px_12px_rgb(47_79_62_/_0.10),inset_0_1px_0_rgb(255_255_255_/_0.72)] ring-1 ring-lava/10"
            : "border-palm/20 bg-shell/86 shadow-[0_18px_60px_rgb(74_44_36_/_0.09)] ring-1 ring-palm/10 backdrop-blur-xl"
        }`}
      >
        <div className="flex w-full items-center justify-between lg:w-auto">
          <a href="#main-content" className="group flex min-h-11 items-center gap-2.5 rounded-full pr-2 focus-visible:outline-hibiscus sm:gap-3 sm:pr-3">
            <span className="rounded-full bg-white/55 p-1 ring-1 ring-palm/10">
              <img src={content.logo.src} alt={content.logo.alt} className="size-10 rounded-full object-cover shadow-[0_10px_24px_rgb(74_44_36_/_0.13)] ring-1 ring-white/80 sm:size-14" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-semibold tracking-[-0.02em] text-palm sm:text-xl">{content.title}</span>
              <span className={`mt-1 max-w-[13rem] text-[8px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 min-[390px]:max-w-[16rem] sm:max-w-none sm:text-[10px] sm:tracking-[0.2em] ${isScrolled || isMenuOpen ? "text-palm/90" : "text-palm/65"}`}>{content.tagline}</span>
            </span>
          </a>
          
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-full p-2.5 lg:hidden transition-colors mr-1 sm:mr-2 ${isScrolled || isMenuOpen ? "text-palm/90 hover:bg-palm/10" : "text-palm/75 hover:bg-palm/10"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
            </svg>
          </button>
        </div>
        
        <nav aria-label="Primary navigation" className={`${isMenuOpen ? "flex flex-col items-start px-2 pb-2 gap-1 sm:px-4" : "hidden"} lg:flex lg:flex-row lg:items-center lg:gap-1 lg:flex-wrap lg:justify-end lg:px-0 lg:pb-0`}>
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className={`inline-flex min-h-11 w-full lg:w-auto shrink-0 items-center justify-start lg:justify-center rounded-full px-4 py-2.5 text-[0.64rem] font-bold uppercase leading-none tracking-[0.12em] transition-colors duration-300 hover:bg-sand/85 hover:text-palm focus-visible:outline-hibiscus sm:text-[0.68rem] sm:tracking-[0.14em] lg:min-h-0 lg:py-2.5 lg:px-3 ${isScrolled || isMenuOpen ? "text-palm/90" : "text-palm/75"}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Social links" className={`${isMenuOpen ? "flex px-3 pb-4 sm:px-5 gap-2" : "hidden"} lg:hidden`}>
          {content.social.map((item) => (
            <a key={item.href} href={item.href} className={`inline-flex min-h-10 shrink-0 items-center justify-center rounded-full px-4 py-2 text-[0.68rem] font-bold uppercase leading-none tracking-[0.14em] text-tide transition-colors duration-300 ${isScrolled || isMenuOpen ? "bg-tide/20 hover:bg-tide/30" : "bg-tide/10 hover:bg-tide/20"}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
