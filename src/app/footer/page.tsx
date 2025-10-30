"use client";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <footer>
      <Box
        sx={{
          bgcolor: "black",
          color: "white",
          mt: "auto",
          px: 4,
          py: 3,
          position: "sticky", 
          bottom: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {isMobile ? (
          //  MOBILE FOOTER
          <>
            <Typography sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}>
              audiophile
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
                flexWrap: "wrap",
              }}
            >
              <Button href="/home" sx={{ color: "white" }}>
                HOME
              </Button>
              <Button href="/headphones" sx={{ color: "white" }}>
                HEADPHONES
              </Button>
              <Button href="/speakers" sx={{ color: "white" }}>
                SPEAKERS
              </Button>
              <Button href="/earphones" sx={{ color: "white" }}>
                EARPHONES
              </Button>
            </Box>

            <Typography sx={{ mb: 2, textAlign: "center", fontSize: 14 }}>
              Audiophile is an all-in-one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Typography sx={{ mb: { xs: 1, sm: 0 } }}>
                © {new Date().getFullYear()} All Rights Reserved
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
          </>
        ) : (
          // DESKTOP/TABLET FOOTER
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            {/* Left side */}
            <Box sx={{ maxWidth: "40%" }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                audiophile
              </Typography>
              <Typography fontSize={14}>
                Audiophile is an all-in-one stop to fulfill your audio needs. We
                are a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio.
              </Typography>
            </Box>

            {/* Center links */}
            <Box>
              <Button href="/home" sx={{ color: "white" }}>
                HOME
              </Button>
              <Button href="/headphones" sx={{ color: "white" }}>
                HEADPHONES
              </Button>
              <Button href="/speakers" sx={{ color: "white" }}>
                SPEAKERS
              </Button>
              <Button href="/earphones" sx={{ color: "white" }}>
                EARPHONES
              </Button>
            </Box>

            {/* Right side (social + copyright) */}
            <Box sx={{ textAlign: "right" }}>
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
              <Typography fontSize={13} sx={{ mt: 1 }}>
                © {new Date().getFullYear()} All Rights Reserved
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </footer>
  );
};

export default Footer;
