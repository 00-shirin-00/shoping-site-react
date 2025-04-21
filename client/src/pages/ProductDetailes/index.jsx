import { Box, Button, Stack, Typography } from "@mui/material";
//react
import React, { useEffect, useState } from "react";

//redux
import { useSelector } from "react-redux";
//use redux's actions
import { useDispatch } from "react-redux";
//redux actions
import { add, remove } from "../../Store/Slice/CartSlice";

//params
import { useParams } from "react-router-dom";

//=====================================================================

export default function ProductDetails() {
  //params>>
  const { id } = useParams(); //get id from url

  //state>>
  const [product, setProduct] = useState(); //get product from api

  //use redux's actions
  const dispatch = useDispatch(); //use dispatch to send action to redux

  //selectors>>
  // quantity
  const cardQuantity = useSelector((state) => state.cart.items).filter(
    (e) => e._id == id
  )[0]?.quantity || 0; //get quantity from redux

  //useEffect>>
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_API + `product/${id}`
        );
        const data = await response.json();
        setProduct(data.data); //set product to state
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <>
      {
        /* Product Details Page */ product ? (
          <>
            {/* eleman */}
            <Stack
              flexDirection={"row"}
              gap={2}
              sx={{
                boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)",
                borderRadius: "20px",
                overflow: "hidden",
                width: { xs: "98%", md: "80%" },
                height: "80vh",
                margin: "50px auto",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  height: { xs: "40%", md: "100%" },
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={
                    product?.images?.length > 0
                      ? import.meta.env.VITE_BASE_URL + product.images[0]
                      : "not image" // تصویر پیش‌فرض در صورت نبود تصویر
                  }
                  alt=""
                />
              </Box>
              <Stack
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"10px "}
                p={"10px"}
                sx={{
                  width: { xs: "100%", md: "59%" },
                  height: { xs: "55%", md: "100%" },
                }}
              >
                <Box>
                  <Typography variant="h2" align="center">
                    {product?.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify" }}
                    mt={"15px"}
                  >
                    {product?.description}
                  </Typography>
                  <Typography variant="body2">
                    Quantity : {product?.quantity}
                  </Typography>
                  <Typography variant="body1" mt={"15px"}>
                    Price : ${product?.price}
                  </Typography>
                </Box>
                <Box display={"flex"} gap={2}>
                  {cardQuantity ? (
                    <>
                      <Button
                        variant="contained"
                        onClick={() => dispatch(remove(id))}
                      >
                        -
                      </Button>
                      <Typography component={"span"}>{cardQuantity}</Typography>
                      <Button
                        variant="outlined"
                        onClick={() => dispatch(add(product))}
                      >
                        +
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => dispatch(add(product))}
                    >
                      Add to card
                    </Button>
                  )}
                </Box>
              </Stack>
            </Stack>
          </>
        ) : (
          <>{/* skleton */}</>
        )
      }
    </>
  );
}
