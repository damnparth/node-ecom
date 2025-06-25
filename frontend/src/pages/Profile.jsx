import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      {user ? (
        <>
          <p className="mb-2"><strong>Full Name:</strong> {user.fullname}</p>
          <p className="mb-2"><strong>Username:</strong> {user.username}</p>
          
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
