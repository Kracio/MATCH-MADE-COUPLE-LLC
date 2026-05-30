import type { siteContent } from "@/content/site-content";
import { SectionShell } from "./SectionShell";

type ResourcesProps = {
  content: typeof siteContent.resources;
};

export function Resources({ content }: ResourcesProps) {
  return (
    <SectionShell id={content.id} eyebrow="Before the trip" title={content.heading}>
      <div className="grid gap-5 md:grid-cols-[1fr_1.18fr_0.92fr] md:items-end">
        {content.items.map((item, index) => (
          <a
            key={item.href}
            data-reveal
            href={item.href}
            className={`group block rounded-[2rem] bg-lava/5 p-2 ring-1 ring-lava/10 focus-visible:outline-hibiscus ${index === 1 ? "md:-translate-y-10" : ""}`}
          >
            <article className="overflow-hidden rounded-[1.55rem] bg-sand shadow-[0_22px_70px_rgb(74_44_36_/_0.10)]">
              <img src={item.image.src} alt={item.image.alt} className="aspect-square w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]" />
              <div className="flex items-center justify-between gap-4 bg-shell p-5">
                <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-lava">{item.label}</h3>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-tide/10 text-tide" aria-hidden="true">
                  <svg viewBox="0 0 18 18" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M5 13 13 5" strokeLinecap="round" />
                    <path d="M6.5 5H13v6.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </article>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
