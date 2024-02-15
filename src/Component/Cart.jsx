import { Box, Button, Typography } from '@mui/material'
import { Field } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { cart } from './FavSlice';
import { useNavigate } from 'react-router-dom';
import { number } from 'prop-types';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.fav.cart);

  const handleShop=()=>{
    navigate("/shop")
    
  }

  const incqty = (product) => {
    const updatedQty = { ...product, qty: product.qty + 1 };
    const newArray = cartData.map((item) => {
      if (item.id === updatedQty.id) {
        return updatedQty
      } else {
        return item
      }
    })
    dispatch(cart(newArray));
  }

  const decQty = (product) => {
    if(product.qty > 1){
    const updatedQty = { ...product, qty: product.qty - 1 };
    const newArray = cartData.map((item) => {
      if (item.id === updatedQty.id) {
        return updatedQty 
      } else {
        return item
      }
    })
    dispatch(cart(newArray));
  }else{
    var updateRemove = cartData.filter((item) => {
      return item.id !== product.id
    })
    dispatch(cart(updateRemove))
  }}

  const handleDelete = (product) => {
    const exist = cartData.find((x) => {
      return x.id === product.id
    })
    if (exist.qty > 0) {
      var updateRemove = cartData.filter((item) => {
        return item.id !== product.id
      })
      console.log(updateRemove);
      dispatch(cart(updateRemove))
    }
  }
  
  

  const calculatetotalAmount = (price, qty) => {
    const numberWithoutCommas = price.replace(/,/g, ''); 
    const integerValue = parseInt(numberWithoutCommas); 
    return integerValue * qty;
  }


  return (
    <Box>
      <Box>
        <Box>
          <Box sx={{ display: "flex", height: "60px", alignItems: "center" }}><Typography variant='h4' sx={{ marginLeft: "25px", fontWeight: "550" }}>#CART</Typography></Box>
          <Box>
            {
               cartData?.length == 0 ?
                (
                  <>
                    <Box className='empty_cart' sx={{ marginBottom: "85px" }}>
                      <Typography variant='h5'>Your Shopping cart is empty</Typography>
                      <Button sx={{ backgroundColor: "#fed700", marginTop: "20px", ":hover": { backgroundColor: "#fed700", color: "#bc3232" } }} onClick={handleShop}>Shop Now</Button>
                    </Box>
                  </>
                ) : (
                  <div>
                    {
                      cartData && cartData.map((item, id) => {
                        return (
                          <>
                            <Box key={id} sx={{ display: "flex", height: "250px", justifyContent: "center", alignItems: "center" }}>
                              <Box sx={{ display: "flex", width: "1150px", justifyContent: "space-around" }}>
                                <Box>
                                  <img src={item.image} style={{ height: "200px", border: "2px solid #d6f0fa" }}></img>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                  <Box>
                                    <Typography variant='h6'>{item.cat}</Typography>
                                    <Typography variant='h4'>{item.Name}</Typography>
                                    <Typography variant='h5'>Price: {item.price}</Typography>
                                    <Typography variant='h5'>Total: {calculatetotalAmount(item.price, item.qty)}</Typography>
                                  </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                  <Box>
                                    <Box className='quantity' sx={{ display: "flex", backgroundColor: "#fed700" }}>
                                      <Button onClick={() => incqty(item)}
                                      >+</Button>
                                      <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <input value={item.qty} style={{ width: "50px", height: "25px" }}></input>
                                      </Box>
                                      <Button
                                      onClick={() => decQty (item)}
                                      >-</Button>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box sx={{ fontSize: "30px", display: "flex", alignItems: "center", cursor: "pointer" }}><MdDelete onClick={() => handleDelete(item)} /></Box>
                              </Box>
                            </Box>
                            <hr />
                          </>
                        )
                      })
                    }
                  </div>
                )
            }

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Cart
