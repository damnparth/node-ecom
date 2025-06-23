import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from "../assets/assets";

import Login from '../pages/Login';

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    //show cart and profile only if the user is logged in

    useEffect(() => {
        const token = sessionStorage.getItem("jwt"); 
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <NavLink to='/' className="flex flex-col items-center gap-1">
                <p>home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className="flex flex-col items-center gap-1">
                <p>collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className="flex flex-col items-center gap-1">
                <p>about</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className="flex flex-col items-center gap-1">
                <p>contact us</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' />

                {loggedIn ? (
                    <div className="relative group">
                        <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
                        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 " >
                                <p className='cursor-pointer hover:text-black'>my profile</p>
                                <p className='cursor-pointer hover:text-black'>orders</p>
                                <Link to='/logout'>
                                <p className='cursor-pointer hover:text-black'>logout</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                ) : (
                    <NavLink to='/login' className="flex flex-col items-center gap-1">
                        <p>login</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                )}
            </div>
            {
                loggedIn &&
                (
                    
            <Link to={'/cart'} className='relative'>
                <img src={assets.cart_icon} alt="" className='w-5 min-w-5' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square text-[-8px]'>10</p>
            </Link>

                )
            }


            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden' />
        </div>
    );
};

export default NavBar;
