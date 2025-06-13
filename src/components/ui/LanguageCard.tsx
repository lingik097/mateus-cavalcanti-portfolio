
import React from 'react';
import { Language } from '@/data/skillsData';

interface LanguageCardProps {
  language: Language;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language }) => {
  return (
    <div className="group relative">
      <div className="bg-background border-2 border-border rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
        <div className="text-center">
          <img 
            src={language.icon} 
            alt={language.name} 
            className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 object-contain rounded-sm" 
          />
          <div className="h-0 group-hover:h-10 md:group-hover:h-12 transition-all duration-300 overflow-hidden">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <div className="text-xs md:text-sm font-medium text-foreground">{language.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{language.level}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
