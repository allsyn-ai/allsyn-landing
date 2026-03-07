"use client";

import { useState, useEffect } from "react";
import MagneticButton from "./effects/MagneticButton";
import ScrollReveal from "./effects/ScrollReveal";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      setMessage(
        "Payment successful! Welcome to Allsyn. We'll be in touch with your access details."
      );
      setIsError(false);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setMessage("Please enter a valid email.");
      setIsError(true);
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, tier: "pro" }),
      });
      const data = await res.json();

      if (data.success) {
        setMessage(data.message);
        setIsError(false);
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong.");
        setIsError(true);
      }
    } catch {
      setMessage("Network error. Please try again.");
      setIsError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-24 lg:py-32 text-center" id="waitlist">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <ScrollReveal>
            <div
              className="text-xs tracking-[3px] uppercase mb-6 text-cyan"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Early Access
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Get in before everyone else.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-text-dim max-w-xl mx-auto leading-relaxed">
              Join the waitlist for early access to Allsyn Pro and the
              Hlidskj&aacute;lf dashboard. We&apos;ll notify you when
              it&apos;s ready.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <form
            className="flex gap-3 max-w-lg mx-auto flex-wrap justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="you@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[250px] px-5 py-4 rounded-xl text-[15px] text-text outline-none transition-all duration-200"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-body)",
              }}
            />
            <MagneticButton>
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-4 rounded-xl font-semibold text-[15px] text-black cursor-pointer transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, var(--cyan), var(--blue))",
                  boxShadow: "0 4px 20px rgba(0, 212, 255, 0.25)",
                  border: "none",
                }}
              >
                {submitting ? "Joining..." : "Join Waitlist"}
              </button>
            </MagneticButton>
          </form>
          {message && (
            <div
              className="mt-4 text-sm"
              style={{ color: isError ? "#ff9ea4" : "var(--green)" }}
            >
              {message}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
