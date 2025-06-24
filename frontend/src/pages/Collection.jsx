import React from 'react'
import { products } from '../assets/assets'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Collection = () => {

  const[isLoggedIn,setIsLoggedIn]=useState()
  const token = sessionStorage.getItem("jwt")
  useEffect(()=>
  {
    if(token)
  {
    setIsLoggedIn(true)
    console.log(isLoggedIn)
  }
  else{
    setIsLoggedIn(false)
    console.log(isLoggedIn)
  }
  },[])


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-9">All Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
        {products.map(product => (
          <div key={product._id} className="border rounded-lg shadow hover:shadow-md transition duration-300 p-4">
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-black font-bold mt-2">${product.price}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
            <button className='cursor-pointer bg-black text-white p-1.5 rounded mt-2 px-2'>
              {isLoggedIn?(
                <Link to='/cart'>
              
              add to cart
              </Link>

              ):(
                 <Link to='/login'>
                 
              
              login to buy
              </Link>

              )}
              
              
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
