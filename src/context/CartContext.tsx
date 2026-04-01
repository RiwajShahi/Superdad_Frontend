import React, { createContext, useContext, useReducer, useEffect } from "react";

// 1. Create Context
const CartContext = createContext();

// 2. Initial State (with localStorage support)
const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

// 3. Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find(i => i.id === action.payload.id);

      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
};

// 4. Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

const addToCart = (product) => {
  console.log("ADDING:", product);
  dispatch({ type: "ADD_TO_CART", payload: product });
};

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const total = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 5. Custom Hook
export const useCart = () => useContext(CartContext);