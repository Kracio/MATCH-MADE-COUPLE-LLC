import { kauaiContent } from "@/content/kauai-content";

export function KauaiHero() {
  const content = kauaiContent.hero;
  return (
    <section className="relative flex min-h-[700px] h-screen flex-col justify-center items-center text-center overflow-hidden px-6 sm:px-12 lg:px-20">
      {/* Clean Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_30%]"
        style={{ backgroundImage: `url('${content.bgImage}')` }}
      />
      
      {/* Subtle bottom gradient to ensure the white text below remains readable, while keeping the image mostly clean */}
      <div className="absolute inset-0 bg-gradient-to-t from-lava/40 via-transparent to-transparent mix-blend-multiply" />
      
      {/* Optional: Very subtle gradient just to ensure the top nav is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      
      <div className="absolute right-6 top-24 sm:right-12 sm:top-32 lg:right-20 hidden md:block z-10" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
        <p className="text-sm tracking-[0.2em] text-white uppercase drop-shadow-md">
          {content.coordinates}
        </p>
      </div>

      {/* Very subtle radial gradient exactly behind the text to guarantee contrast without muddying the whole image */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.15)_0%,_transparent_50%)] pointer-events-none" />

      <div className="relative max-w-3xl z-10 flex flex-col items-center">
        
        {/* The rest of the text moved to the top with a strong drop-shadow for legibility */}
        <h1 className="mb-4 font-display text-[clamp(4.5rem,10vw,8rem)] font-light leading-[0.9] tracking-tight text-shell drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          Kaua<em className="font-light italic text-sand">{"'i"}</em>
        </h1>
        <p className="mb-8 text-sm sm:text-base font-medium uppercase tracking-[0.15em] text-sand drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {content.subtitle}
        </p>
        <p className="mb-12 max-w-2xl font-display text-xl font-light italic leading-relaxed text-shell sm:text-2xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">
          {content.description}
        </p>

        {/* Ripped Edge Box just for the Tag with opacity moved to the bottom */}
        <div className="relative inline-block opacity-[0.90] hover:opacity-100 transition-opacity duration-300 shadow-2xl">
          <div className="absolute inset-0 bg-shell backdrop-blur-sm"></div>
          {/* Subtle tropical/hawaii background watermark pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4A2C24 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

          {/* Ripped Edge Top */}
          <svg className="absolute -top-2 left-0 w-full h-3 text-shell drop-shadow-sm" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="0,100 100,100 100,0 97,25 94,5 91,30 88,10 85,25 82,0 79,20 76,5 73,30 70,10 67,25 64,0 61,20 58,5 55,30 52,10 49,25 46,0 43,20 40,5 37,30 34,10 31,25 28,0 25,20 22,5 19,30 16,10 13,25 10,0 7,20 4,5 0,30" />
          </svg>
          
          <div className="relative z-10 px-8 pt-4 pb-3">
            <span className="block border-b border-hibiscus/60 pb-2 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-hibiscus">
              {content.tag}
            </span>
          </div>
          
          {/* Ripped Edge Bottom */}
          <svg className="absolute -bottom-2 left-0 w-full h-3 text-shell drop-shadow-sm" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="0,0 100,0 100,100 97,75 94,95 91,70 88,90 85,75 82,100 79,80 76,95 73,70 70,90 67,75 64,100 61,80 58,95 55,70 52,90 49,75 46,100 43,80 40,95 37,70 34,90 31,75 28,100 25,80 22,95 19,70 16,90 13,75 10,100 7,80 4,95 0,70" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-12 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white sm:right-12 sm:flex lg:bottom-20 lg:right-20 z-10 drop-shadow-md">
        <div className="h-px w-10 bg-white/60" />
        Scroll
      </div>
    </section>
  );
}
