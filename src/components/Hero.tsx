import React from 'react';
import { Search } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary-400">Find</span> Medicines<br />
              <span className="text-primary-400">Easily</span> Near You
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-200">
              Search nearby pharmacies, order medications, talk to our AI health assistant,
              and manage your health with ease.
            </p>
            <Button 
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg"
            >
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;