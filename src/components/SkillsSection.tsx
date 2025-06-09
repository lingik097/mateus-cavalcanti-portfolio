
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

  const otherSkills = [
    { name: "Portuguese", level: "Native", icon: "🇧🇷" },
    { name: "English", level: "Fluent", icon: "🇺🇸" },
    { name: "Spanish", level: "Intermediate", icon: "🇪🇸" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-foreground">Skills</h2>
        
        {/* 2x2 Skills Grid with Dividers */}
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

            {/* Tools - Bottom Left */}
            <div className="p-8 border-r border-border">
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

            {/* Learning - Bottom Right */}
            <div className="p-8">
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
          </div>
        </div>

        {/* Languages Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="w-full h-px bg-border mb-12"></div>
          <div className="flex items-center mb-8">
            <Globe className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl font-semibold text-foreground mr-4">Languages</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 ml-9">
            {otherSkills.map((skill) => (
              <div key={skill.name} className="group relative">
                <div className="bg-card border-2 border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <div className="h-0 group-hover:h-12 transition-all duration-300 overflow-hidden">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="text-sm font-medium text-foreground">{skill.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{skill.level}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
