import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
            <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg text-center">
                {/* Contact Image */}
                <img 
                    src={assets.contact_img} 
                    alt="Contact" 
                    className="w-32 h-32 mx-auto mb-6 object-cover rounded-full"
                />
                
                {/* Contact Title */}
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                
                {/* Contact Message */}
                <p className="text-gray-700 mb-4">
                    We'd love to hear from you! You can reach us through the following methods:
                </p>
                
                {/* Contact Details */}
                <div className="text-gray-800 text-left mt-6 space-y-2">
                    <p><strong>Email:</strong> support@yourapp.com</p>
                    <p><strong>Phone:</strong> +91-9876543210</p>
                    <p><strong>Address:</strong> 123 Main Street, Mumbai, India</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
