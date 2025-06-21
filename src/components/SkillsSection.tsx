
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import TextureBackground from './TextureBackground';
import SkillsGrid from './SkillsGrid';
import LanguagesGrid from './LanguagesGrid';

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-12 md:py-20 bg-secondary/10 relative">
      <TextureBackground variant="base" className="opacity-40 z-0" />
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-foreground">{t('skills.title')}</h2>
        
        <div className="max-w-6xl mx-auto space-y-6">
          <SkillsGrid />
          <LanguagesGrid />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
