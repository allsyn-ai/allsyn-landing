"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import TiltCard from "./effects/TiltCard";
import MagneticButton from "./effects/MagneticButton";
import ScrollReveal from "./effects/ScrollReveal";

interface PriceTier {
  name: string;
  price: string;
  period: string;
  subtitle: string;
  features: string[];
  cta: string;
  featured?: boolean;
  action: "github" | "checkout-pro" | "checkout-enterprise";
}

const tiers: PriceTier[] = [
  {
    name: "Core",
    price: "$0",
    period: "/forever",
    subtitle: "Open-source. Self-hosted.",
    features: [
      "Multi-model routing engine",
      "Discord gateway",
      "Agent lifecycle management",
      "Health API",
      "Community support",
    ],
    cta: "Get Started",
    action: "github",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    subtitle: "For solo founders and small teams.",
    features: [
      "Everything in Core",
      "Hlidskj\u00e1lf dashboard (macOS + iOS)",
      "Voice integration",
      "Advanced memory & context",
      "Priority support",
    ],
    cta: "Subscribe \u2014 $49/mo",
    featured: true,
    action: "checkout-pro",
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/mo",
    subtitle: "For teams and agencies. Custom plans available.",
    features: [
      "Everything in Pro",
      "Unlimited agents",
      "Priority support & SLA",
      "Custom skill development",
      "Dedicated onboarding",
    ],
    cta: "Contact Sales",
    action: "checkout-enterprise",
  },
];

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

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <ScrollReveal>
            <div
              className="text-xs tracking-[3px] uppercase mb-6 text-cyan"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Pricing
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Start free. Scale when ready.
            </h2>
          </ScrollReveal>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center"
          onMouseLeave={() => setHovered(null)}
        >
          {tiers.map((tier, i) => {
            const isHovered = hovered === i;
            const isSibling = hovered !== null && hovered !== i;

            return (
              <ScrollReveal key={tier.name} delay={150 + i * 100}>
                <div
                  onMouseEnter={() => setHovered(i)}
                  className="transition-all duration-300 ease-out"
                  style={{
                    transform: isHovered
                      ? "scale(1.05)"
                      : isSibling
                        ? "scale(0.97)"
                        : "scale(1)",
                    opacity: isSibling ? 0.7 : 1,
                    zIndex: isHovered ? 10 : 1,
                    position: "relative",
                  }}
                >
                  <TiltCard intensity={6}>
                    <div
                      className={`p-8 lg:p-10 rounded-xl glass-card text-center h-full transition-shadow duration-300 ${
                        isHovered
                          ? "border-border-accent shadow-[0_0_60px_rgba(0,212,255,0.12)]"
                          : tier.featured
                            ? "border-border-accent shadow-[0_0_50px_rgba(0,212,255,0.08)]"
                            : ""
                      }`}
                      style={
                        isHovered
                          ? { background: "rgba(0, 212, 255, 0.04)" }
                          : tier.featured
                            ? { background: "rgba(0, 212, 255, 0.03)" }
                            : {}
                      }
                    >
                      {tier.featured && (
                        <div
                          className="inline-block px-4 py-1 rounded-full text-[11px] font-semibold text-black mb-5 tracking-[1px] uppercase"
                          style={{
                            background: "linear-gradient(135deg, var(--cyan), var(--blue))",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          Most Popular
                        </div>
                      )}

                      <h3 className="text-xl mb-2">{tier.name}</h3>

                      <div className="text-[44px] font-bold my-4 tracking-tight">
                        {tier.price}
                        <span className="text-base font-normal text-text-dim" style={{ fontFamily: "var(--font-body)" }}>
                          {tier.period}
                        </span>
                      </div>

                      <p className="text-sm text-text-dim mb-8">{tier.subtitle}</p>

                      <ul className="text-left space-y-3 mb-10">
                        {tier.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-3 text-sm text-text-dim">
                            <Check className="w-4 h-4 text-cyan shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>

                      <MagneticButton className="w-full">
                        {tier.action === "github" ? (
                          <a
                            href="https://github.com/allsyn-ai/allsyn-core"
                            className="w-full py-4 rounded-xl font-medium text-[15px] text-text glass-card inline-flex items-center justify-center hover:border-border-hover transition-all duration-200"
                          >
                            {tier.cta}
                          </a>
                        ) : (
                          <button
                            onClick={() => checkout(tier.action === "checkout-pro" ? "pro" : "enterprise")}
                            className="w-full py-4 rounded-xl font-semibold text-[15px] text-black inline-flex items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                              background: "linear-gradient(135deg, var(--cyan), var(--blue))",
                              boxShadow: "0 4px 20px rgba(0, 212, 255, 0.2)",
                              border: "none",
                            }}
                          >
                            {tier.cta}
                          </button>
                        )}
                      </MagneticButton>
                    </div>
                  </TiltCard>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
