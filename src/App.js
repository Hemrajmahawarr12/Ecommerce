import './App.css';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Nav from './Component/nav';
import Routs from './Component/routs';
import './Component/nav.css';
import Footer from './Component/footer';
import { useState } from 'react';
import Homeproduct from './Component/HomeProduct';
import { useDispatch, useSelector } from 'react-redux';
import { cart } from './Component/FavSlice';


function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [search,setSearch] = useState('')
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  const cartData = useSelector((state) => state.fav.cart);
  console.log("cartData", cartData)

  const Filter=(x)=>{
    const filterShop = Homeproduct.filter((home)=>{
      return home.cat === x 
    })
    setTrendingProduct(filterShop)
  }
  const handleAll=()=>{
   setTrendingProduct(Homeproduct)
  }

  const searchproduct = ()=> {
  const searchdata=(search || []).length === 0;
  if(searchdata){
    alert("please enter for search")
    setTrendingProduct(Homeproduct)
  }else{
      const searchFilter = Homeproduct.filter((x)=>{
        return x.cat === search
        
      })
      navigate('/shop')
      setTrendingProduct(searchFilter)
      setSearch('')
    }
  }
 const addtocart = (product)=>{
    let exist = 0 ;
      if(cartData?.length > 0){
        exist = cartData.find((x)=>{
           return x.id === product.id
         });
       }
     if(exist){
         alert('This product is already added')
       }else{
         const updatedData = [...cartData , {...product, qty:1}];
         console.log("updatedData", updatedData)
         dispatch(cart(updatedData));
         alert('This product is Added to cart');
       
    }
    
  }  
  return (
      <div className="App">
        {!isLoginPage && <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>}
          <Routs trendingProduct={trendingProduct} Filter={Filter} handleAll={handleAll} addtocart={addtocart}/>
        {!isLoginPage && <Footer />}
      </div>
  )
}

export default App;