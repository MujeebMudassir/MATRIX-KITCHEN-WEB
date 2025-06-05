import React from 'react';

const MyWishlist = ({ wishlistItems, handleRemoveFromWishlist, handleAddToCart }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
        <span className="text-gray-500">{wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}</span>
      </div>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map(item => (
            <div key={item.id} className="border rounded-xl shadow-lg overflow-hidden h-full transition-transform transform hover:-translate-y-1">
              <div className="relative group">
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 h-3 text-red-600 hover:text-red-500 transition"
                    aria-label="Remove from wishlist"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="relative pt-[100%] bg-gray-100">
                  <img 
                    src={item.image.startsWith('http') ? item.image : `${item.image}`} 
                    alt={item.name} 
                    className="absolute top-0 left-0 w-full h-full object-contain p-4" 
                    onError={(e) => { e.target.src = '/placeholder.png'; }}
                  />
                  {item.originalPrice && item.originalPrice > item.price && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {Math.round((1 - item.price/item.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-gray-800">₹ {item.price}</span>
                      {item.originalPrice && (
                        <span className="text-gray-400 line-through ml-2 text-sm">₹ {item.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center"
                      onClick={() => handleAddToCart(item)}
                    >
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-6">Save your favorite items here</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 rounded-md font-medium transition">
            Browse Products
          </button>
        </div>
      )}
    </div>
  );
};
export default MyWishlist;