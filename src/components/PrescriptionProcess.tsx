import React from 'react';
import { ClipboardList, Upload, Truck, MessageSquare, LucideIcon } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';

// Define ProcessStep type locally since you want a self-contained file
type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: ProcessStep[] = [
  {
    id: 1,
    title: 'Upload Your Prescription',
    description: 'Take a photo or upload a digital copy of your prescription through our secure platform.',
    icon: Upload,
  },
  {
    id: 2,
    title: 'Pharmacist Review',
    description: 'Our licensed pharmacists will verify your prescription and prepare your medications.',
    icon: ClipboardList,
  },
  {
    id: 3,
    title: 'Consultation Available',
    description: 'Speak with our pharmacists if you have questions about your medications.',
    icon: MessageSquare,
  },
  {
    id: 4,
    title: 'Fast Delivery',
    description: 'Get your medications delivered to your doorstep, with same-day options available.',
    icon: Truck,
  },
];

const PrescriptionProcess: React.FC = () => {
  return (
    <Section id="prescriptions" background="gradient">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Easy Prescription Fulfillment
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get your prescriptions filled in just a few simple steps, without leaving the comfort of your home.
        </p>
      </div>

      <div className="relative">
        {/* Line connector */}
        <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-primary-100 transform -translate-x-1/2"></div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative bg-white rounded-xl shadow-sm p-6 transition-transform hover:-translate-y-1 hover:shadow-md ${
                index % 2 === 0 ? 'md:translate-x-8 md:text-right' : 'md:-translate-x-2'
              }`}
            >
              <div
                className={`hidden md:flex absolute top-6 ${
                  index % 2 === 0
                    ? 'left-0 transform -translate-x-full -ml-4'
                    : 'right-0 transform translate-x-full ml-4'
                } items-center`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white text-xl font-bold">
                  {step.id}
                </div>
              </div>

              <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  {React.createElement(step.icon, { className: 'w-6 h-6 text-primary-500' })}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button size="lg">Upload Prescription Now</Button>
      </div>
    </Section>
  );
};

export default PrescriptionProcess;
