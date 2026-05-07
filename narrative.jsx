/* eslint-disable */
// Narrative ("Who we are") — sticky-left, scrolling pillars on the right.

const PILLARS = [
  {
    n: '01',
    title: 'Automate the busywork.',
    body: 'We build internal AI agents and pipelines that retire the manual tasks slowing your team down — from inbound triage to spec generation to data hygiene. Quietly, in the background, every day.',
  },
  {
    n: '02',
    title: 'Extract signal from chaos.',
    body: 'Documents, transcripts, logs, third-party APIs — we engineer the connective tissue that turns unstructured noise into clean, queryable, decision-ready data your product can act on.',
  },
  {
    n: '03',
    title: 'Build software that scales.',
    body: 'Cloud-native architecture, hardened APIs, observability baked in from day one. We ship products that survive the leap from prototype to ten-thousand concurrent users without rewrites.',
  },
];

const Narrative = () => (
  <section id="narrative" className="block" data-section-label="Narrative">
    <div className="container narrative">
      <div className="narrative-sticky reveal">
        <span className="section-label">Who we are</span>
        <h2 className="section-title">
          A consultancy <em>built like a lab</em> — precise, calm, AI-native.
        </h2>
        <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.6, color: 'var(--color-body)', maxWidth: 460 }}>
          AppDock Labs is a small, senior team of engineers and applied-AI practitioners. We work with founders and operators who need software that's both elegant and battle-ready — and don't have time for vendor theater.
        </p>
        <p style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.25, letterSpacing: '-0.4px', color: 'var(--color-ink)', maxWidth: 460 }}>
          No black boxes. <span style={{ color: 'var(--color-brand-coral)', fontStyle: 'italic' }}>No hype.</span>
        </p>
        <div className="narrative-stat">
          <div className="stat">
            <div className="stat-num">12+</div>
            <div className="stat-lbl">Years per engineer, avg.</div>
          </div>
          <div className="stat">
            <div className="stat-num">40<span style={{ fontSize: 20, color: 'var(--color-muted)' }}>+</span></div>
            <div className="stat-lbl">Production AI systems shipped</div>
          </div>
          <div className="stat">
            <div className="stat-num">SOC 2</div>
            <div className="stat-lbl">Type II practices, by default</div>
          </div>
        </div>
      </div>

      <div className="narrative-pillars">
        {PILLARS.map((p, i) => (
          <article key={p.n} className="pillar reveal" style={{ '--i': i }}>
            <div className="pillar-num">{p.n}</div>
            <div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

window.Narrative = Narrative;
