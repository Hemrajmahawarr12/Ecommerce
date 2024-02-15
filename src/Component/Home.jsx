import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Homeproduct from "./HomeProduct";
import { FaEye } from "react-icons/fa";
import FavoriteIcon from '@mui/icons-material/Favorite'
import Testmonial from '../images1/T1.avif';
import banner1 from '../images1/Multi-Banner-1.avif';
import banner2 from '../images1/Multi-banner-2.avif';
import banner3 from '../images1/Multi-Banner-3.webp';
import banner4 from '../images1/Multi-banner-4.avif';
import banner5 from '../images1/Multi-Banner-5.webp';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import ProductView from "./ProductView";


const Home = ({trendingProduct,Filter,handleAll,addtocart}) => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState([])
  const [featuredProduct, setFeaturdProduct] = useState([])
  const [topProduct, setTopProduct] = useState([])
  const [trendinProduct, setTrendingProduct] = useState(Homeproduct);
  const [productDetails, setProductDetails] = useState(false);
  const [detail, setDetail] = useState([]);

  const handleTopItem = (x) => {
    const filterProduct = Homeproduct.filter((filterItem) => {
      return filterItem.type === x;
    })
    setTrendingProduct(filterProduct)
  }
  const handleEye = (product) => {
    setDetail(product)
    setProductDetails(true)
  }
  const closeDetail = () => {
    setProductDetails(false)
  }
  const allTrending = () => {
    setTrendingProduct(Homeproduct)
  }
  useEffect(() => {
    productcategory()
  }, [])
  const productcategory = () => {
    const newcategory = Homeproduct.filter((x) => {
      return x.type === 'new'
    })
    setNewProduct(newcategory)
    console.log(newProduct)
    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)
    const topcategory = Homeproduct.filter((x) => {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }

  return (
    <>
      <div>
        <Box sx={{ height: "45vh", overflow: "hidden" }}>
          <Box
            sx={{
              backgroundImage: `url(https://www.cnet.com/a/img/resize/399ba0b6f8252fbc1cdad109bdd033d6e1fb4fe4/hub/2023/09/19/518d3477-d8f4-4804-87e8-85ab2ecc1fab/apple-watch-series-9-14.jpg?auto=webp&width=1200)`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "relative",
              width: "100vw",
              top: "10%",
              opacity: "0.5",
              top: 0,
              left: 0,
              height: "100%",
              zIndex: "1",

            }}
          >
          </Box>

          <Box sx={webStyle.imageText}>
            <Typography variant="h6" sx={{ color: "black" }}>
              Multipul Colors Aluminium
            </Typography>
            <Typography variant="h4" sx={{ color: "black" }}>
              Apple Watch
            </Typography>
            <Typography variant="h7" sx={{ color: "black" }}>
              30% off at your first
            </Typography>
            <br></br>
            <Button
              variant="contained"
              sx={webStyle.buttonShop}
              onClick={() => {
                navigate("/shop");
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", marginTop: "7px", background: "#d6f0fa", width: "90%", display: "flex", justifyContent: "space-between", borderRadius: "15px", padding: "10px" }}>
            <Typography variant="h5" sx={{ cursor: "pointer", marginLeft: "20px", fontWeight: "bold" }} onClick={allTrending}>
              Trending Products
            </Typography>
            <Box sx={{ display: "flex", width: "20%", justifyContent: "space-evenly", alignItems: "center", fontWeight: "600", marginRight: "15px" }}>
              <Typography variant="h7" sx={{ cursor: "pointer" }} onClick={() => handleTopItem("new")}>
                New
              </Typography>
              <Typography variant="h7" sx={{ cursor: "pointer" }} onClick={() => handleTopItem("featured")}>
                Featured
              </Typography>
              <Typography variant="h7" sx={{ cursor: "pointer" }} onClick={() => handleTopItem("top")}>
                Top
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
            {
              trendinProduct.map((item, id) => (
                <Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                      "&:hover .icon": {
                       display:"flex",flexDirection:"column",alignItems:"center",
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
                        position: "relative" // Ensure position context for absolute positioning
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.id} // Use item.id instead of a string
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
                          display: "none" // Initially hide icon box
                        }}
                      > 
                          <Box sx={{padding: "6px" }} onClick={() => {handleEye(item)}}>
                            <FaEye style={{cursor:"pointer"}} />
                          </Box>
                          <Box sx={{padding: "6px" }}>
                            <FavoriteIcon style={{ cursor:"pointer",color: "grey" }} />
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
                            onClick={()=>addtocart(item)}
                          >
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
        {/* <Box>
            <Box sx={{ padding: "10px 30px", marginTop: "-55px", textAlign: "center", width: "350px", marginLeft: "10px" }}>
              <Typography variant="h4" sx={{ backgroundColor: "#d6f0fa", borderRadius: "30px" }}>Our Testmonial</Typography>
              <Box sx={{ border: "7px solid #d6f0fa", marginTop: "70px", paddingBottom: "40px", borderRadius: "10px" }}>
                <Box sx={{ padding: "13px 20px" }}>
                  <img src={Testmonial} alt="testmonial" style={{ marginLeft: "70px" }}></img>
                </Box>
                <Box sx={{ paddingTop: "3px" }}>
                  <Typography sx={{ fontSize: "20px" }}>Stephen Robot</Typography>
                  <Typography sx={{ fontSize: "15px", color: "red" }}>Web Designer</Typography>
                  <Typography sx={{ padding: "5px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat natus beatae voluptatem praesentium placeat velit!</Typography>
                </Box>
              </Box>
              <Box sx={{ background: "#d6f0fa", marginTop: "70px", padding: "10px", borderRadius: "4px", width: "290px" }}>
                <Typography variant="h5" sx={{ marginTop: "5px" }}>NEWSLETTERS</Typography>
                <Typography sx={{ marginTop: "10px" }}>Join Our Mailling List</Typography>
                <Box>
                  <input placeholder='Email...' style={{ padding:"5px",width: "240px", marginTop: "8px", height: "35px", border: " 1px solid #ad7232", borderRadius: "6px" }}></input>
                </Box>
                <button style={{ backgroundColor: "#fed700", marginTop: "15px", height: "35px", width: "100px", borderRadius: "5px" }}>Subscribe</button>

                <Box sx={{ display: "flex", marginTop: "20px", justifyContent: "space-around", "> *": { paddingLeft: "2px" } }}>
                  <Box sx={{ border: "1px solid #bc3232", display: "flex", justifyContent: "center", alignItems: "center", height: "50px", width: "50px", borderRadius: "50%", "&:hover": { backgroundColor: "#fed700", cursor: "pointer" } }}><FaFacebookF style={{ fontSize: "20px", color: "#bc3232" }} /></Box>
                  <Box sx={{ border: "1px Solid #bc3232", display: "flex", justifyContent: "center", alignItems: "center", height: "50px", width: "50px", borderRadius: "50%", "&:hover": { backgroundColor: "#fed700", cursor: "pointer" } }}><FaXTwitter style={{ fontSize: "20px", color: "#bc3232" }} /></Box>
                  <Box sx={{ border: "1px Solid #bc3232", display: "flex", justifyContent: "center", alignItems: "center", height: "50px", width: "50px", borderRadius: "50%", "&:hover": { backgroundColor: "#fed700", cursor: "pointer" } }}><FaInstagramSquare style={{ fontSize: "20px", color: "#bc3232" }} /></Box>
                  <Box sx={{ border: "1px Solid #bc3232", display: "flex", justifyContent: "center", alignItems: "center", height: "50px", width: "50px", borderRadius: "50%", "&:hover": { backgroundColor: "#fed700", cursor: "pointer" } }}><FaYoutube style={{ fontSize: "20px", color: "#bc3232" }} /></Box>
                </Box>

              </Box>
            </Box>
          </Box> */}

        <Container sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
          <Button variant="contained" sx={{ Color: "#bc3232", "&:hover": { backgroundColor: "#fed700", color: "#bc3232", cursor: "pointer" } }}>Show More...</Button>
        </Container>
        <Box >
          <Box sx={{ marginTop: "25px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-around", margin: "0px 80px 80px 80px" }}>
              <Box>
                <Box>
                  <img src={banner1} style={{ height: "400px", width: "300px" }}></img>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <img src={banner2} style={{ height: "250px", width: "300px" }}></img>
                </Box>

              </Box>
              <Box sx={{ width: "80%", height: "300px" }}>
                <Box sx={{ display: "flex", marginLeft: "20px", justifyContent: "space-between" }}>
                  <img src={banner3} style={{ height: "300px", width: "650px" }}></img>
                  <img src={banner4} style={{ height: "300px", width: "300px" }}></img>
                </Box>
                <Box sx={{ backgroundColor: "blue", margin: "20px", height: "350px", width: "98.2%" }}>
                  <img src={banner5} style={{ width: "1046px", height: "350px" }}></img>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Box sx={{ border: "4px solid #d6f0fa", width: "400px", borderRadius: "5px" }}>
              <Box>
                <Box sx={{ backgroundColor: "#d6f0fa", textTransform: "uppercase" }}>
                  <Typography variant="h5" sx={{ padding: "10px" }}>New Product</Typography>
                </Box>
                {
                  newProduct.map((item, id) => {
                    return (
                      <>
                        <Box key={id}>
                          <Box sx={{ display: "flex", marginTop: "15px" }}>
                            <Box sx={{ width: "150px" }}>
                              <img src={item.image}></img>
                            </Box>
                            <Box>
                              <Box>
                                <Typography variant="h6">{item.Name}</Typography>
                                <Typography variant="h7" sx={{ color: "#bc3232" }}>Rs.{item.price}</Typography>
                              </Box>
                              <Box sx={{ marginTop: "20px" }}>
                                <Button sx={{ "&:hover": { backgroundColor: "#d6f0fa" }, height: "37px", boxShadow: "" }} onClick={() => {handleEye(item)}}><FaEye /></Button>
                                <Button sx={{ "&:hover": { backgroundColor: "#d6f0fa" } }}><FavoriteIcon sx={{ color: "grey" }} /></Button>
                                <Button sx={{ "&:hover": { backgroundColor: "#d6f0fa" }, height: "37px", boxShadow: "" }} onClick={()=>addtocart(item)}><FaShoppingCart /></Button>
                              </Box>
                            </Box>
                          </Box>
                          <hr />
                        </Box>
                      </>
                    )
                  })
                }
              </Box>
            </Box>
            <Box sx={{ border: "4px solid #d6f0fa", width: "400px", height: "" }}>
              <Box>
                <Box sx={{ backgroundColor: "#d6f0fa", textTransform: "uppercase" }}>
                  <Typography variant="h5" sx={{ padding: "10px" }}>Featured Product</Typography>
                </Box>
                {
                  featuredProduct.map((item, id) => {
                    return (
                      <>
                        <Box key={id}>
                          <Box sx={{ display: "flex", marginTop: "15px" }}>
                            <Box sx={{ width: "150px" }}>
                              <img src={item.image}></img>
                            </Box>
                            <Box>
                              <Box>
                                <Typography variant="h6">{item.Name}</Typography>
                                <Typography variant="h7" sx={{ color: "#bc3232" }}>Rs.{item.price}</Typography>
                              </Box>
                              <Box sx={{ marginTop: "20px" }}>
                                <Button sx={{ "&:hover": { backgroundColor: "#d6f0fa" }, height: "37px", boxShadow: "" }} onClick={() => {handleEye(item)}}><FaEye /></Button>
                                <Button sx={{ "&:hover": { backgroundColor: "#d6f0fa" } }}><FavoriteIcon sx={{ color: "grey" }} /></Button>
                                <Button sx={{ "&:hover": { backgroundColor: "#d6f0fa" }, height: "37px", boxShadow: "" }} onClick={()=>addtocart(item)}><FaShoppingCart /></Button>
                              </Box>
                            </Box>
                          </Box>
                          <hr />
                        </Box>
                      </>
                    )
                  })
                }
              </Box>
            </Box>
            <Box sx={{ border: "4px solid #d6f0fa", width: "400px" }}>
              <Box>
                <Box sx={{ backgroundColor: "#d6f0fa", textTransform: "uppercase" }}>
                  <Typography variant="h5" sx={{ padding: "10px" }}>Top Product</Typography>
                </Box>
                {
                  topProduct.map((item, id) => {
                    return (
                      <>
                        <Box key={id}>
                          <Box sx={{ display: "flex", marginTop: "20px" }}>
                            <Box sx={{ width: "150px" }}>
                              <img src={item.image}></img>
                            </Box>
                            <Box>
                              <Box>
                                <Typography variant="h6">{item.Name}</Typography>
                                <Typography variant="h7" sx={{ color: "#bc3232" }}>Rs.{item.price}</Typography>
                              </Box>
                              <Box sx={{ marginTop: "20px" }}>
                                <Button sx={{ "&:hover": { backgroundColor: "#d6f0fa" }, height: "37px", boxShadow: "" }} onClick={() => {handleEye(item)}}><FaEye /></Button>
                                <Button sx={{ "&:hover": { backgroundColor: "#d6f0fa" } }}><FavoriteIcon sx={{ color: "grey" }} /></Button>
                                <Button sx={{ "&:hover": { backgroundColor: "#d6f0fa" }, height: "37px", boxShadow: "" }} onClick={()=>addtocart(item)}><FaShoppingCart /></Button>
                              </Box>
                            </Box>
                          </Box>
                          <hr />
                        </Box>
                      </>
                    )
                  })
                }
              </Box>
            </Box>
          </Box>
        </Box>


      </div>
      { productDetails && (
        <ProductView detail = {detail} closeDetail={closeDetail} addtocart={addtocart} />
      )
      }
    </>
  );
};

export default Home;
const webStyle = {
  nameStyle: {
    color: "black",
    marginTop: "20px",
    width: "20px",
  },
  image: {
    width: "100vw",
    height: "200px",
    opacity: "0.4",
  },
  imageText: {
    position: "absolute",
    top: "30%",
    left: "5%",
    width: "20%",
    height: "20%",
    zIndex: "10",
    display: "flex",
    padding: "1px",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  buttonShop: {
    width: "130px",
    height: "40px",
    display: "flex",
    left: "29%",
    backgroundColor: "#fed700",
  },
};
