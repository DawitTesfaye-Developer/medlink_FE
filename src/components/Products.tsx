import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Product } from '../types';

const categories = [
  'All Products',
  'Medications',
  'Vitamins & Supplements',
  'Personal Care',
  'First Aid'
];

const products: Product[] = [
  {
    id: 1,
    name: 'Advanced Multivitamin',
    category: 'Vitamins & Supplements',
    price: 19.99,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    discount: 15
  },
  {
    id: 2,
    name: 'Pain Relief Tablets',
    category: 'Medications',
    price: 12.49,
    image: 'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Hand Sanitizer Pack',
    category: 'Personal Care',
    price: 8.99,
    image: 'https://images.pexels.com/photos/3951868/pexels-photo-3951868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'First Aid Kit Essentials',
    category: 'First Aid',
    price: 24.95,
    image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Sleep Aid Formula',
    category: 'Medications',
    price: 15.99,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    discount: 10
  },
  {
    id: 6,
    name: 'Vitamin D3 Supplements',
    category: 'Vitamins & Supplements',
    price: 13.49,
    image: 'https://images.pexels.com/photos/8851040/pexels-photo-8851040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    name: 'Digital Thermometer',
    category: 'First Aid',
    price: 29.99,
    image: 'https://images.pexels.com/photos/9831661/pexels-photo-9831661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    name: 'Moisturizing Lotion',
    category: 'Personal Care',
    price: 11.99,
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  
  const filteredProducts = activeCategory === 'All Products'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <Section id="products" background="light">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Shop Popular Products
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our selection of top-rated health and wellness products
        </p>
      </div>
      
      <div className="flex overflow-x-auto pb-4 mb-6 sm:mb-8 -mx-4 px-4 sm:px-0 scrollbar-hide">
        <div className="flex space-x-2 sm:space-x-4 mx-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {product.discount && (
                <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
              
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex space-x-2">
                  <button className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                    <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                  <button className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                    <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 group-hover:text-primary-500 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
              
              <div className="flex items-center">
                <span className="text-base sm:text-lg font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="text-xs sm:text-sm text-gray-500 line-through ml-2">
                    ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8 sm:mt-12">
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          View All Products
        </Button>
      </div>
    </Section>
  );
};

export default Products;