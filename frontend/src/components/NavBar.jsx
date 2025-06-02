import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <NavLink to='/' classname="flex flex-col items-center gap-1">
            <p>home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
         <NavLink to='/collection' classname="flex flex-col items-center gap-1">
            <p>collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
         <NavLink to='/about' classname="flex flex-col items-center gap-1">
            <p>about</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
         <NavLink to='/contact' classname="flex flex-col items-center gap-1">
            <p>contact us</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        
        
        
        

    </div>
  )
}

export default NavBar