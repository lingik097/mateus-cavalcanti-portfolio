
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import TextureBackground from './TextureBackground';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-secondary/10 relative">
      <TextureBackground variant="base" className="opacity-40 z-0" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">{t('about.title')}</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed space-y-6">
            <p className="text-xl">
              {t('about.intro')}
            </p>
            <p>
              {t('about.background')}
            </p>
            <p>
              {t('about.tech')}
            </p>
            <p>
              {t('about.reflection')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
