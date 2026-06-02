import { kauaiContent } from "@/content/kauai-content";
import { SectionShell } from "../SectionShell";

export function KauaiStayGuide() {
  const content = kauaiContent.stay;
  return (
    <SectionShell title="" className="bg-sand/60 !py-12 sm:!py-16 lg:!py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-5 block text-sm font-medium uppercase tracking-[0.3em] text-hibiscus">
          {content.tag}
        </span>
        <h2 className="mb-5 font-display text-[clamp(2.25rem,5vw,3.6rem)] font-light leading-[1.1] tracking-tight text-lava">
          Where <em className="font-light italic text-hibiscus">To Stay</em>
        </h2>
        <p className="font-display text-xl font-light italic leading-[1.7] text-lava/70">
          {content.lead}
        </p>
      </div>

      <div className="mt-10 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.regions.map((region, idx) => (
          <div
            key={idx}
            className="group rounded-3xl bg-shell p-9 outline outline-1 outline-lava/5 transition-all hover:bg-white hover:outline-hibiscus/30 hover:shadow-xl"
          >
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-hibiscus">
              {region.badge}
            </span>
            <h4 className="mb-3 font-display text-2xl font-normal leading-[1.2] text-lava">
              {region.name}
            </h4>
            <p className="text-base font-light leading-[1.7] text-lava/70">
              {region.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
