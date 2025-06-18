import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ProductCatalog from './components/ProductCatalog';
import SpecialOffers from './components/SpecialOffers';
import CustomerReviews from './components/CustomerReviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { products, customerReviews } from './data/products';
import { CartItem, Product } from './types/Product';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-black">
      <Header 
        cartItemsCount={cartItemsCount}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      <Hero />
      <FeaturedProducts 
        products={products}
        onAddToCart={handleAddToCart}
      />
      <ProductCatalog 
        products={products}
        onAddToCart={handleAddToCart}
        searchQuery={searchQuery}
      />
      <SpecialOffers 
        products={products}
        onAddToCart={handleAddToCart}
      />
      <CustomerReviews reviews={customerReviews} />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;