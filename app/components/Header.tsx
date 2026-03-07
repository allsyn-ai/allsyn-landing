"use client";

import Image from "next/image";
import MagneticButton from "./effects/MagneticButton";

export default function Header() {
  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        borderColor: "var(--border)",
        background: "rgba(6, 6, 15, 0.85)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="/"
          className="flex items-center gap-3 no-underline cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Allsyn"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="font-bold text-lg tracking-[2px] text-text font-heading">
            ALLSYN
          </span>
        </a>
        <div className="nav-links flex gap-8 items-center">
          {[
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "GitHub", href: "https://github.com/allsyn-ai/allsyn-core" },
            { label: "Docs", href: "https://hlidskjalf.dev" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium no-underline py-2 text-text-dim hover:text-text transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <MagneticButton>
            <a
              href="#waitlist"
              className="px-6 py-2.5 rounded-lg text-[13px] font-semibold no-underline text-cyan transition-all duration-200"
              style={{
                background: "rgba(0, 212, 255, 0.1)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
              }}
            >
              Join Waitlist
            </a>
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
}
