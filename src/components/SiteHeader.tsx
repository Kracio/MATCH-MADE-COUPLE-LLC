import type { siteContent } from "@/content/site-content";

type SiteHeaderProps = {
  content: typeof siteContent.header;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-40 focus:rounded-full focus:bg-shell focus:px-5 focus:py-3 focus:text-lava">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[2.25rem] border border-palm/20 bg-shell/86 p-2.5 shadow-[0_18px_60px_rgb(74_44_36_/_0.09)] ring-1 ring-palm/10 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
        <a href="#main-content" className="group flex items-center gap-3 rounded-full pr-3 focus-visible:outline-hibiscus">
          <span className="rounded-full bg-white/55 p-1 ring-1 ring-palm/10">
            <img src={content.logo.src} alt={content.logo.alt} className="size-12 rounded-full object-cover shadow-[0_10px_24px_rgb(74_44_36_/_0.13)] ring-1 ring-white/80 sm:size-14" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-[-0.02em] text-palm sm:text-xl">{content.title}</span>
            <span className="mt-1 max-w-[16rem] text-[9px] font-bold uppercase tracking-[0.2em] text-palm/65 sm:max-w-none sm:text-[10px]">{content.tagline}</span>
          </span>
        </a>
        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-1 lg:justify-end">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-palm/75 hover:bg-sand/85 hover:text-palm focus-visible:outline-hibiscus">
              {item.label}
            </a>
          ))}
        </nav>
        <nav aria-label="Social links" className="flex flex-wrap gap-2 lg:hidden">
          {content.social.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full bg-tide/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-tide">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
