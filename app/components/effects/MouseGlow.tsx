"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [reduced, visible]);

  if (reduced) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: pos.x - 300,
        top: pos.y - 300,
        width: 600,
        height: 600,
        background:
          "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
