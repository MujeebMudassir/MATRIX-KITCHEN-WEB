import React from 'react';
import ProductGrid from './ProductGrid';
import { featuredProducts } from '@/data/products';

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Kitchen Essentials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of kitchen tools and cookware, designed to elevate your cooking experience.
          </p>
        </div>

        <ProductGrid
          title=""
          products={featuredProducts}
          showViewAll={false}
        />

        <div className="mt-10 text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;