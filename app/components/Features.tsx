"use client";

import TiltCard from "./effects/TiltCard";
import ScrollReveal from "./effects/ScrollReveal";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Multi-Model Routing",
    desc: "Route to OpenAI, Anthropic, Azure, or local models per-agent. Automatic fallback when a provider fails. No vendor lock-in.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Native Dashboard",
    desc: "Hlidskj\u00e1lf \u2014 a native SwiftUI app for macOS and iOS. Real-time agent monitoring, event feeds, and command dispatch. No Electron bloat.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Discord Command & Control",
    desc: "Channel-based agent routing, approval workflows, planner-to-dev handoffs. Your Discord server becomes mission control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    title: "Voice Integration",
    desc: '\u201cHey Allsyn\u201d \u2014 speech-to-text, conversational AI, and text-to-speech. On-device processing for privacy. Discord voice channel support.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    title: "OpenClaw Migration",
    desc: "One command converts your openclaw.json to Allsyn format. Agents, routes, channels, tokens \u2014 all migrated automatically.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "You Own It",
    desc: "Apache 2.0 open-source core. Run it on your Mac, your server, your cloud. No 512 vulnerabilities. No surprise governance changes.",
  },
];

export default function Features() {
  return (
    <section className="py-24 lg:py-32" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div
            className="text-xs tracking-[3px] uppercase mb-5 text-center"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-cyan)",
            }}
          >
            Capabilities
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2
            className="font-bold mb-16 tracking-[-0.02em] leading-[1.15] text-center"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(30px, 4.5vw, 42px)",
            }}
          >
            Everything OpenClaw promised.
            <br />
            Actually delivered.
          </h2>
        </ScrollReveal>
        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={150 + i * 80}>
              <TiltCard>
                <div className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3
                    className="text-[17px] font-semibold mb-2.5 tracking-[-0.01em]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-sm leading-[1.7]"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
