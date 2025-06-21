
import React from 'react';
import { Language } from '@/data/skillsData';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageCardProps {
  language: Language;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language: languageData }) => {
  const { language } = useLanguage();

  return (
    <div className="group relative">
      <div className="bg-background border-2 border-border rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
        <div className="text-center">
          <img 
            src={languageData.icon} 
            alt={languageData.name[language]} 
            className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 object-contain rounded-sm" 
          />
          <div className="h-0 group-hover:h-10 md:group-hover:h-12 transition-all duration-300 overflow-hidden">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <div className="text-xs md:text-sm font-medium text-foreground">{languageData.name[language]}</div>
              <div className="text-xs text-muted-foreground mt-1">{languageData.level[language]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
