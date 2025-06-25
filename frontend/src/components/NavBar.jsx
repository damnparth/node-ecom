import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from "../assets/assets";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = sessionStorage.getItem("jwt");
      setLoggedIn(!!token);
    };

    checkAuth();

    window.addEventListener("authChanged", checkAuth);
    return () => {
      window.removeEventListener("authChanged", checkAuth);
    };
  }, []);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      {["/", "/collection", "/about", "/contact"].map((path, idx) => (
        <NavLink key={idx} to={path} className="flex flex-col items-center gap-1 capitalize">
          <p>{path === "/" ? "home" : path.replace("/", "")}</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      ))}

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt="Search" className='w-5 cursor-pointer' />

        {loggedIn ? (
          <div className="relative group">
            <img src={assets.profile_icon} alt="Profile" className='w-5 cursor-pointer' />
            <div className="group-hover:block hidden absolute right-0 pt-4 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 rounded shadow">
                <Link to='/profile'><p className='cursor-pointer hover:text-black'>My Profile</p></Link>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <Link to='/logout'><p className='cursor-pointer hover:text-black'>Logout</p></Link>
              </div>
            </div>
          </div>
        ) : (
          <NavLink to='/login' className="flex flex-col items-center gap-1">
            <p>Login</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        )}
      </div>

      {loggedIn && (
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt="Cart" className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-xs'>
            10
          </p>
        </Link>
      )}

      <img
        onClick={() => setVisible(!visible)}
        src={assets.menu_icon}
        alt="Menu"
        className='w-5 cursor-pointer sm:hidden'
      />
    </div>
  );
};

export default NavBar;

