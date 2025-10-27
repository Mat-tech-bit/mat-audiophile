"use client";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";


const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast
            </Typography>

            <Button sx={{ bgcolor: "orange", mt: 2 }}>SEE PRODUCT</Button>
          </Box>

        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              bgcolor: "black",
              color: "white",
              p: "40px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight="normal">New Product</Typography>
              <Typography fontSize={40}>XX99 MARK II</Typography>
              <Typography fontSize={40}>HEADPHONES</Typography>
              <Typography>
                Experience natural. lifelike audio and exceptional build quality
                made for the passionate music enthusiast
              </Typography>

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
              }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;
