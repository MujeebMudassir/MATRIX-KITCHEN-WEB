import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const HorizontalCategorySelector = ({
  title,
  categories,
  products
}) => {
  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  
  return (
    <div className="w-full mx-0 px-0 py-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 px-4">{title}</h2>
      
      <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide px-4">
        <div className="flex space-x-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`whitespace-nowrap ${
                activeCategory === category 
                  ? "bg-red-500 hover:bg-red-600" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-4">
        {products[activeCategory]?.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            image={product.image}
            rating={product.rating}
            ratingCount={product.ratingCount}
            inStock={product.inStock}
            isNew={product.isNew}
            discount={product.discount}
          />
        ))}
      </div>
      
      <div className="text-center mt-8 px-4">
        <Link to={`/category/${activeCategory.toLowerCase().replace(/\s+/g, '-')}`}>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
            View All {activeCategory}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HorizontalCategorySelector;