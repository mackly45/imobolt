import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Truck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            PlaquesAuto
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/customize" className="text-gray-700 hover:text-blue-600">
              Personnaliser
            </Link>
            <Link to="/orders" className="text-gray-700 hover:text-blue-600 flex items-center">
              <Truck className="w-5 h-5 mr-1" />
              Commandes
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-1" />
              Panier
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}