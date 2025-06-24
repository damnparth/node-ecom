import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";

function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const user = sessionStorage.getItem("user");

    if (token && user) {
      const parsedUser = JSON.parse(user);
      setUsername(parsedUser.username); 
    }
  }, []);

  return (
    <>
      {username ? (
        <h1 className="text-2xl font-semibold">Hello, {username}</h1>
      ) : (
        <h1 className="text-2xl font-semibold">Home</h1>
      )}

      <Hero />
      <LatestCollection />
    </>
  );
}

export default Home;
