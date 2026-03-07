"use client";

import MagneticButton from "./effects/MagneticButton";

export default function Header() {
  return (
    <nav
      className="sticky top-0 z-100 border-b backdrop-blur-[20px]"
      style={{
        borderColor: "var(--color-bg-card-border)",
        background: "rgba(6, 6, 15, 0.85)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-5">
        <a href="/" className="flex items-center gap-2.5 no-underline cursor-pointer">
          <div
            className="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm text-black"
            style={{
              background: "linear-gradient(135deg, var(--color-cyan), var(--color-blue))",
              fontFamily: "var(--font-mono)",
            }}
          >
            &#5765;
          </div>
          <span
            className="font-bold text-lg tracking-[2px]"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text-primary)",
            }}
          >
            ALLSYN
          </span>
        </a>
        <div className="nav-links flex gap-8 items-center">
          <a
            href="#features"
            className="text-sm font-medium no-underline cursor-pointer py-2 min-h-11 flex items-center transition-colors duration-200"
            style={{ color: "var(--color-text-dim)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-dim)")}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium no-underline cursor-pointer py-2 min-h-11 flex items-center transition-colors duration-200"
            style={{ color: "var(--color-text-dim)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-dim)")}
          >
            Pricing
          </a>
          <a
            href="https://github.com/allsyn-ai/allsyn-core"
            className="text-sm font-medium no-underline cursor-pointer py-2 min-h-11 flex items-center transition-colors duration-200"
            style={{ color: "var(--color-text-dim)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-dim)")}
          >
            GitHub
          </a>
          <a
            href="https://hlidskjalf.dev"
            className="text-sm font-medium no-underline cursor-pointer py-2 min-h-11 flex items-center transition-colors duration-200"
            style={{ color: "var(--color-text-dim)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-dim)")}
          >
            Docs
          </a>
          <MagneticButton>
            <a
              href="#waitlist"
              className="px-5.5 py-2.5 rounded-md text-[13px] font-semibold cursor-pointer no-underline min-h-11 flex items-center transition-all duration-200"
              style={{
                background: "var(--color-cyan-dim)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                color: "var(--color-cyan)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(0, 212, 255, 0.18)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--color-cyan-dim)")
              }
            >
              Join Waitlist
            </a>
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
}
