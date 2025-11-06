import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Achievements, Projects, Gallery, Contact } from './components/Sections';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // SEO meta + OG + JSON-LD
    document.title = 'Mohammed Rayyan – World Record Holder | Founder of CodexAI';

    const metas = [
      ['name','description','Portfolio of Mohammed Rayyan from Kurnool – World Record Holder, AI Student, and Founder of CodexAI.shop.'],
      ['name','keywords','Mohammed Rayyan Kurnool, World Record Holder, AI Student, CodexAI, Jarvis, Vertex, Portfolio'],
      ['property','og:title','Mohammed Rayyan – World Record Holder | Founder of CodexAI'],
      ['property','og:description','Portfolio of Mohammed Rayyan from Kurnool – World Record Holder, AI Student, and Founder of CodexAI.shop.'],
      ['property','og:type','website'],
      ['property','og:url','https://rayyan.codexai.shop'],
      ['name','twitter:card','summary_large_image'],
      ['link','canonical','https://rayyan.codexai.shop']
    ];

    metas.forEach(([kind, key, value]) => {
      if (kind === 'link') {
        let el = document.querySelector(`link[rel="${key}"]`);
        if (!el) { el = document.createElement('link'); el.setAttribute('rel', key); document.head.appendChild(el); }
        el.setAttribute('href', value);
      } else {
        let el = document.querySelector(`meta[${kind}="${key}"]`);
        if (!el) { el = document.createElement('meta'); el.setAttribute(kind, key); document.head.appendChild(el); }
        el.setAttribute('content', value);
      }
    });

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mohammed Rayyan',
      url: 'https://rayyan.codexai.shop',
      jobTitle: 'AI Student',
      description: 'World Record Holder from Kurnool and Founder of CodexAI.shop',
      sameAs: [
        'https://instagram.com/mdrayyanop',
        'https://www.linkedin.com/',
        'https://www.youtube.com/'
      ],
      affiliation: 'CodexAI.shop',
      address: { '@type': 'PostalAddress', addressLocality: 'Kurnool', addressCountry: 'India' }
    });
    document.head.appendChild(ld);

    return () => { document.head.removeChild(ld); };
  }, []);

  useEffect(() => {
    // Neon particle cursor trail
    const canvas = document.createElement('canvas');
    canvas.className = 'pointer-events-none fixed inset-0 z-40';
    const ctx = canvas.getContext('2d');
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let w = (canvas.width = window.innerWidth * dpr);
    let h = (canvas.height = window.innerHeight * dpr);
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    ctx.scale(dpr, dpr);

    const particles = [];
    const colors = ['#60a5fa','#a78bfa','#f472b6'];

    const add = (x, y) => {
      for (let i = 0; i < 6; i++) {
        particles.push({
          x, y,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          life: 1,
          r: 2 + Math.random() * 2,
          c: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    let mx = 0, my = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; add(mx, my); };
    const resize = () => {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.setTransform(1,0,0,1,0,0);
      ctx.scale(dpr, dpr);
    };

    let raf;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.life *= 0.96; p.r *= 0.98;
        ctx.beginPath();
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        g.addColorStop(0, p.c + 'cc');
        g.addColorStop(1, '#00000000');
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      });
      for (let i = particles.length - 1; i >= 0; i--) if (particles[i].life < 0.1 || particles[i].r < 0.3) particles.splice(i, 1);
    };

    document.body.appendChild(canvas);
    window.addEventListener('mousemove', move);
    window.addEventListener('resize', resize);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('resize', resize);
      document.body.removeChild(canvas);
    };
  }, []);

  useEffect(() => {
    // Optional background music toggle
    const audio = new Audio('/assets/ambient.mp3');
    audio.loop = true; audio.volume = 0.25;
    let enabled = false;
    const btn = document.getElementById('music-toggle');
    const toggle = () => {
      enabled = !enabled;
      if (enabled) { audio.play().catch(() => {}); btn && (btn.innerText = 'Music: On'); }
      else { audio.pause(); btn && (btn.innerText = 'Music: Off'); }
    };
    btn?.addEventListener('click', toggle);
    return () => { btn?.removeEventListener('click', toggle); audio.pause(); };
  }, []);

  return (
    <div className="min-h-screen bg-[#05060b] text-white">
      <Navbar />

      {/* floating gradient spheres */}
      <div className="pointer-events-none fixed right-[-10%] top-[-10%] h-72 w-72 rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none fixed left-[-10%] bottom-[-10%] h-72 w-72 rounded-full bg-gradient-to-br from-blue-600/30 to-violet-600/20 blur-3xl" />

      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Gallery />
      <Contact />

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <button id="music-toggle" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 backdrop-blur hover:bg-white/10">Music: Off</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
