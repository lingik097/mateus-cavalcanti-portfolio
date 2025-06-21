
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

interface NavigationProps {
  scrollY: number;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollY, activeSection, scrollToSection }) => {
  const { t } = useLanguage();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">Mateus Cavalcanti</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {[
                { name: t('nav.about'), id: 'about' },
                { name: t('nav.projects'), id: 'projects' },
                { name: t('nav.skills'), id: 'skills' },
                { name: t('nav.contact'), id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <LanguageSwitch />
          </div>

          {/* Mobile menu with language switch */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
