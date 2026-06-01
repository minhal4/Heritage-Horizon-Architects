"use client";

import { useEffect, useRef, CSSProperties } from "react";

interface SlideInProps {
  children: React.ReactNode;
  from?: "left" | "right" | "bottom";
  delay?: number;
  className?: string;
}

const TRANSFORMS: Record<string, string> = {
  left:   "translateX(-70px)",
  right:  "translateX(70px)",
  bottom: "translateY(50px)",
};

export function SlideIn({ children, from = "bottom", delay = 0, className = "" }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state
    el.style.opacity = "0";
    el.style.transform = TRANSFORMS[from];
    el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
