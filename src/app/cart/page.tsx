"use client";
import { Box, Button, Typography } from "@mui/material";
import { useCart } from "../cartcontext/page";
import Checkout from "../form/page";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice, getTotalItems } =
    useCart();

    const router = useRouter()

  return (
    <Box sx={{ p: 3 }}>
      <Button onClick={() => router.back()} sx={{ color: "black", mb: 2 }}>
        <ArrowBackIosIcon />
      </Button>

      <Typography variant="h4" fontWeight="bold" mb={2}>
        🛒 Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                borderBottom: "1px solid #ddd",
                pb: 1,
              }}
            >
              {/* ✅ Display product image */}
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 2,
                  objectFit: "cover",
                  mr: 2,
                }}
              />
              <Typography sx={{ flexGrow: 1 }}>
                {item.name} (x{item.quantity})
              </Typography>
              <Typography sx={{ mr: 2 }}>
                ${item.price * item.quantity}
              </Typography>
              <Button
                onClick={() => removeFromCart(item.id)}
                sx={{ color: "red" }}
              >
                Remove
              </Button>
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

      {/* ✅ Checkout Section */}
      <Checkout />
    </Box>
  );
};

export default CartPage;
