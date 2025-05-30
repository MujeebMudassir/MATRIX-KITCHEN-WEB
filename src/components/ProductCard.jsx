import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  ratingCount,
  inStock = true,
  isNew = false,
  discount,
  className,
}) => {
  return (
    <Card className={cn("border rounded-md overflow-hidden product-card group", className)}>
      <div className="relative">
        <img src={image} alt={name} className="w-full h-40 object-contain p-2" />
        
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            -{discount}%
          </div>
        )}
        
        {isNew && !discount && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
            NEW
          </div>
        )}
        
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
          <Heart size={16} className="text-gray-500" />
        </button>
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-medium line-clamp-2 h-10 mb-1">{name}</h3>
        
        <div className="flex items-center mb-1.5">
          <div className="flex">
            {Array(5).fill(0).map((_, i) => (
              <svg 
                key={i} 
                className={`w-3 h-3 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({ratingCount})</span>
        </div>
        
        <div className="flex items-center mb-2">
          <span className="font-semibold text-sm">${price?.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-xs ml-2">
              ${originalPrice?.toFixed(2)}
            </span>
          )}
        </div>
        
        {inStock ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-1.5"></div>
              <span className="text-xs text-gray-700">In Stock</span>
            </div>
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-xs h-7 px-2.5">
              Add
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-1.5"></div>
              <span className="text-xs text-gray-700">Out of Stock</span>
            </div>
            <Button size="sm" className="bg-gray-300 hover:bg-gray-300 cursor-not-allowed text-xs h-7 px-2.5" disabled>
              Add
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;