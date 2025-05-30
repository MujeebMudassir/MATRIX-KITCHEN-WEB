import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const CategoryCard = ({ title, description, image, link, size = 'medium' }) => {
  return (
    <Card className="overflow-hidden group">
      <Link to={link} className="block">
        <div className="bg-gray-100 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full object-cover h-48 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3">
            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-gray-200 text-sm mt-1">{description}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

const CategoryCards = () => {
  const categories = [
    {
      id: 1,
      title: "Copper & Brass: Nature's Antibacterial Kitchenware for a Healthier Home",
      description: "Premium quality, durable",
      image: "/images/cutting-board.jpeg",
      link: "/category/cutting-boards",
      size: "small"
    },
    {
      id: 2,
      title: "Upgrade Your Cooking Game with the Timeless Magic of Copper & Brass",
      description: "Stylish & performance driven",
      image: "/images/red-cookware.jpeg",
      link: "/category/cookware-sets",
      size: "medium"
    },
    {
      id: 3,
      title: "Eat, Drink & Thrive: The Ancient Wisdom of Copper & Brass Utensils",
      description: "Professional grade drinking tools",
      image: "/images/knife-block.jpeg",
      link: "/category/knife-sets",
      size: "small"
    }
  ];

  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
            image={category.image}
            link={category.link}
            size={category.size}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;