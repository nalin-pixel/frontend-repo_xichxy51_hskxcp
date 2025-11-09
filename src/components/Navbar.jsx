import { useState, useEffect } from 'react';
import { Rocket, Mail, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled
    ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-zinc-200/60 dark:border-zinc-800/60 shadow-sm'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b transition-all ${navClasses}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <span>MyPortfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Home</a>
          <a href="#projects" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Projects</a>
          <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Github className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Linkedin className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
          </a>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500">
            <Mail className="h-4 w-4" />
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
