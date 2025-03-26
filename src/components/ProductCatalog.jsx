// src/components/ProductCatalog.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    image: 'https://via.placeholder.com/300x200?text=Wireless+Headphones',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    description: 'Feature-rich smartwatch with health monitoring.',
    image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 59.99,
    description: 'Portable speaker with 20-hour battery life.',
    image: 'https://via.placeholder.com/300x200?text=Bluetooth+Speaker',
  },
  {
    id: 4,
    name: 'Laptop Backpack',
    price: 49.99,
    description: 'Durable backpack with USB charging port.',
    image: 'https://via.placeholder.com/300x200?text=Laptop+Backpack',
  },
];

const ProductCatalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-catalog">
      {selectedProduct ? (
        <ProductDetail 
          product={selectedProduct} 
          onAddToCart={handleAddToCart}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
        <div className="product-grid">
          <h2>Our Products</h2>
          <div className="products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={() => setSelectedProduct(product)}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;