import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import About from './About'
import Contect from './Contect'
import Login from './Login'

const Routs = ({trendingProduct,Filter,handleAll,addtocart}) => {
  console.log("Filter",Filter);
  return (
    <div>
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/shop' element={<Shop trendingProduct={trendingProduct} Filter ={Filter} handleAll={handleAll} addtocart={addtocart}/>}></Route>
         <Route path='/cart' element={<Cart addtocart={addtocart}/>}></Route>
         <Route path='/about' element={<About />}></Route>
         <Route path='/contect' element={<Contect />}></Route>
       </Routes>
   </div>
  )
}

export default Routs
