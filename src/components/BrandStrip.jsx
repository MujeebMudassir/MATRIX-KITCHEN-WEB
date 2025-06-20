import React from 'react';

const brands = [
  { id: 1, name: "Ashley", image: "/images/ashley.png" },
  { id: 2, name: "Bakes", image: "/images/bakes.png" },
  { id: 3, name: "Kitchen", image: "/images/kitchen.png" },
  { id: 4, name: "Chefmate", image: "/images/chefmate.png" },
  { id: 5, name: "Reverie", image: "/images/reverie.png" },
  { id: 6, name: "Gourmet", image: "/images/gourmet.png" },
  { id: 7, name: "Destile", image: "/images/destile.png" },
];

const BrandStrip = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-lg font-medium text-gray-800 mb-8">Shop By Popular Brands</h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.id} className="grayscale hover:grayscale-0 transition-all">
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="h-8 md:h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandStrip;