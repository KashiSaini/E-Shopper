import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Contact from './Contact'
import Cart from './Cart'
import Checkout from './Checkout'
import AdminHome from './Admin/AdminHome'
import Login from './Login'
import AdminAddMaincategory from './Admin/AdminAddMaincategory'
import AdminMaincategory from './Admin/AdminMaincategory'
import Signup from './Signup'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/checkout' element ={<Checkout/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/signup' element ={<Signup/>}/>


      <Route path='/admin-home' element={<AdminHome/>}/>
      <Route path='/admin-maincategory' element={<AdminMaincategory/>}/>
      <Route path='/admin-add-maincategory' element={<AdminAddMaincategory/>}/>
      
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}
