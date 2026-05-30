import type { siteContent } from "@/content/site-content";
import { SectionShell } from "./SectionShell";

type HomeContactProps = {
  content: typeof siteContent.contact;
};

export function HomeContact({ content }: HomeContactProps) {
  return (
    <SectionShell id={content.id} eyebrow="Contact" title={content.heading} className="bg-sand/60">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div data-reveal className="rounded-[2rem] bg-lava/5 p-2 ring-1 ring-lava/10">
          <div className="h-full overflow-hidden rounded-[1.55rem] bg-shell">
            <img src={content.image.src} alt={content.image.alt} className="h-full min-h-[28rem] w-full object-cover" />
          </div>
        </div>
        <div data-reveal className="rounded-[2rem] bg-lava/5 p-2 ring-1 ring-lava/10">
          <div className="h-full rounded-[1.55rem] bg-shell p-7 shadow-[0_22px_70px_rgb(74_44_36_/_0.10)] sm:p-9">
            <p className="max-w-2xl text-xl font-semibold leading-9 text-lava/78">{content.body}</p>
            <form className="mt-9 grid gap-5" aria-label="Collaboration contact form">
              <div className="grid gap-2">
                <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-[0.18em] text-lava/70">
                  {content.fields.name}
                </label>
                <input id="contact-name" name="name" required autoComplete="name" className="rounded-2xl border border-lava/15 bg-sand/40 px-4 py-4 text-base text-lava outline-none focus:border-hibiscus" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-[0.18em] text-lava/70">
                  {content.fields.email}
                </label>
                <input id="contact-email" name="email" type="email" required autoComplete="email" className="rounded-2xl border border-lava/15 bg-sand/40 px-4 py-4 text-base text-lava outline-none focus:border-hibiscus" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-[0.18em] text-lava/70">
                  {content.fields.message}
                </label>
                <textarea id="contact-message" name="message" required rows={6} className="resize-y rounded-2xl border border-lava/15 bg-sand/40 px-4 py-4 text-base text-lava outline-none focus:border-hibiscus" />
              </div>
              <button type="submit" className="group inline-flex w-fit items-center gap-3 rounded-full bg-lava px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-shell shadow-[0_18px_55px_rgb(74_44_36_/_0.12)] hover:bg-palm active:scale-[0.98]">
                <span>{content.fields.submit}</span>
                <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-white/15 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                  <svg viewBox="0 0 18 18" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M3 9h11" strokeLinecap="round" />
                    <path d="m10 5 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
