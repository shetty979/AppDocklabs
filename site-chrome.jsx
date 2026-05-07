/* eslint-disable */
// Site chrome: custom cursor, progress orbit, nav, drawer, scroll reveal hooks.

const useScrollSpy = (ids) => {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      // Pick the entry closest to ~30% from top that is intersecting.
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length) {
        // among visible pick the one whose top is smallest above viewport-relative anchor
        const best = visible.reduce((a, b) =>
          Math.abs(a.boundingClientRect.top - 120) < Math.abs(b.boundingClientRect.top - 120) ? a : b
        );
        setActive(best.target.id);
      }
    }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join('|')]);
  return active;
};

// Reveal-on-scroll: any element with class `reveal` gains `in` once visible.
const useReveal = () => {
  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  });
};

// Smooth-scroll handler for in-page anchors with high-inertia easing.
const smoothScrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const startY = window.scrollY;
  const targetY = el.getBoundingClientRect().top + window.scrollY - 24;
  const duration = Math.min(1400, Math.max(700, Math.abs(targetY - startY) * 0.6));
  const start = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 4); // easeOutQuart
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration);
    window.scrollTo(0, startY + (targetY - startY) * ease(t));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const CustomCursor = () => {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  React.useEffect(() => {
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;
    const onMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const tick = () => {
      dotX += (mouseX - dotX) * 0.55;
      dotY += (mouseY - dotY) * 0.55;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (dotRef.current)  dotRef.current.style.transform  = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);

    const onOver = (e) => {
      const t = e.target.closest('a, button, .magnetic, .ind-card, .pillar, .bento-card, .contact-row, .po-tick, [data-cursor-hover]');
      if (t && ringRef.current) ringRef.current.classList.add('hover');
    };
    const onOut = (e) => {
      const t = e.target.closest('a, button, .magnetic, .ind-card, .pillar, .bento-card, .contact-row, .po-tick, [data-cursor-hover]');
      if (t && ringRef.current) ringRef.current.classList.remove('hover');
    };
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);
  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

const ProgressOrbit = ({ sections, active, onJump }) => (
  <aside className="progress-orbit" aria-label="Section progress">
    {sections.map((s) => (
      <button
        key={s.id}
        className={`po-tick ${active === s.id ? 'active' : ''}`}
        onClick={() => onJump(s.id)}
        aria-label={`Jump to ${s.label}`}
      >
        <span className="po-label">{s.label}</span>
      </button>
    ))}
  </aside>
);

const Nav = ({ onJump, onDrawer }) => (
  <header className="nav">
    <div className="nav-shell">
      <a href="#zenith" className="nav-brand" onClick={(e) => { e.preventDefault(); onJump('zenith'); }}>
        <img src="assets/appdock-labs-logo.png" alt="AppDock Labs" />
      </a>
      <div className="nav-links">
        <a href="#narrative" onClick={(e) => { e.preventDefault(); onJump('narrative'); }}>Who we are</a>
        <a href="#engine" onClick={(e) => { e.preventDefault(); onJump('engine'); }}>Services</a>
        <a href="#blueprint" onClick={(e) => { e.preventDefault(); onJump('blueprint'); }}>Workflow</a>
        <a href="#proof" onClick={(e) => { e.preventDefault(); onJump('proof'); }}>Why us</a>
      </div>
      <button className="nav-cta" onClick={() => onJump('terminal')}>Talk to an expert</button>
      <button className="nav-burger" onClick={onDrawer} aria-label="Open menu">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="4" y1="8" x2="20" y2="8"/>
          <line x1="4" y1="16" x2="20" y2="16"/>
        </svg>
      </button>
    </div>
  </header>
);

const Drawer = ({ open, onClose, onJump }) => (
  <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
    <div className="drawer-head">
      <img src="assets/appdock-labs-logo.png" alt="AppDock Labs" />
      <button className="nav-burger" onClick={onClose} aria-label="Close menu">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="6" y1="6" x2="18" y2="18"/>
          <line x1="18" y1="6" x2="6" y2="18"/>
        </svg>
      </button>
    </div>
    <nav>
      {[
        ['narrative', 'Who we are'],
        ['engine', 'Services'],
        ['blueprint', 'Workflow'],
        ['proof', 'Why us'],
        ['terminal', 'Contact'],
      ].map(([id, label]) => (
        <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => onJump(id), 220); }}>{label}</a>
      ))}
    </nav>
  </div>
);

// Magnetic hover wrapper — slight pull toward cursor.
const Magnetic = ({ children, strength = 0.25, className = '' }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return <span ref={ref} className={`magnetic ${className}`} style={{ display: 'inline-block', transition: 'transform 0.4s cubic-bezier(.2,.8,.2,1)' }}>{children}</span>;
};

Object.assign(window, {
  CustomCursor, ProgressOrbit, Nav, Drawer, Magnetic,
  useScrollSpy, useReveal, smoothScrollTo,
});
