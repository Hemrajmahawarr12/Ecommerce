import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Component/nav';
import Routs from './Component/routs';
import './Component/nav.css';
import Footer from './Component/footer';
import { useState } from 'react';
import Homeproduct from './Component/HomeProduct';


function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [search,setSearch] = useState('')
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  console.log(trendingProduct);
  const [cart,setCart] = useState([]);

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
    
      console.log("hemraj");
      const searchFilter = Homeproduct.filter((x)=>{
        return x.cat === search
      })
      setTrendingProduct(searchFilter)
      setSearch('')
    }
  }
   
  

  const addtocart = (product)=>{
    const exist = cart.find((x)=>{
      return x.id === product.id
    }) 
    if(exist){
      alert('This product is already added')
    }else{

      setCart([...cart,product])
      alert('added to cart')
    }
  }
  console.log(cart);
  

  return (
      <div className="App">
        {!isLoginPage && <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>}
          <Routs trendingProduct={trendingProduct} Filter={Filter} handleAll={handleAll} addtocart={addtocart}/>
        {!isLoginPage && <Footer />}
      </div>
  )
}

export default App;