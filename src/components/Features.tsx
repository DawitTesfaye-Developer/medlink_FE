"use client";
import React, { useState, useRef } from "react";
import AIHealthAssistant from "./HealthAssistant";
import Button from "./ui/Button";
import { FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MedlinkPharmacy: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: "Vitamin D",
      category: "Supplements",
      price: "1500 Birr",
      imageUrl:
        "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Panadol",
      category: "Pain Relief",
      price: "1500 Birr",
      imageUrl:
        "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "NIDO",
      category: "Nutritional",
      price: "1500 Birr",
      imageUrl:
        "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Ibuprofen",
      category: "Pain Relief",
      price: "1200 Birr",
      imageUrl:
        "https://images.pexels.com/photos/5934512/pexels-photo-5934512.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const categories = ["All", "Supplements", "Pain Relief", "Nutritional"];

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = 320;
      scrollContainerRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Search Bar */}
      <div className="p-7 mb-8">
        <input
          type="text"
          placeholder="Search for medicines, vitamins, etc..."
          className="p-4 rounded-xl bg-white/30 backdrop-blur-md border border-[#2B8761] shadow-lg placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300 w-full max-w-xl"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 px-7">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-medium text-sm border ${
              selectedCategory === category
                ? "bg-[#2B8761] text-white shadow-md"
                : "bg-white text-gray-700 border-gray-300"
            } hover:bg-primary-100 transition-all duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel Cards */}
      <div className="relative px-7 mb-10">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden min-w-[300px] max-w-[300px] hover:shadow-2xl transform transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-52 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-white text-3xl bg-primary-500 p-3 rounded-full hover:bg-primary-600 transition">
                    <FaCartPlus />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-lg font-semibold text-primary-600 mt-2">
                  {product.price}
                </p>
                <Button className="mt-4 w-full bg-primary-500 text-white px-4 py-2 rounded-xl hover:bg-primary-600 transition-all">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* AI Assistant */}
      <AIHealthAssistant />

      {/* Upload Prescription */}
      <div className="mb-10 mt-12 flex flex-col items-center justify-center text-center">
        <label
          htmlFor="prescription"
          className="text-sm font-medium text-[#2B8761] mb-2"
        >
          Upload Prescription
        </label>
        <input
          type="file"
          id="prescription"
          name="prescription"
          className="mt-1 mb-4 block w-full max-w-xs text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-primary-500 file:cursor-pointer hover:file:bg-primary-50 transition-all"
        />
        <Button className="mt-6 bg-[#2B8761] hover:bg-primary-600 text-white px-6 py-3 rounded-xl transition">
          Upload Prescription
        </Button>
      </div>

      {/* Subscription */}
      <div className="bg-primary-100 p-6 rounded-xl shadow-lg mt-12">
        <h3 className="text-2xl font-bold text-gray-800">
          Subscribe for Regular Deliveries
        </h3>
        <p className="text-gray-600 mt-4">
          Stay on top of your health with scheduled medicine deliveries.
        </p>
        <Button className="mt-6 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl transition">
          Subscribe Now
        </Button>
      </div>

      {/* App Promo */}
      <div className="bg-gradient-to-br from-primary-50 to-white p-10 rounded-xl shadow-xl mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Get the Medlink Pharmacy App
        </h2>
        <p className="text-gray-600 mt-4">
          Shop faster. Stay healthier. Anywhere you go.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-gray-800 px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
            Download on App Store
          </Button>
          <Button className="bg-white text-gray-800 px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
            Get it on Google Play
          </Button>
        </div>
      </div>
    </>
  );
};

export default MedlinkPharmacy;
