/* eslint-disable */
// Hero "Zenith" with generative white-on-white 3D mesh that reacts to mouse + scroll parallax.

const HeroCore = () => {
  const wrapRef = React.useRef(null);
  const svgRef = React.useRef(null);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth, h = window.innerHeight;
      setMouse({ x: (e.clientX - w / 2) / w, y: (e.clientY - h / 2) / h });
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Generate a layered orb of concentric rings + delicate tangent lines.
  // All white-on-cream with subtle warm rim light.
  const tiltX = mouse.y * 8;
  const tiltY = -mouse.x * 8;
  const parallax = scrollY * 0.2;

  // Concentric rings
  const rings = [];
  for (let i = 0; i < 18; i++) {
    const t = i / 17;
    const r = 80 + t * 320;
    const opacity = 0.06 + (1 - Math.abs(t - 0.5) * 1.6) * 0.18;
    rings.push(
      <ellipse
        key={`r-${i}`}
        cx="500" cy="500"
        rx={r} ry={r * (0.32 + Math.sin(i * 0.6) * 0.18)}
        fill="none"
        stroke="rgba(10,10,10,0.4)"
        strokeWidth={0.6 + (1 - t) * 0.6}
        opacity={opacity}
        transform={`rotate(${i * 10} 500 500)`}
      />
    );
  }
  // Long tangent strands
  const strands = [];
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const x1 = 500 + Math.cos(a) * 100;
    const y1 = 500 + Math.sin(a) * 100;
    const x2 = 500 + Math.cos(a) * 460;
    const y2 = 500 + Math.sin(a) * 460;
    strands.push(
      <line key={`s-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="rgba(10,10,10,0.18)" strokeWidth="0.4" />
    );
  }

  return (
    <div ref={wrapRef} className="hero-core" style={{
      transform: `translate(-50%, calc(-50% + ${parallax}px)) perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      transition: 'transform 0.4s cubic-bezier(.2,.8,.2,1)',
    }}>
      <svg ref={svgRef} viewBox="0 0 1000 1000" width="100%" height="100%">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#fff5e0" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#ffd9b5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#fffaf0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="coreInner" cx="50%" cy="42%" r="40%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="60%" stopColor="#fff5e0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffb084" stopOpacity="0.0" />
          </radialGradient>
          <radialGradient id="rimWarm" cx="58%" cy="52%" r="48%">
            <stop offset="60%" stopColor="#ff6b5a" stopOpacity="0" />
            <stop offset="92%" stopColor="#ff6b5a" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#ff6b5a" stopOpacity="0" />
          </radialGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>
        {/* outer halo */}
        <circle cx="500" cy="500" r="480" fill="url(#coreGlow)" />
        {/* tangent strands */}
        <g filter="url(#softBlur)">{strands}</g>
        {/* concentric mesh rings */}
        <g filter="url(#softBlur)">{rings}</g>
        {/* warm rim light */}
        <circle cx="500" cy="500" r="380" fill="url(#rimWarm)" />
        {/* inner ceramic sphere */}
        <circle cx="500" cy="500" r="220" fill="url(#coreInner)" />
        {/* highlight */}
        <ellipse cx="430" cy="400" rx="80" ry="40" fill="rgba(255,255,255,0.7)" filter="url(#softBlur)" />
        {/* tiny floating nodes */}
        {[0,1,2,3,4,5].map((i) => {
          const a = (i / 6) * Math.PI * 2 + 0.5;
          const r = 350 + (i % 2) * 30;
          return (
            <circle key={`n-${i}`} cx={500 + Math.cos(a) * r} cy={500 + Math.sin(a) * r}
              r={3 + (i%3)} fill="#0a0a0a" opacity="0.4" />
          );
        })}
      </svg>
    </div>
  );
};

const Hero = ({ onJump }) => (
  <section id="zenith" className="hero" data-section-label="Hero">
    <div className="hero-grid-bg" />
    <HeroCore />
    <div className="hero-content reveal reveal-stagger">
      <span className="hero-eyebrow" style={{ '--i': 0 }}>
        <span className="pulse" />
        AppDock Labs · AI &amp; Software Engineering
      </span>
      <h1 style={{ '--i': 1 }}>
        Building scalable software.<br />
        Powering it with <span className="accent">AI</span>.
      </h1>
      <p className="hero-sub" style={{ '--i': 2 }}>
        We are a technology and AI consultancy that helps startups, scale-ups, and enterprises design, build, and optimize intelligent software systems.
      </p>
      <div className="hero-ctas" style={{ '--i': 3 }}>
        <Magnetic strength={0.18}>
          <button className="btn btn-primary" onClick={() => onJump('terminal')}>
            Talk to an expert
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </Magnetic>
        <Magnetic strength={0.12}>
          <button className="btn btn-ghost" onClick={() => onJump('engine')}>Explore our solutions</button>
        </Magnetic>
      </div>
    </div>
    <div className="hero-meta">
      <span>v 26.05 — Light-mode futurism</span>
      <span className="scroll-indicator">
        <span>Scroll</span>
        <span className="scroll-line" />
      </span>
      <span>Future-ready · 2026</span>
    </div>
  </section>
);

window.Hero = Hero;
