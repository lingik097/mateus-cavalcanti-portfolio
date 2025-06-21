
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import TextureBackground from './TextureBackground';

const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();

  // Projects with embedded translations
  const projects = [
    {
      id: 1,
      title: {
        en: 'Portfolio Website',
        'pt-br': 'Site Portfólio'
      },
      description: {
        en: 'Responsive personal portfolio with modern design',
        'pt-br': 'Portfólio pessoal responsivo com design moderno'
      },
      tags: ["React", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      github: "https://github.com/lingik097/portfolio-website",
      live: "#"
    }
  ];

  // Filter options with translations
  const filterOptions = {
    all: {
      en: 'All',
      'pt-br': 'Todos'
    }
  };

  const [selectedFilter, setSelectedFilter] = useState(filterOptions.all[language]);

  // Update filter when language changes
  React.useEffect(() => {
    setSelectedFilter(filterOptions.all[language]);
  }, [language]);

  const filterTags = [filterOptions.all[language], ...new Set(projects.flatMap(project => project.tags))];

  const filteredProjects = selectedFilter === filterOptions.all[language]
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 relative">
      <TextureBackground variant="base" className="opacity-40 z-0" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">{t('projects.title')}</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedFilter === tag ? "default" : "outline"}
              onClick={() => setSelectedFilter(tag)}
              className="transition-all hover:scale-105"
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title[language]}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4 mr-2" />
                      {t('projects.code')}
                    </Button>
                  </a>
                  <a href={project.live} target={project.live !== "#" ? "_blank" : undefined} rel={project.live !== "#" ? "noopener noreferrer" : undefined}>
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t('projects.live')}
                    </Button>
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title[language]}</h3>
                <p className="text-muted-foreground mb-4">{project.description[language]}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
