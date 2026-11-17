import { Project, FreelanceDomain, Service, SkillCategory, Testimonial, FAQItem } from '../types';

export const PERSONAL_INFO = {
  name: "Muhammad Hamza",
  title: "Cyber Security Consultant | Penetration Tester | DevSecOps & GRC Freelancer",
  roles: [
    "Cyber Security Consultant",
    "Fiverr & Upwork Freelancer (4+ Years)",
    "Web & API Penetration Tester",
    "ISO 27001 & GRC Auditor",
    "Cybersecurity Researcher & Technical Author"
  ],
  bio: "I am a passionate Cyber Security Consultant & Freelancer with over 4 years of hands-on experience on Fiverr, Upwork, and direct international engagements. I specialize in Penetration Testing, Security Audits, GRC Compliance, DevSecOps, Academic Thesis Supervision, and Custom Security Tool Development.",
  detailedBio: "Over the past 4 years, I have successfully delivered 100+ cybersecurity projects across multiple domains including Web Application Security Audits, Technical Report Writing, Academic Research/Thesis Guidance, Desktop Application Security (Password Managers/Vaults), Custom Security Tools, Virtual Security Labs, and ISO 27001 GRC Documentation.",
  location: "Lahore, Punjab, Pakistan",
  whatsapp: "+92 302 0881646",
  email: "muhammadhamza04556@gmail.com",
  linkedin: "https://linkedin.com/in/muhammadhamza45",
  linkedinHandle: "linkedin.com/in/muhammadhamza45",
  github: "https://github.com/muhammadhamza-cyber",
  fiverr: "https://www.fiverr.com",
  avatarUrl: "D:\muhammad-hamza---cyber-security-portfolio\src\assets\images\hamza.jfif",
  stats: {
    yearsExperience: "4+",
    clientsServed: "100+",
    successRate: "99.8%",
    retestingGuarantee: "Free 14-Day Retest"
  }
};

