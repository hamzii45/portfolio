import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageSquare, CheckCircle2, Send, ShieldCheck, Clock, UserCheck, Lock } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, prefilledService }) => {
  const [activeTab, setActiveTab] = useState<'session' | 'query'>('session');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    serviceOrTopic: prefilledService || 'Security Audit & Advisory',
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM EST',
    scopeOrNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceOrTopic: prefilledService }));
    }
  }, [prefilledService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    cyberAudio.playScan();
    setSubmitted(true);
    cyberAudio.playSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 overflow-hidden font-sans">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 font-sans">
                Request Query or 1-on-1 Session
              </h3>
              <p className="text-xs text-slate-400">Direct Consultation • Confidential • Fast 12h SLA</p>
            </div>
          </div>

          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        {!submitted && (
          <div className="flex p-1 bg-slate-950 rounded-xl border border-slate-800 mb-5 text-xs font-mono">
            <button
              onClick={() => {
                cyberAudio.playClick();
                setActiveTab('session');
              }}
              className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-2 font-bold ${
                activeTab === 'session'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>1-on-1 Live Session</span>
            </button>

            <button
              onClick={() => {
                cyberAudio.playClick();
                setActiveTab('query');
              }}
              className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-2 font-bold ${
                activeTab === 'query'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Submit General Query</span>
            </button>
          </div>
        )}

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">WhatsApp / Phone (Optional)</label>
                <input
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Primary Topic / Service *</label>
                <select
                  value={formData.serviceOrTopic}
                  onChange={(e) => setFormData({ ...formData, serviceOrTopic: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                >
                  <option>Security Audit & Pentesting Advisory</option>
                  <option>ISO 27001 ISMS & Saudi NCC Controls</option>
                  <option>Web Application & API Security Review</option>
                  <option>Academic Thesis & Research Guidance</option>
                  <option>Desktop App / Password Manager Architecture</option>
                  <option>DevSecOps & Server Hardening</option>
                  <option>General Cybersecurity Query</option>
                </select>
              </div>
            </div>

            {activeTab === 'session' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Time Slot Window</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                  >
                    <option>10:00 AM - 12:00 PM EST</option>
                    <option>02:00 PM - 04:00 PM EST</option>
                    <option>06:00 PM - 08:00 PM EST</option>
                    <option>Flexible / Any Time</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1">
                {activeTab === 'session' ? 'Session Agenda & Notes' : 'Query Details / Target Scope'}
              </label>
              <textarea
                rows={3}
                placeholder={activeTab === 'session' ? 'Describe key questions or topics for live screen-share...' : 'Describe your target URLs, scope, or specific security query...'}
                value={formData.scopeOrNotes}
                onChange={(e) => setFormData({ ...formData, scopeOrNotes: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Strict Mutual NDA • Guaranteed 12-Hour SLA Response</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/50"
            >
              <Send className="w-4 h-4 fill-slate-950" />
              <span>
                {activeTab === 'session' ? 'Submit 1-on-1 Session Request' : 'Submit Security Query'}
              </span>
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4 font-mono">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(52,211,153,0.3)]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-100 font-sans">
              {activeTab === 'session' ? 'Session Booking Submitted!' : 'Query Transmitted Successfully!'}
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name || 'Valued Client'}. I have logged your request and will contact you via <strong>{formData.email || 'email'}</strong> within 12 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono hover:bg-slate-800"
            >
              Close Dialog
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

