import { kauaiContent } from "@/content/kauai-content";
import { SectionShell } from "../SectionShell";

export function KauaiForests() {
  const content = kauaiContent.forests;
  return (
    <SectionShell title="" className="bg-sand/40 !py-12 sm:!py-16 lg:!py-20">
      <span className="mb-5 block text-sm font-medium uppercase tracking-[0.3em] text-hibiscus">
        {content.tag}
      </span>
      <h2 className="mb-5 font-display text-[clamp(2.25rem,5vw,3.6rem)] font-light leading-[1.1] tracking-tight text-lava">
        Forest Reserves &amp;<br/><em className="font-light italic text-hibiscus">Wild Lands</em>
      </h2>
      <p className="mb-12 max-w-[640px] font-display text-xl font-light italic leading-[1.7] text-lava/70">
        {content.lead}
      </p>

      <div className="mt-16">
        {content.items.map((item, idx) => (
          <div
            key={idx}
            className={`grid gap-4 py-8 sm:grid-cols-[200px_1fr] sm:gap-12 sm:items-start ${
              idx === 0 ? "border-y" : "border-b"
            } border-lava/10`}
          >
            <div>
              <strong className="block text-base font-semibold text-lava">
                {item.name}
              </strong>
              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.15em] text-hibiscus/70">
                {item.zone}
              </span>
            </div>
            <span className="text-base font-light leading-[1.7] text-lava/70">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
