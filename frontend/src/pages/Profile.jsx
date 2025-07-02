import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        console.log(user)
      } catch (error) {
        console.error('Failed to parse user:', error);
      }
    }
  }, []);

  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  const submitAddress = () => {
    const token = sessionStorage.getItem("jwt");
    axios.post("http://localhost:4000/apis/address", {
      add: address
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=>
    {
      console.log(res)
    })
    .catch((err)=>
    {
      console.log(err)
    })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      {user ? (
        <>
          <p className="mb-2"><strong>Full Name:</strong> {user.fullname}</p>
          <p className="mb-2"><strong>Username:</strong> {user.username}</p>
          {user.address ? (
            <>
              <label htmlFor="address">address</label>
              <br />
              <textarea name="" id="" placeholder=' enter address' className='border-black w-100 h-30' value={user.address} readOnly></textarea>
            </>
          ) : (
            <>
              <textarea name="" id="" placeholder=' enter address' className='border-black w-100 h-30' onChange={(e) => { handleAddress(e) }}></textarea> <br />
              <button className='cursor-pointer bg-black text-white rounded w-15 h-7' onClick={submitAddress}>submit</button>
            </>
          )}
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
