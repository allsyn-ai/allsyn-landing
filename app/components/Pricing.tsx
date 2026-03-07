"use client";

import TiltCard from "./effects/TiltCard";
import MagneticButton from "./effects/MagneticButton";
import ScrollReveal from "./effects/ScrollReveal";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 shrink-0"
    style={{
      stroke: "var(--color-cyan)",
      strokeWidth: 2,
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Pricing() {
  async function checkout(tier: string) {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Failed to start checkout. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
  }

  return (
    <section className="py-[120px]" id="pricing">
      <div className="container">
        <ScrollReveal>
          <div
            className="text-xs tracking-[3px] uppercase mb-3.5 text-center"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-cyan)",
            }}
          >
            Pricing
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2
            className="font-bold mb-14 tracking-[-0.01em] leading-[1.2] text-center"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 36px)",
            }}
          >
            Start free. Scale when ready.
          </h2>
        </ScrollReveal>
        <div className="pricing-grid grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 max-w-[1000px] mx-auto items-start">
          {/* Core */}
          <ScrollReveal delay={150}>
            <TiltCard intensity={6}>
              <div className="price-card">
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Core
                </h3>
                <div
                  className="text-[44px] font-bold my-4.5 tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  $0
                  <span
                    className="text-base font-normal"
                    style={{
                      color: "var(--color-text-dim)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    /forever
                  </span>
                </div>
                <div
                  className="text-sm mb-7"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  Open-source. Self-hosted.
                </div>
                <ul className="list-none text-left mb-8">
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Multi-model routing engine
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Discord gateway
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Agent lifecycle management
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Health API
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Community support
                  </li>
                </ul>
                <MagneticButton className="w-full">
                  <a
                    href="https://github.com/allsyn-ai/allsyn-core"
                    className="btn-secondary"
                    style={{ width: "100%", minHeight: "48px" }}
                  >
                    Get Started
                  </a>
                </MagneticButton>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Pro */}
          <ScrollReveal delay={250}>
            <TiltCard intensity={6}>
              <div className="price-card featured">
                <div
                  className="inline-block px-3.5 py-1 rounded-[20px] text-[11px] font-semibold text-black mb-4 tracking-[1px] uppercase"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-cyan), var(--color-blue))",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Most Popular
                </div>
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Pro
                </h3>
                <div
                  className="text-[44px] font-bold my-4.5 tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  $49
                  <span
                    className="text-base font-normal"
                    style={{
                      color: "var(--color-text-dim)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    /mo
                  </span>
                </div>
                <div
                  className="text-sm mb-7"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  For solo founders and small teams.
                </div>
                <ul className="list-none text-left mb-8">
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Everything in Core
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Hlidskj&aacute;lf dashboard (macOS + iOS)
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Voice integration
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Advanced memory &amp; context
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Priority support
                  </li>
                </ul>
                <MagneticButton className="w-full">
                  <button
                    onClick={() => checkout("pro")}
                    className="btn-primary"
                    style={{ width: "100%", minHeight: "48px" }}
                  >
                    Subscribe &mdash; $49/mo
                  </button>
                </MagneticButton>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Enterprise */}
          <ScrollReveal delay={350}>
            <TiltCard intensity={6}>
              <div className="price-card">
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Enterprise
                </h3>
                <div
                  className="text-[44px] font-bold my-4.5 tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Starting at $199
                  <span
                    className="text-base font-normal"
                    style={{
                      color: "var(--color-text-dim)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    /mo
                  </span>
                </div>
                <div
                  className="text-sm mb-7"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  For teams and agencies. Custom pricing based on needs.
                </div>
                <ul className="list-none text-left mb-8">
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Everything in Pro
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Unlimited agents
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Priority support &amp; SLA
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Custom skill development
                  </li>
                  <li
                    className="py-2 text-sm flex items-center gap-2.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    <CheckIcon />
                    Dedicated onboarding
                  </li>
                </ul>
                <MagneticButton className="w-full">
                  <button
                    onClick={() => checkout("enterprise")}
                    className="btn-primary"
                    style={{ width: "100%", minHeight: "48px" }}
                  >
                    Contact Sales
                  </button>
                </MagneticButton>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
