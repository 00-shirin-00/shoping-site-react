//mui
import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
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
import LastProduct from "../Home/LastProduct";

//=====================================================================

export default function ProductDetails() {
  //params>>
  //get id from url
  const { id } = useParams();

  //state>>
  //get product from api
  const [product, setProduct] = useState();

  //selectors>>
  //get quantity from redux
  const cardQuantity =
    useSelector((state) => state.cart.items).filter((e) => e._id == id)[0]
      ?.cartQuantity || 0;

  //useEffect>>
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_API + `product/${id}`
        );
        const data = await response.json();
        setProduct(data.data);
        // console.log(data)
        // console.log(add)
        // console.log(remove);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  // redux
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
        mt: "50px",
      }}
    >
      {product ? (
        <>
          {/* --------------------باکس اصلی------------------------- */}
          <Stack
            sx={{
              boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)",
              borderRadius: "20px",
              overflow: "hidden",
              width: { xs: "90%", md: "80%" },
              height: "80vh",
           
              gap: "15px",
              bgcolor: "#444236",
              p: 1,
            }}
            flexDirection={"row"}
            flexWrap={"wrap"}
          >
            {/* --------------------- باکس تصویر-------------------------- */}
            <Box
              sx={{
                width: { xs: "100%",md: "50%" },
                height: { xs: "55%",sm:"50%" ,md: "100%" },
                borderRadius: { xs: "20px 20px 0 0", md: "20px 0 0 20px" },
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  // borderRadius:"20px 0 0 20px"
                }}
                src={
                  product?.images?.length > 0
                    ? import.meta.env.VITE_BASE_URL + product.images[0]
                    : "not image" // تصویر پیش‌فرض در صورت نبود تصویر
                }
                alt=""
              />
            </Box>

            {/* ---------------- باکس  متن ها ------------------------- */}
            <Stack
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"10px "}
              sx={{
                // p: { xs: "10px", md: "20px" },
                width: { xs: "100%", md: "35%" },
                height: { xs: "40%",sm:"45%", md: "100%" },
              }}
            >
              {/*------ عنوان و توضیحات  ------ */}
              <Box>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    fontSize: {
                      xs: "28px",
                      sm: "38px",
                      md: "42px",
                      lg: "62px",
                    },
                  }}
                >
                  {product?.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    fontSize: {
                      xs: "12px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                    },
                  }}
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

              {/* --------دکمه‌ها  -------- */}
              {/* //if quantity is 0 show add to card button else show remove and add button >> */}
              <Box display={"flex"} gap={2}>
                {cardQuantity ? (
                  <>
                    <Button
                      sx={{
                        width: { xs: "80px", sm: "150px", md: "100px" },
                        height: { xs: "30px", md: "50px" },
                        bgcolor: "#E07A5F",
                        color: "inherit",
                      }}
                      variant="contained"
                      onClick={() => dispatch(remove(id))}
                    >
                      <RemoveIcon />
                    </Button>
                    {/* ---------- */}
                    <Typography
                      component={"span"}
                      sx={{
                        fontSize: "20px",
                        color: "#E07A5F",
                        fontWeight: "bold",
                        textShadow: "0 0 5px rgba(0,0,0,0.5)",
                      }}
                    >
                      {cardQuantity}
                    </Typography>
                    {/* ----------- */}
                    <Button
                      sx={{
                        width: { xs: "80px", sm: "150px", md: "100px" },
                        height: { xs: "30px", md: "50px" },
                        bgcolor: "#E07A5F",
                        color: "inherit",
                      }}
                      variant="contained"
                      onClick={() => dispatch(add(product))}
                    >
                      <AddIcon />
                    </Button>
                  </>
                ) : (
                  // else >>
                  <Button
                    sx={{
                      width: { xs: "180px", sm: "180px", md: "120px" },
                      height: { sm: "50px",md: "80px" },
                      bgcolor: "#E07A5F",
                      color: "inherit",
                    }}
                    variant="contained"
                    onClick={() => dispatch(add(product))}
                  >
                    <Typography
                      component={"span"}
                      sx={{
               
                        fontWeight: "bold",
                        textShadow: "0 0 5px rgba(0,0,0,0.5)",
                      }}
                    >
                      Add to card
                    </Typography>
                  </Button>
                )}
              </Box>
            </Stack>
          </Stack>
        </>
      ) : (
        <>
          {/*------- skleton-------*/}
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
      )}
      <LastProduct />
    </Box>
  );
}
