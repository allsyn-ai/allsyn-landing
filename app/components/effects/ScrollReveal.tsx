"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true); // default visible for SSR
  const reduced = useReducedMotion();

  useEffect(() => {
    // On mount, hide elements so they can animate in
    setMounted(true);
    setVisible(false);

    if (reduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    // Small delay to ensure the hidden state is painted before observing
    requestAnimationFrame(() => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [reduced]);

  const translateMap = {
    up: "translateY(30px)",
    left: "translateX(30px)",
    right: "translateX(-30px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={mounted ? {
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : translateMap[direction],
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
        willChange: "opacity, transform",
      } : {}}
    >
      {children}
    </div>
  );
}
