
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LandingSectionProps {
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({ scrollY, scrollToSection }) => {
  return (
    <section id="landing" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced beige paper texture - only on landing section */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(189, 168, 140, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 75% 75%, rgba(205, 180, 150, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(175, 152, 125, 0.1) 0%, transparent 60%),
            linear-gradient(45deg, transparent 46%, rgba(190, 165, 135, 0.08) 48%, rgba(190, 165, 135, 0.08) 52%, transparent 54%),
            linear-gradient(-45deg, transparent 46%, rgba(180, 155, 125, 0.08) 48%, rgba(180, 155, 125, 0.08) 52%, transparent 54%),
            repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(185, 160, 130, 0.04) 3px, rgba(185, 160, 130, 0.04) 6px),
            repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(195, 170, 140, 0.04) 3px, rgba(195, 170, 140, 0.04) 6px),
            radial-gradient(ellipse at 20% 80%, rgba(200, 175, 145, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(195, 170, 140, 0.08) 0%, transparent 60%),
            repeating-radial-gradient(circle at 30% 40%, transparent 0%, transparent 8px, rgba(178, 153, 123, 0.02) 8px, rgba(178, 153, 123, 0.02) 12px)
          `,
          backgroundSize: '300px 300px, 250px 250px, 400px 400px, 30px 30px, 35px 35px, 12px 12px, 16px 16px, 280px 280px, 320px 320px, 60px 60px',
          backgroundColor: 'rgba(240, 225, 200, 0.05)'
        }}
      />
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
  );
};

export default LandingSection;
