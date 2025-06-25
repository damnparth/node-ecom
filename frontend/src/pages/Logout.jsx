import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    window.dispatchEvent(new Event("authChanged")); 
    navigate("/");
  };

  return (
    <>
      <div>Logout?</div>
      <button 
        className='cursor-pointer bg-black text-white p-2 rounded mt-5' 
        onClick={handleLogout} 
      >
        logout
      </button>
    </>
  );
};

export default Logout;
