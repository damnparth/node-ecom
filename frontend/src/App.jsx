import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Register from './pages/Register'
import Footer from './components/Footer'
import Logout from './pages/Logout'
import Cart from './pages/Cart'

function App() {
  

  return (
   <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px=[9vw]'>

    <NavBar></NavBar>
   
    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/collection' element={<Collection></Collection>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/product/:productid' element={<Product></Product>}></Route>
      <Route path='/place-order' element={<PlaceOrder></PlaceOrder>}></Route>
      <Route path='/orders' element={<Orders></Orders>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/logout' element={<Logout></Logout>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>

     


    </Routes>
    <Footer></Footer>
    

   </div>
  )
}

export default App
