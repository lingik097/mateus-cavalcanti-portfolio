import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt-br';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation dictionaries - keeping only general site translations
const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Landing Section
    'landing.name': 'Mateus Cavalcanti',
    'landing.title': 'Full Stack Developer',
    
    // About Section
    'about.title': 'About Me',
    'about.intro': "I'm Mateus Cavalcanti — a full stack developer with a multicultural background and an open mind.",
    'about.background': "I was born in Brazil, spent part of my teens in Spain, and studied software development in Australia. Living across three continents taught me how to adapt quickly, connect with people from different cultures, and bring a flexible, curious mindset to everything I do.",
    'about.tech': "My path into tech was shaped by curiosity and persistence. I enjoy building clean, responsive, and user-friendly web applications — mainly using React, Python, and TailwindCSS, while also expanding my skills in SQL. I approach development not just as a technical skill, but as a way to solve problems thoughtfully and communicate ideas clearly.",
    'about.reflection': "This site is a reflection of who I am — not just a developer, but someone who values creativity, communication, and continuous learning.",
    
    // Projects Section - keeping only button labels
    'projects.title': 'Projects',
    'projects.code': 'Code',
    'projects.live': 'Live',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.languages': 'Languages',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success.title': 'Message sent successfully!',
    'contact.success.description': "Thank you for reaching out. I'll get back to you soon.",
    'contact.error.title': 'Failed to send message',
    'contact.error.description': 'There was an error sending your message. Please try again or contact me directly.',
    
    // Footer
    'footer.copyright': '© 2025 Mateus Cavalcanti. Built with React and TailwindCSS.',
    
    // Language labels
    'language.english': 'English',
    'language.portuguese': 'Português',
  },
  'pt-br': {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    
    // Landing Section
    'landing.name': 'Mateus Cavalcanti',
    'landing.title': 'Desenvolvedor Full Stack',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.intro': 'Eu sou Mateus Cavalcanti — um desenvolvedor full stack com um background multicultural e uma mente aberta.',
    'about.background': 'Nasci no Brasil, passei parte da minha adolescência na Espanha e estudei desenvolvimento de software na Austrália. Viver em três continentes me ensinou a me adaptar rapidamente, conectar com pessoas de diferentes culturas e trazer uma mentalidade flexível e curiosa para tudo que faço.',
    'about.tech': 'Meu caminho na tecnologia foi moldado pela curiosidade e persistência. Gosto de construir aplicações web limpas, responsivas e amigáveis ao usuário — principalmente usando React, Python e TailwindCSS, enquanto também expando minhas habilidades em SQL. Abordo o desenvolvimento não apenas como uma habilidade técnica, mas como uma forma de resolver problemas de forma reflexiva e comunicar ideias claramente.',
    'about.reflection': 'Este site é um reflexo de quem eu sou — não apenas um desenvolvedor, mas alguém que valoriza criatividade, comunicação e aprendizado contínuo.',
    
    // Projects Section - keeping only button labels
    'projects.title': 'Projetos',
    'projects.code': 'Código',
    'projects.live': 'Ao Vivo',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.languages': 'Idiomas',
    
    // Contact Section
    'contact.title': 'Entre em Contato',
    'contact.name': 'Seu Nome',
    'contact.email': 'Seu Email',
    'contact.subject': 'Assunto',
    'contact.message': 'Sua Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.sending': 'Enviando...',
    'contact.success.title': 'Mensagem enviada com sucesso!',
    'contact.success.description': 'Obrigado por entrar em contato. Retornarei em breve.',
    'contact.error.title': 'Falha ao enviar mensagem',
    'contact.error.description': 'Houve um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente.',
    
    // Footer
    'footer.copyright': '© 2025 Mateus Cavalcanti. Construído com React e TailwindCSS.',
    
    // Language labels
    'language.english': 'English',
    'language.portuguese': 'Português',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
