// src/components/ShoppingCart.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`shopping-cart ${isOpen ? 'open' : ''}`}>
      <button 
        className="cart-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        🛒 {cartItems.length} item(s) - ${total.toFixed(2)}
      </button>
      
      {isOpen && (
        <div className="cart-dropdown">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} width="50" />
                    <div>
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="remove-item"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <strong>Total: ${total.toFixed(2)}</strong>
              </div>
              <div className="cart-actions">
                <button onClick={clearCart} className="clear-cart">
                  Clear Cart
                </button>
                <button className="checkout">Checkout</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;