// src/App.js
import React from 'react';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './context/CartContext';
import './App.css'
function App() {
  return (
    <CartProvider>
      <div className="app">
        <header>
          <h1>E-Commerce Store</h1>
          <ShoppingCart />
        </header>
        <main>
          <ProductCatalog />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;