// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <div className="product-actions">
        <button onClick={onViewDetails}>View Details</button>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;