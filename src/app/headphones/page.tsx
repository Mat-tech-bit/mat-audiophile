import { Box, Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import { Products } from '../data'
import Counter from '../counter/page'

const HeadPhones = () => {

  const headphones = Products.filter((item) => item.category === "headphones")

  return (
    <div>
      <Box>
        <Box sx={{display: "flex", flexDirection: "row", bgcolor: "pink", padding: "10px", justifyContent: "space-around", alignItems: "center", maxHeight: "190px"}}> 
          <Box sx={{display: "flex", flexDirection: "column"}}>
          <Typography fontWeight="bold" variant= "h3"sx={{color: "green", fontSize: "clamp(1rem, 2vw, 2rem)"}}>Grab upto 50% off on selected Headphone</Typography>
          <Button sx={{bgcolor: "green", color: "white", maxWidth: "150px"}}>Buy Now</Button>
          </Box>
          <Box
          component="img"
          src="/manHeadPhone.jpeg"
          alt='head phone display'
           sx={{
          width: {xs: "15rem", md: "30rem", lg: "40rem"},
          height: "auto",
          borderRadius: "1rem",
          objectFit: "cover",
          maxHeight: "160px"
        }}
          />
        </Box>
          

                    {/* HEAD PHONE SECTION */}
        <Box>
          <Box>
          <Typography variant='h4' fontWeight="bold">Headphones for you!</Typography>
          </Box>

            <Box>
              <Grid container spacing={2}>
                      {headphones.map((product) => (
                        <Grid key={product.id} size={{xs: 12, sm: 6, md: 3, lg: 3 }}> 
                            <Card>
                              <CardMedia
                              component="img"
                              src={product.image}
                              alt={product.name}
                              height="190"
                                sx={{
    objectFit: "contain", // 🔹 shows full image without cropping
    bgcolor: "#f5f5f5",   // 🔹 optional: adds background for empty spaces
  }}

                              />
                              <CardContent>
                                <Typography>{product.name}</Typography>
                                <Typography>pinnacle of pristine audio</Typography>
                                      <Rating name="full-rating" defaultValue={4} precision={0.5} />

                                <Counter id={product.id} name={product.name} price={product.price} />

                              </CardContent>
                            </Card>
                         </Grid>
                      ))}
              </Grid>
            </Box>

        </Box>
      </Box>
    </div>
  )
}

export default HeadPhones