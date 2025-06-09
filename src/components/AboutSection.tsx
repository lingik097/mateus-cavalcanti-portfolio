
import React from 'react';

const AboutSection: React.FC = () => {
  return (
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
  );
};

export default AboutSection;