export const FREELANCE_DOMAINS: FreelanceDomain[] = [
  {
    id: "domain-audit",
    title: "Security Auditing & Compliance",
    iconName: "ShieldCheck",
    yearsExperience: "4 Years Experience",
    projectsCompleted: "35+ Audits Completed",
    summary: "Comprehensive infrastructure, web, and network security audits. Specialized in ISO 27001 ISMS, Statement of Applicability (SoA), Saudi NCC ECC, and Risk Treatment Plans.",
    keyDeliverables: [
      "ISO 27001:2022 ISMS Policy Frameworks",
      "Saudi NCC Essential Cybersecurity Controls (ECC) Audits",
      "Risk Register & Statement of Applicability (SoA)",
      "Internal Audit & Pre-Certification Assessments"
    ],
    tags: ["ISO 27001", "GRC Audit", "Saudi NCC", "Risk Treatment", "NIST CSF"],
    badgeColor: "cyan"
  },
  {
    id: "domain-pentesting",
    title: "Penetration Testing (Web & Network)",
    iconName: "ShieldAlert",
    yearsExperience: "4 Years Experience",
    projectsCompleted: "45+ Pentests Conducted",
    summary: "In-depth offensive security testing targeting OWASP Top 10 vulnerabilities, API security flaws, authorization bypasses, and network vulnerabilities.",
    keyDeliverables: [
      "Web Application Pentests (OWASP Top 10)",
      "REST & GraphQL API Security Assessments",
      "Manual Business Logic & Authentication Audits",
      "14-Day Free Patch Retesting Guarantee"
    ],
    tags: ["OWASP Top 10", "Burp Suite", "API Pentest", "XSS/SQLi", "Manual Exploit"],
    badgeColor: "blue"
  },
  {
    id: "domain-reports",
    title: "Technical Reports & Documentation",
    iconName: "FileText",
    yearsExperience: "4 Years Experience",
    projectsCompleted: "60+ Reports Delivered",
    summary: "Industry-standard technical audit reports, executive risk summaries for C-suite management, and detailed step-by-step developer remediation guides.",
    keyDeliverables: [
      "CVSS v3.1 Impact Severity Matrices",
      "Proof of Concept (PoC) Exploit Code & Screenshots",
      "C-Level Executive Summaries & Action Plans",
      "Line-by-line Developer Patch Writeups"
    ],
    tags: ["Technical Writing", "CVSS v3.1", "Exec Briefs", "PoC Documentation"],
    badgeColor: "indigo"
  },
  {
    id: "domain-thesis",
    title: "Thesis, Research Work & Academics",
    iconName: "BookOpen",
    yearsExperience: "4 Years Experience",
    projectsCompleted: "25+ Research Projects",
    summary: "Academic cybersecurity research papers, undergraduate/master thesis supervision support, literature reviews, and empirical experiment designs.",
    keyDeliverables: [
      "IEEE/Springer Format Research Papers",
      "Undergraduate & Graduate Thesis Chapters",
      "AI Phishing & Zero Trust Architecture Studies",
      "Latex & BibTeX Formatted Research Documentation"
    ],
    tags: ["Thesis Support", "Research Papers", "IEEE Format", "Zero Trust", "AI Security"],
    badgeColor: "emerald"
  },
  {
    id: "domain-webapp",
    title: "Web Application Tools & Hardening",
    iconName: "Globe",
    yearsExperience: "4 Years Experience",
    projectsCompleted: "30+ Web Projects",
    summary: "Custom web-based security scanners, automated reconnaissance toolchains, web application hardening, and secure API gateway configurations.",
    keyDeliverables: [
      "Python Web Vulnerability Scanner Automation",
      "Content Security Policy (CSP) & Header Hardening",
      "Input Sanitization & Secure Auth Frameworks",
      "Automated Web Crawling & Subdomain Enumerators"
    ],
    tags: ["Python Scanners", "Web Hardening", "Subdomain Enum", "Security Headers"],
    badgeColor: "amber"
  },
  {
    id: "domain-desktop",
    title: "Desktop Applications & Password Managers",
    iconName: "Lock",
    yearsExperience: "4 Years Experience",
    projectsCompleted: "15+ Desktop Apps",
    summary: "Secure desktop software development including zero-knowledge password managers, encrypted vault storage, anti-keylogger protection, and local cryptography.",
    keyDeliverables: [
      "AES-256 GCM Zero-Knowledge Desktop Password Vaults",
      "PBKDF2 HMAC SHA-256 Key Derivation Engines",
      "Cross-Platform PyQt5 / Electron Security Interfaces",
      "Auto-Clearing RAM & Anti-Memory Scraping Logic"
    ],
    tags: ["AES-256", "PyQt5 Desktop", "Password Manager", "Cryptography", "Offline Vault"],
    badgeColor: "rose"
  },
  {
    id: "domain-labs",
    title: "Security Solutions, Labs & Tooling",
    iconName: "Terminal",
    yearsExperience: "4 Years Experience",
    projectsCompleted: "20+ Labs & Solutions",
    summary: "Hands-on virtual security laboratory environments (TryHackMe/HTB style), Snort IDS log analyzers, and custom Python exploitation automation scripts.",
    keyDeliverables: [
      "Virtual Cybersecurity Lab Topologies & Scenarios",
      "Snort & Syslog Automated Threat Log Analyzers",
      "Custom Exploit & Reconnaissance Automation Scripts",
      "Hands-On Capture The Flag (CTF) Challenge Design"
    ],
    tags: ["Virtual Labs", "Snort IDS", "Python Automation", "CTF Challenges", "SOC Tools"],
    badgeColor: "purple"
  }
];


