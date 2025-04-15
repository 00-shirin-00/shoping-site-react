import React, { useState } from "react";
import notify from "../../../Utils/notify";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";import { Box } from "@mui/material";

export default function Banner() {
  //state for slider
  const [sliders, setSliders] = useState();

  //fetch
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(import.meta.env.VITE_BASE_API + "slider");
        const data = await res.json();
        setSliders(data.data);
      } catch (error) {
        notify("error", "somthing went wrong");
      }
    })();
  }, []);

  const items = sliders?.map((e, index) => (
    <SwiperSlide key={index}>
      <img src={import.meta.env.VITE_BASE_URL + e.image} alt={e.title} />
    </SwiperSlide>
  ));

  return (
    <Box sx={{ width: "100%", height: "80vh" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="banner"
      >
        {items}
      </Swiper>
    </Box>
  );
}

