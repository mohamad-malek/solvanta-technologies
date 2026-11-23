/**
 * Three illustrative mock-dashboards for the concept projects.
 * All shapes are decorative; no real data or metrics are represented.
 */

const FONT = "ui-sans-serif, system-ui, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

function Frame({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <svg
      viewBox="0 0 400 240"
      className="h-full w-full"
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#13264b" />
          <stop offset="1" stopColor="#0a1530" />
        </linearGradient>
        <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38A5FF" />
          <stop offset="1" stopColor="#1677FF" />
        </linearGradient>
        <linearGradient id={`${id}-area`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#38A5FF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#38A5FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#${id}-bg)`} />
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ MediBook */
export function MediBookVisual() {
  const id = "mb";
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const colX = (i: number) => 104 + i * 58;
  // [col, row, span, accent?]
  const slots: [number, number, number, boolean][] = [
    [0, 0, 1, true],
    [0, 2, 2, false],
    [1, 1, 1, false],
    [1, 3, 1, true],
    [2, 0, 2, true],
    [3, 2, 1, false],
    [3, 3, 1, true],
    [4, 1, 2, false],
  ];
  return (
    <Frame id={id}>
      {/* Sidebar: doctors */}
      <rect x="0" y="0" width="76" height="240" fill="#ffffff" fillOpacity="0.035" />
      <line x1="76" y1="0" x2="76" y2="240" stroke="#fff" strokeOpacity="0.08" />
      <text x="14" y="26" fill="#94a3b8" fontSize="8" fontFamily={FONT} letterSpacing="1.5">
        DOCTORS
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(14 ${42 + i * 38})`}>
          <circle cx="11" cy="11" r="11" fill={`url(#${id}-accent)`} fillOpacity={0.9 - i * 0.15} />
          <circle cx="11" cy="9" r="4" fill="#fff" fillOpacity="0.85" />
          <path d="M4 20c1-5 13-5 14 0" fill="#fff" fillOpacity="0.85" />
          <circle cx="21" cy="19" r="3.4" fill={i === 2 ? "#f59e0b" : "#34d399"} stroke="#0f1f3f" strokeWidth="1.5" />
          <rect x="30" y="0" width="22" height="3.5" rx="1.75" fill="#fff" fillOpacity="0.28" />
          <rect x="30" y="8" width="14" height="3.5" rx="1.75" fill="#fff" fillOpacity="0.14" />
        </g>
      ))}

      {/* Header */}
      <text x="96" y="26" fill="#fff" fontSize="11" fontWeight="700" fontFamily={FONT}>
        Weekly schedule
      </text>
      <rect x="318" y="14" width="68" height="18" rx="9" fill={`url(#${id}-accent)`} />
      <text x="352" y="26" fill="#fff" fontSize="8.5" fontWeight="600" fontFamily={FONT} textAnchor="middle">
        + New booking
      </text>

      {/* Day headers + grid */}
      {days.map((d, i) => (
        <text key={d} x={colX(i) + 26} y="52" fill="#94a3b8" fontSize="8.5" fontFamily={FONT} textAnchor="middle">
          {d}
        </text>
      ))}
      {[0, 1, 2, 3, 4].map((r) => (
        <line key={r} x1="98" x2="392" y1={62 + r * 34} y2={62 + r * 34} stroke="#fff" strokeOpacity="0.07" />
      ))}

      {/* Appointments */}
      {slots.map(([c, r, s, a], i) => (
        <g key={i}>
          <rect
            x={colX(c)}
            y={66 + r * 34}
            width="52"
            height={s * 34 - 6}
            rx="6"
            fill={a ? `url(#${id}-accent)` : "#ffffff"}
            fillOpacity={a ? 0.95 : 0.1}
            stroke={a ? "none" : "#fff"}
            strokeOpacity="0.15"
          />
          <rect x={colX(c) + 7} y={66 + r * 34 + 8} width="26" height="3.5" rx="1.75" fill="#fff" fillOpacity={a ? 0.9 : 0.4} />
          <rect x={colX(c) + 7} y={66 + r * 34 + 16} width="16" height="3.5" rx="1.75" fill="#fff" fillOpacity={a ? 0.55 : 0.2} />
        </g>
      ))}

      {/* Conflict prevention callout */}
      <rect x={colX(1)} y={66 + 2 * 34} width="52" height="28" rx="6" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
      <g transform={`translate(${colX(1) + 6} ${66 + 2 * 34 + 7})`}>
        <rect width="40" height="14" rx="7" fill="#f59e0b" />
        <text x="20" y="9.7" fill="#0b1730" fontSize="7" fontWeight="700" fontFamily={FONT} textAnchor="middle">
          Slot taken
        </text>
      </g>
    </Frame>
  );
}

/* ---------------------------------------------------------------- SmartBiz ERP */
export function SmartBizVisual() {
  const id = "sb";
  const bars = [44, 70, 52, 88, 64, 100, 76, 92];
  const modules = ["Customers", "Inventory", "Sales", "Invoices", "Reports"];
  const rows: [string, string, string][] = [
    ["#1042", "Paid", "#34d399"],
    ["#1043", "Pending", "#f59e0b"],
    ["#1044", "Paid", "#34d399"],
  ];
  return (
    <Frame id={id}>
      {/* Sidebar */}
      <rect x="0" y="0" width="82" height="240" fill="#ffffff" fillOpacity="0.035" />
      <line x1="82" y1="0" x2="82" y2="240" stroke="#fff" strokeOpacity="0.08" />
      <rect x="14" y="14" width="18" height="18" rx="5" fill={`url(#${id}-accent)`} />
      <text x="40" y="26.5" fill="#fff" fontSize="9.5" fontWeight="700" fontFamily={FONT}>
        SmartBiz
      </text>
      {modules.map((m, i) => (
        <g key={m} transform={`translate(12 ${52 + i * 29})`}>
          {i === 2 && <rect x="-2" y="-6" width="70" height="24" rx="7" fill="#1677FF" fillOpacity="0.28" />}
          <rect x="4" y="1" width="9" height="9" rx="2.5" fill={i === 2 ? "#38A5FF" : "#fff"} fillOpacity={i === 2 ? 1 : 0.3} />
          <text x="20" y="9.5" fill={i === 2 ? "#fff" : "#94a3b8"} fontSize="8.5" fontWeight={i === 2 ? 600 : 400} fontFamily={FONT}>
            {m}
          </text>
        </g>
      ))}

      {/* Summary tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${96 + i * 98} 14)`}>
          <rect width="90" height="42" rx="8" fill="#fff" fillOpacity="0.05" stroke="#fff" strokeOpacity="0.1" />
          <rect x="9" y="10" width="30" height="3.5" rx="1.75" fill="#fff" fillOpacity="0.3" />
          <rect x="9" y="22" width={[44, 34, 52][i]} height="8" rx="4" fill={`url(#${id}-accent)`} />
        </g>
      ))}

      {/* Bar chart */}
      <g transform="translate(96 66)">
        <rect width="150" height="94" rx="8" fill="#fff" fillOpacity="0.05" stroke="#fff" strokeOpacity="0.1" />
        <rect x="10" y="9" width="40" height="3.5" rx="1.75" fill="#fff" fillOpacity="0.3" />
        {bars.map((h, i) => (
          <rect
            key={i}
            x={12 + i * 16.5}
            y={84 - h * 0.6}
            width="10"
            height={h * 0.6}
            rx="3"
            fill={`url(#${id}-accent)`}
            fillOpacity={i === 5 ? 1 : 0.6}
          />
        ))}
      </g>

      {/* Line chart */}
      <g transform="translate(254 66)">
        <rect width="138" height="94" rx="8" fill="#fff" fillOpacity="0.05" stroke="#fff" strokeOpacity="0.1" />
        <rect x="10" y="9" width="34" height="3.5" rx="1.75" fill="#fff" fillOpacity="0.3" />
        <path d="M10 76 C30 70 36 50 56 56 S86 74 100 44 S122 30 128 32 V86 H10 Z" fill={`url(#${id}-area)`} />
        <path d="M10 76 C30 70 36 50 56 56 S86 74 100 44 S122 30 128 32" fill="none" stroke="#38A5FF" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="128" cy="32" r="3.5" fill="#fff" stroke="#1677FF" strokeWidth="2" />
      </g>

      {/* Invoice table */}
      <g transform="translate(96 168)">
        <rect width="296" height="60" rx="8" fill="#fff" fillOpacity="0.05" stroke="#fff" strokeOpacity="0.1" />
        {rows.map(([n, s, c], i) => (
          <g key={n} transform={`translate(12 ${8 + i * 17})`}>
            <text x="0" y="9" fill="#cbd5e1" fontSize="8" fontFamily={MONO}>
              INV {n}
            </text>
            <rect x="64" y="3.5" width="64" height="4" rx="2" fill="#fff" fillOpacity="0.18" />
            <rect x="140" y="3.5" width="40" height="4" rx="2" fill="#fff" fillOpacity="0.1" />
            <rect x="224" y="0" width="48" height="12" rx="6" fill={c} fillOpacity="0.18" />
            <text x="248" y="8.6" fill={c} fontSize="7.2" fontWeight="600" fontFamily={FONT} textAnchor="middle">
              {s}
            </text>
          </g>
        ))}
      </g>
    </Frame>
  );
}

/* --------------------------------------------------------------------- OpsGuard */
export function OpsGuardVisual() {
  const id = "og";
  const services: [string, string][] = [
    ["api-gateway", "#34d399"],
    ["auth-service", "#34d399"],
    ["database", "#f59e0b"],
    ["queue-worker", "#34d399"],
    ["storage", "#ef4444"],
  ];
  // Deterministic status pattern for the timeline blocks
  const timeline = (row: number) =>
    Array.from({ length: 24 }, (_, i) => {
      const v = (row * 7 + i * 5) % 23;
      if (row === 2 && i > 18) return "#f59e0b";
      if (row === 4 && i > 20) return "#ef4444";
      return v === 3 ? "#f59e0b" : "#34d399";
    });
  return (
    <Frame id={id}>
      {/* Top bar */}
      <rect x="0" y="0" width="400" height="34" fill="#fff" fillOpacity="0.035" />
      <line x1="0" y1="34" x2="400" y2="34" stroke="#fff" strokeOpacity="0.08" />
      <path d="M16 11l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10v-6z" transform="translate(2 -3) scale(0.9)" fill={`url(#${id}-accent)`} />
      <text x="36" y="21.5" fill="#fff" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        OpsGuard
      </text>
      <g transform="translate(300 9)">
        <rect width="84" height="17" rx="8.5" fill="#ef4444" fillOpacity="0.16" stroke="#ef4444" strokeOpacity="0.5" />
        <circle cx="11" cy="8.5" r="3" fill="#ef4444" />
        <text x="19" y="11.5" fill="#fca5a5" fontSize="7.8" fontWeight="600" fontFamily={FONT}>
          2 active alerts
        </text>
      </g>

      {/* Services panel */}
      <g transform="translate(14 46)">
        <rect width="262" height="118" rx="8" fill="#fff" fillOpacity="0.05" stroke="#fff" strokeOpacity="0.1" />
        <text x="12" y="16" fill="#94a3b8" fontSize="7.5" fontFamily={FONT} letterSpacing="1.4">
          SERVICES
        </text>
        {services.map(([name, c], r) => (
          <g key={name} transform={`translate(12 ${26 + r * 18})`}>
            <circle cx="3" cy="6" r="3" fill={c} />
            <text x="12" y="9" fill="#e2e8f0" fontSize="8" fontFamily={MONO}>
              {name}
            </text>
            {timeline(r).map((col, i) => (
              <rect key={i} x={98 + i * 6.6} y="1" width="4.6" height="11" rx="1.5" fill={col} fillOpacity="0.85" />
            ))}
          </g>
        ))}
      </g>

      {/* Incidents panel */}
      <g transform="translate(286 46)">
        <rect width="100" height="118" rx="8" fill="#fff" fillOpacity="0.05" stroke="#fff" strokeOpacity="0.1" />
        <text x="10" y="16" fill="#94a3b8" fontSize="7.5" fontFamily={FONT} letterSpacing="1.4">
          INCIDENTS
        </text>
        {[
          ["#ef4444", 34],
          ["#f59e0b", 62],
          ["#34d399", 90],
        ].map(([c, y], i) => (
          <g key={i} transform={`translate(10 ${y})`}>
            <rect width="3" height="20" rx="1.5" fill={c as string} />
            <rect x="10" y="3" width={[56, 46, 52][i]} height="3.5" rx="1.75" fill="#fff" fillOpacity="0.4" />
            <rect x="10" y="12" width="30" height="3.5" rx="1.75" fill="#fff" fillOpacity="0.16" />
          </g>
        ))}
      </g>

      {/* Log stream */}
      <g transform="translate(14 172)">
        <rect width="372" height="56" rx="8" fill="#050c1d" stroke="#fff" strokeOpacity="0.1" />
        {[
          ["#34d399", "INFO ", "health check ok  api-gateway"],
          ["#f59e0b", "WARN ", "high latency detected  database"],
          ["#ef4444", "ERROR", "connection refused  storage"],
        ].map(([c, lvl, msg], i) => (
          <text key={i} x="12" y={17 + i * 14} fontSize="8" fontFamily={MONO} fill="#94a3b8">
            <tspan fill={c}>{lvl}</tspan>
            <tspan dx="8">{msg}</tspan>
          </text>
        ))}
      </g>
    </Frame>
  );
}
