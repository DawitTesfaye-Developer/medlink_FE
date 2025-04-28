import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'gradient';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white'
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-blue-50 to-white'
  };

  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${backgroundStyles[background]} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;