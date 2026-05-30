import type { siteContent } from "@/content/site-content";
import { SectionShell } from "./SectionShell";

type HomeReviewsProps = {
  content: typeof siteContent.reviews;
};

export function HomeReviews({ content }: HomeReviewsProps) {
  return (
    <SectionShell id={content.id} eyebrow="Trusted collaborations" title={content.heading}>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        {content.items.map((review, index) => (
          <article
            key={review.author}
            data-reveal
            className={`rounded-[2rem] bg-lava/5 p-2 ring-1 ring-lava/10 ${index === 0 ? "lg:row-span-2" : ""}`}
          >
            <div className="flex h-full flex-col justify-between rounded-[1.55rem] bg-shell p-7 shadow-[0_22px_70px_rgb(74_44_36_/_0.08)] sm:p-9">
              <blockquote className={`${index === 0 ? "text-xl leading-9" : "leading-8"} text-lava/76`}>
                “{review.quote}”
              </blockquote>
              <a href={review.href} className="mt-8 inline-flex w-fit rounded-full bg-tide/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-tide hover:bg-tide hover:text-shell">
                {review.author}
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
