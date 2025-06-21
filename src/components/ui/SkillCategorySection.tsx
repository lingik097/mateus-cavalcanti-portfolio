
import React from 'react';
import { SkillCategory } from '@/data/skillsData';
import { useLanguage } from '@/contexts/LanguageContext';
import SkillCard from './SkillCard';

interface SkillCategorySectionProps {
  category: SkillCategory;
  className?: string;
}

const SkillCategorySection: React.FC<SkillCategorySectionProps> = ({ category, className = "" }) => {
  const { language } = useLanguage();
  const Icon = category.icon;
  
  return (
    <div className={`p-4 md:p-8 ${className}`}>
      <div className="flex items-center mb-4 md:mb-6">
        <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
        <h3 className="text-lg md:text-2xl font-semibold text-foreground">{category.title[language]}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategorySection;
