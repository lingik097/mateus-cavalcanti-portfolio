
import React from 'react';
import { Code, Database, Wrench, BookOpen, Globe } from 'lucide-react';
import TextureBackground from './TextureBackground';
import { useIsMobile } from '@/hooks/use-mobile';

const SkillsSection: React.FC = () => {
  const isMobile = useIsMobile();

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
      ]
    },
    learning: {
      title: "Currently Learning",
      icon: BookOpen,
      skills: [
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    }
  };

  const languages = [
    { name: "Portuguese", level: "Native", icon: "https://flagcdn.com/w80/br.png" },
    { name: "Spanish", level: "Fluent", icon: "https://flagcdn.com/w80/es.png" },
    { name: "English", level: "Fluent", icon: "https://flagcdn.com/w80/us.png" },
    { name: "Catalan", level: "Intermediate", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Catalonia.svg/80px-Flag_of_Catalonia.svg.png" }
  ];

  const SkillCard = ({ skill }: { skill: { name: string; logo: string } }) => (
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

  const SkillSection = ({ 
    title, 
    icon: Icon, 
    skills, 
    className = "" 
  }: { 
    title: string; 
    icon: any; 
    skills: { name: string; logo: string }[]; 
    className?: string;
  }) => (
    <div className={`p-4 md:p-8 ${className}`}>
      <div className="flex items-center mb-4 md:mb-6">
        <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
        <h3 className="text-lg md:text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-12 md:py-20 bg-secondary/10 relative">
      <TextureBackground variant="base" className="opacity-40 z-0" />
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-foreground">Skills</h2>
        
        {/* Skills Grid with Languages */}
        <div className="max-w-6xl mx-auto">
          <div className={`${isMobile ? 'flex flex-col space-y-6' : 'grid grid-cols-2 gap-0'} border border-border rounded-xl overflow-hidden bg-card`}>
            {/* Frontend */}
            <SkillSection
              title={skillCategories.frontend.title}
              icon={skillCategories.frontend.icon}
              skills={skillCategories.frontend.skills}
              className={isMobile ? "border-b border-border" : "border-r border-b border-border"}
            />

            {/* Backend */}
            <SkillSection
              title={skillCategories.backend.title}
              icon={skillCategories.backend.icon}
              skills={skillCategories.backend.skills}
              className={isMobile ? "border-b border-border" : "border-b border-border"}
            />

            {/* Tools */}
            <SkillSection
              title={skillCategories.tools.title}
              icon={skillCategories.tools.icon}
              skills={skillCategories.tools.skills}
              className={isMobile ? "border-b border-border" : "border-r border-b border-border"}
            />

            {/* Learning */}
            <SkillSection
              title={skillCategories.learning.title}
              icon={skillCategories.learning.icon}
              skills={skillCategories.learning.skills}
              className={isMobile ? "border-b border-border" : "border-b border-border"}
            />

            {/* Languages */}
            <div className={`${isMobile ? '' : 'col-span-2'} p-4 md:p-8`}>
              <div className="flex items-center mb-4 md:mb-6">
                <Globe className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
                <h3 className="text-lg md:text-2xl font-semibold text-foreground">Languages</h3>
              </div>
              <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-4 md:gap-6 ${isMobile ? '' : 'max-w-3xl mx-auto'}`}>
                {languages.map((language) => (
                  <div key={language.name} className="group relative">
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
