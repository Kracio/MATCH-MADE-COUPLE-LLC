"use client";

import type { siteContent } from "@/content/site-content";

type ResourcesProps = {
  content: typeof siteContent.resources;
};

export function Resources({ content }: ResourcesProps) {

  const rotationClasses = ["md:-rotate-3", "md:rotate-2", "md:-rotate-2"];
  const originClasses = ["md:origin-bottom-right", "md:origin-center", "md:origin-bottom-left"];
  const mtClasses = ["", "md:mt-0", "md:mt-0"];
  const zIndexClasses = ["z-0", "z-10", "z-0"];

  return (
    <section id={content.id} className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-[#FBFAF6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pb-24 lg:pt-8">
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

        <div data-reveal-stagger className="relative grid grid-cols-1 items-center justify-center gap-8 sm:gap-10 md:grid-cols-3 lg:gap-12">
        {content.items.map((item, index) => (
          <article
            key={item.label}
            data-reveal-child
            className={`group mx-auto flex w-full max-w-[19rem] flex-col bg-[#FBFAF6] p-4 pb-8 shadow-[0_8px_30px_rgba(74,44,36,0.08)] ring-1 ring-tide/20 transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(74,44,36,0.15)] sm:p-5 sm:pb-10 lg:max-w-[22rem] lg:hover:z-20 lg:hover:-translate-y-2 lg:hover:rotate-0 ${rotationClasses[index % 3]} ${originClasses[index % 3]} ${mtClasses[index % 3]} ${zIndexClasses[index % 3]}`}
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
                className="group/link mt-auto inline-flex items-center text-palm transition-colors hover:text-hibiscus"
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
