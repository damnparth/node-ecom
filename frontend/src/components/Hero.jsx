import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-12 bg-white">
      
      {/* Left Content */}
      <div className="flex flex-col gap-6 sm:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Best Sellers
        </h1>
        <p className="text-gray-600 text-lg">
          Discover our most popular items, handpicked just for you.
        </p>
        <Link
          to="/collection"
          className="bg-black text-white px-6 py-3 w-max rounded-full hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mt-6">
            Latest Arrivals
          </h2>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>Minimalist Sneakers</li>
            <li>Eco-friendly Bags</li>
            <li>Streetwear Hoodies</li>
          </ul>
        </div>
      </div>

      {/* Right Image */}
      <div className="sm:w-1/2 mt-10 sm:mt-0">
        <img
          src={assets.hero_img}
          alt="Hero"
          className="w-full h-auto max-h-[400px] object-contain"
        />
      </div>
    </div>
  )
}

export default Hero
