import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: "Copper Bottles",
    image: "/images/stand-mixers.png",
    link: "/category/stand-mixers"
  },
  {
    id: 2,
    name: "Plates",
    image: "/images/blenders.png",
    link: "/category/blenders"
  },
  {
    id: 3,
    name: "Decoratives",
    image: "/images/coffee-makers.png",
    link: "/category/coffee-makers"
  },
  {
    id: 4,
    name: "Cookware",
    image: "/images/cookware.png",
    link: "/category/cookware"
  },
  {
    id: 5,
    name: "Knife Sets",
    image: "/images/knife-sets.png",
    link: "/category/knife-sets"
  },
  {
    id: 6,
    name: "Pooja Essentials",
    image: "/images/juicers.png",
    link: "/category/juicers"
  },
  {
    id: 7,
    name: "Others",
    image: "/images/utensil-sets.png",
    link: "/category/utensil-sets"
  }
];

const CategoryIconGrid = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="grid grid-cols-4 md:grid-cols-7 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="flex flex-col items-center group"
          >
            <div className="bg-gray-100 rounded-full p-2 mb-2 hover:bg-gray-200 transition-colors">
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-xs text-center font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryIconGrid;