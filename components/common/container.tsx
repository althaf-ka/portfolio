import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "animate-fade-in-blur container mx-auto max-w-3xl px-4 border-x min-h-screen pb-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
