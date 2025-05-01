import React from "react";
import { MapPin, Smartphone, FileText, Activity } from "lucide-react";

const check = () => {
  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-emerald-600" />,
      title: "Wide Pharmac Network",
      description: "Access a large network of trusted pharmacies near you.",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-emerald-600" />,
      title: "Simple Ordering",
      description: "Order your medications easily with a few clicks.",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <FileText className="w-12 h-12 text-emerald-600" />,
      title: "Easy Prescription Upload",
      description: "Upload your prescriptions securely and instantly.",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Activity className="w-12 h-12 text-emerald-600" />,
      title: "Health Tracking",
      description: "Monitor your medication history and track your health",
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-emerald-600 mb-16">
        Our Features
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className={`rounded-full ${feature.bgColor} p-8 mb-6 relative`}
            >
              <div className="relative z-10">{feature.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default check;
