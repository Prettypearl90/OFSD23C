import React, { useState, useReducer, createContext, useContext } from 'react';

// Reducer function for useReducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload);

    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );

    default:
      return state;
  }
};

// Create a context for the shopping cart
const CartContext = createContext();

// Cart Provider using useState and useReducer
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Combine both state and dispatch for the context
  const contextValue = {
    cart,
    dispatchCart: dispatch,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

// Cart Component
const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Product Component
const Product = ({ product }) => {
  const { dispatchCart } = useContext(CartContext);

  const addToCart = () => {
    dispatchCart({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

// Main App Component
const App = () => {
  const initialProducts = [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 19.99 },
    { id: 3, name: 'Product C', price: 14.99 },
  ];

  return (
    <CartProvider>
      <h1>Real-time Shopping Cart</h1>
      <Cart />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {initialProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </CartProvider>
  );
};

export default App;
