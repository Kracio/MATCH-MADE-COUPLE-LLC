import type { siteContent } from "@/content/site-content";
import { SectionShell } from "./SectionShell";

type IslandGuideProps = {
  content: typeof siteContent.islands;
};

export function IslandGuide({ content }: IslandGuideProps) {
  return (
    <SectionShell
      id={content.id}
      eyebrow="Island guide"
      title={content.heading}
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FFF8EE_0%,#F4E8D5_48%,#E7F4DC_100%)]"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_10%,rgb(96_239_255_/_0.28),transparent_31%),radial-gradient(circle_at_86%_18%,rgb(150_250_215_/_0.28),transparent_30%),radial-gradient(circle_at_42%_92%,rgb(184_92_74_/_0.13),transparent_34%)]" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(90deg,rgb(79_124_120_/_0.32)_1px,transparent_1px),linear-gradient(0deg,rgb(47_79_62_/_0.2)_1px,transparent_1px)] [background-size:46px_46px]"
        aria-hidden="true"
      />

      <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start lg:gap-10 xl:gap-14">
        <div data-reveal className="rounded-[2.25rem] bg-lava/[0.055] p-2 ring-1 ring-lava/10 shadow-[0_28px_90px_rgb(79_124_120_/_0.12)] lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-[1.8rem] bg-shell/[0.92] p-7 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.72)] sm:p-8 lg:p-9">
            <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(circle,rgb(96_239_255_/_0.26),transparent_68%)]" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 size-56 rounded-full bg-[radial-gradient(circle,rgb(150_250_215_/_0.24),transparent_70%)]" aria-hidden="true" />
            <svg aria-hidden="true" viewBox="0 0 360 220" className="absolute inset-x-0 bottom-0 h-44 w-full text-tide/[0.18]" fill="none">
              <path d="M-8 172C43 130 82 122 128 141C176 162 209 153 253 119C294 88 329 82 368 101" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="7 15" />
              <path d="M247 44c18-23 43-29 72-20M255 59c24-13 50-14 78-2M269 77c20-4 39-1 58 8" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" />
            </svg>

            <div className="relative">
              <div className="mb-7 flex items-center justify-between gap-5">
                <div className="rounded-[1.35rem] bg-[linear-gradient(135deg,rgb(96_239_255_/_0.28),rgb(150_250_215_/_0.22)_54%,rgb(255_248_238_/_0.9))] p-3 ring-1 ring-tide/15">
                  <img src={content.icon.src} alt={content.icon.alt} className="size-14" />
                </div>
                <p className="max-w-28 text-right text-[0.64rem] font-bold uppercase leading-5 tracking-[0.22em] text-tide/80">
                  Choose your route
                </p>
              </div>
              <p className="text-xl leading-9 text-lava/[0.78] lg:text-[1.32rem] lg:leading-10">{content.body}</p>
              <div className="mt-8 grid grid-cols-3 gap-2 text-center" aria-hidden="true">
                {["137", "8", "4"].map((stat, index) => (
                  <div key={stat} className="rounded-2xl bg-sand/[0.55] px-3 py-4 ring-1 ring-lava/[0.08]">
                    <p className="font-display text-3xl font-semibold tracking-tight text-palm">{stat}</p>
                    <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-lava/[0.48]">
                      {index === 0 ? "islands" : index === 1 ? "visitor" : "major"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {content.cards.map((island, index) => {
            const isComingSoon = Boolean(island.status);
            const card = (
              <article className="group h-full rounded-[2.15rem] bg-shell/[0.55] p-2 ring-1 ring-lava/10 shadow-[0_26px_80px_rgb(74_44_36_/_0.10)] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5">
                <div className="relative min-h-[27rem] overflow-hidden rounded-[1.7rem] bg-palm shadow-[inset_0_1px_0_rgb(255_255_255_/_0.18)] sm:min-h-[29rem] lg:min-h-[31rem]">
                  <img
                    src={island.image.src}
                    alt={island.image.alt}
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(47_79_62_/_0.04)_0%,rgb(47_79_62_/_0.38)_42%,rgb(74_44_36_/_0.88)_100%)]" aria-hidden="true" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_16%,rgb(96_239_255_/_0.22),transparent_34%),radial-gradient(circle_at_82%_4%,rgb(150_250_215_/_0.17),transparent_28%)] mix-blend-screen" aria-hidden="true" />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                    <p className="rounded-full bg-shell/[0.88] px-3.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-palm shadow-[0_14px_40px_rgb(47_79_62_/_0.12)] ring-1 ring-shell/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="rounded-full bg-lava/50 px-3.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-shell ring-1 ring-shell/[0.22]">
                      {isComingSoon ? island.status : "Island guide"}
                    </p>
                  </div>
                  <svg aria-hidden="true" viewBox="0 0 420 220" className="absolute inset-x-0 bottom-16 h-40 w-full text-shell/20" fill="none">
                    <path d="M-16 148C46 118 89 118 143 139C205 164 253 153 304 112C351 75 386 71 434 91" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeDasharray="6 14" />
                    <path d="M50 182c34-15 66-15 96 0M176 187c44-18 83-18 118 0M316 181c30-12 56-12 82 0" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" />
                  </svg>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="mb-5 h-px w-full bg-gradient-to-r from-shell/70 via-shell/22 to-transparent" aria-hidden="true" />
                    <h3 className="font-display text-[clamp(3.15rem,8vw,4.8rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-shell drop-shadow-[0_8px_26px_rgb(74_44_36_/_0.35)] md:text-[clamp(3.3rem,4.8vw,5.3rem)]">
                      {island.name}
                    </h3>
                    <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                      <p className="text-lg italic leading-7 text-shell/[0.86]">{island.subtitle}</p>
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-shell/90 text-lg text-hibiscus shadow-[0_14px_40px_rgb(74_44_36_/_0.2)] ring-1 ring-shell/75 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true">
                        {island.href ? "↗" : "•"}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );

            return island.href ? (
              <a key={island.name} data-reveal href={island.href} className="block rounded-[2.15rem] focus-visible:outline-hibiscus" aria-label={`Open ${island.name} guide`}>
                {card}
              </a>
            ) : (
              <div key={island.name} data-reveal>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
