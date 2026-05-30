import type { siteContent } from "@/content/site-content";

type FooterProps = {
  content: typeof siteContent.footer;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-lava px-4 py-16 text-shell sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
        <div>
          <img src={content.logo.src} alt={content.logo.alt} className="size-20 rounded-full object-cover ring-1 ring-shell/20" />
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em]">{content.title}</h2>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-shell/60">{content.tagline}</p>
        </div>
        <div className="grid gap-7 sm:grid-cols-2">
          <nav aria-label="Footer social links" className="flex flex-wrap gap-2 lg:justify-end">
            {content.social.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full bg-shell/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-shell hover:bg-shell hover:text-lava">
                {item.label}
              </a>
            ))}
          </nav>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-2 lg:justify-end">
            {content.nav.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full bg-shell/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-shell hover:bg-shell hover:text-lava">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
