import React from 'react';
import { Shield, Mail, ArrowUp, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    cyberAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-12 pb-8 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-bold font-mono text-slate-100">{PERSONAL_INFO.name}</span>
                <span className="block text-[10px] font-mono text-cyan-400 uppercase">Cyber Security Engineer</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Offensive Security, Web & API Penetration Testing, ISO/IEC 27001 GRC, DevSecOps, and Technical Research.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>100+ Freelance Projects Delivered</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              {['#about', '#services', '#skills', '#projects', '#experience', '#why-me', '#testimonials', '#contact'].map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => cyberAudio.playClick()}
                    className="hover:text-cyan-400 transition-colors capitalize"
                  >
                    {href.replace('#', '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider">Connect & Freelance</h4>
            <div className="space-y-2 text-slate-300">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => cyberAudio.playClick()}
                className="hover:text-blue-400 flex items-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>{PERSONAL_INFO.linkedinHandle}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => cyberAudio.playClick()}
                className="hover:text-cyan-400 flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <div className="text-slate-400 pt-1">
                WhatsApp: <span className="text-emerald-400 font-bold">{PERSONAL_INFO.whatsapp}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 flex items-center gap-1.5 hover:bg-slate-800 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
