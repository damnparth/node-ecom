import React from 'react'
import { useState } from 'react';
import axios from 'axios'



const Register = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("")
    const[fullname,setFullname]=useState("")





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
      // console.log(formData)
      
      }
    

    }

  return (
    <>

  
   
    <div>Register</div>
    <form className='inline-block bg-gray-100 p-4 ml-[500px] mt-[100px] mb-[250px] ' onSubmit={handleSubmit}>
      <input type="text" placeholder='enter username' className='block'onChange={(e)=>setUsername(e.target.value)}/>
      {/* {username} */}
      <input type="text" placeholder='enter full name' className='block' onChange={(e)=>setFullname(e.target.value)}/>
      {/* {fullname} */}
      <input type="password" placeholder='enter password' className='block' onChange={(e)=>{setPassword(e.target.value)}}/>
      {/* {password} */}
      <input type="password" placeholder='confirm password' className='block' onChange={(e)=>setConfirm(e.target.value)} />
      {/* {confirm} */}
      <button type='submit' className='ml-[50px] cursor-pointer'>submit</button>
    


    </form>

  


     </>
    
  )
}

export default Register;