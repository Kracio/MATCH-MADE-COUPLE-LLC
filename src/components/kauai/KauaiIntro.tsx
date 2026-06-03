import { kauaiContent } from "@/content/kauai-content";
import { SectionShell } from "../SectionShell";

export function KauaiIntro() {
  const content = kauaiContent.intro;
  return (
    <SectionShell title="" className="bg-shell !py-12 sm:!py-16 lg:!py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal-stagger>
          <div className="mb-[-30px] font-display text-[120px] font-light leading-none text-lava/5">
            {content.number}
          </div>
          <span data-reveal-child className="mb-5 block text-sm font-medium uppercase tracking-[0.3em] text-hibiscus">
            {content.tag}
          </span>
          <h2 data-reveal-child className="mb-6 font-display text-[clamp(2.25rem,5vw,3.6rem)] font-light leading-[1.1] tracking-tight text-lava">
            Primal <em className="font-light italic text-hibiscus">Resonance</em>
          </h2>
          <div className="space-y-4">
            {content.paragraphs.map((text, idx) => (
              <p key={idx} data-reveal-child className="max-w-[620px] text-base lg:text-lg font-light leading-[1.9] text-lava/70">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div data-reveal="fade-left" data-parallax="16" className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-sand/30 will-change-transform lg:aspect-[4/5]">
          <img
            src={content.image.src}
            alt={content.image.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105 mix-blend-multiply opacity-90"
          />
          <span className="absolute bottom-6 left-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-shell">
            {content.image.label}
          </span>
        </div>
      </div>
    </SectionShell>
  );
}
