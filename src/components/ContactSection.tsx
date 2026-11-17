import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Calendar, Copy, Check, MessageSquare, Clock, UserCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'session' | 'query'>('session');
  
  const [sessionData, setSessionData] = useState({
    name: '',
    email: '',
    phoneOrWhatsapp: '',
    domain: 'Security Audit & Advisory',
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM EST',
    subject: '1-on-1 Security Consultation Session Request',
    details: ''
  });

  const [queryData, setQueryData] = useState({
    name: '',
    email: '',
    service: 'Web Application Pentest',
    targetScope: '',
    budget: '$300 - $1,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmitSession = (e: React.FormEvent) => {
    e.preventDefault();
    cyberAudio.playScan();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      cyberAudio.playSuccess();
    }, 1000);
  };

  const handleCopyEmail = () => {
    cyberAudio.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK A SESSION OR SUBMIT A QUERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Request a Consultation Session or Send a Query
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-sans">
            Schedule a 1-on-1 cybersecurity advisory session or send your security audit scope details for immediate analysis.
          </p>
        </div>

        {/* Tab Switcher for Session vs Query */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs shadow-xl">
            <button
              onClick={() => {
                cyberAudio.playClick();
                setActiveTab('session');
              }}
              className={`px-6 py-3 rounded-xl transition-all flex items-center gap-2 font-bold ${
                activeTab === 'session'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-950/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Request 1-on-1 Session</span>
            </button>

            <button
              onClick={() => {
                cyberAudio.playClick();
                setActiveTab('query');
              }}
              className={`px-6 py-3 rounded-xl transition-all flex items-center gap-2 font-bold ${
                activeTab === 'query'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-950/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Submit General Security Query</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-5">
              <h3 className="text-lg font-bold text-slate-100 font-sans flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">Email Address</div>
                    <div className="text-slate-200 font-bold truncate max-w-[160px]">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923020881646"
                target="_blank"
                rel="noreferrer"
                onClick={() => cyberAudio.playClick()}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-center justify-between font-mono text-xs group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">Direct WhatsApp</div>
                    <div className="text-slate-200 font-bold">{PERSONAL_INFO.whatsapp}</div>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-400 font-bold group-hover:underline">Chat Now &rarr;</span>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 font-mono text-xs">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px]">Location</div>
                  <div className="text-slate-200 font-bold">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Session Benefits Box */}
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono space-y-2 text-cyan-300">
                <div className="font-bold text-slate-100 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>1-on-1 Session Guarantees</span>
                </div>
                <ul className="text-[11px] text-slate-300 space-y-1">
                  <li>• Live Screen-share & Architecture Review</li>
                  <li>• Instant Vulnerability Remediation Advice</li>
                  <li>• Thesis & Research Paper Supervision</li>
                  <li>• Strict Mutual NDA Signed in Advance</li>
                </ul>
              </div>

            </div>

          </div>

          {/* Form Area */}
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {!submitted ? (
              activeTab === 'session' ? (
                /* REQUEST 1-ON-1 SESSION FORM */
                <form onSubmit={handleSubmitSession} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-2 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 font-sans flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <span>Request 1-on-1 Consultation Session</span>
                      </h3>
                      <p className="text-xs text-slate-400 font-sans mt-1">
                        Book a live video/audio consultation session with Muhammad Hamza.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                      Slots Available
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={sessionData.name}
                        onChange={(e) => setSessionData({ ...sessionData, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={sessionData.email}
                        onChange={(e) => setSessionData({ ...sessionData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">WhatsApp / Phone (Optional)</label>
                      <input
                        type="text"
                        placeholder="+1 (555) 000-0000"
                        value={sessionData.phoneOrWhatsapp}
                        onChange={(e) => setSessionData({ ...sessionData, phoneOrWhatsapp: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Session Domain / Topic *</label>
                      <select
                        value={sessionData.domain}
                        onChange={(e) => setSessionData({ ...sessionData, domain: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      >
                        <option>Security Audit & Pentesting Advisory</option>
                        <option>ISO 27001 & GRC Compliance Strategy</option>
                        <option>Academic Thesis & Cybersecurity Research Guidance</option>
                        <option>Desktop Software / Password Manager Security Architecture</option>
                        <option>Web Application Vulnerability Code Review</option>
                        <option>DevSecOps & Linux Server Hardening</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={sessionData.preferredDate}
                        onChange={(e) => setSessionData({ ...sessionData, preferredDate: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Preferred Time Window</label>
                      <select
                        value={sessionData.preferredTime}
                        onChange={(e) => setSessionData({ ...sessionData, preferredTime: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      >
                        <option>10:00 AM - 12:00 PM EST</option>
                        <option>02:00 PM - 04:00 PM EST</option>
                        <option>06:00 PM - 08:00 PM EST</option>
                        <option>Flexible / Any Time</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Session Subject / Primary Goal</label>
                    <input
                      type="text"
                      placeholder="e.g. Reviewing OWASP Top 10 vulnerabilities in my Web App"
                      value={sessionData.subject}
                      onChange={(e) => setSessionData({ ...sessionData, subject: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Details & Specific Questions for the Session</label>
                    <textarea
                      rows={4}
                      placeholder="Please mention your application tech stack, security goals, or thesis topic..."
                      value={sessionData.details}
                      onChange={(e) => setSessionData({ ...sessionData, details: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                  >
                    <Calendar className="w-4 h-4 fill-slate-950" />
                    <span>{isSubmitting ? 'Confirming Session Slot...' : 'Confirm Session Booking Request'}</span>
                  </button>
                </form>
              ) : (
                /* SUBMIT SECURITY QUERY FORM */
                <form onSubmit={handleSubmitSession} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-100 font-sans flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-cyan-400" />
                      <span>Submit General Security Query / Scope Request</span>
                    </h3>
                    <p className="text-xs text-slate-400 font-sans mt-1">
                      Send your target URLs, scope details, or technical inquiries directly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={queryData.name}
                        onChange={(e) => setQueryData({ ...queryData, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={queryData.email}
                        onChange={(e) => setQueryData({ ...queryData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Service / Domain *</label>
                      <select
                        value={queryData.service}
                        onChange={(e) => setQueryData({ ...queryData, service: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      >
                        <option>Web Application Pentest</option>
                        <option>API Security Audit</option>
                        <option>ISO 27001 & GRC Implementation</option>
                        <option>DevSecOps & Linux Hardening</option>
                        <option>Desktop Software Security Review</option>
                        <option>Cybersecurity Academic / Thesis Research</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Target Scope / Web URL</label>
                      <input
                        type="text"
                        placeholder="e.g., https://app.mycompany.com"
                        value={queryData.targetScope}
                        onChange={(e) => setQueryData({ ...queryData, targetScope: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Query Message & Requirements</label>
                    <textarea
                      rows={5}
                      placeholder="Describe your security questions, testing requirements, or project details..."
                      value={queryData.message}
                      onChange={(e) => setQueryData({ ...queryData, message: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    <span>{isSubmitting ? 'Transmitting Query...' : 'Submit Security Query'}</span>
                  </button>
                </form>
              )
            ) : (
              /* CONFIRMATION SUCCESS STATE */
              <div className="py-12 text-center space-y-4 font-mono">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-100 font-sans">
                  {activeTab === 'session' ? 'Session Request Confirmed!' : 'Query Received Successfully!'}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you! Your request has been securely logged. Muhammad Hamza will review your details and send confirmation/calendar invite to your email within 12 hours.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href="https://wa.me/923020881646"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-mono hover:bg-emerald-900 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Follow-up</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

