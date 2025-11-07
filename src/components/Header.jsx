import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-emerald-500 shadow-[0_0_30px_-8px] shadow-cyan-500/50" />
          <span className="text-white font-semibold tracking-wide">Alex Rivera</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-white/80 hover:text-white transition">Work</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-white/80 hover:text-white transition">
            <Github size={20} />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-white/80 hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-white/5 text-white/80 hover:text-white transition">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
