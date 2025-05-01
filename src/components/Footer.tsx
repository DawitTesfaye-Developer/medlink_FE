import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import Container from './ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#2B8761] backdrop-blur-lg text-white pt-16 pb-10 border-t border-white/20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 text-white">
          
          {/* Contact Info */}
          <div className="transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-white/90">📞 Contact</h3>
            <p className="flex items-start mb-2 text-white/80">
              <span className="mr-2">📍</span>
              123 Road, Addis Ababa, Ethiopia
            </p>
            <p className="flex items-start mb-2 text-white/80">
              <span className="mr-2">📞</span>
              +251 123 222 147
            </p>
            <p className="flex items-start text-white/80">
              <span className="mr-2">✉️</span>
              medlink@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-white/90">⚡ Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-white/90">🌐 Follow Us</h3>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-125">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-700 transition-transform transform hover:scale-125">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-transform transform hover:scale-125">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-transform transform hover:scale-125">
                <Youtube size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center pt-6 border-t border-white/20 text-white/70 text-sm">
          <p>© 2025 Medlink Pharmacy. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
