import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ShieldAlert, FileText, Code2, Terminal, CheckCircle2, Eye, Sparkles, Filter, Laptop, BookOpen, Microscope, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { cyberAudio } from '../utils/audio';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Auditing',
    'Web & Desktop Tools',
    'Research & Thesis',
    'Labs & Academic',
    'GRC & Documentation'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Auditing':
        return <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Web & Desktop Tools':
        return <Laptop className="w-3.5 h-3.5 text-blue-400" />;
      case 'Research & Thesis':
        return <BookOpen className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Labs & Academic':
        return <Microscope className="w-3.5 h-3.5 text-indigo-400" />;
      default:
        return <FileText className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Security Tools, Research Papers, Audits & Academic Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-sans">
            Real-world security engineering deliverables spanning desktop software, automated scanners, published thesis research, and GRC compliance frameworks.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  cyberAudio.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Motion Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group relative overflow-hidden"
              >
                {/* Subtle top highlight bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                      {project.highlightBadge || project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 font-sans mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-slate-400 text-xs leading-relaxed font-sans line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack pill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technology.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technology.length > 4 && (
                      <span className="text-[10px] font-mono text-cyan-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                        +{project.technology.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onSelectProject(project);
                    }}
                    className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/btn"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
                    <span>Inspect Case Study & Code</span>
                  </button>

                  <span className="text-[11px] font-mono text-slate-500">verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
