
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import TextureBackground from './TextureBackground';

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <TextureBackground variant="base" className="opacity-40 z-0" />
      
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
            <a href="https://github.com/lingik097" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/mateusocc" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:mateusolivac.work@email.com">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
