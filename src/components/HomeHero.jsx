import React from 'react';
import { Button } from '@/components/ui/button';

const HomeHero = () => {
  return (
    <div className="bg-white">
      {/* Navigation Row */}
      <div className="w-full mx-0 px-0 py-2">
        <div className="flex space-x-8 overflow-x-auto whitespace-nowrap px-4 sm:px-6 lg:px-8">
         
        </div>
      </div>

      {/* Hero Section (Dark Blue Block) */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="w-full mx-0 px-0">
          <div className="relative z-10 sm:pb-8 md:pb-12 lg:max-w-2xl lg:w-full lg:pb-16 xl:pb-20">
            <div className="pt-6 sm:pt-8 lg:pt-4 lg:pb-8 lg:overflow-hidden">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                    <h1>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-red-500 sm:text-sm lg:text-xs xl:text-sm mb-1">
                        Limited Time Offer
                      </span>
                      <span className="mt-1 block text-2xl tracking-tight font-extrabold sm:text-3xl xl:text-4xl text-white">
                        Kitchen Up To 70% Off
                      </span>
                      <span className="block text-xl tracking-tight font-bold sm:text-2xl xl:text-3xl mt-1 text-white">
                        Great Premium Tools
                      </span>
                    </h1>
                    <p className="mt-2 text-sm text-gray-300 sm:mt-3 sm:text-lg lg:text-base xl:text-lg">
                      Old Price : 489$<br />
                      New Price : 399$
                    </p>
                    <div className="mt-4 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                      <Button className="bg-red-500 hover:bg-red-600 px-6 py-3 text-sm font-medium text-white">
                        SHOP NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-40 w-full object-cover sm:h-56 md:h-72 lg:w-full lg:h-full"
              src="https://images.news18.com/webstories/uploads/2024/05/image-2024-05-6b265f40facbed185d825e998e797b1c.png"
              alt="Modern kitchen with premium tools"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;