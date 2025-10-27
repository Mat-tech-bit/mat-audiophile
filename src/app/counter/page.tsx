"use client";
import { Box, Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useCart } from "../cartcontext/cartContext";

const Counter = ({
  id,
  name,
  price,
}: {
  id: number;
  name: string;
  price: number;
}) => {
  const { addToCart, removeFromCart, cart } = useCart();

  // check if this product is already in the cart
  const productInCart = cart.find((item) => item.id === id);
  const quantity = productInCart ? productInCart.quantity : 0;

  const increment = () => {
    addToCart({ id, name, price, quantity: 1 });
  };

  const decrement = () => {
    removeFromCart(id);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
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

      <Button
        sx={{ bgcolor: "orange", color: "white" }}
        onClick={increment}
      >
        ADD TO CART
      </Button>
    </Box>
  );
};

export default Counter;
