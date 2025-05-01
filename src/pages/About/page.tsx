import React from "react";
import { Briefcase, User, Heart, LucideIcon } from "lucide-react";
import Section from "@components/ui/Section";
import Button from "@components/ui/Button";

// Define the content type for the About page
type AboutSection = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const aboutSections: AboutSection[] = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To provide fast, affordable, and reliable pharmaceutical services to everyone from the comfort of their home.",
    icon: Heart,
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To be the leading online pharmacy that connects people with healthcare professionals seamlessly.",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Our Team",
    description:
      "A team of licensed pharmacists, support staff, and tech specialists dedicated to your health and convenience.",
    icon: User,
  },
];

const AboutPage: React.FC = () => {
  return (
    <div id="about" background="gradient">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn more about our company, our values, and what drives us to
          provide the best service possible.
        </p>
      </div>

      {/* About sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-8">
        {aboutSections.map((section) => (
          <div
            key={section.id}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 text-center transition-transform hover:scale-[1.05] hover:shadow-xl"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-full bg-[#2B8761] text-white">
              {React.createElement(section.icon, { className: "w-8 h-8" })}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-action button */}
      <div className="mt-12 text-center">
        <Button
          size="lg"
          className="bg-[#2B8761] hover:bg-[#257851] text-white shadow-lg"
        >
          Get in Touch with Us
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
