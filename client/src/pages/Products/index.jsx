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

  const [products, setProducts] = useState();

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  //state for sort
  const [sort, setSort] = useState("-createdAt");

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  // fetch for price
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
        mt={"20px"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        p={2}
      >
        {/* for price */}
        <Box sx={{ width: 300, mt: "50px" }}>
          <Typography
            sx={{ mb: 2, fontSize: "20px", fontWeight: "bold", color: "#333" }}
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
          />
        </Box>
        {/* for sort */}
        <Box sx={{ width: 300, mt: "50px" }}>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="sort">Sort By</InputLabel>
            <Select
              id="sort"
              value={sort}
              onChange={handleSort}
              autoWidth
              label="Sort"
            >
              <MenuItem value={"-createdAt"}>Newest</MenuItem>
              <MenuItem value={"-price"}>Highest price</MenuItem>
              <MenuItem value={"price"}>Lowest price</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
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
