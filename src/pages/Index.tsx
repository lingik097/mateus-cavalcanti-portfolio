
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Filter, Code, Database, Wrench, BookOpen, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('landing');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const { toast } = useToast();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Python backend",
      tags: ["React", "Python", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis",
      tags: ["Python", "Data", "SQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive personal portfolio with modern design",
      tags: ["React", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: Code,
      skills: ["React", "TailwindCSS", "JavaScript", "HTML/CSS"]
    },
    backend: {
      title: "Backend",
      icon: Database,
      skills: ["Python", "SQL", "Node.js"]
    },
    tools: {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "VS Code", "Docker"]
    },
    learning: {
      title: "Learning",
      icon: BookOpen,
      skills: ["TypeScript", "GraphQL", "AWS"]
    },
    other: {
      title: "Languages",
      icon: Globe,
      skills: ["Portuguese (Native)", "English (Fluent)", "Spanish (Intermediate)"]
    }
  };

  const filterTags = ["All", "React", "Python", "TailwindCSS", "Data", "SQL"];

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['landing', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen transition-all duration-300 relative">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0"
           style={{
             backgroundImage: `
               radial-gradient(circle at 20% 50%, transparent 20%, rgba(120, 119, 108, 0.3) 21%, rgba(120, 119, 108, 0.3) 34%, transparent 35%, transparent),
               linear-gradient(0deg, rgba(0, 0, 0, 0.1) 50%, transparent 50%),
               radial-gradient(circle at 40% 40%, rgba(120, 119, 108, 0.2) 0%, transparent 50%)
             `,
             backgroundSize: '50px 50px, 2px 2px, 30px 30px'
           }} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-foreground">Mateus Cavalcanti</div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Section */}
      <section id="landing" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            Mateus Cavalcanti
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 animate-fade-in">
            Full Stack Developer
          </p>
          <Button
            onClick={() => scrollToSection('about')}
            variant="ghost"
            size="lg"
            className="animate-fade-in hover:scale-105 transition-transform"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/10 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">About Me</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed space-y-6">
              <p className="text-xl">
                I'm Mateus Cavalcanti — a full stack developer with a multicultural background and an open mind.
              </p>
              <p>
                I was born in Brazil, spent part of my teens in Spain, and studied software development in Australia. 
                Living across three continents taught me how to adapt quickly, connect with people from different cultures, 
                and bring a flexible, curious mindset to everything I do.
              </p>
              <p>
                My path into tech was shaped by curiosity and persistence. I enjoy building clean, responsive, 
                and user-friendly web applications — mainly using React, Python, and TailwindCSS, while also expanding 
                my skills in SQL. I approach development not just as a technical skill, but as a way to solve problems 
                thoughtfully and communicate ideas clearly.
              </p>
              <p>
                This site is a reflection of who I am — not just a developer, but someone who values creativity, 
                communication, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Projects</h2>
          
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
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/10 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Skills</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                const isOther = key === 'other';
                return (
                  <Card key={key} className={`p-6 hover:shadow-lg transition-all duration-300 ${isOther ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    </div>
                    <div className={`grid gap-3 ${isOther ? 'md:grid-cols-3' : 'grid-cols-1'}`}>
                      {category.skills.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
              </div>
              <Input placeholder="Subject" required />
              <Textarea placeholder="Your Message" rows={6} required />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
            
            <div className="flex justify-center space-x-6 mt-12">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Mateus Cavalcanti. Built with React and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
