"use client";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <footer>
      {isMobile ? (
        <Box sx={{ bgcolor: "black", color: "white" }}>
          <Typography sx={{ mb: "20px", pt: "25px" }}>audiophile</Typography>
          <Box sx={{ display: "flex", mb: "20px" }}>
            <Button href="/home" sx={{ color: "white" }}>
              HOME
            </Button>
            <Button href="/headphones" sx={{ color: "white" }}>
              HEADPHONES
            </Button>
            <Button href="speakers" sx={{ color: "white" }}>
              SPEAKERS
            </Button>
            <Button href="earphones" sx={{ color: "white" }}>
              EARPHONES
            </Button>
          </Box>
          <Typography sx={{ mb: "30px" }}>
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lowers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7days a week
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              Copywrite ©{new Date().getFullYear()} All Rights Reserved
            </Typography>
            <Box>
              <Button
                onClick={() =>
                  window.open(
                    "https://web.facebook.com/matthew.akinyemi.146",
                    "_blank"
                  )
                }
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </Button>
              <Button
                onClick={() =>
                  window.open("https://www.instagram.com/ak_mat1", "_blank")
                }
                sx={{ color: "white" }}
              >
                <InstagramIcon />
              </Button>
              <Button
                onClick={() =>
                  window.open("https://twitter.com/Mathew7746", "_blank")
                }
                sx={{ color: "white" }}
              >
                <XIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography>audiophile</Typography>
        </Box>
      )}
    </footer>
  );
};

export default Footer;
