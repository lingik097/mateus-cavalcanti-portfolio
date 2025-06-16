
import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import TextureBackground from './TextureBackground';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email via Supabase Edge Function...');
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to send email');
      }

      console.log('Email sent successfully:', data);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <TextureBackground variant="base" className="opacity-40 z-0" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <Input 
                name="email"
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <Input 
              name="subject"
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleInputChange}
              required 
            />
            <Textarea 
              name="message"
              placeholder="Your Message" 
              rows={7} 
              value={formData.message}
              onChange={handleInputChange}
              required 
            />
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
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
