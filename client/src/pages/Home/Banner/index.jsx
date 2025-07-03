import React, { useEffect, useState } from "react";
import notify from "../../../Utils/notify";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Box } from "@mui/material";

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
    <Box sx={{ width: "100%",minWidth:"500px", height: "95vh" }} >
      {sliders?.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={sliders.length > 1} // اگر تعداد اسلایدها بیشتر از 1 باشد، حلقه فعال می‌شود
          centeredSlides={true} // اسلاید فعلی در وسط قرار می‌گیرد
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000, // زمان تأخیر بین اسلایدها (به میلی‌ثانیه)
            disableOnInteraction: false, // چرخش ادامه پیدا کند حتی پس از تعامل کاربر
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="banner"
        >
          {items}
        </Swiper>
      ) : (
        <p>Loading...</p> // پیام یا لودر در صورت نبود اسلاید
      )}
    </Box>
  );
}
