import React from "react";
import Button from "@components/ui/Button";
import { Bot, Brain, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@components/ui/Card";
const AIHealthAssistant = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-emerald-600" />,
      title: "Smart Recommendations",
      description:
        "Get personalized health advice based on your medical history",
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "24/7 Availability",
      description: "Access healthcare support whenever you need it",
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Secure & Private",
      description:
        "Your health data is protected with enterprise-grade security",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-full mb-8">
            <Bot className="w-6 h-6 text-emerald-600 mr-2" />
            <span className="text-emerald-800 font-medium">
              AI-Powered Assistant
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Meet Your 24/7
            <span className="block text-emerald-600">AI Health Assistant</span>
          </h1>

          <p className="text-gray-700 text-lg mb-12 leading-relaxed">
            Need quick answers about your medications? Our smart AI chatbot is
            available anytime to guide you, suggest nearby pharmacies, answer
            health questions, and make your journey easier.
          </p>

          <Button
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2 text-lg rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Bot className="w-6 h-8 mr-2 animate-pulse" />
            Chat with Medlink AI
          </Button>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
    </div>
  );
};

export default AIHealthAssistant;
