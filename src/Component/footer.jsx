import { BottomNavigation, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet } from 'react-icons/fa';
import { TbBrandElectronicArts } from "react-icons/tb";

const Footer = () => {
  return (
    
    <Box>
      <Box>
        <Box sx={{ backgroundColor: "#bc3232", marginTop: "40px", display: "flex" }}>
          <Box sx={{ height: "350px", width: "480px", display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid #fed700" }}>
            <Box sx={{ width: "250px", height: "242px" }}>
              <Box sx={{ display: "flex", margin: "3.2px" }}>
                <Box sx={{ fontSize: "26px", display: "flex", margin: "8px", alignItems: "center", color: "#fed700" }}><FaPiggyBank /></Box>
                <Box>
                  <Typography variant='h6' sx={{ color: "#fed700", display: "flex", justifyContent: "flex-start", fontWeight: "bold" }}>Great Savings</Typography>
                  <Typography sx={{ color: "white" }}>Lorem ipsum dolor sit amet.</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", margin: "3.2px" }}>
                <Box sx={{ fontSize: "26px", display: "flex", margin: "8px", alignItems: "center", color: "#fed700" }}><FaShippingFast /></Box>
                <Box>
                  <Typography variant='h6' sx={{ color: "#fed700", display: "flex", justifyContent: "flex-start", fontWeight: "bold" }}>Free Delivery</Typography>
                  <Typography sx={{ color: "white" }}>Lorem ipsum dolor sit amet.</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", margin: "3.2px" }}>
                <Box sx={{ fontSize: "26px", display: "flex", margin: "8px", alignItems: "center", color: "#fed700" }}><FaHeadphonesAlt /></Box>
                <Box>
                  <Typography variant='h6' sx={{ color: "#fed700", display: "flex", justifyContent: "flex-start", fontWeight: "bold" }}>24X7 Support</Typography>
                  <Typography sx={{ color: "white" }}>Lorem ipsum dolor sit amet.</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", margin: "3.2px" }}>
                <Box sx={{ fontSize: "26px", display: "flex", margin: "8px", alignItems: "center", color: "#fed700" }}><FaWallet /></Box>
                <Box>
                  <Typography variant='h6' sx={{ color: "#fed700", display: "flex", justifyContent: "flex-start", fontWeight: "bold" }}>Money Back</Typography>
                  <Typography sx={{ color: "white" }}>Lorem ipsum dolor sit amet.</Typography>
                </Box>
              </Box>

            </Box>
          </Box>
          <Box sx={{width:"600px",backgroundColor:"#fed700",width:"100%"}}>
          <Box className='right_box' sx={{marginTop:"20px"}}>
            <Box className='header' >
              <Box sx={{display:"flex",width:"100%",justifyContent:"center"}}>
                <Box sx={{ fontSize: "60px", color: "white" }}><TbBrandElectronicArts /></Box>
                <Box sx={{ fontSize: "40px", color: "white" }}>𝔼𝕃𝔼ℂ𝕋ℝ𝕆𝕄𝔸ℝ𝕋</Box>
              </Box>
              <p style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur Nuliscing elit. Duis faucibus ipsum id sem Putconsequat Text.</p>
            </Box>
          <Box sx={{marginTop:"30px"}}>
            <Box className='bottom' sx={{display:"flex",width:"100%",justifyContent:"space-evenly",height:"150px"}}>
              <Box className='box'>
                <h1 style={{fontSize:"20px",fontWeight:"600"}}>Your Account</h1>
                <ul>
                  <li>About us</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>Sales</li>
                </ul>
              </Box>
              <Box className='box'>
              <h1 style={{fontSize:"20px",fontWeight:"600"}}>Product</h1>
                <ul>
                  <li>Delivery</li>
                  <li>Track Oder</li>
                  <li>New product</li>
                  <li>old product</li>
                </ul>
              </Box>
              <Box className='box'>
              <h1 style={{fontSize:"20px",fontWeight:"600"}}>Contact Us</h1>
                <ul>
                  <li>4005, Silver Business PointIndia</li>
                  <li>+(012)99999999</li>
                  <li>info@gmail.com</li>
                </ul>
              </Box>
              </Box>
              <Box/>
            </Box>
          </Box>
          </Box>
        </Box>

      </Box>
    </Box>
 
  )
}

export default Footer
