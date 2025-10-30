
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const GridImages = () => {
  return (
    <Box sx={{
        pt: 5
    }}
    >
      {/* GRID IMAGES */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // centers the grid horizontally
          alignItems: "center",
          mt: 6,
          px: { xs: 2, sm: 4, md: 8 }, // adds left-right padding
          overflow: "hidden", // prevents image overflow
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "1200px", // centers within a fixed max width
            height: { xs: "auto", sm: 400, md: 500 }, // responsive height
            alignItems: "stretch",
          }}
        >
          {/* LEFT COLUMN (two stacked images) */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Grid
              container
              spacing={2}
              direction="column"
              sx={{ height: "100%" }}
            >
              <Grid sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="/manHeadPhone.jpeg"
                  alt="Top Left"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 2,
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="/audiophile/earphones/earphone8.jpeg"
                  alt="Bottom Left"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 2,
                    objectFit: "cover",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* RIGHT SIDE (single image) */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              component="img"
              src="/audiophile/headphones/headphone8.jpeg"
              alt="Right Image"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* YOU MAY ALSO LIKE */}
      <Box sx={{pt: 20}}>
        <Typography>YOU MAY ALSO LIKE</Typography>

        <Box>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                  boxShadow: 3,
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  src="/audiophile/headphones/headphone1.jpg"
                  height={200}
                  sx={{
                    objectFit: "contain",
                    bgcolor: "#f5f5f5",
                    width: "80%",
                  }}
                />
                <CardContent>
                  <Typography>Zebronics</Typography>
                  <Button href="/headphones" sx={{ bgcolor: "orange" }}>
                    SEE PRODUCT
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                  boxShadow: 3,
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  src="/audiophile/earphones/earphone1.jpg"
                  height={200}
                  sx={{
                    objectFit: "contain",
                    bgcolor: "#f5f5f5",
                    width: "80%",
                  }}
                />
                <CardContent>
                  <Typography>Zebronics</Typography>
                  <Button href="/earphones" sx={{ bgcolor: "orange" }}>
                    SEE PRODUCT
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                  boxShadow: 3,
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  src="/audiophile/speakers/speaker1.jpg"
                  height={200}
                  sx={{
                    objectFit: "contain",
                    bgcolor: "#f5f5f5",
                    width: "80%",
                  }}
                />
                <CardContent>
                  <Typography>Zebronics</Typography>
                  <Button href="/speakers" sx={{ bgcolor: "orange" }}>
                    SEE PRODUCT
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>


      {/* BRINGING YOU THE BEST AUDIO GEAR */}
      <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 3, justifyContent: "center", mt: 10}}>
        {/* TEXT */}
        <Box sx={{flex: 1, justifyContent: "center", alignItems: "center",}}>
        <Typography variant="h5" sx={{mb: 3}}> BRINGING YOU THE <span style={{color: "orange"}}>BEST </span> AUDIO GEAR</Typography>
        <Typography>Located at the heart of New york city. Audiophile is the premier store for high end headphones. earphones, spakers and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy portable audio equipment</Typography>
        </Box>
                  <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}> 
                    <Box
                    component="img"
                    src="/manHeadPhone.jpeg"
                      alt="Audiophile showcase"
      sx={{
        width: "100%",
        height: { xs: 250, sm: 300, md: 350 },
        borderRadius: 3,
        objectFit: "cover",
      }}
                    />
                  </Box>
      </Box>
    </Box>
  );
};

export default GridImages;
