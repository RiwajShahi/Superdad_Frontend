import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { state, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const handleOrder = () => {
    const order = {
      ...form,
      items: state.items,
      total,
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));
    clearCart();
    navigate("/success");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="space-y-4">
        <input
          placeholder="Name"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Phone"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          placeholder="Address"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <div>Total: Rs {total}</div>

        <button onClick={handleOrder} className="bg-black text-white px-6 py-3">
          Place Order (Cash on Delivery)
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;