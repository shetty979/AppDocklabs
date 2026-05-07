/* eslint-disable */
// "The Engine" — Services Bento Grid (6 modules, AI is double-width flagship).

// Tiny inline-SVG glyphs (line-icon style — 1.5px stroke).
const Glyph = ({ name, size = 28, color = 'currentColor' }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'arch':
      return (<svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <line x1="10" y1="6.5" x2="14" y2="6.5" />
        <line x1="6.5" y1="10" x2="6.5" y2="14" />
      </svg>);
    case 'backend':
      return (<svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="2.5" />
        <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
        <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
      </svg>);
    case 'cloud':
      return (<svg {...common}>
        <path d="M7 18a4 4 0 0 1-1-7.9 5 5 0 0 1 9.7-1.4A4.5 4.5 0 0 1 18 18H7z" />
        <path d="M9 14l2-2 2 2M11 12v5" />
      </svg>);
    case 'ai':
      return (<svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" />
      </svg>);
    case 'consult':
      return (<svg {...common}>
        <path d="M12 3a9 9 0 1 0 9 9" />
        <path d="M12 7v5l3 2" />
        <circle cx="19" cy="5" r="2" />
      </svg>);
    case 'audit':
      return (<svg {...common}>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>);
    default: return null;
  }
};

// Mini visuals embedded in cards
const ArchitectureFlow = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
    <span className="flow-pill">Client</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.4)" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    <span className="flow-pill">Edge / API</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.4)" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    <span className="flow-pill">Services</span>
  </div>
);
const BackendStack = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    {['gRPC · Type-safe contracts','Postgres + pgvector','Queue · Worker fanout','Observability · OTel'].map((t,i) => (
      <div key={i} style={{
        display: 'flex', justifyContent: 'space-between',
        padding: '8px 12px', background: 'rgba(255,255,255,0.7)',
        borderRadius: 8, fontSize: 12, fontWeight: 500, color: 'var(--color-ink)',
        border: '1px solid rgba(10,10,10,0.05)',
      }}>
        <span>{t}</span>
        <span style={{ color: 'var(--color-success)', fontSize: 11 }}>● live</span>
      </div>
    ))}
  </div>
);
const CloudViz = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 4 }}>
    {Array.from({ length: 24 }).map((_, i) => (
      <div key={i} style={{
        aspectRatio: '1', borderRadius: 4,
        background: i % 7 === 3 ? 'var(--color-brand-mint)'
                  : i % 5 === 0 ? 'rgba(255,255,255,0.35)'
                  : 'rgba(255,255,255,0.10)',
      }} />
    ))}
  </div>
);
const AIFlagshipViz = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
    <div style={{
      padding: '14px 16px', background: 'rgba(255,255,255,0.75)',
      border: '1px solid rgba(10,10,10,0.06)', borderRadius: 12,
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ fontSize: 10, color: 'var(--color-muted)', letterSpacing: 1.2, textTransform: 'uppercase' }}>LLM Run</div>
      <div style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 12, color: 'var(--color-ink)', marginTop: 6, lineHeight: 1.5 }}>
        ▸ Plan<br/>
        ▸ Retrieve&nbsp;<span style={{ color: 'var(--color-brand-coral)' }}>7 ctx</span><br/>
        ▸ <span style={{ background: 'rgba(255,107,90,0.15)', padding: '0 4px', borderRadius: 3 }}>Reason</span>
      </div>
    </div>
    <div style={{
      padding: '14px 16px', background: 'rgba(255,255,255,0.75)',
      border: '1px solid rgba(10,10,10,0.06)', borderRadius: 12,
      backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div style={{ fontSize: 10, color: 'var(--color-muted)', letterSpacing: 1.2, textTransform: 'uppercase' }}>Eval suite</div>
      <div style={{ display: 'flex', alignItems: 'end', gap: 4, height: 40, marginTop: 8 }}>
        {[28,42,38,55,62,58,71,68,76,82].map((h,i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--color-ink)', borderRadius: 2, opacity: 0.85 }} />
        ))}
      </div>
      <div style={{ fontSize: 11, color: 'var(--color-ink)', marginTop: 6 }}>+18% week-over-week</div>
    </div>
  </div>
);
const ConsultViz = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    {['Roadmaps', 'Build vs. buy', 'Eval design', 'Risk audits'].map((t) => (
      <span key={t} className="flow-pill" style={{ background: 'rgba(255,255,255,0.55)' }}>{t}</span>
    ))}
  </div>
);
const AuditViz = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    {[
      ['Performance', 92],
      ['Security',    87],
      ['Cost shape',  74],
    ].map(([k, v]) => (
      <div key={k}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--color-ink)', marginBottom: 4 }}>
          <span style={{ fontWeight: 600 }}>{k}</span><span>{v}</span>
        </div>
        <div style={{ height: 4, background: 'rgba(10,10,10,0.08)', borderRadius: 2 }}>
          <div style={{ width: `${v}%`, height: '100%', background: 'var(--color-ink)', borderRadius: 2 }} />
        </div>
      </div>
    ))}
  </div>
);

