import { Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© 2025 Mohammed Rayyan · All Rights Reserved · Powered by CodexAI</p>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/mdrayyanop" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Instagram size={18} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Youtube size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
