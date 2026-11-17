import React, { useState, useEffect } from 'react';
import { Shield, Volume2, VolumeX, Menu, X, Sun, Moon, Calendar, MessageSquare, Phone, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

interface NavbarProps {
  onOpenSessionModal: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSessionModal,
  soundEnabled,
  onToggleSound,
  theme,
  onToggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: '4Y Experience', href: '#experience' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20 shadow-xl shadow-cyan-950/20 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => cyberAudio.playClick()}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-md shadow-cyan-950/40 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt="Muhammad Hamza"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-slate-950"></span>
            </span>
          </div>
          <div>
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-100 flex items-center gap-1.5 font-sans">
              {PERSONAL_INFO.name}
            </span>
            <span className="block text-[10px] font-mono tracking-wider text-cyan-400 uppercase font-bold">
              Cyber Security Consultant
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => cyberAudio.playClick()}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls in Top Bar */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
          {/* WhatsApp Direct Chat Button */}
          <a
            href="https://wa.me/923020881646"
            target="_blank"
            rel="noreferrer"
            onClick={() => cyberAudio.playClick()}
            title="Chat on WhatsApp"
            className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/80 transition-all text-xs flex items-center gap-1.5"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span className="hidden xl:inline text-xs font-mono font-bold">WhatsApp</span>
          </a>

          {/* Theme Mode Toggle */}
          <button
            onClick={() => {
              cyberAudio.playClick();
              onToggleTheme();
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-amber-400 transition-all text-xs flex items-center gap-1.5"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-500" />
            )}
          </button>

          {/* Primary CTA: Request Query / Session */}
          <button
            onClick={() => {
              cyberAudio.playClick();
              onOpenSessionModal();
            }}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-sans flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.35)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 fill-slate-950" />
            <span>Request Query / Session</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => {
              cyberAudio.playClick();
              onToggleTheme();
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 text-xs"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>

          <button
            onClick={() => {
              cyberAudio.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-3 pb-6 mt-2 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  cyberAudio.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900 rounded-lg transition-all border border-slate-800/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-cyan-500/70">#</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                cyberAudio.playClick();
                setMobileMenuOpen(false);
                onOpenSessionModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/50"
            >
              <Calendar className="w-4 h-4 fill-slate-950" />
              <span>Request Query / Session</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


