import React from 'react';
import { Code, Database, Wrench, BookOpen, Globe } from 'lucide-react';
import TextureBackground from './TextureBackground';

const SkillsSection: React.FC = () => {
  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
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
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
      ]
    }
  };

  const languages = [
    { name: "Portuguese", level: "Native", icon: "https://flagcdn.com/w80/br.png" },
    { name: "Spanish", level: "Fluent", icon: "https://flagcdn.com/w80/es.png" },
    { name: "English", level: "Fluent", icon: "https://flagcdn.com/w80/us.png" },
    { name: "Catalan", level: "Intermediate", icon: "https://flagcdn.com/w80/ad.png" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10 relative">
      <TextureBackground variant="base" className="opacity-40 z-0" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-foreground">Skills</h2>
        
        {/* Skills Grid with Languages */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-0 border border-border rounded-xl overflow-hidden bg-card">
            {/* Frontend - Top Left */}
            <div className="p-8 border-r border-b border-border">
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Frontend Development</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillCategories.frontend.skills.map((skill) => (
                  <div key={skill.name} className="group relative">
                    <div className="bg-background border-2 border-border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                          <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                        </div>
                        <div className="h-0 group-hover:h-6 transition-all duration-300 overflow-hidden">
                          <div className="text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {skill.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend - Top Right */}
            <div className="p-8 border-b border-border">
              <div className="flex items-center mb-6">
                <Database className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Backend Development</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillCategories.backend.skills.map((skill) => (
                  <div key={skill.name} className="group relative">
                    <div className="bg-background border-2 border-border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                          <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                        </div>
                        <div className="h-0 group-hover:h-6 transition-all duration-300 overflow-hidden">
                          <div className="text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {skill.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools - Middle Left */}
            <div className="p-8 border-r border-b border-border">
              <div className="flex items-center mb-6">
                <Wrench className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Tools & Technologies</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillCategories.tools.skills.map((skill) => (
                  <div key={skill.name} className="group relative">
                    <div className="bg-background border-2 border-border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                          <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                        </div>
                        <div className="h-0 group-hover:h-6 transition-all duration-300 overflow-hidden">
                          <div className="text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {skill.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning - Middle Right */}
            <div className="p-8 border-b border-border">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Currently Learning</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillCategories.learning.skills.map((skill) => (
                  <div key={skill.name} className="group relative">
                    <div className="bg-background border-2 border-border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                          <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                        </div>
                        <div className="h-0 group-hover:h-6 transition-all duration-300 overflow-hidden">
                          <div className="text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {skill.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages - Bottom Row (spans both columns) */}
            <div className="col-span-2 p-8">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Languages</h3>
              </div>
              <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
                {languages.map((language) => (
                  <div key={language.name} className="group relative">
                    <div className="bg-background border-2 border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                      <div className="text-center">
                        <img 
                          src={language.icon} 
                          alt={language.name} 
                          className="w-12 h-12 mx-auto mb-3 object-contain rounded-sm" 
                        />
                        <div className="h-0 group-hover:h-12 transition-all duration-300 overflow-hidden">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            <div className="text-sm font-medium text-foreground">{language.name}</div>
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
