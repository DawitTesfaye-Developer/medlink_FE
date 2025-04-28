import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-500 text-white">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Medlink" className="h-8" />
            <span className="text-xl font-bold">Medlink</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">About Us</a>
            <a href="#" className="hover:text-gray-200">Features</a>
            <a href="#" className="hover:text-gray-200">Contact Us</a>
          </nav>

          <Button 
            className="bg-white text-primary-500 hover:bg-gray-100"
          >
            Sign in
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;