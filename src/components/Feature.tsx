import React from 'react';
import Section from './ui/Section';
import { Feature } from '../types';
import Button from './ui/Button';

const Features: React.FC = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Features
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-primary-50/50 rounded-lg p-6 aspect-square"></div>
        <div className="bg-primary-50/50 rounded-lg p-6 aspect-square"></div>
        <div className="bg-primary-50/50 rounded-lg p-6 aspect-square"></div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Your 24/7<br />
            AI Health Assistant
          </h2>
          <p className="text-gray-600 mb-6">
            Need quick answers about your medications? Our smart AI chatbot is available anytime to guide you, suggest nearby pharmacies, answer health questions, and make your journey easier.
          </p>
          <Button 
            className="bg-primary-500 hover:bg-primary-600 text-white"
          >
            Chat with Medlink AI
          </Button>
        </div>
        <div>
          <img 
            src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="AI Health Assistant" 
            className="rounded-lg w-full"
          />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-primary-50/50 rounded-lg p-4 aspect-square flex flex-col items-center justify-center">
          <img 
            src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Vitamin D" 
            className="w-24 h-24 object-cover mb-4"
          />
          <p className="text-sm text-gray-600">Vitamin D</p>
          <p className="text-xs text-gray-500">1500 Birr</p>
        </div>
        <div className="bg-primary-50/50 rounded-lg p-4 aspect-square flex flex-col items-center justify-center">
          <img 
            src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Panadol" 
            className="w-24 h-24 object-cover mb-4"
          />
          <p className="text-sm text-gray-600">Panadol</p>
          <p className="text-xs text-gray-500">1500 Birr</p>
        </div>
        <div className="bg-primary-50/50 rounded-lg p-4 aspect-square flex flex-col items-center justify-center">
          <img 
            src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="NIDO" 
            className="w-24 h-24 object-cover mb-4"
          />
          <p className="text-sm text-gray-600">NIDO</p>
          <p className="text-xs text-gray-500">1500 Birr</p>
        </div>
      </div>
    </Section>
  );
};

export default Features;