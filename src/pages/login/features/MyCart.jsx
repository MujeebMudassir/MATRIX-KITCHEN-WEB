import React from 'react';
const MyCart = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Shopping Cart</h1>
        <span className="text-gray-500">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
      </div>
      {cartItems.length > 0 ? (
        <div>
          <div className="grid grid-cols-12 gap-4 font-semibold border-b-2 pb-3 mb-6">
            <div className="col-span-6 md:col-span-7">Product</div>
            <div className="col-span-3 md:col-span-2 text-center">Price</div>
            <div className="col-span-3 md:col-span-3 text-right">Action</div>
          </div>
          {cartItems.map(item => (
            <div key={item.id} className="grid grid-cols-12 gap-4 items-center border-b border-gray-100 py-5 hover:bg-gray-50 transition">
              <div className="col-span-6 md:col-span-7 flex items-center">
                <div className="relative">
                  <img 
                    src={item.image.startsWith('http') ? item.image : `${item.image}`} 
                    alt={item.name} 
                    className="w-20 h-20 object-contain rounded-lg bg-gray-100 p-1 mr-4 border" 
                    onError={(e) => { e.target.src = '/placeholder.svg'; }}
                  />
                  {item.originalPrice && item.originalPrice > item.price && (
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-tl-lg rounded-br-lg">
                      SALE
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="md:hidden mt-2">
                    <span className="font-semibold text-gray-800">₹ {item.price}</span>
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through ml-2 text-sm">₹ {item.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-3 md:col-span-2 text-center hidden md:block">
                <span className="font-semibold text-gray-800">₹ {item.price}</span>
                {item.originalPrice && (
                  <span className="text-gray-400 line-through ml-2 text-sm">₹ {item.originalPrice}</span>
                )}
              </div>
              <div className="col-span-3 md:col-span-3 flex justify-end">
                <button 
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition transform hover:scale-110"
                  aria-label="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-end">
              <div className="text-right space-y-3">
                <div className="text-gray-600">
                  Subtotal: <span className="ml-2 font-semibold text-gray-800">₹ {cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                </div>
                <div className="text-gray-600">
                  Shipping: <span className="ml-2 font-semibold text-gray-800">FREE</span>
                </div>
                <div className="text-xl font-bold text-gray-900 pt-2">
                  Total: ₹ {cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all mt-4 w-full md:w-auto">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};
export default MyCart;