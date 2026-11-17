import React, { useState } from 'react';
import { Briefcase, ShieldCheck, ShieldAlert, FileText, BookOpen, Globe, Lock, Terminal, CheckCircle2, Star, Award, Sparkles, ArrowRight } from 'lucide-react';
import { FREELANCE_DOMAINS, PERSONAL_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

export const FreelanceExperienceSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-blue-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-indigo-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-amber-400" />;
      case 'Lock': return <Lock className="w-6 h-6 text-rose-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-purple-400" />;
      default: return <Award className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>FREELANCE & CONSULTING PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 font-sans tracking-tight">
            4+ Years Experience on Fiverr & Freelance Platforms
          </h2>
          <p className="text-slate-400 dark:text-slate-400 text-sm sm:text-base mt-3 font-sans">
            Specializing in Cyber Security Consulting, Penetration Testing, Audits, Technical Reports, Research Papers, Desktop Software, and Security Solutions.
          </p>
        </div>

        {/* Freelance Summary Hero Card */}
        <div className="mb-12 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/30">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Level-2 Verified Cybersecurity Seller Track Record</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 font-sans">
                Trusted by 100+ International Clients across USA, UK, Saudi Arabia & EU
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                As a freelance Cyber Security Consultant on Fiverr and Upwork, I have delivered end-to-end security audits, custom tools, and academic research papers with a <span className="text-cyan-300 font-semibold">99.8% client satisfaction rate</span>. Every project includes clear communication, strict mutual NDA protection, and actionable remediation.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 bg-slate-950/80 px-3 py-2 rounded-xl border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>4+ Years Fiverr Active</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/80 px-3 py-2 rounded-xl border border-slate-800">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>100+ Completed Projects</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/80 px-3 py-2 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>14-Day Retesting Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/90 border border-slate-800 p-6 rounded-2xl space-y-3 font-mono text-xs">
              <div className="text-cyan-400 font-bold border-b border-slate-800 pb-2 flex items-center justify-between">
                <span>FREELANCE DOMAINS</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Security Auditing & GRC</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Web & API Penetration Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Technical Audit Reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Thesis & Academic Research</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Web Security Tools & Scanners</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Desktop App Password Managers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Virtual Security Labs & SOC Tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FREELANCE_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-950/40 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    {getDomainIcon(domain.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30 block">
                      {domain.yearsExperience}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                      {domain.projectsCompleted}
                    </span>
                  </div>
                </div>

                {/* Domain Title */}
                <h3 className="text-xl font-bold text-slate-100 font-sans mb-2 group-hover:text-cyan-300 transition-colors">
                  {domain.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed font-sans mb-4">
                  {domain.summary}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-1.5 mb-5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] font-mono text-cyan-400 font-bold mb-1 uppercase tracking-wider">
                    Core Deliverables:
                  </div>
                  {domain.keyDeliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5 font-sans">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tags */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {domain.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
