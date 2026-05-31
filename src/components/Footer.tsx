import type { siteContent } from "@/content/site-content";

type FooterProps = {
  content: typeof siteContent.footer;
};

// Simple icon mapping for social links
const SocialIcon = ({ name }: { name: string }) => {
  if (name.toLowerCase() === "instagram") {
    return (
      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="1.5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="1.5" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (name.toLowerCase() === "facebook") {
    return (
      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="1.5" />
      </svg>
    );
  }
  if (name.toLowerCase() === "amazon") {
    return (
      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeWidth="1.5" />
        <line x1="3" x2="21" y1="6" y2="6" strokeWidth="1.5" />
        <path d="M16 10a4 4 0 0 1-8 0" strokeWidth="1.5" />
      </svg>
    );
  }
  return <span className="text-xs font-bold">{name.charAt(0)}</span>;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer data-reveal-stagger className="w-full bg-hibiscus text-shell border-t border-shell/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 py-16 md:px-12 lg:px-16 lg:py-24 max-w-[85rem] mx-auto gap-12">
        
        {/* Left Side: Brand Identity */}
        <div data-reveal-child className="flex flex-col gap-2 md:w-5/12 lg:w-1/3">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-6 opacity-90 hover:opacity-100 transition-opacity">
            <img src={content.logo.src} alt={content.logo.alt} className="w-full h-full object-cover" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-shell">
            {content.title}
          </h2>
          <p className="font-display italic text-[15px] text-shell/70 mt-1">
            {content.tagline}
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            {content.social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="w-11 h-11 rounded-xl bg-shell/5 flex items-center justify-center text-shell/80 hover:bg-shell hover:text-lava transition-all duration-300 group ring-1 ring-shell/10"
              >
                <SocialIcon name={item.label} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Navigation & Copyright */}
        <div data-reveal-child className="flex flex-col md:items-end gap-6 md:w-2/3 mt-8 md:mt-0 w-full">
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 text-left w-full md:w-auto">
            {[
              { label: "HOME", href: "/" },
              { label: "ISLANDS", href: "#islands" },
              { label: "JOIN US", href: "#work-with-us" },
              { label: "PRIVACY POLICY", href: "/privacy-policy/" },
              { label: "CONTACT", href: "#contact-section" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-shell/80 text-[11px] font-bold tracking-[0.2em] uppercase hover:text-shell underline decoration-transparent hover:decoration-shell/50 underline-offset-4 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-shell/15 w-full md:text-right">
            <p className="text-shell/60 text-[13px] tracking-wide">
              © {new Date().getFullYear()} {content.title}.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
