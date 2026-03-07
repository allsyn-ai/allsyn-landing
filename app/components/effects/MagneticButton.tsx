"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const reduced = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * strength;
    const dy = (e.clientY - centerY) * strength;
    setTransform(`translate(${dx}px, ${dy}px)`);
  }

  function handleMouseLeave() {
    setTransform("");
  }

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        transform: transform || "translate(0, 0)",
        transition: transform ? "none" : "transform 0.4s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
