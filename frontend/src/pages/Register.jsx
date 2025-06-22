import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("")
    const[fullname,setFullname]=useState("")

    const navigate = useNavigate();

    // useEffect(()=>
    // {

    // })





    const handleSubmit=(e)=>
    {
     e.preventDefault();
    //  console.log(confirm)
    //  console.log(password)
      if(confirm!==password)
      {
        alert("not equal")
      }
      else{
        const formData={
        username,
        password,
        fullname
      }
      axios
      .post('http://localhost:4000/apis',formData)
      .then((res)=>{
        console.log(res.data)
        let isSuccess=true       

        if(res.data.message==="username already exists")
        {
          isSuccess=false
          
          alert(res.data.message)
        }

        if(isSuccess)
        {    
        alert("registered successfully")
        navigate("/login")
        }

      }
        
      
       

      )
      .catch(error=>console.log(error))

     
      // console.log(formData)
      
      }
    

    }

  return (
   <>
  <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='enter username' 
          className='border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-gray-600' 
          onChange={(e)=>setUsername(e.target.value)}
        />
        {/* {username} */}
        <input 
          type="text" 
          placeholder='enter full name' 
          className='border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-gray-600' 
          onChange={(e)=>setFullname(e.target.value)}
        />
        {/* {fullname} */}
        <input 
          type="password" 
          placeholder='enter password' 
          className='border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-gray-600' 
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        {/* {password} */}
        <input 
          type="password" 
          placeholder='confirm password' 
          className='border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-gray-600' 
          onChange={(e)=>setConfirm(e.target.value)} 
        />
        {/* {confirm} */}
        <button 
          type='submit' 
          className='bg-black text-white py-3 rounded hover:bg-gray-800 transition duration-200'
        >
          submit
        </button>
      </form>

    </div>
  </div>
</>

    
  )
}

export default Register;