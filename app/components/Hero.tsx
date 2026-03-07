"use client";

import Terminal from "./Terminal";
import ParticleField from "./effects/ParticleField";
import GradientMesh from "./effects/GradientMesh";
import MagneticButton from "./effects/MagneticButton";
import ScrollReveal from "./effects/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
        }}
      />
      <ParticleField />
      <GradientMesh />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16">
        <ScrollReveal>
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-xs mb-12"
            style={{ fontFamily: "var(--font-mono)", color: "var(--cyan)" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--green)", animation: "pulse 2s ease-in-out infinite" }}
            />
            Open-Source Core &middot; Built by R&uacute;nTek Solutions
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.08] tracking-tight">
            <span
              style={{
                background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The AI orchestrator
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              you actually{" "}
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, var(--cyan), var(--blue))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              control
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-lg sm:text-xl text-text-dim max-w-2xl mx-auto mb-12 leading-relaxed">
            Multi-model routing, native monitoring, Discord&nbsp;C2,
            and voice &mdash; all open-source. No vendor lock-in.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <a
                href="#waitlist"
                className="px-10 py-4 rounded-xl font-semibold text-[15px] text-black inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--cyan), var(--blue))",
                  boxShadow: "0 4px 20px rgba(0, 212, 255, 0.25)",
                }}
              >
                Join the Waitlist
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://github.com/allsyn-ai/allsyn-core"
                className="px-10 py-4 rounded-xl font-medium text-[15px] text-text glass-card inline-flex items-center justify-center hover:border-border-hover transition-all duration-200"
              >
                View on GitHub
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-24">
            <Terminal />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
