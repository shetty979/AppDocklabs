/* eslint-disable */
// "The Proof" — Why choose us + Industries trust grid.

const IndustryIcon = ({ name }) => {
  const c = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'SaaS':
      return (<svg {...c}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 13h4M7 16h7" />
      </svg>);
    case 'FinTech':
      return (<svg {...c}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6 9h.5M17.5 15h.5" />
      </svg>);
    case 'HealthTech':
      return (<svg {...c}>
        <path d="M20 11.5c0 5-8 9.5-8 9.5s-8-4.5-8-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 4.5z" />
        <path d="M9.5 12h5M12 9.5v5" />
      </svg>);
    case 'E-commerce':
      return (<svg {...c}>
        <path d="M5 8h14l-1.5 9a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 8z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>);
    case 'Logistics':
      return (<svg {...c}>
        <rect x="2" y="8" width="13" height="9" rx="1" />
        <path d="M15 11h4l2 3v3h-6" />
        <circle cx="6.5" cy="18" r="1.5" />
        <circle cx="17.5" cy="18" r="1.5" />
      </svg>);
    case 'EdTech':
      return (<svg {...c}>
        <path d="M3 9l9-4 9 4-9 4-9-4z" />
        <path d="M7 11v5c0 1 2.5 2 5 2s5-1 5-2v-5" />
      </svg>);
    default: return null;
  }
};

const VALUES = [
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </svg>),
    title: 'Senior, every seat.',
    body: 'No bench. No staff augmentation. The engineer scoping your project is the one shipping your code.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 4v6c0 4-3 7-8 8-5-1-8-4-8-8V7l8-4z" /><path d="M9 12l2 2 4-4" />
    </svg>),
    title: 'Responsible AI.',
    body: 'Eval-driven, redaction-aware, audit-friendly. We treat hallucination like any other production bug.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v6H4zM4 14h16v6H4z" /><path d="M8 7h.01M8 17h.01" />
    </svg>),
    title: 'Documentation as deliverable.',
    body: 'Every system ships with diagrams, runbooks, and a written handover. Bus-factor of one is not a strategy.',
  },
];

const Proof = () => (
  <section id="proof" className="block" data-section-label="Proof">
    <div className="container">
      <div className="reveal">
        <span className="section-label">The Proof — Why choose us</span>
        <h2 className="section-title">
          Clarity over complexity.<br/>
          <em>Receipts over rhetoric.</em>
        </h2>
      </div>

      <div className="proof-grid">
        <div className="proof-card feature reveal" style={{ '--i': 0 }}>
          <span className="legal-line">Operating principle</span>
          <h3>
            We make software that <em>does fewer things</em>, more honestly — and ships them sooner.
          </h3>
          <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, letterSpacing: '-1px', color: '#fff' }}>14d</div>
              <div style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>From kickoff to first deploy</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, letterSpacing: '-1px', color: '#fff' }}>0</div>
              <div style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Hand-offs to junior staff</div>
            </div>
          </div>
        </div>

        {VALUES.map((v, i) => (
          <div key={v.title} className="proof-card value-card reveal" style={{ '--i': i + 1 }}>
            <div className="value-icon">{v.icon}</div>
            <h4>{v.title}</h4>
            <p>{v.body}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 64 }} className="reveal">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
          <span className="section-label" style={{ marginBottom: 0 }}>Industries we ship in</span>
          <span style={{ fontSize: 13, color: 'var(--color-muted)' }}>Seed → Series C, mostly. Public companies, occasionally.</span>
        </div>
        <div className="industries">
          {['SaaS', 'FinTech', 'HealthTech', 'E-commerce', 'Logistics'].map((n) => (
            <div key={n} className="ind-card">
              <div className="ic-icon"><IndustryIcon name={n} /></div>
              <div className="ic-name">{n}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

window.Proof = Proof;
