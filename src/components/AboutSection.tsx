import React, { useState } from 'react';
import { User, Shield, Award, FileText, CheckCircle2, Copy, Check, MapPin, Globe, Sparkles, Lock, Cpu, Star, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    cyberAudio.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT MUHAMMAD HAMZA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Cyber Security Consultant & Penetration Tester
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-sans leading-relaxed">
            Helping businesses, startups, and organizations protect their websites, applications, and networks from cyber threats with simple, practical, and effective security solutions.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headshot & Profile Info */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-slate-900/80 rounded-2xl border border-slate-800 relative">
              
              {/* Profile Headshot */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl p-1 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 shadow-xl mb-4">
                <div className="w-full h-full bg-slate-950 rounded-xl overflow-hidden">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 right-2 bg-emerald-500 text-slate-950 text-[10px] font-bold font-mono px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 font-sans">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-cyan-400 mt-1">
                4+ Years Freelance Experience
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 mt-2 font-sans">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-2 w-full mt-6 pt-6 border-t border-slate-800 text-center">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-base font-extrabold text-cyan-400 font-mono">4+</div>
                  <div className="text-[10px] text-slate-400 font-sans mt-0.5">Years Exp</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-base font-extrabold text-emerald-400 font-mono">100+</div>
                  <div className="text-[10px] text-slate-400 font-sans mt-0.5">Projects</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-base font-extrabold text-amber-400 font-mono flex items-center justify-center gap-0.5">
                    <span>99%</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-sans mt-0.5">Rating</div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="w-full mt-6 space-y-2">
                <a
                  href="https://wa.me/923020881646"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => cyberAudio.playClick()}
                  className="w-full py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center justify-center gap-2 transition-all font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono flex items-center justify-center gap-2 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{copied ? 'Email Copied!' : PERSONAL_INFO.email}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Clear & Simple Bio */}
            <div className="lg:col-span-8 space-y-6">
              
              <div>
                <h3 className="text-2xl font-extrabold text-slate-100 font-sans tracking-tight">
                  Who I Am & What I Do
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 font-sans">
                  I am a professional Cyber Security Specialist and Top-Rated Freelancer on Fiverr and Upwork. Over the past 4 years, I have successfully secured over 100 websites, cloud systems, and company infrastructures worldwide.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 font-sans">
                  My main focus is helping you identify vulnerabilities before hackers can find them, ensuring your applications comply with international standards like ISO 27001, and providing step-by-step developer guidelines so your team can easily fix any issue.
                </p>
              </div>

              {/* 4 Simple Service Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm font-sans">1. Security Penetration Testing</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-snug">
                      Testing web apps, APIs, and networks for OWASP Top 10 security holes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm font-sans">2. ISO 27001 & Compliance</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-snug">
                      Drafting security policies, risk plans, and preparing companies for official audits.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm font-sans">3. DevSecOps & Server Hardening</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-snug">
                      Hardening Linux servers, Docker containers, and CI/CD code deployment pipelines.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-indigo-500/30 text-indigo-400 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm font-sans">4. Reports & Thesis Guidance</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-snug">
                      Clear PDF executive reports, academic thesis assistance, and custom Python tools.
                    </p>
                  </div>
                </div>

              </div>

              {/* Client Guarantees Checklist */}
              <div className="pt-2 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                  What You Can Expect When Working With Me:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>100% Manual Verification (Zero False Positives)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Strict Non-Disclosure Agreement (NDA) Protected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Developer-Friendly Remediation Guides</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Free 14-Day Patch Re-testing Included</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
