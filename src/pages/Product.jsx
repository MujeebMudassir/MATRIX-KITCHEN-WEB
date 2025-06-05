import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { featuredProducts, newArrivals } from "@/data/mockData";

const Product = () => {
  const { id } = useParams();
  const product = featuredProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="min-h-screen flex flex-col"><Header /><div className="flex-grow text-center py-8">Product not found</div><Footer /></div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-100">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:underline">Home</Link> {" > "} 
            <Link to="/category" className="hover:underline">{product.category}</Link> {" > "} 
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>

        {/* Product Detail Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Product Images */}
            <div className="flex">
              <div className="flex flex-col space-y-4 mr-4">
                <img src={product.image} alt={`${product.name} Thumbnail 1`} className="w-20 h-18 object-contain rounded border border-gray-300 hover:border-blue-600 cursor-pointer" />
                <img src={product.image} alt={`${product.name} Thumbnail 2`} className="w-20 h-18 object-contain rounded border border-gray-300 hover:border-blue-600 cursor-pointer" />
                <img src={product.image} alt={`${product.name} Thumbnail 3`} className="w-20 h-18 object-contain rounded border border-gray-300 hover:border-blue-600 cursor-pointer" />
              </div>
              <div className="flex-1 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover rounded border border-gray-300"
                />
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="flex flex-col space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-800">{product.rating.toFixed(1)}</span>
                <span className="text-gray-500 text-sm">({product.ratingCount} ratings)</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 line-through">MRP: ₹{product.originalPrice.toFixed(2)}</p>
                <p className="text-2xl font-semibold text-gray-800">Price: ₹{product.price.toFixed(2)}</p>
                <span className="text-green-600 text-sm">({product.discount}% off)</span>
              </div>
              <div>
                <select className="w-full border border-gray-300 rounded p-2 text-gray-700">
                  <option>Select Option</option>
                  <option>1 unit</option>
                  <option>2 units</option>
                </select>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="flex-1">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
                    Add to Cart
                  </button>
                </a>
                <a href="#" className="flex-1">
                  <button className="w-full bg-[#ED1C24] hover:bg-red-700 text-white px-6 py-2 rounded font-medium">
                    Buy Now
                  </button>
                </a>
                <a href="#">
                  <button className="border border-gray-300 hover:border-red-500 text-gray-700 px-4 py-2 rounded flex items-center space-x-2">
                    <span>Remove from wishlist</span>
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                </a>
              </div>
              <div>
                <a href="#">
                  <button className="flex items-center space-x-2 border border-gray-300 hover:bg-gray-200 px-4 py-2 rounded transition-colors duration-300">
                    <span className="text-gray-700">Share this product</span>
                    <svg className="w-6 h-6 text-gray-700 hover:text-[#ED1C24] transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-5.196-2.02L5 9.586a3 3 0 100 4.828l4.804 3.606A3 3 0 1015 16v-2h-2v2a1 1 0 11-2 0V9.586L15 8zm-2 0a1 1 0 112 0v2h-2V8z" />
                    </svg>
                  </button>
                </a>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <details className="mb-2">
                  <summary className="cursor-pointer text-gray-700 font-medium">About the Product</summary>
                  <p className="text-gray-600 mt-2">High-quality {product.name}, perfect for your kitchen needs. Durable and designed for daily use.</p>
                </details>
                <details>
                  <summary className="cursor-pointer text-gray-700 font-medium">Highlights</summary>
                  <ul className="text-gray-600 mt-2 list-disc list-inside">
                    <li>Durable material</li>
                    <li>Highly rated by {product.ratingCount} customers</li>
                    <li>Category: {product.category}</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col min-h-[400px]">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-[#ED1C24] text-white text-xs font-semibold rounded-full px-2 py-1">
                    NEW
                  </div>
                  <div className="absolute top-2 right-2">
                    <a href="#">
                      <svg className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </a>
                  </div>
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
                </div>
                <p className="text-sm text-green-600 mb-1">Latest!</p>
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-800 font-medium">₹{product.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-yellow-500">★</span>
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="text-gray-500 text-sm">({product.ratingCount})</span>
                </div>
                <div className="mt-2">
                  <select className="w-full border border-gray-300 rounded p-2 text-gray-700">
                    <option>Select Option</option>
                    <option>1 unit</option>
                    <option>2 units</option>
                  </select>
                </div>
                <a href="#" className="w-full">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-auto">
                    Add to Cart
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Product;