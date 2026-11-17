import React from 'react';
import { X, ExternalLink, Github, FileText, CheckCircle2, ShieldAlert, Code2, Terminal, Download } from 'lucide-react';
import { Project } from '../types';
import { cyberAudio } from '../utils/audio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto font-sans space-y-6">
        
        {/* Modal Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30 mb-2">
              {project.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans">
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-slate-300 uppercase">Case Study Overview</h4>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-slate-300 uppercase">Key Deliverables & Security Features</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Output Snippet / Console Log */}
        {project.sampleOutputSnippet && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Verified Execution / Audit Log Output</span>
            </h4>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {project.sampleOutputSnippet}
            </pre>
          </div>
        )}

        {/* Documentation / Downloads */}
        {project.documentsOrReports && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Associated Documentation & PDF Reports</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.documentsOrReports.map((doc, idx) => (
                <div key={idx} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div>
          <h4 className="text-xs font-mono font-bold text-slate-300 uppercase mb-2">Technologies & Tooling</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technology.map((tech, idx) => (
              <span key={idx} className="text-xs font-mono text-cyan-300 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">Verified Client Deliverable</span>
          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs font-mono hover:bg-cyan-400"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
