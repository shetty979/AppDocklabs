/* eslint-disable */
// "The Blueprint" — horizontal Timeline of Intelligence with scroll-triggered Data Pulse.

const STEPS = [
  { n: '01', title: 'Discovery', body: 'Stakeholder calls, system audits, opportunity sizing. We arrive curious and leave with a written thesis.', tags: ['Workshops', 'Audit', 'Thesis'] },
  { n: '02', title: 'Design',    body: 'Architecture diagrams, eval rubrics, prototypes that prove the riskiest assumption first.', tags: ['Architecture', 'Prototypes', 'Evals'] },
  { n: '03', title: 'Build',     body: 'Two-week vertical slices, code reviewed by senior engineers, observability and tests from day one.', tags: ['Slices', 'CI/CD', 'Telemetry'] },
  { n: '04', title: 'Optimize',  body: 'Latency, accuracy, cost. We tune the system in production and hand you the dashboards to keep tuning.', tags: ['Tune', 'Cost-shape', 'Handover'] },
];

const Blueprint = () => {
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when bottom of section enters viewport; 1 when top of section reaches top.
      const total = rect.height + vh * 0.4;
      const traveled = Math.max(0, Math.min(total, vh - rect.top));
      const t = Math.max(0, Math.min(1, traveled / total));
      setProgress(t);
      setActive(Math.min(STEPS.length - 1, Math.floor(t * STEPS.length * 0.999)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="blueprint" className="block" data-section-label="Workflow">
      <div className="container">
        <div className="reveal">
          <span className="section-label">The Blueprint — How we work</span>
          <h2 className="section-title">
            A timeline of <em>intelligence</em>.
          </h2>
          <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.6, color: 'var(--color-body)', maxWidth: 640 }}>
            Four phases, sequenced. A data pulse moves with you as you scroll — symbolizing how a project flows from concept to scale.
          </p>
        </div>

        <div ref={ref} className="blueprint reveal">
          <div className="blueprint-track">
            <div className="blueprint-line" aria-hidden="true">
              <div className="fill" style={{ width: `${progress * 100}%` }} />
              <div className="pulse-dot" style={{ left: `${progress * 100}%` }} />
            </div>
            {STEPS.map((s, i) => (
              <div key={s.n} className={`bp-step ${i <= active ? 'active' : ''}`}>
                <div className="bp-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
                <div className="bp-tags">
                  {s.tags.map((t) => <span key={t} className="bp-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.Blueprint = Blueprint;
