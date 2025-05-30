import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-sm">
                  123 Kitchen Street, Cookware City, CC 12345
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <p className="text-sm">support@materics.com</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-3">
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Warranty Information
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Track Your Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Product Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex space-x-2">
              <Input
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-sm"
              />
              <Button className="bg-red-500 hover:bg-red-600">Subscribe</Button>
            </div>
            <p className="text-xs mt-4 text-gray-400">
              By subscribing you agree to receive marketing emails from MATRIX.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 MATRIX. All rights reserved.
            </p>
            <div className="flex space-x-3">
              <img
                src={`${import.meta.env.BASE_URL}/images/visa.png`}
                alt="Visa"
                className="h-6"
              />
              <img
                src={`${import.meta.env.BASE_URL}/images/mastercard.png`}
                alt="Mastercard"
                className="h-6"
              />
              <img
                src={`${import.meta.env.BASE_URL}/images/paypal.png`}
                alt="PayPal"
                className="h-6"
              />
              <img
                src={`${import.meta.env.BASE_URL}/images/applepay.png`}
                alt="Apple Pay"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
