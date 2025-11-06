import { useEffect } from 'react';
import { Rocket, Award, Sparkles, Send, ExternalLink } from 'lucide-react';

export function About() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('opacity-100','translate-y-0'));
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-slate-300 max-w-2xl">
            I am Mohammed Rayyan from Kurnool — a World Record holder, AI student, and the founder of CodexAI.shop. With a deep focus on discipline and innovation, I explore the frontiers of human–AI collaboration.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'AI @ Dr. K.V. Subba Reddy Institute of Technology',
              desc: 'Pursuing Artificial Intelligence with a focus on real-world systems and research.'
            },
            {
              title: 'World Record at 13',
              desc: 'Early achievement that shaped relentless curiosity and drive.'
            },
            {
              title: 'CodexAI.shop',
              desc: 'Entrepreneurial journey building AI tools for everyone.'
            }
          ].map((item, i) => (
            <div key={i} className="reveal opacity-0 translate-y-6 transition-all duration-700 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-violet-400/40">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
                  <Rocket className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-slate-300 mt-1 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Achievements</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: 'World Record Holder', icon: Award },
            { title: 'Academic Excellence', icon: Sparkles },
            { title: 'Founder · Innovator', icon: Rocket }
          ].map((a, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:translate-y-[-4px] transition-transform shadow-[0_0_60px_rgba(139,92,246,0.15)]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/0 via-violet-500/0 to-fuchsia-500/0 group-hover:from-blue-500/10 group-hover:to-fuchsia-500/10 transition" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-violet-600 flex items-center justify-center">
                  <a.icon className="text-white" size={18} />
                </div>
                <h3 className="text-white font-semibold">{a.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const data = [
    { name: 'Jarvis', img: '/assets/jarvis.jpg', desc: 'Voice-first assistant that orchestrates your system and the web.', link: 'https://codexai.shop' },
    { name: 'Vertex', img: '/assets/vertex.jpg', desc: 'Next-gen AI workspace with modular agents.', link: 'https://codexai.shop' },
    { name: 'AI Tools', img: '/assets/future.jpg', desc: 'A constellation of upcoming tools designed for speed and creativity.', link: 'https://codexai.shop' }
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <a href="https://codexai.shop" target="_blank" rel="noreferrer" className="text-violet-300 hover:text-white inline-flex items-center gap-1">Visit Store <ExternalLink size={16} /></a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {data.map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-400/40 transition group">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                <p className="text-slate-300 mt-1 text-sm">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-white shadow-md shadow-violet-600/30">
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const images = ['/assets/gallery1.jpg','/assets/gallery2.jpg','/assets/gallery3.jpg','/assets/gallery4.jpg','/assets/gallery5.jpg','/assets/gallery6.jpg'];

  useEffect(() => {
    const imgs = document.querySelectorAll('img[data-lazy]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          if (el && el.dataset && el.dataset.src) {
            el.src = el.dataset.src;
            el.removeAttribute('data-lazy');
          }
          io.unobserve(el);
        }
      })
    }, { rootMargin: '100px' });
    imgs.forEach((img) => io.observe(img));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const lightbox = document.getElementById('lightbox');
    const imgEl = document.getElementById('lightbox-img');
    if (!lightbox || !imgEl) return;

    const handlers = [];

    const open = (src) => {
      imgEl.src = src;
      lightbox.classList.remove('hidden');
    };
    const close = () => lightbox.classList.add('hidden');

    const clickable = document.querySelectorAll('[data-open]');
    clickable.forEach((el) => {
      const handler = () => open(el.getAttribute('data-src') || '');
      handlers.push({ el, handler });
      el.addEventListener('click', handler);
    });

    lightbox.addEventListener('click', close);

    return () => {
      handlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
      lightbox.removeEventListener('click', close);
    };
  }, []);

  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Gallery</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img data-lazy data-open data-src={src} alt={`gallery-${i}`} className="h-40 sm:h-52 md:h-56 w-full object-cover cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      <div id="lightbox" className="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur p-6 flex items-center justify-center">
        <img id="lightbox-img" alt="preview" className="max-h-full max-w-full rounded-2xl border border-white/10" />
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        <form action="https://formsubmit.co/your@email.com" method="POST" className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your Name" className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <input required type="email" name="email" placeholder="Email" className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <textarea required name="message" rows={5} placeholder="Message" className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" />
          <button className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-white shadow-lg shadow-violet-600/30">
            <span className="relative z-10 inline-flex items-center gap-2"><Send size={16}/> Send Message</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition" />
          </button>
        </form>
      </div>
    </section>
  );
}
