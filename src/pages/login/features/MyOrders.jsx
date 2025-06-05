import React from 'react';
const MyOrders = ({ orders, expandedOrderId, toggleOrderDetails }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
        <div className="relative">
          <select className="appearance-none bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Orders</option>
            <option>Past 30 Days</option>
            <option>2023</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      {orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b min-w-[100px]">Order</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b min-w-[120px]">Date</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b min-w-[200px]">Items</th>
                <th className="p-3 text-center text-sm font-semibold text-gray-700 border-b min-w-[120px]">Status</th>
                <th className="p-3 text-right text-sm font-semibold text-gray-700 border-b min-w-[100px]">Total</th>
                <th className="p-3 text-right text-sm font-semibold text-gray-700 border-b min-w-[100px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <React.Fragment key={order.id}>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-3 text-sm text-gray-700 border-b align-middle">#{order.id}</td>
                    <td className="p-3 text-sm text-gray-500 border-b align-middle">{order.date}</td>
                    <td className="p-3 border-b align-middle">
                      <div className="flex items-center space-x-2">
                        <div className="flex flex-wrap gap-1">
                          {order.items.map(item => (
                            <img 
                              key={item.id}
                              src={item.image.startsWith('http') ? item.image : `${item.image}`} 
                              alt="Item" 
                              className="w-8 h-8 object-contain rounded-md bg-gray-100 p-1 border flex-shrink-0" 
                              onError={(e) => { e.target.src = '/placeholder.svg'; }}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({order.items.length} {order.items.length === 1 ? 'item' : 'items'})</span>
                      </div>
                    </td>
                    <td className="p-3 border-b align-middle text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 text-right text-sm font-semibold text-gray-800 border-b align-middle">₹{order.total.toFixed(2)}</td>
                    <td className="p-3 text-right border-b align-middle">
                      <button 
                        onClick={() => toggleOrderDetails(order.id)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1 ml-auto"
                      >
                        <span>{expandedOrderId === order.id ? 'Hide' : 'Details'}</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-4 w-4 transform transition-transform ${expandedOrderId === order.id ? 'rotate-90' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  {expandedOrderId === order.id && (
                    <tr>
                      <td colSpan="6" className="p-0 border-b">
                        <div className="bg-gray-100 p-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Order Details: #{order.id}</h3>
                            <p className="text-sm text-gray-600">Date: {order.date} | Status: {order.status}</p>
                          </div>
                          <div className="space-y-3">
                            {order.items.map(item => (
                              <div key={item.id} className="flex items-center space-x-3">
                                <img 
                                  src={item.image.startsWith('http') ? item.image : `${item.image}`} 
                                  alt={item.name} 
                                  className="w-8 h-8 object-contain rounded-md bg-gray-100 p-1 border flex-shrink-0" 
                                  onError={(e) => { e.target.src = '/placeholder.svg'; }}
                                />
                                <div className="flex-1">
                                  <p className="text-sm text-gray-800 font-medium">{item.name}</p>
                                  <p className="text-sm text-gray-600">₹{item.price.toFixed(2)}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 flex justify-end">
                            <div className="text-right">
                              <p className="text-sm text-gray-600">Total Items: {order.items.length}</p>
                              <p className="text-lg font-semibold text-gray-800">Total: ₹{order.total.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} stroke="currentColor" fill="none" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">No orders yet</h3>
          <p className="text-gray-500 mb-6">Your order history will appear here</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default MyOrders;