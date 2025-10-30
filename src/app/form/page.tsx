"use client";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Checkout = () => {
  const [selected, setSelected] = useState("e-money");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Box>
        {/* CHECKOUT */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            CHECKOUT
          </Typography>
          {/* BUILDING DETAILS */}
          <Typography fontWeight="bold" sx={{ color: "orange" }}>
            BUILDING DETAILS
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography fontWeight="bold">Name</Typography>
            <TextField
              placeholder="Enter your name"
              variant="outlined"
              sx={{
                mb: { xs: 2, sm: 2 },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
              }}
            />

            <Typography fontWeight="bold">Email Address</Typography>
            <TextField
              placeholder="example@gmail.com"
              variant="outlined"
              sx={{
                mb: { xs: 2, sm: 2 },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
              }}
            />

            <Typography fontWeight="bold">Phone Number</Typography>
            <TextField
              placeholder="+234-902-5546-836"
              variant="outlined"
              sx={{
                mb: { xs: 2, sm: 2 },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "orange", // hover color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange", // focused color (when clicked)
                  },
                },
              }}
            />
          </Box>
          {/* SHIPPING INFO */}
          <Typography sx={{ color: "orange" }} fontWeight="bold">
            SHIPPING INFO
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography fontWeight="bold">Address</Typography>
            <TextField
              placeholder="No. 154 Oluwo Ibadan"
              variant="outlined"
              sx={{
                mb: { xs: 2, sm: 2 },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
              }}
            />

            <Typography fontWeight="bold">Zip Code</Typography>
            <TextField
              placeholder="10001"
              variant="outlined"
              sx={{
                mb: { xs: 2, sm: 2 },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
              }}
            />

            <Typography fontWeight="bold">City</Typography>
            <TextField
              placeholder="Ibadan"
              variant="outlined"
              sx={{
                mb: { xs: 2, sm: 2 },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
              }}
            />

            <Typography fontWeight="bold">Country</Typography>
            <TextField
              placeholder="Nigeria"
              variant="outlined"
              sx={{
                mb: { xs: 2, sm: 2 },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                },
              }}
            />
          </Box>

          {/* PAYMENT DETAILS */}
          <Box sx={{ width: { xs: "70%", sm: "400px" }, mb: 2 }}>
            <Typography
              fontWeight="bold"
              variant="h6"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Payment Method
            </Typography>

            <RadioGroup
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              {/* E-Money Option */}
              <Box
                sx={{
                  border: "2px solid ",
                  borderColor: selected === "e-money" ? "orange" : "grey.400",
                  borderRadius: 2,
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  value="e-money"
                  control={
                    <Radio
                      sx={{
                        color: "orange", // color when unchecked
                        "&.Mui-checked": {
                          color: "orange", // color when checked
                        },
                      }}
                    />
                  }
                  label={<Typography fontWeight="500">E-Money</Typography>}
                  sx={{ width: "100%", m: 0 }}
                />
              </Box>

              {/* Cash on Delivery Option */}
              <Box
                sx={{
                  border: "2px solid",
                  borderColor: selected === "cash" ? "orange" : "grey.400",
                  borderRadius: 2,
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  value="cash"
                  control={
                    <Radio
                      sx={{
                        color: "orange", // color when unchecked
                        "&.Mui-checked": {
                          color: "orange", // color when checked
                        },
                      }}
                    />
                  }
                  label={
                    <Typography fontWeight="500">Cash on Delivery</Typography>
                  }
                  sx={{ width: "100%", m: 0 }}
                />
              </Box>
            </RadioGroup>
          </Box>
        </Box>
        <Box>
          <Button
            onClick={handleClick}
            sx={{ bgcolor: "orange", color: "black" }}
          >
            COMPLETE ORDER
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%", bgcolor: "orange" }}
            >
              CHECKOUT COMPLETE
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </div>
  );
};

export default Checkout;
