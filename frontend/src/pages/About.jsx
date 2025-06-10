import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
            <div className="max-w-2xl bg-white p-8 rounded-lg shadow-lg text-center">
               <img 
                                  src={assets.about_img} 
                                  alt="about" 
                                  className="w-32 h-32 mx-auto mb-6 object-cover rounded-full"
                              />
                              
                <h1 className="text-3xl font-bold mb-4">About The Website</h1>
                <p className="text-gray-700 mb-6">
          this is an e commerce website focused on delivering seamless performance to shop, search and buy.
                </p>
                <p className="text-gray-700 mb-6">
                  idek what to write here im fried rn

                </p>
                <p className="text-gray-700">
                 stay tuned for latest brand deals in the most affordable prices!
                </p>
            </div>
        </div>
    );
};

export default About;
