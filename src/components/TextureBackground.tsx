
import React from 'react';

interface TextureBackgroundProps {
  variant?: 'base' | 'enhanced';
  className?: string;
}

const TextureBackground: React.FC<TextureBackgroundProps> = ({ 
  variant = 'base', 
  className = '' 
}) => {
  const baseTexture = `
    radial-gradient(circle at 25% 25%, rgba(189, 168, 140, 0.1) 0%, transparent 60%),
    radial-gradient(circle at 75% 75%, rgba(205, 180, 150, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 50% 50%, rgba(175, 152, 125, 0.05) 0%, transparent 60%),
    linear-gradient(45deg, transparent 46%, rgba(190, 165, 135, 0.04) 48%, rgba(190, 165, 135, 0.04) 52%, transparent 54%),
    linear-gradient(-45deg, transparent 46%, rgba(180, 155, 125, 0.04) 48%, rgba(180, 155, 125, 0.04) 52%, transparent 54%),
    repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(185, 160, 130, 0.02) 3px, rgba(185, 160, 130, 0.02) 6px),
    repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(195, 170, 140, 0.02) 3px, rgba(195, 170, 140, 0.02) 6px)
  `;

  const enhancedTexture = `
    radial-gradient(circle at 25% 25%, rgba(189, 168, 140, 0.25) 0%, transparent 60%),
    radial-gradient(circle at 75% 75%, rgba(205, 180, 150, 0.2) 0%, transparent 60%),
    radial-gradient(circle at 50% 50%, rgba(175, 152, 125, 0.15) 0%, transparent 60%),
    linear-gradient(45deg, transparent 46%, rgba(190, 165, 135, 0.1) 48%, rgba(190, 165, 135, 0.1) 52%, transparent 54%),
    linear-gradient(-45deg, transparent 46%, rgba(180, 155, 125, 0.1) 48%, rgba(180, 155, 125, 0.1) 52%, transparent 54%),
    repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(185, 160, 130, 0.06) 3px, rgba(185, 160, 130, 0.06) 6px),
    repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(195, 170, 140, 0.06) 3px, rgba(195, 170, 140, 0.06) 6px),
    radial-gradient(ellipse at 20% 80%, rgba(200, 175, 145, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(195, 170, 140, 0.12) 0%, transparent 60%),
    repeating-radial-gradient(circle at 30% 40%, transparent 0%, transparent 8px, rgba(178, 153, 123, 0.04) 8px, rgba(178, 153, 123, 0.04) 12px)
  `;

  const backgroundImage = variant === 'enhanced' ? enhancedTexture : baseTexture;
  const backgroundSize = variant === 'enhanced' 
    ? '300px 300px, 250px 250px, 400px 400px, 30px 30px, 35px 35px, 12px 12px, 16px 16px, 280px 280px, 320px 320px, 60px 60px'
    : '200px 200px, 180px 180px, 250px 250px, 20px 20px, 25px 25px, 8px 8px, 12px 12px';

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage,
        backgroundSize,
        backgroundColor: variant === 'enhanced' ? 'rgba(240, 225, 200, 0.08)' : 'rgba(240, 225, 200, 0.03)'
      }}
    />
  );
};

export default TextureBackground;
