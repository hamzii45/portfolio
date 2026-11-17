import React, { useState } from 'react';
import { Cpu, Search, CheckCircle2, ShieldCheck, Terminal, Award, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategory = SKILL_CATEGORIES[activeCategoryIndex];

  const filteredSkills = currentCategory.skills.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="skills" className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Security Tools, Frameworks & Engineering Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-sans">
            Hands-on mastery over industry standard offensive security tools, compliance frameworks, and secure coding technologies.
          </p>
        </div>

        {/* Search Bar & Category Selector */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveCategoryIndex(idx);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeCategoryIndex === idx
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

        </div>

        {/* Skill Matrix Display Grid */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <h3 className="text-lg font-bold text-slate-100 font-sans flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>{currentCategory.title} Matrix</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {filteredSkills.length} Verified Items
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2 font-mono text-xs">
                  <span className="font-bold text-slate-200 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{skill.name}</span>
                  </span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800 p-0.5">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-8 text-slate-500 font-mono text-xs">
              No skills found matching "{searchTerm}". Try another search term!
            </div>
          )}
        </div>

        {/* Standard Compliance Badges Banner */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { title: 'ISO/IEC 27001:2022', desc: 'ISMS Governance & SoA' },
            { title: 'OWASP Top 10', desc: 'Web & API Standard' },
            { title: 'NIST CSF 2.0', desc: 'Cybersecurity Framework' },
            { title: 'MITRE ATT&CK', desc: 'Threat Vector Mapping' },
            { title: 'Saudi NCC Controls', desc: 'ECC & Compliance' },
          ].map((badge, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl text-center font-mono hover:border-cyan-500/40 transition-colors"
            >
              <Award className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
              <div className="text-xs font-bold text-slate-200">{badge.title}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{badge.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
