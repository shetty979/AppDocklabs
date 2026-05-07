/* eslint-disable */
// "The Terminal" — final CTA + footer.

const Terminal = () => {
  const [time, setTime] = React.useState('');
  React.useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const t = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
      const z = -d.getTimezoneOffset() / 60;
      setTime(`${t} · UTC${z >= 0 ? '+' : ''}${z}`);
    };
    fmt();
    const int = setInterval(fmt, 30000);
    return () => clearInterval(int);
  }, []);

  return (
    <>
      <section id="terminal" className="terminal" data-section-label="Contact">
        <div className="reveal">
          <span className="section-label" style={{ justifyContent: 'center' }}>The Terminal</span>
          <h2>
            Build intelligent software<br/>
            <em>that scales.</em>
          </h2>
          <p className="terminal-sub">
            Two-week scoping, fixed-price kickoff. We'll tell you on the first call whether we're the right team.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <Magnetic strength={0.18}>
              <button className="btn btn-dark" onClick={() => document.getElementById('contact-email')?.focus()}>
                Schedule consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </Magnetic>
            <Magnetic strength={0.12}>
              <button className="btn btn-ghost">Download capability deck</button>
            </Magnetic>
          </div>
        </div>

        <div className="contact-rows reveal">
          <a className="contact-row" href="mailto:hello@appdocklabs.com">
            <span className="cr-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="M3 7l9 6 9-6"/>
              </svg>
            </span>
            <div>
              <div className="cr-label">Email</div>
              <div className="cr-value">hello@appdocklabs.com</div>
            </div>
          </a>
          <a className="contact-row" href="#">
            <span className="cr-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2"/>
                <path d="M3 10h18M8 3v4M16 3v4"/>
              </svg>
            </span>
            <div>
              <div className="cr-label">Schedule</div>
              <div className="cr-value">Book a 30-min consultation</div>
            </div>
          </a>
        </div>

        {/* hidden dummy input so the schedule button can focus a target without a real form */}
        <input id="contact-email" tabIndex={-1} aria-hidden="true" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', left: -9999 }} />
      </section>

      <footer className="footer">
        <div className="f-brand">
          <img src="assets/appdock-labs-logo.png" alt="AppDock Labs" />
          <div className="f-tagline">© AppDock Labs 2026 · Engineered, on purpose.</div>
        </div>
        <div className="f-time">
          <span className="dot" />
          <span>Future-ready · {time}</span>
        </div>
      </footer>
    </>
  );
};

window.Terminal = Terminal;
