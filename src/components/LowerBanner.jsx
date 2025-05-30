import React from 'react';
import { Button } from '@/components/ui/button';

const LowerBanner = () => {
  return (
    <div className="bg-gray-900 py-16 w-full mx-0 px-0">
      <div className="relative overflow-hidden rounded-none">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/056/497/885/non_2x/vintage-inspired-copper-kitchenware-set-showcasing-polished-metallic-teapots-plates-and-utensils-on-a-rustic-wooden-table-for-a-warm-and-nostalgic-atmosphere-photo.jpg"
            alt="Woman cooking in modern kitchen"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative px-6 py-16 lg:px-12 flex flex-col items-start max-w-lg">
          <h2 className="text-3xl font-bold text-white mb-2">Shop Smart Save On Cooking</h2>
          <p className="text-gray-300 mb-8">Discover top-rated kitchen essentials for every meal. Expert-recommended tools at exceptional prices.</p>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LowerBanner;