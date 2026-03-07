import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allsyn — AI Agent Orchestrator",
  description:
    "Allsyn is an advanced multi-model AI agent orchestrator. Open-source core, native dashboard, Discord-native control. Replace OpenClaw with something you own.",
  openGraph: {
    title: "Allsyn — AI Agent Orchestrator",
    description:
      "Advanced multi-model AI agent orchestrator with native macOS/iOS dashboard.",
    url: "https://allsyn.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="ambient-orb ambient-orb--1" aria-hidden="true" />
        <div className="ambient-orb ambient-orb--2" aria-hidden="true" />
        <div className="ambient-orb ambient-orb--3" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
