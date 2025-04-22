import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
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

  //selectors>>
  // quantity
  const cardQuantity =
    useSelector((state) => state.cart.items).filter((e) => e._id == id)[0]
      ?.quantity || 0; //get quantity from redux

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
        // console.log(add)
        // console.log(remove);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  //use redux's actions
  const dispatch = useDispatch(); //use dispatch to send action to redux
  return (
    <>
      {
        /* Product Details Page */ product ? (
          <>
            {/* eleman */}
            {/* --------------------باکس اصلی------------------------- */}
            <Stack
              sx={{
                boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)",
                borderRadius: "20px",
                overflow: "hidden",
                width: { xs: "90%", md: "80%" },
                height: "80vh",
                gap: "15px",
                margin: "50px auto",
              }}
              flexDirection={"row"}
              flexWrap={"wrap"}
            >

              {/* --------------------- باکس تصویر-------------------------- */}
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

              {/* ---------------- باکس اصلی متن ها ------------------------- */}
              <Stack
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"10px "}
                p={"10px"}
                sx={{
                  width: { xs: "100%", md: "55%" },
                  height: { xs: "55%", md: "100%" },
                }}
              >

                {/* -----------------------عنوان و توضیحات  ------------------------------------------- */}
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

                {/* -----------------------دکمه‌ها  ------------------------------------------- */}
                {/* //if quantity is 0 show add to card button else show remove and add button >> */}
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
                    // else >>
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
          <>
            {/* skleton */}
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
              {/* تصویر */}
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  height: { xs: "40%", md: "100%" },
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  animation="wave"
                />
              </Box>

              {/* اطلاعات محصول */}
              <Stack
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"10px"}
                p={"10px"}
                sx={{
                  width: { xs: "100%", md: "59%" },
                  height: { xs: "55%", md: "100%" },
                }}
              >
                <Box width="100%">
                  <Skeleton
                    variant="text"
                    width="60%"
                    height={40}
                    sx={{ mx: "auto", mb: 2 }}
                  />
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={100}
                    sx={{ mb: 2 }}
                  />
                  <Skeleton
                    variant="text"
                    width="50%"
                    height={30}
                    sx={{ mb: 1 }}
                  />
                  <Skeleton variant="text" width="40%" height={30} />
                </Box>

                {/* دکمه‌ها */}
                <Box display={"flex"} gap={2}>
                  <Skeleton variant="rectangular" width={40} height={40} />
                  <Skeleton variant="text" width={30} height={30} />
                  <Skeleton variant="rectangular" width={40} height={40} />
                </Box>
              </Stack>
            </Stack>
          </>
        )
      }
    </>
  );
}
