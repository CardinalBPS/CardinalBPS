import { useEffect, useState } from "react";

const FEED = [
  ["HH-2041", "Eligibility cleared"],
  ["OASIS-118", "Review returned"],
  ["CLM-8831", "Clean claim filed"],
  ["NOE-442", "Notice accepted"],
  ["AR-019", "Payment posted"],
  ["DEN-77", "Denial recovered"],
  ["EVV-310", "Visit verified"],
  ["PDGM-62", "Period reconciled"],
] as const;

export function LiveConsole() {
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setCursor((value) => (value + 1) % FEED.length);
    }, 2400);
    return () => window.clearInterval(tick);
  }, []);

  const rows = [0, 1, 2, 3].map((offset) => FEED[(cursor + offset) % FEED.length]);

  return (
    <div className="console-float">
      <aside className="console" aria-label="Illustrative claims analytics">
      <div className="console-top">
        <span>Claims analytics</span>
        <span className="live">
          <i />
          Live
        </span>
      </div>
      <p className="micro" style={{ margin: "0.35rem 0 0" }}>
        Illustrative snapshot
      </p>
      <div className="console-figure">
        <div>
          <p className="accuracy">98.7%</p>
          <p className="micro" style={{ margin: "0.35rem 0 0" }}>
            Claim accuracy
          </p>
        </div>
        <svg className="spark" viewBox="0 0 220 74" aria-hidden="true">
          <path d="M2 58 C 28 58, 32 46, 48 44 S 74 62, 92 40 S 120 12, 138 22 S 168 50, 186 18 L 216 10" />
          <circle cx="216" cy="10" r="3.5" />
        </svg>
      </div>
      <div className="metric-row">
        <p>
          <strong>24hr</strong>
          <span>Turnaround</span>
        </p>
        <p>
          <strong>150+</strong>
          <span>Providers</span>
        </p>
        <p>
          <strong>99%</strong>
          <span>Compliance</span>
        </p>
        <p>
          <strong>+18%</strong>
          <span>6-month trend</span>
        </p>
      </div>
      <div className="feed">
        {rows.map(([id, label]) => (
          <div className="feed-item" key={`${cursor}-${id}`}>
            <b>{label}</b>
            <em>{id}</em>
          </div>
        ))}
      </div>
    </aside>
    </div>
  );
}
