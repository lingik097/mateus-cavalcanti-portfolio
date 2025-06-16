
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import LandingSection from '@/components/LandingSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('landing');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['landing', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen transition-all duration-300 relative">
      <Navigation 
        scrollY={scrollY} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <LandingSection 
        scrollY={scrollY} 
        scrollToSection={scrollToSection} 
      />
      
      <AboutSection />
      
      <ProjectsSection />
      
      <SkillsSection />
      
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Mateus Cavalcanti. Built with React and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
