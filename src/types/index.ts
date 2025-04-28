export interface NavItem {
    label: string;
    href: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    discount?: number;
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
    icon: React.ComponentType;
  }
  
  export interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: React.ComponentType;
  }