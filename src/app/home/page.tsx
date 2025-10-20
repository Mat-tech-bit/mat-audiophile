"use client"
import { Box, Button, Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Home = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
   
    <Box>

{isMobile ? (

      <Box> 
 <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    bgcolor: "black", 
    color: "white",
    p: "40px",
    height: "400px",
    backgroundImage: "url('/headPhone1.jpg')", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
  }}
>
  <Typography fontWeight="normal">New Product</Typography>
  <Typography fontSize={40}>XX99 MARK II</Typography>
  <Typography fontSize={40}>HEADPHONES</Typography>
  <Typography sx={{ maxWidth: "500px" }}>
    Experience natural, lifelike audio and exceptional build quality made for
    the passionate music enthusiast
  </Typography>

  <Button sx={{ bgcolor: "orange", mt: 2 }}>SEE PRODUCT</Button>
</Box>

        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}} >
          <Card>
            <CardMedia
            component = "img"
            sx={{
              width: 300,
              height: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            alt="product"
            image= "/phones/headphone2.jpg"
            />
        <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Typography>HEADPHONES</Typography>
          <Button endIcon = {<KeyboardArrowRightIcon/>}>SHOP</Button>
        </CardContent>
          </Card>
        </Box>
 </Box>

) : (

   <>
   <Box sx={{ display: "flex", bgcolor: "black", color: "white", p: "40px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight="normal">New Product</Typography>
              <Typography fontSize={40}>XX99 MARK II</Typography>
              <Typography fontSize={40}>HEADPHONES</Typography>
              <Typography>Experience natural. lifelike audio and exceptional build quality made for the passionate music enthusiast</Typography>

              <Button sx={{ bgcolor: "orange" }}>SEE PRODUCT</Button>
            </Box>
            <Box
              component="img"
              src="/headPhone1.jpg"
              alt="Headphones"
              sx={{
                width: 900,
                height: 350,
                borderRadius: 2,
              }} />
   </Box>
          <Box sx={{display : "flex", flexDirection: "row", justifyContent: "space-around", margin: "50px"}}> 
            <Card sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <CardMedia
              component= "img"
              src='/phones/headphone2.jpg'
              alt='product'
              sx={{
                height: "400px",
                width: "400px",
                
              }}
              />
              <CardContent >HEADPHONES 
                <Button endIcon = {<KeyboardArrowRightIcon/>}>SHOP</Button>
              </CardContent>
            </Card>

              <Card sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <CardMedia
              component= "img"
              src='/phones/headphone2.jpg'
              alt='product'
              sx={{
                height: "400px",
                width: "400px",
                
              }}
              />
              <CardContent >HEADPHONES 
                <Button endIcon = {<KeyboardArrowRightIcon/>}>SHOP</Button>
              </CardContent>
            </Card>
                    <Card sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <CardMedia
              component= "img"
              src='/phones/headphone2.jpg'
              alt='product'
              sx={{
                height: "400px",
                width: "400px",
                
              }}
              />
              <CardContent >HEADPHONES 
                <Button endIcon = {<KeyboardArrowRightIcon/>}>SHOP</Button>
              </CardContent>
            </Card>
             </Box>
            
            </>

) }
   
    
    </Box>
  )
}

export default Home