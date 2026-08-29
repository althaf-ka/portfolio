import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  title?: string;
}

export function Section({
  title,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-8 sm:py-10", className)} {...props}>
      {title && (
        <h2 className="mb-3.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}

export default Section;
