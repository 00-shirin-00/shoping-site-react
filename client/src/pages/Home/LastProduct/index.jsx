import React, { useEffect, useState } from "react";
//component
import notify from "../../../Utils/notify";

//ruter
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";
// ===========================================================================
export default function LastProduct() {
  //state for slider
  const [sliders, setSliders] = useState();

  //fetch
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_BASE_API + "product?sort=-createdAt&limit=7"
        );
        const data = await res.json();
        setSliders(data.data);
      } catch (error) {
        notify("error", "somthing went wrong");
      }
    })();
  }, []);

  const items = sliders?.map((e, index) => (
    <SwiperSlide key={index}>
      <Box
        sx={{
          boxShadow: "0 0 5px 2px rgba(0,0,0,.2)",
          width: "100%",
          height: "100%",
          bgcolor: "white",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <img src={import.meta.env.VITE_BASE_URL + e.images[0]} alt={e.title} />
        <Typography px={"10px"} variant="h3" component={"h2"}>
          {e.name}
        </Typography>
        <Typography px={"10px"} variant="body2">
          {e.description.split(" ").slice(0, 10).join(" ")}
        </Typography>
        <Button
          variant="contained"
          sx={{ float: "right", marginRight: "20px", marginTop: "20px" }}
        >
          <Link
            style={{ color: "white", fontSize: "12px" }}
            to={`/product-details/${e._id}/${e.name.replaceAll(" ", "-")} `}
          >
            more infortion
          </Link>
        </Button>
      </Box>
    </SwiperSlide>
  ));

  return (
    <Box
      sx={{
        borderRadius: "30px",
        overflow: "hidden",
        width: "80%",
        bgcolor: "gainsboro",
        padding: "20px",
        margin: "50px auto",
      }}
    >
      <Typography align="center" variant="h2" mb={"30px"}>
        Last Products
      </Typography>
      <Box sx={{ width: "100%", height: "50vh" }}>
        {sliders?.length > 0 ? (
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={sliders.length > 3}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="lastProduct"
          >
            {items}
          </Swiper>
        ) : (
          <p>Loading...</p> // پیام یا لودر در صورت نبود اسلاید
        )}
      </Box>
    </Box>
  );
}
