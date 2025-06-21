
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import TextureBackground from './TextureBackground';

interface LandingSectionProps {
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({ scrollY, scrollToSection }) => {
  const { t } = useLanguage();

  return (
    <section id="landing" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced beige paper texture */}
      <TextureBackground variant="enhanced" className="opacity-60 z-0" />
      
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Enhanced name section with multiple shadows */}
        <div 
          className="relative"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            filter: `drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1)) drop-shadow(0 8px 40px rgba(0, 0, 0, 0.05))`
          }}
        >
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in relative"
            style={{
              textShadow: `
                0 2px 4px rgba(0, 0, 0, 0.1),
                0 4px 8px rgba(0, 0, 0, 0.05),
                0 8px 16px rgba(0, 0, 0, 0.03),
                2px 2px 0px rgba(189, 168, 140, 0.1),
                4px 4px 0px rgba(175, 152, 125, 0.05)
              `
            }}
          >
            {t('landing.name')}
          </h1>
          <p 
            className="text-2xl md:text-3xl text-muted-foreground mb-12 animate-fade-in"
            style={{
              textShadow: `
                0 1px 3px rgba(0, 0, 0, 0.08),
                0 2px 6px rgba(0, 0, 0, 0.04)
              `
            }}
          >
            {t('landing.title')}
          </p>
        </div>
        
        <Button
          onClick={() => scrollToSection('about')}
          variant="ghost"
          size="lg"
          className="animate-fade-in hover:scale-105 transition-transform"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </Button>
      </div>
    </section>
  );
};

export default LandingSection;
