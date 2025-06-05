import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { featuredProducts } from '@/data/mockData';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MyCart from './features/MyCart';
import MyWishlist from './features/MyWishlist';
import MyOrders from './features/MyOrders';
import MyAddresses from './features/MyAddresses';

const Profile = () => {
  // State declarations without redundant comments
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const [name, setName] = useState(searchParams.get('name') || 'Bag Alice');
  const [phoneNumber, setPhoneNumber] = useState(searchParams.get('phone') || '1234567891');
  const [email, setEmail] = useState(searchParams.get('email') || 'bagalice@gmail.com');
  const [originalName, setOriginalName] = useState(name);
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState(phoneNumber);
  const [originalEmail, setOriginalEmail] = useState(email);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [formData, setFormData] = useState({
    addressType: 'Work',
    apartment: '',
    flatHouseNo: '',
    street: '',
    areaColony: '',
    area: '',
    city: '',
    pincode: '',
    landmark: '',
    phoneNumber: '',
  });
  const [cartItems, setCartItems] = useState([
    featuredProducts[0],
    featuredProducts[1]
  ]);
  const [wishlistItems, setWishlistItems] = useState([
    featuredProducts[2],
    featuredProducts[3],
    featuredProducts[4]
  ]);
  const [orders, setOrders] = useState([
    {
      id: 'ORD-001',
      date: '15 May 2023',
      status: 'Delivered',
      items: [
        featuredProducts[0],
        featuredProducts[3],
        featuredProducts[5],
        featuredProducts[2]
      ],
      total: 724.96
    },
    {
      id: 'ORD-002',
      date: '20 June 2023',
      status: 'Processing',
      items: [
        featuredProducts[1],
        featuredProducts[4]
      ],
      total: 349.98
    },
    {
      id: 'ORD-003',
      date: '10 July 2023',
      status: 'Cancelled',
      items: [
        featuredProducts[2],
        featuredProducts[5]
      ],
      total: 499.97
    },
    {
      id: 'ORD-004',
      date: '05 August 2023',
      status: 'Delivered',
      items: [
        featuredProducts[0],
        featuredProducts[1],
        featuredProducts[3]
      ],
      total: 624.97
    }
  ]);
  const [activeSection, setActiveSection] = useState('orders');

  // Clean handler functions without redundant comments
  const handleEditProfile = () => {
    setOriginalName(name);
    setOriginalPhoneNumber(phoneNumber);
    setOriginalEmail(email);
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setName(originalName);
    setPhoneNumber(originalPhoneNumber);
    setEmail(originalEmail);
    setIsEditing(false);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setWishlistItems(wishlistItems.filter(wishItem => wishItem.id !== item.id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingAddressIndex !== null) {
      const updatedAddresses = [...savedAddresses];
      updatedAddresses[editingAddressIndex] = formData;
      setSavedAddresses(updatedAddresses);
      setEditingAddressIndex(null);
    } else {
      setSavedAddresses([...savedAddresses, formData]);
    }
    setIsAddingAddress(false);
    setFormData({
      addressType: 'Work',
      apartment: '',
      flatHouseNo: '',
      street: '',
      areaColony: '',
      area: '',
      city: '',
      pincode: '',
      landmark: '',
      phoneNumber: '',
    });
  };

  const handleEditAddress = (index) => {
    setFormData(savedAddresses[index]);
    setEditingAddressIndex(index);
    setIsAddingAddress(true);
  };

  const handleRemoveAddress = (index) => {
    setSavedAddresses(savedAddresses.filter((_, i) => i !== index));
  };

  const handleUseCurrentLocation = () => {
    console.log('Fetching current location...');
  };

  const handleCancel = () => {
    setIsAddingAddress(false);
    setEditingAddressIndex(null);
    setFormData({
      addressType: 'Work',
      apartment: '',
      flatHouseNo: '',
      street: '',
      areaColony: '',
      area: '',
      city: '',
      pincode: '',
      landmark: '',
      phoneNumber: '',
    });
  };

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const menuItems = [
    { icon: '🛒', label: 'My Cart', section: 'cart' },
    { icon: '📦', label: 'My Orders', section: 'orders' },
    { icon: '❤️', label: 'My Wishlist', section: 'wishlist' },
    { icon: '📍', label: 'My Addresses', section: 'addresses' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ED1C24' }}>
                  <span className="text-xl text-white">{name.charAt(0)}</span>
                </div>
                <div className="w-full">
                  {isEditing ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Phone Number"
                          className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold">{name}</h2>
                      <div className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-gray-600 text-sm">{phoneNumber}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-600 text-sm">{email}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {isEditing ? (
                <div className="flex space-x-2">
                  <button 
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
                    onClick={handleCancelEdit}
                  >
                    CANCEL
                  </button>
                  <button 
                    className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                    onClick={handleSaveProfile}
                  >
                    SAVE PROFILE
                  </button>
                </div>
              ) : (
                <button 
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                  onClick={handleEditProfile}
                >
                  EDIT PROFILE
                </button>
              )}
              <nav className="space-y-2 mt-6">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(item.section)}
                    className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full text-left ${activeSection === item.section ? 'bg-gray-100' : ''}`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-700">{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={() => window.location.href = '/'}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full"
                >
                  <span className="text-xl">🚪</span>
                  <span className="text-gray-700">Logout</span>
                </button>
              </nav>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {activeSection === 'cart' && (
                <MyCart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
              )}
              {activeSection === 'orders' && (
                <MyOrders orders={orders} expandedOrderId={expandedOrderId} toggleOrderDetails={toggleOrderDetails} />
              )}
              {activeSection === 'wishlist' && (
                <MyWishlist 
                  wishlistItems={wishlistItems} 
                  handleRemoveFromWishlist={handleRemoveFromWishlist} 
                  handleAddToCart={handleAddToCart} 
                />
              )}
              {activeSection === 'addresses' && (
                <MyAddresses 
                  savedAddresses={savedAddresses}
                  isAddingAddress={isAddingAddress}
                  setIsAddingAddress={setIsAddingAddress}
                  editingAddressIndex={editingAddressIndex}
                  setEditingAddressIndex={setEditingAddressIndex}
                  formData={formData}
                  setFormData={setFormData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  handleEditAddress={handleEditAddress}
                  handleRemoveAddress={handleRemoveAddress}
                  handleUseCurrentLocation={handleUseCurrentLocation}
                  handleCancel={handleCancel}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;