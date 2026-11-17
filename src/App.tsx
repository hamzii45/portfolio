import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { FreelanceExperienceSection } from './components/FreelanceExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { WhyChooseMeSection } from './components/WhyChooseMeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

import { AuditModal } from './components/AuditModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

import { Project } from './types';
import { cyberAudio } from './utils/audio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  const [selectedServiceForSession, setSelectedServiceForSession] = useState<string>('Security Audit & Advisory');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync sound toggle
  useEffect(() => {
    cyberAudio.setMuted(!soundEnabled);
  }, [soundEnabled]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenSessionModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForSession(serviceName);
    }
    setIsSessionModalOpen(true);
  };

  return (
    <div className={`min-h-screen ${theme} ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden transition-colors duration-300`}>
      
      {/* Top Navbar */}
      <Navbar
        onOpenSessionModal={() => handleOpenSessionModal()}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections with Framer Motion PageTransitions */}
      <main className="pt-16">
        <PageTransition id="hero">
          <HeroSection
            onOpenSessionModal={() => handleOpenSessionModal()}
          />
        </PageTransition>

        <PageTransition id="about">
          <AboutSection />
        </PageTransition>

        <PageTransition id="services">
          <ServicesSection onOpenAuditModalWithService={(serviceTitle) => handleOpenSessionModal(serviceTitle)} />
        </PageTransition>

        <PageTransition id="skills">
          <SkillsSection />
        </PageTransition>

        <PageTransition id="projects">
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        </PageTransition>

        <PageTransition id="sandbox">
          <InteractiveSandbox />
        </PageTransition>

        <PageTransition id="experience">
          <FreelanceExperienceSection />
        </PageTransition>

        <PageTransition id="certifications">
          <CertificationsSection />
        </PageTransition>

        <PageTransition id="why-me">
          <WhyChooseMeSection />
        </PageTransition>

        <PageTransition id="testimonials">
          <TestimonialsSection />
        </PageTransition>

        <PageTransition id="faq">
          <FaqSection />
        </PageTransition>

        <PageTransition id="contact">
          <ContactSection />
        </PageTransition>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-Over Drawers */}
      <AuditModal
        isOpen={isSessionModalOpen}
        onClose={() => setIsSessionModalOpen(false)}
        prefilledService={selectedServiceForSession}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}

export default App;

