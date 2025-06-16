import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-6 w-full mt-12">
            <div className="flex flex-col items-center text-center space-y-4">
                
                {/* Optional logo */}
                {/* If you want, uncomment this line */}
                {/* <img src={assets.logo} alt="Logo" className="w-12 h-12 mb-2" /> */}
                
                {/* Footer Links */}
                <div className="flex flex-wrap justify-center space-x-6 text-sm">
                    <a href="/about" className="hover:text-gray-300">About</a>
                    <a href="/contact" className="hover:text-gray-300">Contact</a>
                    <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
                    <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} YourAppName. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
