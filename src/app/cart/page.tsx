"use client";
import { Box, Button, Typography } from "@mui/material";
import { useCart } from "../cartcontext/cartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold">🛒 Your Cart</Typography>

      {cart.length === 0 ? (
        <Typography sx={{ mt: 2 }}>Your cart is empty</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
                borderBottom: "1px solid #ddd",
                pb: 1,
              }}
            >
              <Typography>
                {item.name} (x{item.quantity})
              </Typography>
              <Typography>${item.price * item.quantity}</Typography>
              <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            </Box>
          ))}

          <Typography sx={{ mt: 3 }}>
            Total Items: {getTotalItems()}
          </Typography>
          <Typography sx={{ mt: 1, fontWeight: "bold" }}>
            Total Price: ${getTotalPrice().toFixed(2)}
          </Typography>

          <Button
            onClick={clearCart}
            sx={{ mt: 2, bgcolor: "red", color: "white" }}
          >
            Clear Cart
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;
