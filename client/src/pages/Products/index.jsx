import React, { useEffect, useState } from "react";
//mui>>
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//react>>
import { useParams } from "react-router-dom";
//components>>
import ProductCard from "./Card";

// ===========================================

function valuetext(value) {
  return `$${value}`;
}

export default function Products() {
  //params
  const { id } = useParams();



  //state for price
  const [price, setPrice] = useState([0, 1000]);

  //state for products
  const [products, setProducts] = useState();

  //handle for price
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  //state for sort date
  //new => old
  const [sort, setSort] = useState("-createdAt");

  //handle for sort
    const handleSort = (event) => {
    setSort(event.target.value);
  };

  // fetch products
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_API +
            `product?filters[price][$gte]=${price[0]}&filters[price][$lte]=${
              price[1]
            }${
              id == "all" ? "" : `&filters[categoryId][$eq]=${id}`
            }&sort=${sort}`
        );
        const data = await response.json();
        // console.log(data);

        setProducts(data.data);
      } catch (error) {
        notify("error", "Error fetching categories:");
      }
    })();
  }, [price, sort, id]);

  //map for products
  const items = products?.map((item, index) => (
    <ProductCard
      key={index}
      description={item.description}
      id={item._id}
      img={item.images}
      price={item.price}
      name={item.name}
    />
  ));

  return (
    <>
      <Stack
        mt={"40px"}
        justifyContent={"space-evenly"}
        p={5}
        sx={{
          bgcolor: "#f4f1de",
          borderRadius: "10px",
          border: "3px solid #bc6c25",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* for price */}
        <Box sx={{ width: { xs: "90%", sm: "40%" } }}>
          <Typography
            sx={{ mb: 1, fontSize: "20px", fontWeight: "bold", color: "#333" }}
          >
            Price
          </Typography>
          <Slider
            getAriaLabel={() => "Price range"}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            value={price}
            step={10}
            onChange={handleChange}
            min={0}
            max={1000}
            sx={{
              color: "#bc6c25", // رنگ اصلی اسلایدر (track و thumb)
              "& .MuiSlider-thumb": {
                backgroundColor: "#086f31", // رنگ دایره
              },
              "& .MuiSlider-track": {
                backgroundColor: "#bc6c25", // رنگ خط پر شده
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#8da593", // رنگ خط خالی
              },
            }}
          />
        </Box>
        {/* for sort */}
        <Box sx={{ width: { xs: "90%", sm: "30%" }, mt: "20px" }}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel
              id="sort"
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.5px",
                "&.Mui-focused": {
                  color: "#bc6c25",
                  fontWeight: "700",
                  letterSpacing: "1px",
                },
              }}
            >
              Sort By
            </InputLabel>
            <Select
              id="sort"
              value={sort}
              onChange={handleSort}
              autoWidth
              label="Sort"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#bc6c25", // رنگ خط دور در حالت عادی
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e76f51", // رنگ خط دور هنگام فوکوس
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#bc6c25",
                },
              }}
            >
              <MenuItem value={"-createdAt"}>Newest</MenuItem>
              <MenuItem value={"-price"}>Highest price</MenuItem>
              <MenuItem value={"price"}>Lowest price</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      {/* --- cart items --- */}
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        p={2}
        gap={2}
      >
        {items}
      </Stack>
    </>
  );
}
