import React, { useState, useEffect } from 'react';
import { ShieldCheck, Download, Mail, ExternalLink, Award, CheckCircle2, Calendar, ArrowRight, ShieldAlert, Lock, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

interface HeroSectionProps {
  onOpenSessionModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSessionModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleCVDownload = () => {
    cyberAudio.playSuccess();
    const element = document.createElement("a");
    const file = new Blob([
      `MUHAMMAD HAMZA - CYBER SECURITY ENGINEER & CONSULTANT
Email: ${PERSONAL_INFO.email}
WhatsApp: ${PERSONAL_INFO.whatsapp}
Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedinHandle}

SUMMARY:
Cyber Security professional specializing in Offensive Security, Penetration Testing, DevSecOps, Security Compliance, and Information Security Governance (GRC). 100+ international clients served with 99.8% success rate on Fiverr & Upwork.
`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Muhammad_Hamza_CyberSecurity_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for Sessions & Consultations</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-semibold">100+ Clients Served</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight font-sans leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">{PERSONAL_INFO.name}</span>
              </h1>
              <div className="h-12 mt-2 flex items-center font-mono text-lg sm:text-2xl text-cyan-400 font-semibold">
                <span className="text-slate-400 mr-2">&gt;</span>
                <span>{displayText}</span>
                <span className="animate-pulse ml-1 inline-block w-2.5 h-6 bg-cyan-400"></span>
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Specializing in <span className="text-cyan-300 font-medium">Offensive Security</span>, <span className="text-cyan-300 font-medium">Penetration Testing</span>, <span className="text-cyan-300 font-medium">ISO 27001 GRC</span>, and <span className="text-cyan-300 font-medium">DevSecOps</span>. I help organizations secure their applications, audit codebases, and guide technical research papers with 4+ years of freelance experience.
            </p>

            {/* Why Choose Us Quick Note Highlights */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/90 flex flex-wrap items-center gap-2 text-xs font-sans text-slate-300 shadow-md">
              <span className="font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                WHY CHOOSE US:
              </span>
              <span className="flex items-center gap-1 text-slate-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>4+ Yrs Experience</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Low & Affordable Rates</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>On-Time Deadlines</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>100% NDA</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  onOpenSessionModal();
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 font-bold text-sm flex items-center gap-2.5 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4 fill-slate-950" />
                <span>Request Query / Session</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={handleCVDownload}
                className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 font-semibold text-sm flex items-center gap-2 transition-all hover:bg-slate-800"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Contact Channels */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <span className="text-slate-500 font-semibold">DIRECT CONTACT:</span>
              <a
                href="https://wa.me/923020881646"
                target="_blank"
                rel="noreferrer"
                onClick={() => cyberAudio.playClick()}
                className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors text-emerald-400 font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp (+92 302 0881646)</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => cyberAudio.playClick()}
                className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Email</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => cyberAudio.playClick()}
                className="hover:text-blue-400 flex items-center gap-1 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Avatar Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 opacity-30 blur-xl animate-pulse" />
              
              <div className="relative w-full h-full rounded-3xl bg-slate-900 border-2 border-cyan-500/40 p-3 shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col justify-between group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>SECURED & VERIFIED</span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-10 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-cyan-400 font-bold">STATUS:</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        ONLINE & READY
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 truncate">
                      ISO 27001 | OWASP | Penetration Testing
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900/90 border border-cyan-500/40 p-3 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-100 font-mono">100% Confidential</div>
                  <div className="text-[10px] text-slate-400">Mutual NDA Protection</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Stats Metric Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-5 rounded-2xl transition-all hover:bg-slate-900/90 group">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono flex items-center gap-1">
              <span>{PERSONAL_INFO.stats.yearsExperience}</span>
              <span className="text-xs font-normal text-slate-400 font-sans">Years</span>
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-1">Freelance Security Consultant</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Offensive, GRC & Research</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-5 rounded-2xl transition-all hover:bg-slate-900/90 group">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono flex items-center gap-1">
              <span>{PERSONAL_INFO.stats.clientsServed}</span>
              <span className="text-xs font-normal text-slate-400 font-sans">Global</span>
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-1">Satisfied Freelance Clients</div>
            <div className="text-[11px] text-slate-400 mt-0.5">USA, UK, Saudi Arabia, EU</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-5 rounded-2xl transition-all hover:bg-slate-900/90 group">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono flex items-center gap-1">
              <span>{PERSONAL_INFO.stats.successRate}</span>
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-1">Client Rating & Satisfaction</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Verified 5-Star Track Record</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 p-5 rounded-2xl transition-all hover:bg-slate-900/90 group">
            <div className="text-xl sm:text-2xl font-extrabold text-indigo-400 font-mono flex items-center gap-1">
              <span>12-Hour SLA</span>
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-1">Fast Response SLA</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Direct Communication</div>
          </div>

        </div>

      </div>
    </section>
  );
};

