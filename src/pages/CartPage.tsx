import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { state, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {state.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {state.items.map(item => (
            <div key={item.id} className="flex justify-between border p-4 rounded">
              <div>
                <h2>{item.name}</h2>
                <p>Rs {item.price}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>

              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <div className="text-xl font-semibold">Total: Rs {total}</div>

          <button
            onClick={() => navigate("/checkout")}
            className="bg-black text-white px-6 py-3 rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;