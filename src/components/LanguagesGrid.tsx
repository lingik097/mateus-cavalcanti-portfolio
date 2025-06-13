
import React from 'react';
import { Globe } from 'lucide-react';
import { languages } from '@/data/skillsData';
import LanguageCard from './ui/LanguageCard';

const LanguagesGrid: React.FC = () => {
  return (
    <div className="p-4 md:p-8 bg-card border border-border rounded-xl">
      <div className="flex items-center mb-4 md:mb-6">
        <Globe className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
        <h3 className="text-lg md:text-2xl font-semibold text-foreground">Languages</h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
        {languages.map((language) => (
          <LanguageCard key={language.name} language={language} />
        ))}
      </div>
    </div>
  );
};

export default LanguagesGrid;
