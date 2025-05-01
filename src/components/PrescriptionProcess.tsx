import React from "react";
import {
  ClipboardList,
  Upload,
  Truck,
  MessageSquare,
  LucideIcon,
} from "lucide-react";
import Section from "./ui/Section";
import Button from "./ui/Button";

// Local type for clarity
type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Upload Your Prescription",
    description:
      "Take a photo or upload a digital copy of your prescription through our secure platform.",
    icon: Upload,
  },
  {
    id: 2,
    title: "Pharmacist Review",
    description:
      "Our licensed pharmacists will verify your prescription and prepare your medications.",
    icon: ClipboardList,
  },
  {
    id: 3,
    title: "Consultation Available",
    description:
      "Speak with our pharmacists if you have questions about your medications.",
    icon: MessageSquare,
  },
  {
    id: 4,
    title: "Fast Delivery",
    description:
      "Get your medications delivered to your doorstep, with same-day options available.",
    icon: Truck,
  },
];

const PrescriptionProcess: React.FC = () => {
  return (
    <div id="prescriptions" background="gradient">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Easy Prescription Fulfillment
        </h2>
        <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
          Get your prescriptions filled in just a few simple steps — all from
          the comfort of your home.
        </p>
      </div>

      {/* Horizontal carousel with smaller cards, centered */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 md:gap-8 px-4 py-4 min-w-full justify-center">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex-shrink-0 w-64 sm:w-72 bg-white backdrop-blur-md bg-opacity-90 border border-gray-200 rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.05] hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2B8761] mb-4 shadow-md">
                {React.createElement(step.icon, {
                  className: "w-7 h-7 text-white",
                })}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div className="mt-8 text-center">
        <Button
          size="lg"
          className="bg-[#2B8761] hover:bg-[#257851] text-white shadow-lg"
        >
          Upload Prescription Now
        </Button>
      </div>
    </div>
  );
};

export default PrescriptionProcess;
