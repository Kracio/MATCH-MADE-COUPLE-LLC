import { kauaiContent } from "@/content/kauai-content";
import { SectionShell } from "../SectionShell";

export function KauaiBucketList() {
  const content = kauaiContent.bucketList;
  return (
    <SectionShell title="" className="bg-sand/40 !py-12 sm:!py-16 lg:!py-20">
      <div data-reveal className="mb-16 flex items-center gap-5">
        <div className="h-px flex-1 bg-lava/10" />
        <span className="text-xs uppercase tracking-[0.3em] text-hibiscus/80">
          Must Do
        </span>
        <div className="h-px flex-1 bg-lava/10" />
      </div>

      <span data-reveal className="mb-5 block text-sm font-medium uppercase tracking-[0.3em] text-hibiscus">
        {content.tag}
      </span>
      <h2 data-reveal className="mb-5 font-display text-[clamp(2.25rem,5vw,3.6rem)] font-light leading-[1.1] tracking-tight text-lava">
        Best Things <em className="font-light italic text-hibiscus">To Do</em>
      </h2>
      <p data-reveal className="mb-12 max-w-[640px] font-display text-xl font-light italic leading-[1.7] text-lava/70">
        {content.lead}
      </p>

      <div data-reveal-stagger className="mt-16 flex flex-col gap-[2px]">
        {content.items.map((item, idx) => (
          <div
            key={idx}
            data-reveal-child
            className="grid items-start gap-12 border-t border-lava/10 py-11 transition-colors hover:border-hibiscus/30 sm:grid-cols-[80px_1fr] lg:grid-cols-[80px_1fr_320px]"
          >
            <div className="font-display text-5xl font-light leading-none text-lava/15">
              {item.number}
            </div>
            <div>
              <h3 className="mb-4 font-display text-3xl lg:text-4xl font-normal leading-[1.2] text-lava">
                {item.title}
              </h3>
              <p className="mb-0 text-base lg:text-lg font-light leading-[1.8] text-lava/70">
                {item.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {item.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`kauai-affiliate-cta ${
                      link.primary
                        ? "kauai-affiliate-cta--primary"
                        : "kauai-affiliate-cta--secondary"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div data-parallax="10" className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl bg-sand will-change-transform lg:block">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        ))}
        <div className="border-t border-lava/10" />
      </div>
    </SectionShell>
  );
}
