
import React from 'react';
import { Skill } from '@/data/skillsData';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="group relative">
      <div className="bg-background border-2 border-border rounded-xl p-3 md:p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
        <div className="text-center">
          <div className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 flex items-center justify-center">
            <img src={skill.logo} alt={skill.name} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
          </div>
          <div className="h-0 group-hover:h-6 transition-all duration-300 overflow-hidden">
            <div className="text-xs md:text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {skill.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
