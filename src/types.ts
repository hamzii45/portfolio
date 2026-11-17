export interface Project {
  id: string;
  title: string;
  category: 'Auditing' | 'Research Work' | 'Technical Report' | 'Desktop App Password Manager' | 'Web Application Tool' | 'Labs' | 'Academic Project' | 'Thesis' | 'Documentation' | 'All';
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  technology: string[];
  documentsOrReports?: string[];
  sampleOutputSnippet?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  highlightBadge?: string;
}

export interface FreelanceDomain {
  id: string;
  title: string;
  iconName: string;
  yearsExperience: string;
  projectsCompleted: string;
  summary: string;
  keyDeliverables: string[];
  tags: string[];
  badgeColor?: string;
}

export interface Service {
  id: string;
  title: string;
  category: 'Offensive Security' | 'GRC & Compliance' | 'DevSecOps' | 'Security Consulting';
  iconName: string;
  description: string;
  deliverables: string[];
  subServices: string[];
  popularFor: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon?: string; description?: string }[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  companyOrPlatform: string;
  country: string;
  flag: string;
  rating: number;
  comment: string;
  projectScope: string;
  verifiedBuyer: boolean;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface AuditQuoteRequest {
  name: string;
  email: string;
  companyName: string;
  serviceType: string;
  targetScope: string;
  timeline: string;
  budgetRange: string;
  message: string;
}

export interface SessionOrQueryRequest {
  requestType: 'Session' | 'Query' | 'Audit';
  name: string;
  email: string;
  phoneOrWhatsapp: string;
  domain: string;
  preferredDate?: string;
  preferredTime?: string;
  subject: string;
  details: string;
}

