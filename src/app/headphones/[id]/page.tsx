"use client";
import Counter from '@/app/counter/page';
import { Products } from '@/app/data';
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React from 'react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GridImages from '@/app/gridImages/page';
import { useRouter } from "next/navigation";

const HeadPhoneDetails = () => {
  const router = useRouter()
  const { id } = useParams();
  const product = Products.find(
    (p) => p.id === Number(id) && p.category === "headphones"
  );

  if (!product) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography>Product Not Found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      {/* Back Button */}
      <Button onClick={() => router.back()} sx={{ color: "black" }}>
        <ArrowBackIosIcon />
      </Button>

      {/* Product Section */}
      <Box
        key={product.id}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mt: 2,
        }}
      >
        {/* Product Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              bgcolor: "#f5f5f5",
              borderRadius: 3,
              width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: "100%",
                height: { xs: 250, sm: 350, md: 400, lg: 450 }, 
                objectFit: "contain",
              }}
            />
          </Card>
        </Box>

        {/* Product Details */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: "orange", mb: 1 }}>NEW PRODUCT</Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.name}
          </Typography>
          <Typography sx={{ mb: 2 }}>{product.description}</Typography>
          <Typography sx={{ fontWeight: "bold", mb: 2 }}>
            ${product.price}
          </Typography>

          <Counter
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </Box>
            
      </Box>
        {/* Feaures and IN THE BOX */}
      <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    padding: "20px",
    gap: { xs: 3, sm: 8, md: 10 }, // 🔹 Adds space between sections (adjust as needed)
  }}
>
  {/* FEATURES */}
  <Box sx={{ flex: 1 }}>
    <Typography variant="h4" sx={{ mb: 2 }}>
      FEATURES
    </Typography>
    <Typography>{product.features}</Typography>
  </Box>

  {/* IN THE BOX */}
  <Box sx={{ flex: 1 }}>
    <Typography variant="h4" sx={{ mb: 2 }}>
      IN THE BOX
    </Typography>
    <Typography>1x Earphone unit</Typography>
    <Typography>2x Replacement Earcups</Typography>
    <Typography>1x User Manual</Typography>
    <Typography>1x 5.5mm 5m Audio Cable</Typography>
    <Typography>1x Travel Bag</Typography>
  </Box>
</Box>
    {/* GRID IMGAES */}
<GridImages/>

    </Box>
  );
};

export default HeadPhoneDetails;
