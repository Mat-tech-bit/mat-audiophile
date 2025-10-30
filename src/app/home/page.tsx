"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // PRODUCT DATA
  const products = [
    {
      id: 1,
      name: "Zebronics Headphones",
      image: "/audiophile/headphones/headphone1.jpg",
      link: "/headphones",
    },
    {
      id: 2,
      name: "Zebronics Earphones",
      image: "/audiophile/earphones/earphone1.jpg",
      link: "/earphones",
    },
    {
      id: 3,
      name: "Zebronics Speaker",
      image: "/audiophile/speakers/speaker1.jpg",
      link: "/speakers",
    },
  ];

  return (
    <Box>
      {/* HERO SECTION */}
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            bgcolor: "black",
            color: "white",
            p: 4,
            height: 400,
            backgroundImage: "url('/headPhone1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography>New Product</Typography>
          <Typography fontSize={40} fontWeight={600}>
            XX99 MARK II
          </Typography>
          <Typography fontSize={40} fontWeight={600}>
            HEADPHONES
          </Typography>
          <Typography sx={{ maxWidth: 400 }}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Typography>

          <Button sx={{ bgcolor: "orange", mt: 2, color: "white" }}>
            SEE PRODUCT
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "black",
            color: "white",
            p: 6,
            borderRadius: 2,
          }}
        >
          <Box sx={{ flex: 1, pr: 4 }}>
            <Typography>New Product</Typography>
            <Typography fontSize={48} fontWeight={600}>
              XX99 MARK II
            </Typography>
            <Typography fontSize={48} fontWeight={600}>
              HEADPHONES
            </Typography>
            <Typography sx={{ maxWidth: 500, mb: 2 }}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Typography>
            <Button sx={{ bgcolor: "orange", color: "white" }}>
              SEE PRODUCT
            </Button>
          </Box>

          <Box
            component="img"
            src="/headPhone1.jpg"
            alt="Headphones"
            sx={{
              width: 500,
              height: 350,
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        </Box>
      )}

      {/* PRODUCT DISPLAY SECTION */}
      <Box sx={{ mt: 6, px: 3, mb: 10 }}>
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                  boxShadow: 3,
                  borderRadius: 2,
                  height: 350, // ✅ All cards same height
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  src={product.image}
                  sx={{
                    objectFit: "contain",
                    bgcolor: "#f5f5f5",
                    width: "80%",
                    height: 180, // ✅ uniform image height
                    borderRadius: 2,
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography fontWeight={600}>{product.name}</Typography>
                </CardContent>
                <Button
                endIcon={<ArrowForwardIosIcon/>}
                  href={product.link}
                  sx={{
                    bgcolor: "orange",
                    color: "white",
                    mt: "auto", // ✅ ensures button sticks to bottom
                    "&:hover": { bgcolor: "#e69500" },
                  }}
                >
                  SHOP
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          justifyContent: "center",
          mt: 10,
        }}
      >
        {/* TEXT */}
        <Box sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            {" "}
            BRINGING YOU THE <span style={{ color: "orange" }}>BEST </span>{" "}
            AUDIO GEAR
          </Typography>
          <Typography>
            Located at the heart of New york city. Audiophile is the premier
            store for high end headphones. earphones, spakers and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of products.
            Stop by our store to meet some of the fantastic people who make
            Audiophile the best place to buy portable audio equipment
          </Typography>
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

export default Home;
