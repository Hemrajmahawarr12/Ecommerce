import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Homeproduct from "./HomeProduct";
import { FaEye } from "react-icons/fa";
import FavoriteIcon from '@mui/icons-material/Favorite'

const Home = () => {
  const navigate = useNavigate();
  const [trendinProduct, setTrendingProduct] = useState(Homeproduct);
  console.log(trendinProduct);
  return (
    <>
      <div>
        <Box sx={{ height: "45vh",overflow:"hidden"}}>
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
        <Box sx={{display:"flex",marginTop:"7px",background:"#d6f0fa",width:"70%",display:"flex",justifyContent:"space-between",marginLeft:"100px",borderRadius:"15px",padding:"10px"}}>
          <Typography variant="h5" sx={{marginLeft:"20px",fontWeight:"bold"}}>
           Trending Project
          </Typography>
          <Box sx={{display:"flex",width:"30%",justifyContent:"space-evenly",alignItems:"center",fontWeight:"600"}}>
          <Typography variant="h7">
           New
          </Typography><Typography variant="h7">
           Featured
          </Typography><Typography variant="h7">
           Top Selling
          </Typography>
          </Box>
        </Box>

        <Box sx={{border:"2px solid black",width:"70%",marginLeft:"100px",display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"20px"}}>
          {
            trendinProduct.map((item,id)=>(
              <Box>
              
              <Box sx={{display:"flex",justifyContent:"center"}}>
                
                <Box sx={{border:"5px solid #d6f0fa",borderRadius:"10px",height:"350px",width:"250px"}}>
                  <img src={item.image} alt="item.id" style={{height:"250px",background:"none"}}></img>
                  <Box sx={{fontSize:"22px",cursor:"pointer",width:"10px",paddingTop:"10px",marginLeft:"75%",marginTop:"-108%",transition:0.5}}>
                    <Container sx={{cursor:"pointer",padding:"6px"}}><FaEye style={{backgroundColor:"inherit"}}/></Container>
                    <Container sx={{cursor:"pointer",padding:"6px"}}><FavoriteIcon /></Container>
                  </Box>  
                </Box>
                </Box>
                </Box>
              ))
          }

        </Box>
      </div>
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
