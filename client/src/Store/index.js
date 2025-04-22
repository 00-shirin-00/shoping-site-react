// وارد کردن reducer مربوط به احراز هویت
import authSliceReducer from "./Slice/AuthSlice"; // برای مدیریت وضعیت احراز هویت کاربران

// وارد کردن تابع configureStore از Redux Toolkit
import { configureStore } from "@reduxjs/toolkit"; // برای پیکربندی و ایجاد استور

// وارد کردن reducer مربوط به سبد خرید
import CartSlice from "./Slice/CartSlice"; // برای مدیریت وضعیت سبد خرید

// ایجاد استور Redux با استفاده از configureStore
const store = configureStore({
  reducer: {
    auth: authSliceReducer, // اضافه کردن reducer احراز هویت به استور
    cart: CartSlice, // اضافه کردن reducer سبد خرید به استور
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store; // صادر کردن استور برای استفاده در فایل‌های دیگر
