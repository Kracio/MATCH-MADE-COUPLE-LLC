import { kauaiContent } from "@/content/kauai-content";

export function KauaiRegions() {
  const regions = kauaiContent.regions;
  
  return (
    <div>
      {regions.map((region, idx) => (
        <section key={region.id} id={region.id} className="border-t border-lava/10">
          <div className="relative flex min-h-[480px] h-[60vh] items-end overflow-hidden px-6 py-16 sm:px-12 lg:px-20">
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-90"
              style={{ backgroundImage: `url('${region.bgImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lava/90 via-lava/40 to-transparent" />
            
            <div className="relative z-10 max-w-2xl">
              <span className="mb-4 block text-sm tracking-[0.3em] text-hibiscus uppercase font-medium">
                {region.tag}
              </span>
              <h2 className="mb-2 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none text-shell">
                {region.title.split('&').map((part, i, arr) => (
                  <span key={i}>
                    {i === 0 && arr.length > 1 ? (
                      <>{part} &amp;<br/><em className="font-light italic text-sand">{arr[1]}</em></>
                    ) : arr.length === 1 ? (
                      <span className="italic font-light text-sand">{part}</span>
                    ) : null}
                  </span>
                ))}
              </h2>
              <p className="mt-4 max-w-[560px] font-display text-xl font-light italic leading-[1.6] text-shell/80">
                {region.description}
              </p>
            </div>
          </div>
          
          <div className="bg-shell px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 lg:grid-cols-3">
              {region.sections.map((section, sIdx) => (
                <div key={sIdx}>
                  <span className="mb-6 block border-b border-lava/10 pb-4 text-xs font-bold uppercase tracking-[0.25em] text-hibiscus">
                    {section.title}
                  </span>
                  <div className="space-y-5">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx}>
                        <strong className="mb-1 block text-base font-semibold text-lava">
                          {item.name}
                        </strong>
                        <span className="block text-base font-light leading-[1.6] text-lava/70">
                          {item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {region.bonus && (
              <div className="mx-auto mt-16 max-w-7xl">
                <div className="rounded-3xl bg-sand/30 p-10 outline outline-1 outline-lava/5">
                  <span className="mb-3 block text-xs tracking-[0.25em] text-hibiscus uppercase font-medium">
                    {region.bonus.tag}
                  </span>
                  <h4 className="mb-4 font-display text-2xl font-light italic text-lava">
                    {region.bonus.title}
                  </h4>
                  <p className="text-base font-light leading-[1.8] text-lava/80">
                    {region.bonus.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
