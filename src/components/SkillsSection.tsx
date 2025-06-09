
import React from 'react';
import { Code, Database, Wrench, BookOpen, Globe } from 'lucide-react';

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
    { name: "Portuguese", level: "Native", icon: "🇧🇷" },
    { name: "Spanish", level: "Fluent", icon: "🇪🇸" },
    { name: "English", level: "Fluent", icon: "🇺🇸" },
    { name: "Catalan", level: "Intermediate", icon: "data:image/png;base64,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" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10 relative">
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
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {languages.map((language) => (
                  <div key={language.name} className="group relative">
                    <div className="bg-background border-2 border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                      <div className="text-center">
                        <div className="text-4xl mb-3">{language.icon}</div>
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
