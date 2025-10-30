"use client";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { useCart } from "../cartcontext/page";

const Counter = ({
  id,
  name,
  price,
  image,
}: {
  id: number;
  name: string;
  price: number;
  image: string;
}) => {
  const { addToCart, removeFromCart, cart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const productInCart = cart.find((item) => item.id === id);
  const quantity = productInCart ? productInCart.quantity : 0;

  const increment = () => {
    addToCart({ id, name, price, image, quantity: 1 });
    setOpenSnackbar(true); // ✅ Show snackbar when added
  };

  const decrement = () => {
    removeFromCart(id);
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
      {/* Quantity Control */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#ecece7",
          alignItems: "center",
          marginRight: "10px",
          borderRadius: "5px",
        }}
      >
        <Button onClick={decrement} sx={{ color: "black" }}>
          <RemoveIcon />
        </Button>
        <Typography sx={{ color: "black" }}>{quantity}</Typography>
        <Button onClick={increment} sx={{ color: "black" }}>
          <AddIcon />
        </Button>
      </Box>

      {/* Add to Cart Button */}
      <Button
        sx={{
          bgcolor: "orange",
          color: "white",
          "&:hover": { bgcolor: "#cc8400" },
        }}
        onClick={increment}
      >
        ADD TO CART
      </Button>

      {/* ✅ Snackbar Notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // ✅ Top center
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          ✅ Successfully added to cart!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Counter;
