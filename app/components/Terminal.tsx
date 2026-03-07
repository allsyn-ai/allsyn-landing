export default function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="terminal-bar-title">allsyn &mdash; zsh</span>
      </div>
      <div className="terminal-code">
        <div className="terminal-line">
          <span className="terminal-line-num">1</span>
          <span className="prompt">$ </span>
          <span className="cmd">npx allsyn</span>{" "}
          <span className="keyword">init</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">2</span>
          <span className="prompt">$ </span>
          <span className="cmd">npx allsyn</span>{" "}
          <span className="keyword">migrate</span>{" "}
          <span className="flag">--from openclaw</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">3</span>&nbsp;
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">4</span>
          <span className="border-char">
            &#9556;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9559;
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">5</span>
          <span className="border-char">&#9553;</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="str">ALLSYN v0.1.0</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="border-char">&#9553;</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">6</span>
          <span className="border-char">
            &#9562;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9565;
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">7</span>&nbsp;
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">8</span>
          <span className="label">[Orchestrator]</span> 8 agents active
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">9</span>
          <span className="label">[Discord]</span> 7 gateways{" "}
          <span className="status-ok">connected</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">10</span>
          <span className="label">[API]</span>{" "}
          <span className="url">http://127.0.0.1:18900</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">11</span>
          <span className="label">[Voice]</span>{" "}
          <span className="str">&quot;Hey Allsyn&quot;</span>{" "}
          <span className="status-ok">listening</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">12</span>&nbsp;
        </div>
        <div className="terminal-line">
          <span className="terminal-line-num">13</span>
          <span className="status-ok">[Allsyn]</span> All systems operational.
        </div>
      </div>
    </div>
  );
}
