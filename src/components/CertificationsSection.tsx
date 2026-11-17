import React from 'react';
import { Award, ShieldCheck, CheckCircle2, FileCheck2, Lock } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "ISO/IEC 27001:2022 ISMS Lead Consultant Practitioner",
      issuer: "Information Security Governance Standard",
      year: "2025",
      desc: "Specializing in ISMS policies, Statement of Applicability (SoA), Risk Treatment Plans, and stage 1/2 compliance audits."
    },
    {
      title: "OWASP Web Application Security & API Pentesting Auditor",
      issuer: "Offensive Security Standard",
      year: "2025",
      desc: "Expertise in identifying SQL Injection, Cross-Site Scripting (XSS), IDOR, SSRF, and broken access controls."
    },
    {
      title: "Saudi National Cybersecurity Authority (NCC) ECC Controls Specialist",
      issuer: "Regulatory Cyber Compliance",
      year: "2025",
      desc: "Mapping Essential Cybersecurity Controls (ECC) and framework implementation for Middle East enterprises."
    },
    {
      title: "NIST Cybersecurity Framework 2.0 (CSF) Practitioner",
      issuer: "NIST Security Standards",
      year: "2024",
      desc: "In-depth knowledge of Identify, Protect, Detect, Respond, and Recover cybersecurity core functions."
    },
    {
      title: "DevSecOps & Secure CI/CD Automation Engineer",
      issuer: "Cloud & DevSecOps Standards",
      year: "2024",
      desc: "Integrating static code analysis, secret scanners, container checks, and Linux kernel hardening into GitHub Actions."
    }
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>STANDARDS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Certified Security & Regulatory Compliance Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-sans">
            Rigorous adherence to international cybersecurity standards, ISO benchmarks, and offensive security frameworks.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 text-cyan-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30 font-bold">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 font-sans mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-3">{cert.issuer}</div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{cert.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </span>
                <span className="text-slate-500">Official</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
