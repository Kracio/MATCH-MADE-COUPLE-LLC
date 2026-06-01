"use client";

import { useRef } from "react";
import type { siteContent } from "@/content/site-content";

type HomeReviewsProps = {
  content: typeof siteContent.reviews;
};

export function HomeReviews({ content }: HomeReviewsProps) {
  const topReviews = content.items.slice(0, 3);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section id={content.id} className="relative w-full overflow-hidden bg-transparent">

      {/* Main Container */}
      <div data-reveal-stagger className="relative z-10 mx-auto flex w-full max-w-[85rem] flex-col items-center px-0 pt-2 pb-0 lg:pt-6 lg:pb-0">

        {/* Carousel Wrapper */}
        <div className="group relative flex w-full items-center justify-center">

          {/* Left Arrow */}
          <button
            data-reveal-child
            onClick={scrollLeft}
            className="absolute left-2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-lava/10 bg-[#FDFCF8]/90 text-lava shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:scale-105 hover:bg-white active:scale-95 sm:h-12 sm:w-12 lg:-left-6"
            aria-label="Previous reviews"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Horizontal Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex w-full snap-x snap-mandatory flex-row items-center justify-start gap-4 overflow-x-auto px-14 pt-10 pb-20 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-20 md:justify-center lg:gap-6 lg:pb-24 [&::-webkit-scrollbar]:hidden"
          >
            {topReviews.map((review, index) => {
              const isCenter = index === 1;
              return (
                <article
                  key={review.author}
                  data-reveal-child
                  className={`flex h-[22rem] w-[min(82vw,22rem)] flex-none shrink-0 snap-center flex-col justify-between rounded-xl p-6 shadow-2xl transition-all duration-500 sm:rounded-2xl lg:h-[24rem] lg:w-[26rem] lg:p-8 ${isCenter
                    ? "bg-[#FDFCF8] scale-100 z-20 opacity-100"
                    : "bg-[#FDFCF8]/80 scale-90 sm:scale-95 z-10 opacity-70 hover:opacity-100 cursor-pointer backdrop-blur-md"
                    }`}
                >
                  <div>
                    <svg className={`w-6 h-6 lg:w-8 lg:h-8 mb-4 ${isCenter ? "text-[#B56E5A]/80" : "text-[#B56E5A]/50"}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L16.09 15.006C16.326 14.331 16.516 13.568 16.639 12.724C16.762 11.88 16.823 11.085 16.823 10.339V3H24V10.052C24 12.637 23.479 14.933 22.436 16.94C21.394 18.948 19.92 20.301 18.016 21H14.017ZM3.017 21L5.09 15.006C5.326 14.331 5.516 13.568 5.639 12.724C5.762 11.88 5.823 11.085 5.823 10.339V3H13V10.052C13 12.637 12.479 14.933 11.436 16.94C10.394 18.948 8.92 20.301 7.016 21H3.017Z" />
                    </svg>
                    <blockquote className={`text-sm lg:text-[15px] leading-relaxed line-clamp-6 ${isCenter ? "text-lava/80" : "text-lava/60"}`}>
                      “{review.quote}”
                    </blockquote>
                  </div>

                  <div className={`mt-6 pt-4 border-t flex items-center gap-4 ${isCenter ? "border-tide/20" : "border-tide/10"}`}>
                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-bold text-xs ${isCenter ? "bg-tide/20 text-tide" : "bg-tide/10 text-tide/60"}`}>
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className={`font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] ${isCenter ? "text-palm" : "text-palm/60"}`}>{review.author}</h4>
                      <p className={`font-sans text-[9px] italic mt-0.5 ${isCenter ? "text-lava/60" : "text-lava/40"}`}>Verified Review</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            data-reveal-child
            onClick={scrollRight}
            className="absolute right-2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-lava/10 bg-[#FDFCF8]/90 text-lava shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:scale-105 hover:bg-white active:scale-95 sm:h-12 sm:w-12 lg:-right-6"
            aria-label="Next reviews"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </div>

    </section>
  );
}
