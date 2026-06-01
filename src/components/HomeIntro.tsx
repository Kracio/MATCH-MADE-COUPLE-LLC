import type { siteContent } from "@/content/site-content";
import { LinkButton } from "./LinkButton";

type HomeIntroProps = {
  content: typeof siteContent.intro;
};

export function HomeIntro({ content }: HomeIntroProps) {
  const headingAccent = "Match Made Adventures!";
  const [headingLead, headingTail = ""] = content.heading.split(headingAccent);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-0 pt-[110px] sm:px-6 sm:pb-0 sm:pt-[110px] lg:px-8 lg:pb-0 lg:pt-[130px] xl:pt-[140px]">
      <div className="absolute inset-0 -z-30 bg-[#FBFAF6]" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-20 opacity-[0.055] [background-image:linear-gradient(90deg,rgb(79_124_120_/_0.28)_1px,transparent_1px),linear-gradient(0deg,rgb(47_79_62_/_0.18)_1px,transparent_1px)] [background-size:44px_44px]"
        aria-hidden="true"
      />
      <svg
        data-hero-decor
        data-parallax="18"
        aria-hidden="true"
        viewBox="0 0 1200 720"
        className="absolute inset-x-0 top-14 -z-10 hidden h-[42rem] w-full text-tide/18 lg:block"
        fill="none"
      >
        <path d="M92 504C226 420 314 419 436 470C562 523 650 500 766 405C868 321 968 300 1114 350" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeDasharray="8 18" />
        <g transform="translate(50, 80)">
          <path d="M884 112h126v88H884z" stroke="currentColor" strokeWidth="1.15" />
          <path d="M904 134c25 18 54 18 86 0M904 157c25 18 54 18 86 0M904 180c25 18 54 18 86 0" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" />
        </g>
        <g transform="translate(475, 160) scale(3) rotate(10)" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </g>
        <path d="M1010 472c-18-58 11-104 63-126M1022 472c11-54 45-91 102-112M1036 472c34-37 73-62 119-73" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>

      <div className="w-full mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(34rem,1.12fr)] lg:items-center lg:gap-10 xl:gap-14">
        <div className="relative z-10 max-w-[40rem] lg:mt-6 xl:mt-0">

          <p data-hero-item className="mb-4 inline-flex rounded-full bg-shell/84 px-4 py-2 text-[0.64rem] font-bold uppercase tracking-[0.24em] text-tide shadow-[0_16px_48px_rgb(47_79_62_/_0.08)] ring-1 ring-tide/18 backdrop-blur-sm">
            {content.eyebrow}
          </p>
          <h1 data-hero-item className="max-w-[41rem] font-display text-[clamp(2.75rem,8vw,4.5rem)] font-medium leading-[0.94] tracking-tight text-palm sm:text-[clamp(3.1rem,6.5vw,4.8rem)] lg:text-[clamp(3.2rem,4.5vw,4.8rem)]">
            {headingLead}
            <span className="italic text-hibiscus decoration-hibiscus/20 decoration-2 underline-offset-[0.14em] [text-wrap:balance]">{headingAccent}</span>
            {headingTail}
          </h1>
          <div data-hero-item className="mt-6 max-w-[39rem] space-y-4 border-l border-palm/22 pl-5 text-[1.1rem] leading-8 text-palm/85 sm:pl-6 sm:text-[1.15rem] sm:leading-9">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div data-hero-item className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <LinkButton href="#islands">Explore the islands</LinkButton>
            <LinkButton href="#work-with-us" variant="secondary">Work with us</LinkButton>
          </div>

          <div data-hero-decor className="mt-10 flex items-center gap-3 lg:mt-12" aria-hidden="true">
            <svg viewBox="0 0 48 48" className="size-8 text-tide/75" fill="none">
              <path d="M24 24c-7-7-8-13-3-17 5-3 9 1 8 9 5-6 11-6 14-1 3 6-3 10-11 9 8 3 11 9 7 14-5 5-10 1-12-7-1 8-6 13-12 10-6-4-4-11 5-14-9 1-15-3-13-9 2-6 10-5 17 6Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
              <circle cx="24" cy="24" r="3" fill="currentColor" />
            </svg>
            <div className="h-px w-48 max-w-full bg-gradient-to-r from-tide/65 via-palm/25 to-transparent" />
          </div>
        </div>

        <div data-hero-visual className="relative mx-auto mt-12 min-h-[26rem] w-full max-w-[40rem] overflow-visible sm:min-h-[30rem] lg:mr-0 lg:mt-0 lg:min-h-[34rem] lg:max-w-[42rem] xl:mt-0 xl:min-h-[36rem]">
          <div className="absolute inset-x-6 -bottom-10 top-32 -z-10 rounded-[3rem] bg-[linear-gradient(135deg,rgb(79_124_120_/_0.18),rgb(244_232_213_/_0.2)_48%,rgb(47_79_62_/_0.14))] blur-2xl" aria-hidden="true" />
          <div className="absolute inset-0 z-10 flex items-center justify-center -translate-y-5">
            <img src={content.image.src} alt={content.image.alt} className="relative w-full max-w-[100%] scale-105 object-contain object-center drop-shadow-[0_24px_45px_rgb(47_79_62_/_0.15)] lg:translate-x-6 lg:scale-110 xl:translate-x-8 xl:scale-[1.15]" />
          </div>

        </div>
      </div>
    </section>
  );
}
