import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Collection from './Collection'
import About from './About'
import Contect from './Contect'
import Login from './Login'

const Routs = () => {
  return (
    <div>
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/shop' element={<Shop />}></Route>
         <Route path='/collection' element={<Collection/>}></Route>
         <Route path='/about' element={<About />}></Route>
         <Route path='/contect' element={<Contect />}></Route>
       </Routes>
   </div>
  )
}

export default Routs
