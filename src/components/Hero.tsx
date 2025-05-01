"use client";

import React, { useState, useEffect } from "react";
import { Search, Clock, ChevronDown } from "lucide-react";
import Button from "@components/ui/Button";
import Container from "@components/ui/Container";

const Hero = () => {
  const [searchType, setSearchType] = useState("medicines");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ backgroundImage: "url('/herobackground.png')" }}
    >
      {/* Gradient Overlay */}
      {/* Toggle Search Button */}

      <div className=" pl-[70] w-full relative animate-fadeInUp flex flex-col items-end">
        {/* Mobile Toggle */}
        {isMobile && (
          <Button
            onClick={() => setShowSearchPanel((prev) => !prev)}
            className="mb-6 bg-gradient-to-r from-[#2B8761] to-[#236c4e] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            {showSearchPanel ? "Hide Search" : "Show Search"}
          </Button>
        )}

        {/* Background & Content */}
        <div
          className="w-full pt-24 md:pt-32 pb-12 md:pb-20 bg-cover bg-center shadow-lg relative z-10"
          style={{ backgroundImage: `url(/Homepage-background.png)` }}
        >
          <Container>
            <div className="w-full flex flex-col lg:flex-row items-center gap-12">
              {/* Left: Hero text */}
              <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fadeIn text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2B8761] leading-tight mb-6">
                  Your Health,{" "}
                  <span className="text-[#236c4e] relative">
                    Delivered
                    <span className="absolute w-full  opacity-70"></span>
                  </span>{" "}
                  with Care
                </h1>

                <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg leading-relaxed mx-auto">
                  Get your prescriptions and health essentials delivered to your
                  doorstep with our fast, reliable, and secure pharmacy service.
                </p>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-10">
                <Button
  size="lg"
  className="px-6 py-3 bg-gradient-to-r from-[#2B8761] to-[#1F5F45] text-white font-semibold rounded-full shadow-lg hover:from-white/10 hover:to-[#1b503e] transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-[#2B8761]/50 focus:outline-none"
>
  Browse Products
</Button>

<Button
  size="lg"
  className="px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold rounded-full shadow-xl hover:bg-[#2B8761] hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
>
Transfer Prescription</Button>

                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">

                  {/* icons */}
                  <FeatureIcon
                    icon={ <svg 
               
                    fill="#2B8761" width="64px"
                     height="64px" 
                     viewBox="-3.2 -3.2 38.40 38.40" 
                     version="1.1"
                      xmlns="http://www.w3.org/2000/svg" 
                      transform="rotate(0)"><g id="SVGRepo_bgCarrier" 
                      stroke-width="0">
                        <rect x="-3.2" y="-3.2"
                         width="38.40" height="38.40" rx="19.2" 
                         fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier"
                          stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                          <title>time1</title> 
                          <path d="M16 3.5c-7.181 0-13 5.82-13 13s5.819 13 13 13c7.179 0 13-5.82 13-13s-5.82-13-13-13zM15.895 27.027c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5c5.798 0 10.5 4.701 10.5 10.5s-4.702 10.5-10.5 10.5zM18.93 17.131h-2.98v-5.032c0-0.546-0.443-0.99-0.989-0.99s-0.99 0.443-0.99 0.99v6.021c0 0.547 0.443 0.989 0.99 0.989h3.969c0.547 0 0.99-0.442 0.99-0.989 0-0.546-0.443-0.989-0.99-0.989z"></path> 
                          </g></svg>
                          
                        }

                    text="Same-day Delivery"
                  />

                  <FeatureIcon
                    icon={
                      <svg
                        width="22"
                        height="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#2B8761]"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    }
                    text="24/7 Customer Care"
                  />
                </div>
              </div>

              {/* Right: Just Search */}
              {(showSearchPanel || !isMobile) && (
                <div className="lg:w-1/2 relative animate-fadeInUp w-full pt-[100]">
                  <div className="relative z-10 bg-white/40 bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-md mx-auto lg:mx-0 w-full">
                    <h3 className="text-2xl font-semibold mb-5 text-[#2B8761]">
                      Search
                    </h3>

                    <div className="flex space-x-2 items-center">
                      <DropdownButton
                        searchType={searchType}
                        showSearchOptions={showSearchOptions}
                        setSearchType={setSearchType}
                        setShowSearchOptions={setShowSearchOptions}
                      />
                      <div className="relative w-2/3">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder={`Search ${searchType}...`}
                          className="w-full px-4 text-[#2B8761] py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B8761] transition-all"
                        />
                        <Search
                          size={18}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

const FeatureIcon = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center group">
    <div className="flex items-center justify-center bg-[#e6f2ed] rounded-full w-12 h-12 mr-4 shadow-lg group-hover:bg-[#d1e9de] transition-all duration-300">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-700 group-hover:text-[#2B8761] transition-all duration-300">
      {text}
    </span>
  </div>
);

const DropdownButton = ({
  searchType,
  showSearchOptions,
  setSearchType,
  setShowSearchOptions,
}: {
  searchType: string;
  showSearchOptions: boolean;
  setSearchType: (val: string) => void;
  setShowSearchOptions: (val: boolean) => void;
}) => (
  <div className="relative w-1/3">
    <button
      onClick={() => setShowSearchOptions(!showSearchOptions)}
      className="w-full border px-4 py-2 rounded-md flex justify-between items-center focus:outline-none text-[#2B8761]"
    >
      {searchType}
      <ChevronDown size={16} className="ml-2" />
    </button>
    {showSearchOptions && (
      <div className="absolute z-20 w-full mt-1 border rounded-md shadow-lg">
        {["medicines", "pharmacies"].map((type) => (
          <div
            key={type}
            className="px-4 py-2 hover:bg-gray-400 cursor-pointer"
            onClick={() => {
              setSearchType(type);
              setShowSearchOptions(false);
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Hero;
