import React, { useState } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Shield, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'help',
      output: `AVAILABLE TERMINAL COMMANDS:
- help           : Show this help menu
- whoami         : Display Muhammad Hamza profile summary
- projects       : List portfolio projects & tools
- services       : List cybersecurity services & GRC frameworks
- contact        : View email, WhatsApp, and LinkedIn
- clear          : Clear terminal screen`
    }
  ]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    cyberAudio.playClick();
    const cmd = inputVal.trim().toLowerCase();
    let response = '';

    switch (cmd) {
      case 'help':
        response = `AVAILABLE COMMANDS:
- help           : Show command list
- whoami         : Developer profile details
- projects       : View key tools & thesis research
- services       : List pentesting & GRC services
- contact        : Display direct communication info
- clear          : Wipe output buffer`;
        break;
      case 'whoami':
        response = `[+] NAME: ${PERSONAL_INFO.name}
[+] ROLE: Cyber Security Engineer & Penetration Tester
[+] LOCATION: ${PERSONAL_INFO.location}
[+] STATS: 100+ Clients | 99.8% Success Rate | Free 14-Day Retest`;
        break;
      case 'projects':
        response = PROJECTS.map((p, idx) => `[${idx + 1}] ${p.title} (${p.category}) - ${p.shortDescription}`).join('\n');
        break;
      case 'services':
        response = `1. Offensive Security & Pentesting (OWASP Top 10, APIs)
2. Security Auditing & GRC Compliance (ISO 27001, Saudi NCC ECC)
3. DevSecOps & Cloud Hardening (GitHub Actions, Docker, Linux)
4. Security Research, Thesis & Technical Reports`;
        break;
      case 'contact':
        response = `[+] Email: ${PERSONAL_INFO.email}
[+] WhatsApp: ${PERSONAL_INFO.whatsapp}
[+] LinkedIn: ${PERSONAL_INFO.linkedinHandle}`;
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        response = `Command '${cmd}' not recognized. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output: response }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-slate-950 border-l border-cyan-500/30 h-full flex flex-col shadow-2xl font-mono text-xs">
        
        {/* Terminal Header */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <TerminalIcon className="w-4 h-4" />
            <span>Muhammad Hamza Shell v2.4</span>
          </div>

          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="p-1 rounded bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* History Window */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-slate-300">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <span>hamza@security:~#</span>
                <span className="text-slate-100">{item.cmd}</span>
              </div>
              <div className="text-slate-400 whitespace-pre-wrap leading-relaxed bg-slate-900/60 p-2.5 rounded border border-slate-800/80">
                {item.output}
              </div>
            </div>
          ))}
        </div>

        {/* Input Command Line */}
        <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <span className="text-cyan-400 font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'whoami', 'projects'..."
            className="flex-1 bg-transparent text-slate-100 focus:outline-none text-xs font-mono"
            autoFocus
          />
          <button type="submit" className="text-slate-500 hover:text-cyan-400">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
