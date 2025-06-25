import React, { useState } from "react";

//components
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  // این کامپوننت برای مدیریت احراز هویت کاربران طراحی شده است
  // و شامل فرم‌های ورود و ثبت‌نام می‌باشد.

  //states
  const [pageType, setPageType] = useState("login");

  //handler
  const handlePageType = () => {
    setPageType(pageType === "login" ? "register" : "login");
  };

  return (
    <>
      {
        /* اینجا می‌توانید کد مربوط به فرم ورود و ثبت‌نام را اضافه کنید */

        pageType === "login" ? (
          <Login handlePageType={handlePageType} /> // نمایش فرم ورود
        ) : (
          <Register handlePageType={handlePageType} /> // نمایش فرم ثبت‌نام
        )
      }
    </>
  );
}
