"use client";

export default function Footer() {
  return (
    <footer className="py-12 text-center" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-8 justify-center mb-5">
          {[
            { label: "GitHub", href: "https://github.com/allsyn-ai" },
            { label: "Docs", href: "https://hlidskjalf.dev" },
            { label: "R\u00fanTek Solutions", href: "https://runteksolutions.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm no-underline py-2 text-text-dim hover:text-cyan transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-[13px] text-text-dimmer">
          &copy; 2026 R&uacute;nTek Solutions LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
