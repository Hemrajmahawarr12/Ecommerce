import { Button } from '@mui/base'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";


const ProductView = ({detail, closeDetail, addtocart}) => {
  return (
    <Box sx={{ width: "900px", height: "500px", position: "fixed", top: 100, left: 280, backgroundColor: "#fff", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)", border: "1px solid #f6f6f6", borderRadius: "5px", padding: "10px 20px", zIndex: 1 }}>
    <Button style={{ float: "right", fontSize: "30px", color: "#bc3232" }} onClick={closeDetail}><IoCloseSharp /></Button>
    <Box>
      <Box sx={{ display: "flex", marginTop: "60px", marginLeft: "25px" }}>
        <Box sx={{ height: "350px", width: "350px", border: "10px solid #d6f0fa", borderRadius: "5px" }}>
          <img src={detail.image} ></img>
        </Box>
        <Box sx={{ height: "300px", width: "300px", marginLeft: "70px", textAlign: "left" }}>
          <Typography variant='h6' sx={{ textTransform: "uppercase", textAlign: "left" }}>#{detail.cat}</Typography>
          <Box sx={{ marginTop: "40px" }}>
            <Typography variant='h4'>{detail.Name}</Typography>
            <Box sx={{ marginTop: "20px" }}>
              <Typography >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eaque laudantium voluptatem repudiandae odio animi quos hgtrc huwer.</Typography>
              <Typography variant='h5' sx={{ marginTop: "8px" }}>Rs.{detail.price}</Typography>
            </Box>
            <Button
              variant="outlined"
              style={{
                marginTop: "25px",
                color: "#fed700",
                backgroundColor: "#bc3232",
                border: "2px solid #fed700",
                fontWeight: "550",
                ":hover": { backgroundColor: "#bc3232", color: "#   " },
                height: "35px",
                width: "140px"
              }}
              onClick={() => addtocart(detail)}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default ProductView
