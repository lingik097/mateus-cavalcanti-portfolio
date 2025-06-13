
import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
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

    console.log('Form submission started');
    console.log('Current URL:', window.location.href);
    console.log('Form data:', formData);

    try {
      // Check if we're on Netlify (or a deployed environment)
      const isNetlify = window.location.hostname.includes('netlify') || 
                       window.location.hostname.includes('lovableproject.com') ||
                       process.env.NODE_ENV === 'production';
      
      console.log('Is Netlify environment?', isNetlify);

      if (!isNetlify) {
        // For development/preview environments, show a message instead of trying to submit
        toast({
          title: "Development Mode",
          description: "Contact form submissions only work when deployed to Netlify. Your message would be: " + formData.message.substring(0, 50) + "...",
        });
        
        // Reset form anyway for testing
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        return;
      }

      // Netlify Forms submission for production
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      console.log('Submitting to Netlify Forms...');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataToSend.toString()
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
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
      } else {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Failed to send message",
        description: "Netlify Forms only work when deployed to Netlify. Please deploy this site to Netlify for the contact form to function properly.",
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
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {/* Hidden input for Netlify form detection */}
            <input type="hidden" name="form-name" value="contact" />
            
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
              rows={6} 
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
