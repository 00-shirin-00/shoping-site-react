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


  //card items >>
  const items = sliders?.map((e, index) => (
    <SwiperSlide key={index} >
      <Box
        sx={{
          boxShadow: "1px 1px 5px 2px #414562",
          width: "100%",
          height: "90%",
          minHeight: "300px",

          bgcolor: "white",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "55%",
            borderBottom: "1px solid gainsboro",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={import.meta.env.VITE_BASE_URL + e.images[0]}
            alt={e.title}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography px={"10px"} variant="h4" component={"h2"}>
            {e.name}
          </Typography>
          <Typography px={"10px"} variant="body2">
            {e.description.split(" ").slice(0, 10).join(" ")}
          </Typography>
          <Button variant="text" sx={{ bgcolor: "#3D405B", margin: "20px" }}>
            <Link
              style={{ color: "white", fontSize: "12px" }}
              to={`/product-details/${e._id}/${e.name.replaceAll(" ", "-")} `}
            >
              more infortion
            </Link>
          </Button>
        </Box>
      </Box>
    </SwiperSlide>
  ));

  return (
    <Box
      sx={{
        borderRadius: "30px",
        overflow: "hidden",
        width: "80%",
        minWidth: "500px",
        height: "550px",
        bgcolor: "#81b29a",
        padding: "20px",
        margin: "50px auto",
        border: "1px solid #3D405B",
      }}
    >
      <Typography align="center" variant="h2" mb={"10px"} color={"#414562"}>
        Last Products
      </Typography>
      <Box sx={{ width: "100%", height: "85%" }} >
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
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {items}
          </Swiper>
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </Box>
  );
}
