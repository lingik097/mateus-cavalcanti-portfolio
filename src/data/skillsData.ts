
import { Code, Database, Wrench, BookOpen, Globe } from 'lucide-react';

export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}

export interface Language {
  name: string;
  level: string;
  icon: string;
}

export const skillCategories: Record<string, SkillCategory> = {
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
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
    ]
  },
  learning: {
    title: "Currently Learning",
    icon: BookOpen,
    skills: [
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
    ]
  }
};

export const languages: Language[] = [
  { name: "Portuguese", level: "Native", icon: "https://flagcdn.com/w80/br.png" },
  { name: "Spanish", level: "Fluent", icon: "https://flagcdn.com/w80/es.png" },
  { name: "English", level: "Fluent", icon: "https://flagcdn.com/w80/us.png" },
  { name: "Catalan", level: "Intermediate", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/250px-Flag_of_Catalonia.svg.png" }
];
