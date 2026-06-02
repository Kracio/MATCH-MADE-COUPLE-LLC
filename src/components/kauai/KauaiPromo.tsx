import { kauaiContent } from "@/content/kauai-content";

export function KauaiPromo() {
  const content = kauaiContent.promo;
  return (
    <section className="bg-hibiscus px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row md:gap-16">
        <div className="max-w-xl text-center md:text-left">
          <h3 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-normal leading-[1.1] text-shell">
            {content.title}
          </h3>
          <p className="mt-3 text-base font-medium text-shell/80">
            {content.description}
          </p>
        </div>
        <a
          href={content.button.href}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap bg-shell px-8 py-4 text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-hibiscus transition-colors hover:bg-sand/90"
        >
          {content.button.label}
        </a>
      </div>
    </section>
  );
}