export const SERVICES: Service[] = [
  {
    id: "srv-offensive",
    title: "Offensive Security & Pentesting",
    category: "Offensive Security",
    iconName: "ShieldAlert",
    description: "Uncover critical security flaws in web applications, REST APIs, and network endpoints before malicious threat actors exploit them.",
    deliverables: [
      "Executive Summary & Risk Matrix for C-Suite",
      "Detailed Technical Pentest Report with PoC exploits & CVSS v3.1 scores",
      "Line-by-line developer remediation code snippets",
      "Complimentary 14-day patch re-verification test"
    ],
    subServices: [
      "Web Application Penetration Testing (OWASP Top 10)",
      "REST & GraphQL API Security Audits",
      "Internal & External Network Pentesting",
      "Business Logic & Authorization Bypass Exploitation",
      "Source Code Security Audit & Static Analysis"
    ],
    popularFor: "SaaS Platforms, E-Commerce Portals, FinTech & Web Apps"
  },
  {
    id: "srv-audit-grc",
    title: "Security Auditing & GRC Compliance",
    category: "GRC & Compliance",
    iconName: "FileCheck2",
    description: "End-to-end information security audits, ISO/IEC 27001 ISMS implementation, Saudi NCC ECC compliance, and risk treatment framework design.",
    deliverables: [
      "Full ISO 27001 Policy & Procedure Document Package",
      "Customized Statement of Applicability (SoA) & Risk Register",
      "NIST CSF & Saudi NCC Gap Analysis Report",
      "Internal Audit & Stage 1/2 Certification Preparation"
    ],
    subServices: [
      "ISO/IEC 27001:2022 ISMS Implementation",
      "Risk Assessment & Risk Treatment Plan (RTP)",
      "Statement of Applicability (SoA) Matrix",
      "Saudi NCC Essential Cybersecurity Controls (ECC) Audit",
      "Information Security Policy & BCP/DR Drafting"
    ],
    popularFor: "Enterprises, Cloud Service Providers & B2B SaaS Vendors"
  },
  {
    id: "srv-devsecops",
    title: "DevSecOps & Cloud Infrastructure Hardening",
    category: "DevSecOps",
    iconName: "Cpu",
    description: "Embed security automation directly into your software delivery pipelines, container environments, and cloud server configurations.",
    deliverables: [
      "Hardened GitHub Actions / GitLab CI/CD Security Workflows",
      "Docker & Container Security CIS Benchmark Audit",
      "Linux Server OS Hardening Guide (Ubuntu/Debian/RHEL)",
      "Automated SAST / DAST Scanner Pipeline Integration"
    ],
    subServices: [
      "Secure CI/CD Pipeline Automation",
      "Docker & Container Security Reviews",
      "Linux Server Kernel & SSH Hardening",
      "GitHub Secrets & Supply Chain Audit",
      "Cloud Infrastructure Configuration Review"
    ],
    popularFor: "DevOps Teams, Cloud Native Apps & Software Agencies"
  },
  {
    id: "srv-research-reports",
    title: "Security Research, Thesis & Technical Reports",
    category: "Security Consulting",
    iconName: "SearchCheck",
    description: "In-depth cybersecurity research, academic thesis projects, technical whitepapers, security lab setups, and custom desktop/web tool development.",
    deliverables: [
      "Publication-Ready Academic Research Papers & Thesis Chapters",
      "Professional Technical Audit & Vulnerability Assessment Reports",
      "Desktop & Web Security Tool Architecture & Codebase",
      "Custom Virtual Security Lab Topology & Exercises"
    ],
    subServices: [
      "Cybersecurity Academic Research & Thesis Supervision Support",
      "Desktop Security Tools (Password Managers, Encrypted Storage)",
      "Web Security Tools & Python Scanner Automation",
      "Hands-On Cybersecurity Lab Architecture (TryHackMe/HTB Style)",
      "Technical Writing, Literature Reviews & Security Whitepapers"
    ],
    popularFor: "Universities, Academic Researchers, SOC Labs & Tech Firms"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Offensive & Defensive Security",
    skills: [
      { name: "Web App Penetration Testing", level: 96 },
      { name: "API Security Testing", level: 94 },
      { name: "Vulnerability Assessment", level: 98 },
      { name: "Network Infrastructure Security", level: 90 },
      { name: "Secure Source Code Audit", level: 88 },
      { name: "Threat Hunting & SIEM Analysis", level: 86 },
      { name: "Desktop Software Security Review", level: 85 },
      { name: "Phishing Email Detection", level: 92 }
    ]
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    skills: [
      { name: "ISO/IEC 27001:2022 ISMS", level: 96 },
      { name: "NIST Cybersecurity Framework 2.0", level: 92 },
      { name: "OWASP Top 10 Standard", level: 98 },
      { name: "Saudi NCC Essential Controls (ECC)", level: 90 },
      { name: "Statement of Applicability (SoA)", level: 95 },
      { name: "Risk Treatment Plan (RTP)", level: 94 }
    ]
  },
  {
    title: "Programming, Tools & Research",
    skills: [
      { name: "Python Security Automation", level: 94 },
      { name: "Bash & Linux Shell Scripting", level: 90 },
      { name: "Burp Suite Professional", level: 96 },
      { name: "Nmap, Nessus & OWASP ZAP", level: 95 },
      { name: "Metasploit & SQLMap", level: 90 },
      { name: "Desktop GUI Security Apps (PyQt/Electron)", level: 88 },
      { name: "Technical Report & Thesis Writing", level: 96 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-web-scanner",
    title: "Smart Web Vulnerability Scanner",
    category: "Web Application Tool",
    highlightBadge: "Web Application Tool",
    shortDescription: "Automated web application security tool capable of recursive crawling, SQL Injection detection, XSS verification, SSL analysis, and PDF report generation.",
    fullDescription: "Designed and developed an automated web vulnerability scanner capable of identifying common web application security issues. The tool performs deep website crawling, SQL Injection detection, Cross-Site Scripting (XSS) payload testing, SSL/TLS security analysis, subdomain enumeration, and open port scanning. It automatically compiles findings into professional PDF security reports with remediation recommendations.",
    keyFeatures: [
      "Recursive Crawling & Link Discovery Engine",
      "Automated SQL Injection (SQLi) Payload Tester",
      "Reflected & Stored Cross-Site Scripting (XSS) Verifier",
      "SSL/TLS Certificate Strength & Cipher Suite Inspector",
      "Subdomain Brute-Forcing & DNS Enumeration",
      "Socket-Based Open Port Scanner",
      "Automated PDF Audit Report Generator with Remediation Guidelines"
    ],
    technology: ["Python 3", "Requests", "BeautifulSoup4", "FPDF", "Sockets"],
    sampleOutputSnippet: `[+] Crawling target: https://target-app.com
[+] Identified 28 endpoints
[*] Testing SQL Injection on parameter 'id'... [VULNERABLE - Time-based blind]
[*] Testing XSS on parameter 'search'... [VULNERABLE - Reflected]
[+] SSL Certificate Expiry: 120 Days | TLS 1.3 Active
[+] Report generated -> audit_report_target-app.pdf [SUCCESS]`
  },
  {
    id: "proj-desktop-pwd",
    title: "CryptVault Desktop Password Manager",
    category: "Desktop App Password Manager",
    highlightBadge: "Desktop Password Manager",
    shortDescription: "Zero-knowledge cross-platform desktop password manager featuring AES-256 GCM encryption, PBKDF2 key derivation, biometrics, and secure vault storage.",
    fullDescription: "Developed a secure, offline-first desktop password management application designed to protect user credentials using client-side cryptographic isolation. Built with a responsive dark GUI, the app enforces AES-256 GCM authenticated encryption with PBKDF2 HMAC SHA-256 key derivation (100,000 iterations), automatic clipboard clearing, password strength evaluation, and zero-knowledge architecture.",
    keyFeatures: [
      "AES-256 GCM Encrypted Vault Storage (Client-Side Only)",
      "PBKDF2 Key Derivation with 100,000 Iterations & Salt",
      "Master Password Verification without Storing Raw Password",
      "Auto-Clearing Clipboard Memory (30s Timeout)",
      "Entropy-Based Password Generator & Security Health Audit",
      "Cross-Platform Desktop GUI (PyQt5 / Electron Interface)",
      "Encrypted JSON Backup Export & Vault Recovery Key Generation"
    ],
    technology: ["Python", "PyQt5 / GUI", "PyCryptodome", "Cryptography.io", "SQLite Encrypted"],
    sampleOutputSnippet: `[*] Master Key Derived via PBKDF2 HMAC SHA-256 (100,000 rounds)
[+] Vault Unlocked: 142 Accounts Decrypted in RAM (AES-256 GCM)
[*] Generator Engine: Strength Score 98/100 (24 chars, High Entropy)
[!] Clipboard Security: Secret cleared after 30 seconds.`
  },
  {
    id: "proj-enterprise-audit",
    title: "Enterprise Vulnerability Assessment & Security Audit",
    category: "Auditing",
    highlightBadge: "Security Audit",
    shortDescription: "Comprehensive vulnerability assessment and penetration test auditing enterprise web portals, internal networks, and cloud endpoints.",
    fullDescription: "Performed complete vulnerability assessments and penetration testing for enterprise infrastructure using automated auditing frameworks combined with deep manual exploitation techniques. Delivered executive and technical audit reports with CVSS v3.1 risk ratings, impact vectors, and prioritized remediation guidelines.",
    keyFeatures: [
      "External & Internal Network Reconnaissance",
      "Web Application Exploitation (Authentication Bypass, IDOR, SSRF)",
      "REST API Security Audit & Parameter Fuzzing",
      "Privilege Escalation & Lateral Movement Simulation",
      "CVSS v3.1 Risk Impact Scoring",
      "Executive Briefing & Technical Developer Patch Sessions"
    ],
    technology: ["Burp Suite Pro", "Nmap", "Nessus Audit", "Metasploit", "Python"],
    sampleOutputSnippet: `[FINDING #1 - CRITICAL] Insecure Direct Object Reference (IDOR) on /api/v1/invoice-download
  CVSS Score: 9.1 (CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N)
  Impact: Authenticated attacker can access private PDF invoices of all registered clients.`
  },
  {
    id: "proj-iso-toolkit",
    title: "ISO 27001 ISMS Implementation & SoA Toolkit",
    category: "Documentation",
    highlightBadge: "ISO 27001 Documentation",
    shortDescription: "Turnkey Information Security Management System (ISMS) documentation framework containing policies, Statement of Applicability (SoA), and Risk Treatment Plans.",
    fullDescription: "Developed a professional Information Security Management System (ISMS) toolkit aligned with ISO/IEC 27001:2022. The toolkit includes policies, procedures, risk assessment templates, Statement of Applicability (SoA), Risk Treatment Plans (RTP), asset registers, and supporting compliance documentation for organizations seeking ISO certification.",
    keyFeatures: [
      "ISMS Manual & Information Security Policy Charter",
      "Risk Assessment Methodology & Matrix (ISO 27005 Aligned)",
      "Statement of Applicability (SoA) covering all 93 Annex A Controls",
      "Risk Treatment Plan (RTP) with Ownership & Target Dates",
      "Gap Assessment Matrix vs Saudi NCC ECC & NIST CSF",
      "Incident Response, Access Control & BCP/DR Documentation"
    ],
    technology: ["ISO/IEC 27001:2022", "ISO 27005", "Saudi NCC ECC", "Markdown / Docx"],
    documentsOrReports: [
      "ISMS_Manual_v2022.pdf",
      "Statement_of_Applicability_SoA.xlsx",
      "Risk_Treatment_Plan_Template.xlsx",
      "Information_Security_Policy.docx"
    ]
  },
  {
    id: "proj-research-thesis",
    title: "Cybersecurity Thesis: AI Phishing & Zero Trust Architecture",
    category: "Thesis",
    highlightBadge: "Academic Thesis",
    shortDescription: "Published cybersecurity research paper and university thesis evaluating deep learning email header analysis and Zero Trust Network Architecture implementation.",
    fullDescription: "Authored an in-depth academic research paper and comprehensive undergraduate/master thesis investigating automated phishing detection mechanisms and Zero Trust Network Architecture (ZTNA). The research proposed a novel hybrid model analyzing email headers, SPF/DKIM alignment, URL DOM trees, and sender domain reputation in real time.",
    keyFeatures: [
      "Peer-Reviewed Literature Review of Web & Email Threat Vectors",
      "Real-Time Email Header & DKIM/SPF Parsing Algorithm",
      "Machine Learning Model Training on 50,000 Phishing Datasets",
      "Zero Trust Micro-Segmentation Architecture Framework",
      "Comparative Performance Analysis (98.4% Detection Accuracy)",
      "Complete Thesis Documentation with Methodologies & Citation Graphs"
    ],
    technology: ["Python", "Scikit-Learn", "IMAP/SMTP", "LaTeX", "BibTeX", "Pandas"],
    documentsOrReports: [
      "Hamza_Cybersecurity_Thesis_Final.pdf",
      "Phishing_Detection_Research_Paper.pdf"
    ]
  },
  {
    id: "proj-research-work",
    title: "Advanced Threat Intelligence & Threat Hunting Study",
    category: "Research Work",
    highlightBadge: "Research Work",
    shortDescription: "Empirical cybersecurity research paper analyzing advanced persistent threats (APT), malware obfuscation techniques, and SIEM threat hunting strategies.",
    fullDescription: "Conducted in-depth cybersecurity research analyzing APT attack vectors, fileless malware techniques, and automated threat hunting playbooks. Synthesized findings into a peer-reviewed research manuscript with experimental telemetry data.",
    keyFeatures: [
      "Malware Behavior Analysis in Isolated Sandbox Environments",
      "MITRE ATT&CK Framework Mapping for Ransomware Campaigns",
      "Automated YARA & Sigma Rule Generation",
      "Threat Hunting Telemetry Analysis using Splunk and ELK"
    ],
    technology: ["Research Paper", "Splunk", "YARA Rules", "Wireshark", "MITRE ATT&CK"]
  },
  {
    id: "proj-soc-lab",
    title: "IDS Log Analyzer & Virtual Security Lab Topology",
    category: "Labs",
    highlightBadge: "Virtual Lab",
    shortDescription: "Custom-built security analysis laboratory featuring Snort/Suricata IDS log parsing, threat detection rules, and automated attack simulation scripts.",
    fullDescription: "Constructed an interactive virtual cybersecurity lab environment replicating enterprise SOC infrastructure. Developed a custom Python Intrusion Detection System (IDS) log analyzer that parses raw Snort and Syslog feeds, classifies attack signatures, identifies brute-force patterns, and generates automated threat alerts.",
    keyFeatures: [
      "Multi-Format IDS Log Parsing (Snort, Suricata, Syslog)",
      "Automated Attack Signature & Brute-Force Pattern Recognition",
      "IP Anomaly Detection & Threat Severity Classifier",
      "Hands-On Lab Topology with Attack & Defense VM Pods",
      "JSON & CSV Threat Report Exporter for SOC Analysts"
    ],
    technology: ["Python 3", "Regex Engine", "Snort IDS", "VirtualBox / KVM", "Linux"],
    sampleOutputSnippet: `[*] Processing snort_alerts.log (18,400 events)
[ALERT] Potential SSH Brute-Force from IP 192.168.1.105 (420 attempts/min)
[ALERT] SQL Injection signature matched from 45.33.12.8 -> GET /search?q=UNION+SELECT
[+] SOC Summary exported -> incident_analysis_2026.json`
  },
  {
    id: "proj-ai-surveillance",
    title: "AI-Based Computer Vision Security System",
    category: "Academic Project",
    highlightBadge: "Academic Capstone",
    shortDescription: "Intelligent desktop surveillance application built as an academic capstone project integrating real-time facial recognition and object threat detection.",
    fullDescription: "Developed an intelligent desktop surveillance application as a university Final Year Project (FYP). The system integrates computer vision models to perform live camera feed processing, facial recognition for personnel tracking, weapon object detection, instant audio/visual security alerts, and event logging with administrative controls.",
    keyFeatures: [
      "Live IP Camera Stream & Frame Acquisition",
      "Facial Recognition Engine for Personnel Verification",
      "Object Detection Model for Concealed Weapon Identification",
      "Real-Time Incident Audio Alarms & UI Notifications",
      "Timestamped Incident Audit Logs with Snapshot Evidence",
      "Administrative Dashboard & Role-Based Access Control"
    ],
    technology: ["Python", "OpenCV", "YOLOv5 / Deep Learning", "PyQt5", "SQLite"],
    sampleOutputSnippet: `[SYSTEM STATUS] AI Vision Engine Active | Camera #1 Connected
[ALERT] Weapon Detected (Confidence: 94.2%) at Frame #1204 - Camera #1
[ACTION] Audio Alarm Triggered | Snapshot Saved to /logs/events_2026.sqlite`
  },
  {
    id: "proj-tech-report-package",
    title: "Enterprise Vulnerability Assessment & Technical Report Package",
    category: "Technical Report",
    highlightBadge: "Technical Report",
    shortDescription: "Standardized enterprise security audit documentation package containing vulnerability matrices, PoC exploit writeups, and executive slide decks.",
    fullDescription: "Created an industry-standard security documentation and technical reporting package used for executive risk briefings and developer remediation. Includes CVSS v3.1 calculators, OWASP risk rating matrices, proof-of-concept screenshot templates, and remediation tracking roadmaps.",
    keyFeatures: [
      "Executive Summary Template for Board Members",
      "CVSS v3.1 Severity Matrix & Impact Calculation Sheets",
      "Step-by-Step Developer Remediation Walkthroughs",
      "Audit Trail & Compliance Attestation Certificate Templates"
    ],
    technology: ["Markdown", "LaTeX", "PDF Engine", "CVSS v3.1", "OWASP Documentation"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "David Miller",
    clientRole: "CTO",
    companyOrPlatform: "FinTech SaaS Platform",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    comment: "Muhammad Hamza performed a thorough web application pentest on our payment portal. He discovered a critical authorization flaw that automated tools missed! His report was extremely clear with step-by-step remediation code. Highly recommended!",
    projectScope: "Web App & API Penetration Test",
    verifiedBuyer: true
  },
  {
    id: "test-2",
    clientName: "Dr. Tariq Al-Mansoor",
    clientRole: "Compliance Director",
    companyOrPlatform: "Saudi Tech Services",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    rating: 5,
    comment: "Hamza helped us align our IT infrastructure with Saudi NCC controls and drafted our complete ISO 27001 documentation set. His deep understanding of GRC, Risk Assessment, and Statement of Applicability made our audit seamless. Exceptional professional!",
    projectScope: "ISO 27001 & Saudi NCC Audit",
    verifiedBuyer: true
  },
  {
    id: "test-3",
    clientName: "Alexander Wright",
    clientRole: "Lead DevOps Engineer",
    companyOrPlatform: "E-Commerce Cloud Engine",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    comment: "Fast, accurate, and incredibly knowledgeable in DevSecOps! Hamza secured our GitHub Actions CI/CD pipelines, hardened our Ubuntu servers, and checked our Docker images. Will definitely work with him long term.",
    projectScope: "DevSecOps & Linux Hardening",
    verifiedBuyer: true
  },
  {
    id: "test-4",
    clientName: "Sophia Chen",
    clientRole: "Product Manager",
    companyOrPlatform: "HealthTech AI Startup",
    country: "Canada",
    flag: "🇨🇦",
    rating: 5,
    comment: "Outstanding communication and top-tier security audit report. He didn't just dump raw tool output; he manually verified every vulnerability and provided developer re-testing sessions. 10/10 service on Fiverr!",
    projectScope: "Vulnerability Assessment & Audit",
    verifiedBuyer: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Penetration Testing",
    question: "What is included in a Web Application Penetration Test?",
    answer: "A complete penetration test includes reconnaissance, automated scanning, manual exploitation testing (OWASP Top 10, business logic, authorization flaws, API endpoints), proof-of-concept exploit verification, an executive summary, a detailed technical report with CVSS v3.1 scores, and a complimentary re-test after you apply fixes."
  },
  {
    id: "faq-2",
    category: "Process & Safety",
    question: "Will the security testing cause downtime or disrupt my live website?",
    answer: "No. All penetration testing is conducted cautiously using rate-limited requests and non-destructive payloads designed to verify vulnerabilities without impacting server availability or compromising live database records. If required, testing can be performed on a staging environment."
  },
  {
    id: "faq-3",
    category: "Compliance & Legal",
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "Yes, absolutely. Confidentiality is paramount. I am happy to sign a standard mutual NDA prior to receiving any scope details, credentials, or source code."
  },
  {
    id: "faq-4",
    category: "Deliverables & Reports",
    question: "What format will I receive the security audit report in?",
    answer: "You will receive a comprehensive, professionally formatted PDF report containing an Executive Summary for management, a Vulnerability Matrix, detailed Technical Findings with CVSS v3.1 severity scores, Proof of Concept (PoC) screenshots/payloads, and clear step-by-step developer remediation instructions."
  },
  {
    id: "faq-5",
    category: "GRC & ISO 27001",
    question: "How do you assist with ISO 27001 ISMS Implementation?",
    answer: "I conduct initial gap assessments, create information security policies, draft the Statement of Applicability (SoA), conduct risk assessments (ISO 27005), compile Risk Treatment Plans (RTP), and prepare your team for internal and stage 1/stage 2 certification audits."
  },
  {
    id: "faq-6",
    category: "Academic & Research",
    question: "Can you assist with cybersecurity research, technical reports, and lab architecture?",
    answer: "Yes! I specialize in preparing academic research papers, thesis documentation, virtual lab topologies, and technical security reports adhering to IEEE/OWASP standards."
  }
];

export const WHY_CHOOSE_ME = [
  {
    title: "4+ Years Professional Experience",
    description: "Proven track record with 100+ cybersecurity projects delivered across Fiverr, Upwork, and direct clients in North America, Europe, and the Middle East.",
    iconName: "Award"
  },
  {
    title: "Affordable & Low Rates",
    description: "Enterprise-grade penetration testing and ISO 27001 GRC audits at fair, budget-friendly rates customized for startups, SMEs, and students.",
    iconName: "Sparkles"
  },
  {
    title: "Guaranteed On-Time Deadlines",
    description: "Strict adherence to delivery timelines with rapid turnarounds, 12-hour response SLA, and fast-track emergency security audits available.",
    iconName: "CheckCircle2"
  },
  {
    title: "100% Confidentiality & Strict NDA",
    description: "Your intellectual property, source code, target URLs, and security findings are protected under strict Mutual Non-Disclosure Agreements (NDA).",
    iconName: "Lock"
  },
  {
    title: "Manual Pentesting (Zero False Positives)",
    description: "All vulnerabilities are manually exploited and verified with Proof-of-Concept (PoC) evidence—no generic automated scanner dumps.",
    iconName: "ShieldCheck"
  },
  {
    title: "Developer Fix Guides & Free Retesting",
    description: "Includes actionable code remediation guides for your developers and a free 14-day re-test to verify all security patches.",
    iconName: "RefreshCw"
  }
];
