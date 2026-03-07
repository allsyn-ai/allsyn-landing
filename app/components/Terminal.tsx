export default function Terminal() {
  return (
    <div
      className="max-w-[720px] mx-auto rounded-2xl overflow-hidden text-left glass-card"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        boxShadow: "0 24px 80px rgba(0, 0, 0, 0.4), 0 0 60px rgba(0, 212, 255, 0.04)",
      }}
    >
      <div
        className="px-5 py-3.5 flex gap-2 items-center"
        style={{ background: "rgba(255, 255, 255, 0.04)", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}
      >
        <div className="w-3 h-3 rounded-full bg-red" />
        <div className="w-3 h-3 rounded-full bg-yellow" />
        <div className="w-3 h-3 rounded-full bg-green" />
        <span
          className="flex-1 text-center text-[11px] text-text-dimmer mr-9"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          allsyn &mdash; zsh
        </span>
      </div>
      <div
        className="terminal-code p-7 text-[13px] leading-[1.9] text-text-dim"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <Line n={1}><span className="prompt">$ </span><span className="cmd">npx allsyn</span> <span className="keyword">init</span></Line>
        <Line n={2}><span className="prompt">$ </span><span className="cmd">npx allsyn</span> <span className="keyword">migrate</span> <span className="flag">--from openclaw</span></Line>
        <Line n={3}>&nbsp;</Line>
        <Line n={4}><span className="border-char">&#9556;{"\u2550".repeat(34)}&#9559;</span></Line>
        <Line n={5}><span className="border-char">&#9553;</span>{"        "}<span className="str">ALLSYN v0.1.0</span>{"           "}<span className="border-char">&#9553;</span></Line>
        <Line n={6}><span className="border-char">&#9562;{"\u2550".repeat(34)}&#9565;</span></Line>
        <Line n={7}>&nbsp;</Line>
        <Line n={8}><span className="label">[Orchestrator]</span> 8 agents active</Line>
        <Line n={9}><span className="label">[Discord]</span> 7 gateways <span className="status-ok">connected</span></Line>
        <Line n={10}><span className="label">[API]</span> <span className="url">http://127.0.0.1:18900</span></Line>
        <Line n={11}><span className="label">[Voice]</span> <span className="str">&quot;Hey Allsyn&quot;</span> <span className="status-ok">listening</span></Line>
        <Line n={12}>&nbsp;</Line>
        <Line n={13}><span className="status-ok">[Allsyn]</span> All systems operational.</Line>
      </div>
    </div>
  );
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <span className="terminal-line-num select-none min-w-7 text-right pr-3.5" style={{ color: "rgba(255,255,255,0.12)" }}>
        {n}
      </span>
      <span>{children}</span>
    </div>
  );
}
