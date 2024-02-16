import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import About from './About'
import Contect from './Contect'
import Login from './Login'
import SignUpdata from './signUpdata'
import AuthGuard from './AuthGuard'

const Routs = ({ trendingProduct, Filter, handleAll, addtocart, cart }) => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={
            <Login />
        }>
        </Route>
        {/* <Home trendingProduct={trendingProduct} Filter ={Filter} handleAll={handleAll} addtocart={addtocart}/> */}

        <Route path='/' element={<AuthGuard >
          <Home trendingProduct={trendingProduct} Filter={Filter} handleAll={handleAll} addtocart={addtocart} />
        </AuthGuard>}></Route>
        <Route path='/shop' element={
          <AuthGuard>
            <Shop trendingProduct={trendingProduct} Filter={Filter} handleAll={handleAll} addtocart={addtocart} />
          </AuthGuard>
        }></Route>
        <Route path='/cart' element={
          <AuthGuard>
            <Cart />
          </AuthGuard>
        }></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contect' element={<Contect />}></Route>
      </Routes>
    </div>
  )
}

export default Routs
