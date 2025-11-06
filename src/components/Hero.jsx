import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 items-center gap-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse"></span>
            Futuristic Portfolio
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Mohammed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">Rayyan</span>
          </h1>
          <p className="mt-4 text-lg text-slate-200/90">
            World Record Holder · AI Student · Founder of CodexAI
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-white shadow-lg shadow-violet-600/30">
              <span className="relative z-10">Explore Projects</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a href="https://codexai.shop" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10 transition">
              Visit CodexAI.shop
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-violet-500 to-fuchsia-500 shadow-[0_0_80px_rgba(139,92,246,0.35)]">
            <div className="h-full w-full rounded-full overflow-hidden bg-black/60 backdrop-blur-xl border border-white/10">
              <img src="/assets/profile.jpg" alt="Mohammed Rayyan" className="h-full w-full object-cover" loading="eager" />
            </div>
            <span className="absolute inset-0 rounded-full ring-2 ring-violet-400/30 animate-ping"></span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
    </section>
  );
}
