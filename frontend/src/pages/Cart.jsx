import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(null); // null until data is fetched
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[addQuantity,setAddQuantity]=useState();

 const fetchCart=() => {
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
  }
 useEffect(()=>
{
  fetchCart();

},[]);
  const handleIncrease= async (productId)=>
  {
    const token=sessionStorage.getItem("jwt")
    try{
      await axios.post("http://localhost:4000/cart/increase",{
        productId
      }, {
        headers:
        {
          Authorization: `Bearer ${token}`
        }
    
    })
    .then((res)=>{
      const message = res.data.message;
      alert(message)
    })
    fetchCart();

    }
    catch(error)
    {
      console.log(error)
    }
  }

  const handleDecrease= async (productId)=>
  {
    const token=sessionStorage.getItem("jwt")
    try{
      await axios.post("http://localhost:4000/cart/decrease",{
        productId
      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      .then((res)=>{
        const message=res.data.message;
        alert(message)
      })
      .catch((error)=>{
        const errorMessage=error.data.error;
        alert(errorMessage)
        
      })
       fetchCart();

    }

   
    
    catch(error)
    {
      console.log(error)
    }

  }

   const handleDelete= async(productId)=>
    {
      const token=sessionStorage.getItem("jwt")
      try{

        await axios.delete("http://localhost:4000/cart", {
       data: { productId },
      headers: {
       Authorization: `Bearer ${token}`
         }
        })
        .then((res)=>
        {
          const message=res.data.message;
          alert(message)
        })
        .catch((error)=>
        {
         const errorMessage=error.response.data.message;
         console.log(errorMessage)
         alert(errorMessage)
          
        })
       

        
          
        

        fetchCart();

      }
      catch(error)
      {
        console.log(error)

      }

    }
   



 if (loading) return <p>Loading cart...</p>;
if (error) return <p>{error}</p>;
if (!cart || !Array.isArray(cart.items) || cart.items.length === 0) {
  return <p>Your cart is empty.</p>;
}


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cart.items.map((item, index) => (
          <li key={index} className="border p-4 rounded">
            <p><strong>Product ID:</strong> {item.productId}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <button className='cursor-pointer w-2 border-black py-1' 
            onClick={()=>{handleIncrease(item.productId)}}
            >+</button>
            
            <button className='cursor-pointer w-2 m-2 border-black'
            onClick={()=>handleDecrease(item.productId)}>-</button>
            <button className='cursor-pointer mx-20'
            onClick={()=>handleDelete(item.productId)}
            >delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
