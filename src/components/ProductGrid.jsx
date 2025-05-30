import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({
  title,
  subtitle,
  products,
  showViewAll = true
}) => {
  return (
    <div className="w-full mx-0 px-0 py-8">
      <div className="flex justify-between items-baseline mb-6 px-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {showViewAll && (
          <a href="#" className="text-sm font-medium text-red-500 hover:text-red-600">
            View All →
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-4">
        {products.map(product => (
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
    </div>
  );
};

export default ProductGrid;
