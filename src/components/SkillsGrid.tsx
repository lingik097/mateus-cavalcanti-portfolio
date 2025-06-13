
import React from 'react';
import { skillCategories } from '@/data/skillsData';
import SkillCategorySection from './ui/SkillCategorySection';

const SkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border rounded-xl overflow-hidden bg-card">
      {/* Frontend */}
      <SkillCategorySection
        category={skillCategories.frontend}
        className="border-b border-border lg:border-r lg:border-b"
      />

      {/* Backend */}
      <SkillCategorySection
        category={skillCategories.backend}
        className="border-b border-border"
      />

      {/* Tools */}
      <SkillCategorySection
        category={skillCategories.tools}
        className="border-b border-border lg:border-r"
      />

      {/* Learning */}
      <SkillCategorySection
        category={skillCategories.learning}
        className="border-b border-border"
      />
    </div>
  );
};

export default SkillsGrid;
