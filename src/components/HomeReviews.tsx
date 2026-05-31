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
    <section id={content.id} className="relative w-full overflow-hidden bg-[#FDFCF8]">
      
      {/* Background Texture (subtle) - Continuing from WorkWithUs */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [background-image:linear-gradient(90deg,rgb(79_124_120)_1px,transparent_1px),linear-gradient(0deg,rgb(47_79_62)_1px,transparent_1px)] [background-size:46px_46px]" aria-hidden="true" />

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[85rem] px-0 pt-8 pb-0 lg:pt-16 lg:pb-0 relative z-10 flex flex-col items-center">

        {/* Carousel Wrapper */}
        <div className="relative w-full flex items-center justify-center group">

          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 lg:-left-6 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#FDFCF8]/90 text-lava shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95 border border-lava/10"
            aria-label="Previous reviews"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Horizontal Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex flex-row overflow-x-auto snap-x snap-mandatory items-center gap-4 lg:gap-6 pt-10 pb-24 px-16 sm:px-20 w-full justify-start md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {topReviews.map((review, index) => {
              const isCenter = index === 1;
              return (
                <article
                  key={review.author}
                  className={`flex-none snap-center flex flex-col justify-between rounded-xl sm:rounded-2xl p-6 lg:p-8 shadow-2xl transition-all duration-500 w-[80vw] sm:w-[22rem] lg:w-[26rem] h-[22rem] lg:h-[24rem] shrink-0 ${isCenter
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
            onClick={scrollRight}
            className="absolute right-2 lg:-right-6 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#FDFCF8]/90 text-lava shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95 border border-lava/10"
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
