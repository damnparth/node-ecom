import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout=()=>
    {
        sessionStorage.clear();
        navigate("/")
        window.dispatchEvent(new Event("authChanged"));

    }
  return (

    <>

    <div>Logout?</div>
    <button className='cursor-pointer bg-black text-white p-2 rounded mt-5 ' onClick={handleLogout()}>
        logout
    </button>


        </>

  )
}

export default Logout