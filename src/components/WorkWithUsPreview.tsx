import type { siteContent } from "@/content/site-content";
import { LinkButton } from "./LinkButton";
import { SectionShell } from "./SectionShell";

type WorkWithUsPreviewProps = {
  content: typeof siteContent.workWithUs;
};

export function WorkWithUsPreview({ content }: WorkWithUsPreviewProps) {
  return (
    <SectionShell id={content.id} eyebrow="For brands and hosts" title={content.heading} className="bg-palm text-shell">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="rounded-[2rem] bg-white/[0.07] p-2 ring-1 ring-white/[0.12]">
          <div className="rounded-[1.55rem] bg-shell p-7 text-lava sm:p-9">
            <p className="text-xl leading-9 text-lava/75">{content.body}</p>
            <div className="mt-8">
              <LinkButton href={content.href}>Visit Work With Us</LinkButton>
            </div>
          </div>
        </div>
        <div data-reveal className="rounded-[2rem] bg-white/[0.07] p-2 ring-1 ring-white/[0.12]">
          <div className="rounded-[1.55rem] bg-[#244233] p-7 sm:p-9">
            <h3 className="font-display text-4xl font-semibold tracking-[-0.03em] text-shell">{content.servicesHeading}</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {content.services.map((service) => (
                <article key={service.title} className="border-t border-shell/[0.18] pt-5">
                  <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-sand">{service.title}</h4>
                  {service.kicker ? <p className="mt-3 font-semibold leading-7 text-shell">{service.kicker}</p> : null}
                  <p className="mt-3 leading-7 text-shell/72">{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
