import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'text-slate-200 hover:text-white transition-colors';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-xl bg-black/40 shadow-lg shadow-blue-500/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-blue-500 via-violet-500 to-fuchsia-500 shadow-md shadow-violet-500/40" />
            <span className="font-semibold text-white tracking-wide">Rayyan</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a className={linkBase} href="#home">Home</a>
            <a className={linkBase} href="#about">About</a>
            <a className={linkBase} href="#achievements">Achievements</a>
            <a className={linkBase} href="#projects">Projects</a>
            <a className={linkBase} href="#gallery">Gallery</a>
            <a className={linkBase} href="#contact">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://instagram.com/mdrayyanop" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Instagram size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Youtube size={18} /></a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-4 grid gap-2">
            <a className={linkBase} href="#home" onClick={() => setOpen(false)}>Home</a>
            <a className={linkBase} href="#about" onClick={() => setOpen(false)}>About</a>
            <a className={linkBase} href="#achievements" onClick={() => setOpen(false)}>Achievements</a>
            <a className={linkBase} href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a className={linkBase} href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
            <a className={linkBase} href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
