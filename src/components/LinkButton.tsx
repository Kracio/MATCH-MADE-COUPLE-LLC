type LinkButtonProps = {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
};

export function LinkButton({ href, children, variant = "primary" }: LinkButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-hibiscus text-shell hover:bg-[#8F3F32] focus-visible:outline-hibiscus"
      : "bg-[#FFF7EC] text-[#7A3E32] ring-1 ring-[#D7A58F] hover:bg-[#F7E5D8]";

  return (
    <a
      href={href}
      className={`group inline-flex min-h-11 items-center gap-3 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-[0.16em] shadow-[0_18px_55px_rgb(74_44_36_/_0.12)] active:scale-[0.98] ${classes}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-full bg-white/15 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 18 18" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M5 13 13 5" strokeLinecap="round" />
          <path d="M6.5 5H13v6.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}
