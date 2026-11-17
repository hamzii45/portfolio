import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Code, Lock, RefreshCw, Zap, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_ME } from '../data/portfolioData';

export const WhyChooseMeSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-blue-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-indigo-400" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-purple-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Why Choose Muhammad Hamza for Your Cyber Security Needs
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-sans leading-relaxed">
            Delivering high-grade web pentesting, code audits, and ISO 27001 GRC compliance at low rates, with guaranteed on-time deadlines and 100% confidentiality.
          </p>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ME.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all hover:bg-slate-900 group shadow-lg"
            >
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit mb-4 group-hover:border-cyan-500/50 transition-colors">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-lg font-bold text-slate-100 font-sans mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Note Highlight Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/50 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>THE GUARANTEE TO OUR CLIENTS</span>
            </div>
            <h4 className="text-base font-bold text-slate-100 font-sans">
              High Quality Security Work • Affordable Budget Rates • On-Time Fast Delivery
            </h4>
            <p className="text-xs text-slate-300 font-sans">
              100+ projects completed with 99.8% five-star feedback on Fiverr & Upwork. Guaranteed NDA protection for all codebases.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs font-mono shrink-0 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Get Low-Rate Security Quote
          </a>
        </div>

      </div>
    </section>
  );
};