const Engine = () => (
  <section id="engine" className="block" data-section-label="Services">
    <div className="container">
      <div className="reveal">
        <span className="section-label">The Engine — Services</span>
        <h2 className="section-title">
          Six surfaces. <em>One coherent system.</em>
        </h2>
        <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.6, color: 'var(--color-body)', maxWidth: 640 }}>
          From the architectural diagram to the deployed cluster — we ship every layer, integrated. Pick any module; we'll wire the rest.
        </p>
      </div>

      <div className="bento">
        {/* 1: Architecture (3-wide) */}
        <article className="bento-card bc-architecture bc-3 reveal" style={{ '--i': 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
              <div className="bc-label">01 · Architecture</div>
              <h3 className="bc-title">Software architecture<br/>that doesn't bend.</h3>
            </div>
            <Glyph name="arch" />
          </div>
          <p className="bc-desc">Domain-driven design, type-safe contracts, deliberate boundaries — so future-you isn't unbuilding what today-you shipped.</p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
            {['Microservices','DDD','API design','Event-driven'].map(t => <span key={t} className="bp-tag">{t}</span>)}
          </div>
          <div className="bc-visual"><ArchitectureFlow /></div>
        </article>

        {/* 2: Backend (3-wide) — visually connected to arch */}
        <article className="bento-card bc-backend bc-3 reveal" style={{ '--i': 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
              <div className="bc-label">02 · Backend</div>
              <h3 className="bc-title">Hardened backends.<br/>Boring on purpose.</h3>
            </div>
            <Glyph name="backend" />
          </div>
          <p className="bc-desc">Postgres-first, queue-aware, observable end-to-end. The unsexy parts done so well you stop noticing them.</p>
          <div className="bc-visual"><BackendStack /></div>
        </article>

        {/* 3: Cloud + DevOps (2-wide) */}
        <article className="bento-card bc-cloud bc-2 bc-row2 reveal" style={{ '--i': 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
              <div className="bc-label">03 · Cloud · DevOps</div>
              <h3 className="bc-title">Infra you can sleep on.</h3>
            </div>
            <Glyph name="cloud" color="rgba(255,255,255,0.9)" />
          </div>
          <p className="bc-desc" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Terraform, Kubernetes, GitOps. Zero-downtime deploys, cost-shaped autoscaling, runbooks your on-call won't curse.
          </p>
          <div className="bc-visual"><CloudViz /></div>
        </article>

        {/* 4: AI Flagship (4-wide, double-width) */}
        <article className="bento-card bc-flagship bc-4 reveal" style={{ '--i': 3 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
              <div className="bc-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-brand-coral)', boxShadow: '0 0 0 0 rgba(255,107,90,0.6)', animation: 'pulse 2s infinite' }} />
                Flagship · 04
              </div>
              <h3 className="bc-title" style={{ fontSize: 36, lineHeight: 1.05, letterSpacing: '-1px' }}>
                Data, analytics &amp; AI solutions —<br/>
                <em style={{ fontStyle: 'italic', color: 'var(--color-brand-coral)', fontWeight: 500 }}>Generative AI &amp; LLMs.</em>
              </h3>
            </div>
            <Glyph name="ai" size={32} />
          </div>
          <p className="bc-desc" style={{ maxWidth: 580 }}>
            RAG pipelines, agentic workflows, fine-tuning, evaluation harnesses — built on real product instincts, not lab demos. We treat models like dependencies: pinned, tested, observed.
          </p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
            {['LLM integration','RAG','Agents','Fine-tuning','Evals','Vector DBs'].map(t => <span key={t} className="bp-tag" style={{ background: 'rgba(10,10,10,0.06)' }}>{t}</span>)}
          </div>
          <div className="bc-visual"><AIFlagshipViz /></div>
        </article>

        {/* 5: AI Consulting (3-wide) */}
        <article className="bento-card bc-consulting bc-3 reveal" style={{ '--i': 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
              <div className="bc-label">05 · Advisory</div>
              <h3 className="bc-title">AI consulting,<br/>without the deck-ware.</h3>
            </div>
            <Glyph name="consult" />
          </div>
          <p className="bc-desc">Workshops, roadmaps, build-vs-buy calls — grounded in what's actually shipping in production today, not what's on a vendor's slide.</p>
          <div className="bc-visual"><ConsultViz /></div>
        </article>

        {/* 6: Technical Audits (3-wide) */}
        <article className="bento-card bc-audits bc-3 reveal" style={{ '--i': 5 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
              <div className="bc-label">06 · Audits</div>
              <h3 className="bc-title">Technical audits<br/>with receipts.</h3>
            </div>
            <Glyph name="audit" />
          </div>
          <p className="bc-desc">Performance, security, cost, code-health. Two weeks in, you get a prioritized plan — and the patches we'd ship first.</p>
          <div className="bc-visual"><AuditViz /></div>
        </article>
      </div>
    </div>
  </section>
);

window.Engine = Engine;
