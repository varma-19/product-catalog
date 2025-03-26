// src/components/ProductDetail.js
import React from 'react';

const ProductDetail = ({ product, onAddToCart, onBack }) => {
  return (
    <div className="product-detail">
      <button onClick={onBack} className="back-button">← Back to Products</button>
      <div className="detail-content">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>
          <button onClick={() => onAddToCart(product)} className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;