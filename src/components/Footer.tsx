import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import Container from './ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="flex items-start mb-2">
              <span className="mr-2">📍</span>
              123 Road, Addis Ababa, Ethiopia
            </p>
            <p className="flex items-start mb-2">
              <span className="mr-2">📞</span>
              +251 123222147
            </p>
            <p className="flex items-start">
              <span className="mr-2">✉️</span>
              medlink@gmail.com
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200">Home</a></li>
              <li><a href="#" className="hover:text-gray-200">About us</a></li>
              <li><a href="#" className="hover:text-gray-200">Services</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gray-200"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-gray-200"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gray-200"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-sm">© 2025 HEALTHY. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2 text-sm">
            <a href="#" className="hover:text-gray-200">Terms and Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-200">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;