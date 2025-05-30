import React from 'react';
import { Card } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    title: "Why Copper & Brass Utensils Are Ayurveda’s Best-Kept Secret",
    excerpt: "Discover the latest smart technology for your cooking space...",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cb286c57-01e7-4cd7-b6c0-3a3d83be5486.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    category: "APPLIANCES",
    date: "May 15, 2025"
  },
  {
    id: 2,
    title: "5 Science-Backed Health Perks of Cooking in Copper & Brass",
    excerpt: "How to brew the perfect cup every morning with premium equipment...",
    image: "https://m.media-amazon.com/images/I/71+NDNrYdaL.jpg",
    category: "GUIDES",
    date: "May 10, 2025"
  },
  {
    id: 3,
    title: "From Immunity to Taste: How Copper & Brass Elevate Your Kitchen",
    excerpt: "Professional-grade cookware options that last a lifetime...",
    image: "https://m.media-amazon.com/images/I/61-dmgDhQSL.jpg",
    category: "COLLECTIONS",
    date: "May 5, 2025"
  },
  {
    id: 4,
    title: "Set Latest Update & News",
    excerpt: "Sustainable & Smart: The Surprising Benefits of Traditional Metal Utensils",
    image: "https://m.media-amazon.com/images/I/512xNraEBpL._AC_UF894,1000_QL80_.jpg",
    category: "NEWS",
    date: "May 1, 2025"
  }
];

const BlogSection = () => {
  return (
    <div className="w-full px-0 py-12">
      <div className="w-full max-w-none mx-0">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 px-6">Latest Articles</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group cursor-pointer w-full">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="font-medium text-base mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;