import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onSearch, searchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-red-600/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-white font-bold text-xl">MaxiHard</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-gray-300 hover:text-red-400 transition-colors">Inicio</a>
            <a href="#productos" className="text-gray-300 hover:text-red-400 transition-colors">Productos</a>
            <a href="#ofertas" className="text-gray-300 hover:text-red-400 transition-colors">Ofertas</a>
            <a href="#contacto" className="text-gray-300 hover:text-red-400 transition-colors">Contacto</a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-red-400 transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="relative text-gray-300 hover:text-red-400 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-gray-300 hover:text-red-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#inicio" className="text-gray-300 hover:text-red-400 transition-colors py-2">Inicio</a>
              <a href="#productos" className="text-gray-300 hover:text-red-400 transition-colors py-2">Productos</a>
              <a href="#ofertas" className="text-gray-300 hover:text-red-400 transition-colors py-2">Ofertas</a>
              <a href="#contacto" className="text-gray-300 hover:text-red-400 transition-colors py-2">Contacto</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;