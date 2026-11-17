import React, { useState } from 'react';
import { Terminal, Shield, Lock, Key, Copy, Check, Download, Play, RefreshCw, AlertTriangle, ShieldCheck, Zap, Database, Eye, EyeOff, Search } from 'lucide-react';
import { cyberAudio } from '../utils/audio';
import { motion, AnimatePresence } from 'motion/react';

export const InteractiveSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'scanner' | 'pwdManager' | 'logParser'>('scanner');

  // --- 1. Scanner State ---
  const [scanTarget, setScanTarget] = useState('https://target-portal.com');
  const [isScanning, setIsScanning] = useState(false);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);

  // --- 2. Password Manager State ---
  const [masterPassword, setMasterPassword] = useState('');
  const [isVaultUnlocked, setIsVaultUnlocked] = useState(false);
  const [vaultError, setVaultError] = useState('');
  const [showMasterPwd, setShowMasterPwd] = useState(false);
  const [generatedPwd, setGeneratedPwd] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Simulated vault data
  const sampleVault = [
    { service: 'GitHub Corporate', username: 'm_hamza_sec', pwd: '●●●●●●●●●●●●', raw: 'p@ssw0rd!_m_381_x' },
    { service: 'AWS Cloud Console', username: 'admin_sys', pwd: '●●●●●●●●●●●●', raw: 'kX9#mP2$vN8@zL1!' },
    { service: 'Splunk SIEM Portal', username: 'soc_analyst_01', pwd: '●●●●●●●●●●●●', raw: 'sIeM_L0g_An4lyz3r!' },
    { service: 'Fiverr Client Vault', username: 'hamza_pentest', pwd: '●●●●●●●●●●●●', raw: 'fIverr_Aud1t_2026#' }
  ];

  // --- 3. Log Parser State ---
  const [logInput, setLogInput] = useState(`[2026-07-28 04:12:01] GET /api/user?id=1' UNION SELECT username,password FROM users-- 200 412
[2026-07-28 04:12:05] POST /login user=admin pass=123456 - 401 Unauthorized
[2026-07-28 04:12:06] POST /login user=admin pass=admin - 401 Unauthorized
[2026-07-28 04:12:07] POST /login user=admin pass=password123 - 401 Unauthorized
[2026-07-28 04:12:08] POST /login user=admin pass=welcome - 401 Unauthorized
[2026-07-28 04:12:12] GET /checkout?coupon=<script>alert('xss')</script> 200 1205`);
  const [parsedFindings, setParsedFindings] = useState<{ id: number; type: string; severity: 'High' | 'Medium' | 'Critical'; detail: string }[]>([]);

  // Start Scanner Handler
  const handleStartScan = () => {
    if (!scanTarget) return;
    cyberAudio.playScan();
    setIsScanning(true);
    setScanComplete(false);
    setScanLogs([]);
    setScanProgress(0);

    const steps = [
      `[+] Initializing Smart Web Vulnerability Scanner v2.4`,
      `[+] Resolving target hostname: ${scanTarget}`,
      `[*] Performing TLS/SSL Certificate Inspection & Cipher Suite Evaluation...`,
      `[+] TLS 1.3 Active | RSA 4096-bit Certificate Valid (Expiry: 120 Days)`,
      `[*] Crawling HTTP endpoints and extracting DOM forms...`,
      `[+] Identified 32 distinct endpoints and 4 input vectors`,
      `[*] Executing SQL Injection (SQLi) Payload Testing...`,
      `[!] VULNERABILITY DETECTED: Time-Based Blind SQLi on parameter 'id' at /api/v1/user`,
      `[*] Testing Reflected Cross-Site Scripting (XSS)...`,
      `[!] VULNERABILITY DETECTED: Unsanitized DOM output on parameter 'q' at /search`,
      `[*] Scanning ports: 80, 443, 22, 8080, 8443...`,
      `[+] Open Ports: 80 (HTTP), 443 (HTTPS), 22 (SSH Hardened)`,
      `[+] Compiling Audit Report & Generating PDF Summary...`,
      `[SUCCESS] Vulnerability Audit Complete. 2 High Vulnerabilities Found.`
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanLogs((prev) => [...prev, step]);
        setScanProgress(Math.round(((index + 1) / steps.length) * 100));
        if (index === steps.length - 1) {
          setIsScanning(false);
          setScanComplete(true);
          cyberAudio.playSuccess();
        }
      }, (index + 1) * 350);
    });
  };

  // Unlock Vault Handler
  const handleUnlockVault = () => {
    cyberAudio.playClick();
    if (masterPassword === 'hamza2026' || masterPassword === '123456' || masterPassword.length >= 6) {
      setIsVaultUnlocked(true);
      setVaultError('');
      cyberAudio.playSuccess();
    } else {
      setVaultError('Invalid Master Key! Try "hamza2026" or enter 6+ characters.');
    }
  };

  // Generate Password
  const handleGeneratePassword = () => {
    cyberAudio.playClick();
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    let res = '';
    for (let i = 0; i < 20; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPwd(res);
  };

  // Copy Vault Password
  const handleCopyPwd = (index: number, text: string) => {
    cyberAudio.playSuccess();
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  // Analyze Log Input
  const handleAnalyzeLogs = () => {
    cyberAudio.playScan();
    const findings: { id: number; type: string; severity: 'High' | 'Medium' | 'Critical'; detail: string }[] = [];

    if (logInput.includes('UNION SELECT')) {
      findings.push({
        id: 1,
        type: 'SQL Injection Attack',
        severity: 'Critical',
        detail: "SQL payload 'UNION SELECT username,password FROM users' detected on endpoint /api/user."
      });
    }

    if (logInput.includes('401 Unauthorized')) {
      findings.push({
        id: 2,
        type: 'SSH / Login Brute-Force Attempt',
        severity: 'High',
        detail: 'High frequency failed POST authentication requests (4 consecutive 401 errors).'
      });
    }

    if (logInput.includes('<script>') || logInput.includes('alert(')) {
      findings.push({
        id: 3,
        type: 'Cross-Site Scripting (XSS)',
        severity: 'Medium',
        detail: "Raw script payload '<script>alert('xss')</script>' injected into parameter 'coupon'."
      });
    }

    setParsedFindings(findings);
    cyberAudio.playSuccess();
  };

  return (
    <section id="sandbox" className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE CYBERSECURITY PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Test Live Security Tools & Software Simulators
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-sans">
            Experience my custom-developed tools in action: automated web vulnerability scanner, encrypted desktop password manager, and IDS log analyzer.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs">
            <button
              onClick={() => {
                cyberAudio.playClick();
                setActiveTab('scanner');
              }}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'scanner'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Web Vulnerability Scanner</span>
            </button>

            <button
              onClick={() => {
                cyberAudio.playClick();
                setActiveTab('pwdManager');
              }}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'pwdManager'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>CryptVault Password Manager</span>
            </button>

            <button
              onClick={() => {
                cyberAudio.playClick();
                setActiveTab('logParser');
              }}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'logParser'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>IDS Log Analyzer</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Web Vulnerability Scanner Simulator */}
        {activeTab === 'scanner' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-100 font-sans flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span>Smart Web Vulnerability Scanner Engine</span>
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Automated crawling, SQLi detection, XSS verification & PDF audit generation
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                Python 3 / Requests / BeautifulSoup
              </span>
            </div>

            {/* Input Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={scanTarget}
                onChange={(e) => setScanTarget(e.target.value)}
                placeholder="Enter target URL (e.g., https://example.com)..."
                disabled={isScanning}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                onClick={handleStartScan}
                disabled={isScanning || !scanTarget}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
              >
                {isScanning ? <RefreshCw className="w-4 h-4 animate-spin text-slate-950" /> : <Play className="w-4 h-4 fill-slate-950" />}
                <span>{isScanning ? 'Scanning...' : 'Run Security Scan'}</span>
              </button>
            </div>

            {/* Scan Progress Bar */}
            {(isScanning || scanProgress > 0) && (
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>Scan Execution Progress</span>
                  <span className="text-cyan-400 font-bold">{scanProgress}%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-cyan-400 h-full transition-all duration-300"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Console Log Terminal Window */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 font-mono text-xs text-slate-300 h-64 overflow-y-auto space-y-1 shadow-inner">
              {scanLogs.length === 0 ? (
                <div className="text-slate-500 italic py-10 text-center">
                  Click "Run Security Scan" to test target URL for SQLi, XSS, TLS ciphers, and port vulnerabilities...
                </div>
              ) : (
                scanLogs.map((log, index) => (
                  <div
                    key={index}
                    className={`${
                      log.includes('VULNERABILITY')
                        ? 'text-red-400 font-semibold'
                        : log.includes('SUCCESS')
                        ? 'text-emerald-400 font-bold'
                        : 'text-slate-300'
                    }`}
                  >
                    {log}
                  </div>
                ))
              )}
            </div>

            {scanComplete && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Scan Completed! Report ready for download.</span>
                </div>
                <button
                  onClick={() => cyberAudio.playSuccess()}
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Sample PDF Audit</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: CryptVault Desktop Password Manager Simulator */}
        {activeTab === 'pwdManager' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-100 font-sans flex items-center gap-2">
                  <Lock className="w-5 h-5 text-cyan-400" />
                  <span>CryptVault Desktop Password Manager</span>
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  AES-256 GCM authenticated encryption, PBKDF2 key derivation & zero-knowledge architecture
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                PyQt5 GUI / Cryptography.io
              </span>
            </div>

            {!isVaultUnlocked ? (
              <div className="max-w-md mx-auto py-8 text-center space-y-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-100 font-sans">
                  Encrypted Vault Locked
                </h4>
                <p className="text-xs text-slate-400">
                  Enter master password to derive AES-256 GCM key via PBKDF2 (100,000 rounds).
                </p>

                <div className="relative">
                  <input
                    type={showMasterPwd ? 'text' : 'password'}
                    placeholder="Enter master key (e.g. hamza2026)..."
                    value={masterPassword}
                    onChange={(e) => setMasterPassword(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-cyan-500 pr-10"
                  />
                  <button
                    onClick={() => setShowMasterPwd(!showMasterPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                  >
                    {showMasterPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {vaultError && (
                  <div className="text-[11px] text-red-400 font-mono bg-red-950/40 p-2 rounded border border-red-500/30">
                    {vaultError}
                  </div>
                )}

                <button
                  onClick={handleUnlockVault}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Key className="w-4 h-4" />
                  <span>Unlock Encrypted Vault</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Vault Controls Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>AES-256 GCM RAM Vault Decrypted</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleGeneratePassword}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono hover:bg-cyan-950/40 transition-colors"
                    >
                      Generate High-Entropy Pwd
                    </button>
                    <button
                      onClick={() => {
                        setIsVaultUnlocked(false);
                        setMasterPassword('');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono hover:bg-red-900/60 transition-colors"
                    >
                      Lock Vault
                    </button>
                  </div>
                </div>

                {generatedPwd && (
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-between text-xs font-mono text-cyan-300">
                    <span>Generated (20 chars): <strong>{generatedPwd}</strong></span>
                    <button
                      onClick={() => handleCopyPwd(999, generatedPwd)}
                      className="text-xs bg-cyan-500 text-slate-950 px-2 py-1 rounded font-bold hover:bg-cyan-400"
                    >
                      {copiedIndex === 999 ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                )}

                {/* Vault Items List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sampleVault.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between font-bold text-slate-200">
                        <span>{item.service}</span>
                        <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                          {item.username}
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded border border-slate-800 text-slate-400">
                        <span>{item.pwd}</span>
                        <button
                          onClick={() => handleCopyPwd(idx, item.raw)}
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px]"
                        >
                          {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedIndex === idx ? 'Copied (Auto-clear 30s)' : 'Copy Pwd'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: IDS Log Analyzer Simulator */}
        {activeTab === 'logParser' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-100 font-sans flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-400" />
                  <span>IDS & SOC Log Threat Parser</span>
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Automated signature matching for Snort/Syslog feeds and attack pattern classification
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                Python / Regex Engine
              </span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 block">
                Paste Raw Server / IDS Logs for Automated Audit:
              </label>
              <textarea
                rows={5}
                value={logInput}
                onChange={(e) => setLogInput(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              onClick={handleAnalyzeLogs}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 shadow-md"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Analyze Logs for Threat Vectors</span>
            </button>

            {parsedFindings.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-200 uppercase">
                  Identified Threat Anomalies ({parsedFindings.length}):
                </h4>
                {parsedFindings.map((finding) => (
                  <div
                    key={finding.id}
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 font-mono text-xs"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-200">{finding.type}</span>
                        <span className="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-500/30">
                          {finding.severity} Severity
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px]">{finding.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
