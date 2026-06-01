import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, eyebrow, title, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mb-12 max-w-3xl lg:mb-16">
          {eyebrow ? (
            <p className="mb-5 inline-flex rounded-full bg-tide/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-tide">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-[clamp(2.4rem,12vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-lava sm:text-5xl lg:text-7xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
