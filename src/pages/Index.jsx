import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import CategoryIconGrid from "@/components/CategoryIconGrid";
import CategoryCards from "@/components/CategoryCards";
import ProductGrid from "@/components/ProductGrid";
import HorizontalCategorySelector from "@/components/HorizontalCategorySelector";
import LowerBanner from "@/components/LowerBanner";
import BlogSection from "@/components/BlogSection";
import BrandStrip from "@/components/BrandStrip";

import { 
  featuredProducts, 
  newArrivals, 
  bestSellers, 
  bestDeals,
  categorizedProducts 
} from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <HomeHero />
        
        {/* Category Icon Grid */}
        <CategoryIconGrid />
        
        {/* Featured Products */}
        <ProductGrid 
          title="Featured Products" 
          products={featuredProducts}
        />
        
        {/* Category Cards */}
        <CategoryCards />
        
        {/* Best Sellers */}
        <ProductGrid 
          title="Best Sellers of the Week"
          subtitle="Our most popular products based on sales" 
          products={bestSellers}
        />
        
        {/* Best Deals */}
        <div className="bg-gray-50 py-8">
          <ProductGrid 
            title="Best Deal Of The Week" 
            products={bestDeals}
            showViewAll={false}
          />
        </div>
        
        {/* Lower Banner */}
        <LowerBanner />
        
        {/* Categorized Products */}
        <HorizontalCategorySelector
          title="Shop By Categories"
          categories={["Cookware", "Bakeware", "Appliances"]}
          products={categorizedProducts}
        />
        
        {/* Brand Strip */}
        <BrandStrip />
        
        {/* Blog Section */}
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;