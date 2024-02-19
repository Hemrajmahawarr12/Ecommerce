import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import shopleft from '../images1/shop_left.avif'
import shopTop from '../images1/shop_top.webp'
import Homeproduct from './HomeProduct'
import { FaEye } from "react-icons/fa";
import FavoriteIcon from '@mui/icons-material/Favorite'
import ProductView from './ProductView'

const Shop = ({ trendingProduct, Filter, handleAll, addtocart, handleFav, isFavorite}) => {
  const [showdetail, setShowDetail] = useState(false)
  const [detail, setDetail] = useState([]);
  const handleEye = (product) => {
    setDetail(product)
    setShowDetail(true)
  }

  const closeDetail = () => {
    setShowDetail(false)
  }
  return (
    <>
      <div>
        {
          showdetail ?
            (<>
             <ProductView detail = {detail} closeDetail={closeDetail} addtocart={addtocart} />
            </>
            ) : null}
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "360px" }}>
            <Box sx={{ width: "100%", textAlign: "left", marginLeft: "50px" }}>
              <Box><Typography variant='h4'># Shop</Typography></Box>
              <Box><Typography sx={{ color: "#8a8a8a" }}>Home.Shop</Typography></Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Box sx={{ marginLeft: "50px", width: "300px", textAlign: "left" }}>

                <Box sx={{ border: "2px solid #d6f0fa", width: "270px", marginTop: "10px", height: "330px", borderRadius: "5px" }}>
                  <Box ><Typography variant='h5' sx={{ backgroundColor: "#d6f0fa", textAlign: "center", padding: "10px", fontWeight: "700", cursor: "pointer" }}
                    onClick={() => handleAll()}
                  >All Categories</Typography></Box>
                  <Box>
                    <Box sx={{ display: "flex", textAlign: "left", marginLeft: "30px", marginTop: "10px" }}>
                      <Box>
                        <Typography variant='h6' sx={{ ":hover": { color: "black" }, letterSpacing: "1px", fontWeight: "550", cursor: "pointer", margin: "3px", textTransform: "uppercase", color: "#8a8a8a" }}
                          onClick={() => Filter("tv")}
                        ># tv</Typography>
                        <Typography variant='h6' sx={{ ":hover": { color: "black" }, letterSpacing: "1px", fontWeight: "550", cursor: "pointer", margin: "3px", textTransform: "uppercase", color: "#8a8a8a" }}
                          onClick={() => Filter("laptop")}
                        ># laptop</Typography>
                        <Typography variant='h6' sx={{ ":hover": { color: "black" }, letterSpacing: "1px", fontWeight: "550", cursor: "pointer", margin: "3px", textTransform: "uppercase", color: "#8a8a8a" }}
                          onClick={() => Filter("watch")}
                        ># watch</Typography>
                        <Typography variant='h6' sx={{ ":hover": { color: "black" }, letterSpacing: "1px", fontWeight: "550", cursor: "pointer", margin: "3px", textTransform: "uppercase", color: "#8a8a8a" }}
                          onClick={() => Filter("speaker")}
                        ># Speaker</Typography>
                        <Typography variant='h6' sx={{ ":hover": { color: "black" }, letterSpacing: "1px", fontWeight: "550", cursor: "pointer", margin: "3px", textTransform: "uppercase", color: "#8a8a8a" }}
                          onClick={() => Filter("electronics")}
                        ># electronics</Typography>
                        <Typography variant='h6' sx={{ ":hover": { color: "black" }, letterSpacing: "1px", fontWeight: "550", cursor: "pointer", margin: "3px", textTransform: "uppercase", color: "#8a8a8a" }}
                          onClick={() => Filter("headphone")}
                        ># headphones</Typography>
                        <Typography variant='h6' sx={{ ":hover": { color: "black" }, letterSpacing: "1px", fontWeight: "550", cursor: "pointer", margin: "3px", textTransform: "uppercase", color: "#8a8a8a" }}
                          onClick={() => Filter("mobile")}
                        ># mobiles</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Box sx={{ marginLeft: "50px", marginTop: "18px", width: "300px" }}>
                  <img src={shopleft}></img>
                </Box>
              </Box>
            </Box>

          </Box>
          <Box>
            <Box sx={{ marginTop: "77px", height: "250px" }}>
              <Box>
                <img src={shopTop} style={{ height: "280px", width: "1130px" }}></img>
              </Box>

            </Box>
            <Box>
              <Box sx={{ marginTop: "50px" }}>
                <Box sx={{ display: "flex", width: "1100px", borderRadius: "10px", border: "2px solid #bc3232", flexWrap: "wrap", justifyContent: "center" }}>
                  {
                    trendingProduct.map((item, id) => (
                      <Box>

                        <Box key={id}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                            "&:hover .icon": {
                              display: "flex", flexDirection: "column", alignItems: "center",
                            }
                          }}
                        >
                          <Box
                            sx={{
                              border: "3px solid #d6f0fa",
                              borderRadius: "10px",
                              height: "350px",
                              width: "250px",
                              margin: "7px",
                              position: "relative" 
                            }}
                          >
                            <img
                              src={item.image}
                              alt={item.id} 
                              style={{ height: "250px", background: "none" }}
                            />
                            <Box
                              className="icon"
                              sx={{
                                fontSize: "22px",
                                width: "40px",
                                position: "absolute",
                                top: "0",
                                right: "0",
                                display: "none" 
                              }}
                            >
                              <Box sx={{ padding: "6px" }} onClick={() => handleEye(item)}>
                                <FaEye style={{ cursor: "pointer" }} />
                              </Box>
                              <Box sx={{ padding: "6px" }}>
                              <FavoriteIcon style={{ cursor: "pointer", color: isFavorite(item) ? 'red' : 'grey' }}  onClick={ ()=> handleFav(item)} />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                backgroundColor: "#d6f0fa",
                                height: "95px"
                              }}
                            >
                              <Box sx={{ marginRight: "100px" }}>
                                <Typography variant="h5">{item.Name}</Typography>
                                <Typography>Rs.{item.price}</Typography>
                                <Button
                                  variant="outlined"
                                  sx={{
                                    color: "#fed700",
                                    backgroundColor: "#bc3232",
                                    border: "2px solid #fed700",
                                    fontWeight: "550",
                                    ":hover": { backgroundColor: "#bc3232", color: "#fed700" },
                                    height: "35px",
                                    width: "140px"
                                  }}
                                  onClick={() => addtocart(item)}>
                                  Add To Cart
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    ))
                  }
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Shop
