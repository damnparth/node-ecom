import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(null); // null until data is fetched
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");

    axios.get('http://localhost:4000/cart', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      setCart(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching cart:", err);
      setError("Could not load cart");
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>{error}</p>;
  if (!cart || cart.items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cart.items.map((item, index) => (
          <li key={index} className="border p-4 rounded">
            <p><strong>Product ID:</strong> {item.productId}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <button className='cursor-pointer w-2'>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
