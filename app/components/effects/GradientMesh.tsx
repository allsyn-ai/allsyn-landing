"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export default function GradientMesh() {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    function handleMove(e: MouseEvent) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setMousePos({
        x: (e.clientX / vw) * 100,
        y: (e.clientY / vh) * 100,
      });
    }

    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(ellipse 40% 50% at ${mousePos.x * 0.6 + 20}% ${mousePos.y * 0.4 + 10}%, rgba(0, 212, 255, 0.04) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at ${100 - mousePos.x * 0.5}% ${mousePos.y * 0.3 + 40}%, rgba(0, 102, 255, 0.03) 0%, transparent 70%),
          radial-gradient(ellipse 35% 45% at ${mousePos.x * 0.4 + 30}% ${100 - mousePos.y * 0.3}%, rgba(0, 212, 255, 0.025) 0%, transparent 70%)
        `,
        transition: "background 0.3s ease",
      }}
    />
  );
}
