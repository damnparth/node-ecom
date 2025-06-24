import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if(!username || !password)
        {
            return alert("please enter something")
        }
        else{
            const loginData={
                username,
                password
            }
            axios
            .post('http://localhost:4000/apis/login',loginData)
            .then((res)=>
            {
                const {message,token,user} = res.data;
                if(message==="login successful")
                {
                    sessionStorage.setItem("jwt",token)
                    sessionStorage.setItem("user",JSON.stringify(res.data.user))
                    window.dispatchEvent(new Event("authChanged"));
                    //console.log(token+user)
                }
                else{
                    alert(message)

                }
                
                
                
                navigate("/")
            })
            .catch(error=>console.log(error))
        }
       
       
        // console.log("Logging in:", username, password);

        // // set token if fake login
        // localStorage.setItem('token', 'fake-jwt-token');
        // localStorage.setItem('user', JSON.stringify({ username }));



        // Redirect it 
    
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-gray-600"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-gray-600"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-black text-white py-3 rounded hover:bg-gray-800 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-4 text-sm">
                    Not registered yet?{' '}
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
