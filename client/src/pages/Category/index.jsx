import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import notify from "../../Utils/notify";
import Card from "./Card";
//==================================================================
export default function Category() {
  //get data from api
  const [categories, setCategories] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_API + "category"
        );
        const data = await response.json();
        // console.log(data);
        
        setCategories(data.data);
      } catch (error) {
        notify("error", "Error fetching categories:");
      }
    })()
    
  }, []);
  
  //map categories
  const categoryList = categories?.map((category) => {
    // console.log(category.image[0]);
   
    return (
      <Card
        key={category._id}
        image={category.image}
        title={category.title}
        id={category._id}
      />
    );
  });
  // console.log(categories);

  return (
    <Stack
      mt={'50px'}
      flexDirection="row"
      flexWrap={"wrap"}
      justifyContent="center"
      gap={2}
    >
      {categoryList}
    </Stack>
  );
}
