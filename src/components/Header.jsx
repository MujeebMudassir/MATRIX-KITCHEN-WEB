import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ChevronDown, 
  Search, 
  ShoppingCart, 
  Heart, 
  User 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full bg-white">
      {/* Full-width top bar */}
      <div className="w-full bg-gray-100">
        <div className="max-w-[1800px] mx-auto py-1 px-4 text-xs text-gray-700 hidden md:flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>Welcome to BARTANN Online Store!</span>
            <span>|</span>
            <span>Free shipping on orders over $99</span>
          </div>
          <div className="flex items-center gap-2">
            <span>USD</span>
            <ChevronDown size={14} />
            <span className="ml-2">EN</span>
            <ChevronDown size={14} />
            <Link to="/MATRIX-KITCHEN-WEB/login" className="ml-2 hover:underline">My Account</Link>
          </div>
        </div>
      </div>
      
      {/* Main header container */}
      <div className="w-full">
        <div className="max-w-[1800px] mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <Link to="/" className="text-2xl font-bold text-red-500">
            BARTANN
          </Link>
          
          {/* Search bar */}
          <div className="flex-1 w-full md:max-w-2xl lg:max-w-3xl relative">
            <Input 
              placeholder="Search for products" 
              className="pr-10 rounded-md border-gray-300 w-full"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-700 flex flex-col items-center">
              <Heart size={20} />
              <span className="text-xs mt-1">Wishlist</span>
            </button>
            <Link to="/MATRIX-KITCHEN-WEB/login" className="text-gray-700 flex flex-col items-center">
              <User size={20} />
              <span className="text-xs mt-1">Log In</span>
            </Link>
            <button className="text-gray-700 flex flex-col items-center relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                2
              </span>
              <span className="text-xs mt-1">Cart</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation bar */}
      <div className="w-full bg-red-500">
        <div className="max-w-[1800px] mx-auto px-4 py-2.5 overflow-x-auto">
          <div className="flex items-center space-x-6 whitespace-nowrap">
            <Button variant="link" className="text-white hover:text-white hover:underline font-medium text-sm px-0">
              HOME
            </Button>
            <Button variant="link" className="text-white hover:text-white hover:underline font-medium text-sm px-0">
              KITCHEN
            </Button>
            <Button variant="link" className="text-white hover:text-white hover:underline font-medium text-sm px-0">
              COOKWARE
            </Button>
            <Button variant="link" className="text-white hover:text-white hover:underline font-medium text-sm px-0">
              BAKEWARE
            </Button>
            <Button variant="link" className="text-white hover:text-white hover:underline font-medium text-sm px-0">
              UTENSILS
            </Button>
            <Button variant="link" className="text-white hover:text-white hover:underline font-medium text-sm px-0">
              APPLIANCES
            </Button>
            <Button variant="link" className="text-white hover:text-white hover:underline font-medium text-sm px-0">
              DINNERWARE
            </Button>
            <Button variant="link" className="text-white hover:text-white hover:underline font-medium text-sm px-0">
              OFFERS
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;