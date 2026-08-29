"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { TextAnimate } from "@/components/ui/text-animate";
import { profileConfig } from "@/config/profile";

const titles = profileConfig.titles;

export function AnimatedTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Increased the interval time to 4500ms so that the exit animation has time to finish
    // before the next one starts. This prevents titles from being skipped.
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-6 flex items-center">
      <AnimatePresence mode="wait">
        <TextAnimate
          key={index}
          animation="blurIn"
          by="word"
          duration={0.8}
          className="text-muted-foreground text-sm sm:text-base font-medium"
        >
          {titles[index]}
        </TextAnimate>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedTitle;
