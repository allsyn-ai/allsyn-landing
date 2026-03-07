"use client";

import { useState, useEffect } from "react";
import MagneticButton from "./effects/MagneticButton";
import ScrollReveal from "./effects/ScrollReveal";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      setMessage(
        "Payment successful! Welcome to Allsyn. We'll be in touch with your access details."
      );
      setMessageColor("var(--color-green)");
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setMessage("Please enter a valid email.");
      setMessageColor("var(--color-error)");
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
        setMessageColor("var(--color-green)");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong.");
        setMessageColor("var(--color-error)");
      }
    } catch {
      setMessage("Network error. Please try again.");
      setMessageColor("var(--color-error)");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-[160px] text-center" id="waitlist">
      <div className="container">
        <ScrollReveal>
          <div
            className="text-xs tracking-[3px] uppercase mb-3.5"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-cyan)",
            }}
          >
            Early Access
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2
            className="font-bold mb-14 tracking-[-0.01em] leading-[1.2]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 36px)",
            }}
          >
            Get in before everyone else.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p
            className="max-w-[500px] mx-auto mb-0"
            style={{ color: "var(--color-text-dim)" }}
          >
            Join the waitlist for early access to Allsyn Pro and the
            Hlidskj&aacute;lf dashboard. We&apos;ll notify you when it&apos;s
            ready.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <form
            className="waitlist-form flex gap-3 max-w-[540px] mx-auto mt-10 flex-wrap justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="you@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MagneticButton>
              <button
                type="submit"
                className="btn-primary"
                disabled={submitting}
                style={{ minHeight: "48px", minWidth: "140px" }}
              >
                {submitting ? "Joining..." : "Join Waitlist"}
              </button>
            </MagneticButton>
          </form>
          <div
            className="mt-3.5 text-sm min-h-5"
            style={{ color: messageColor }}
          >
            {message}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
