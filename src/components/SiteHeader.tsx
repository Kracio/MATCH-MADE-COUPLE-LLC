"use client";

import type { siteContent } from "@/content/site-content";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  content: typeof siteContent.header;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`mx-auto flex max-w-7xl flex-col gap-3 rounded-[2.25rem] border p-2.5 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:flex-row lg:items-center lg:justify-between lg:rounded-full ${
          isScrolled
            ? "translate-y-0 border-lava/10 bg-shell shadow-[0_18px_54px_rgb(74_44_36_/_0.18),0_2px_12px_rgb(47_79_62_/_0.10),inset_0_1px_0_rgb(255_255_255_/_0.72)] ring-1 ring-lava/10"
            : "border-palm/20 bg-shell/86 shadow-[0_18px_60px_rgb(74_44_36_/_0.09)] ring-1 ring-palm/10 backdrop-blur-xl"
        }`}
      >
        <a href="#main-content" className="group flex items-center gap-3 rounded-full pr-3 focus-visible:outline-hibiscus">
          <span className="rounded-full bg-white/55 p-1 ring-1 ring-palm/10">
            <img src={content.logo.src} alt={content.logo.alt} className="size-12 rounded-full object-cover shadow-[0_10px_24px_rgb(74_44_36_/_0.13)] ring-1 ring-white/80 sm:size-14" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-[-0.02em] text-palm sm:text-xl">{content.title}</span>
            <span className={`mt-1 max-w-[16rem] text-[9px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 sm:max-w-none sm:text-[10px] ${isScrolled ? "text-palm/90" : "text-palm/65"}`}>{content.tagline}</span>
          </span>
        </a>
        
        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-1 lg:justify-end">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} className={`rounded-full px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:bg-sand/85 hover:text-palm focus-visible:outline-hibiscus ${isScrolled ? "text-palm/90" : "text-palm/75"}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Social links" className="flex flex-wrap gap-2 lg:hidden">
          {content.social.map((item) => (
            <a key={item.href} href={item.href} className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-tide transition-colors duration-300 ${isScrolled ? "bg-tide/20" : "bg-tide/10"}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
