"use client";

export default function Footer() {
  return (
    <footer
      className="py-12 text-center"
      style={{ borderTop: "1px solid var(--color-bg-card-border)" }}
    >
      <div className="container">
        <div className="flex gap-7 justify-center mb-4.5">
          <a
            href="https://github.com/allsyn-ai"
            className="no-underline py-2 min-h-11 inline-flex items-center transition-colors duration-200"
            style={{ color: "var(--color-text-dim)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-dim)")
            }
          >
            GitHub
          </a>
          <a
            href="https://hlidskjalf.dev"
            className="no-underline py-2 min-h-11 inline-flex items-center transition-colors duration-200"
            style={{ color: "var(--color-text-dim)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-dim)")
            }
          >
            Docs
          </a>
          <a
            href="https://runteksolutions.com"
            className="no-underline py-2 min-h-11 inline-flex items-center transition-colors duration-200"
            style={{ color: "var(--color-text-dim)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-dim)")
            }
          >
            R&uacute;nTek Solutions
          </a>
        </div>
        <p className="text-[13px]" style={{ color: "var(--color-text-dimmer)" }}>
          &copy; 2026 R&uacute;nTek Solutions LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
