"use client";

import Terminal from "./Terminal";
import ParticleField from "./effects/ParticleField";
import GradientMesh from "./effects/GradientMesh";
import MagneticButton from "./effects/MagneticButton";
import ScrollReveal from "./effects/ScrollReveal";

export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24">
        <ScrollReveal>
          <div
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-3xl text-xs mb-10 backdrop-blur-[10px]"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-bg-card-border)",
              fontFamily: "var(--font-mono)",
              color: "var(--color-cyan)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--color-green)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Open-Source Core &middot; Built by R&uacute;nTek Solutions
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-heading)",
              background:
                "linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The AI orchestrator
            <br />
            you actually{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--color-cyan), var(--color-blue))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              control
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--color-text-dim)" }}
          >
            Multi-model routing, native monitoring, Discord&nbsp;C2, and
            voice &mdash; all open&#8209;source. No vendor lock&#8209;in.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <a href="#waitlist" className="btn-primary">
                Join the Waitlist
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://github.com/allsyn-ai/allsyn-core"
                className="btn-secondary"
              >
                View on GitHub
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="mt-20">
            <Terminal />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
