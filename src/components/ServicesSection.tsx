import React, { useState } from 'react';
import { ShieldAlert, FileCheck2, Cpu, SearchCheck, CheckCircle2, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';
import { cyberAudio } from '../utils/audio';

interface ServicesSectionProps {
  onOpenAuditModalWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAuditModalWithService }) => {
  const [selectedService, setSelectedService] = useState<Service>(SERVICES[0]);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-indigo-400" />;
      default:
        return <Shield className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>CORE SERVICES OFFERED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            High-Impact Security Solutions for Modern Digital Assets
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-sans">
            End-to-end offensive security testing, regulatory compliance alignment, and automated DevSecOps integration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => {
            const isSelected = selectedService.id === srv.id;
            return (
              <div
                key={srv.id}
                onClick={() => {
                  cyberAudio.playClick();
                  setSelectedService(srv);
                }}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] scale-[1.02]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 font-sans mb-2 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4 font-sans">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-medium">View Scope Details</span>
                  <ArrowRight className={`w-4 h-4 text-cyan-400 transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase Panel */}
        <div className="mt-10 bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-cyan-950/80 border border-cyan-500/40">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Selected Service Scope</span>
                <h3 className="text-2xl font-bold text-slate-100 font-sans">{selectedService.title}</h3>
              </div>
            </div>

            <button
              onClick={() => {
                cyberAudio.playSuccess();
                onOpenAuditModalWithService(selectedService.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Request Query / Session for {selectedService.title}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {/* Sub-Services Checklist */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 font-mono uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>What I Test & Implement</span>
              </h4>
              <div className="space-y-2">
                {selectedService.subServices.map((sub, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-300 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guaranteed Deliverables */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 font-mono uppercase tracking-wider mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Key Deliverables You Receive</span>
              </h4>
              <div className="space-y-2">
                {selectedService.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-300 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-300 font-mono">
                <span className="font-bold text-slate-100">Popular For: </span>
                {selectedService.popularFor}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
