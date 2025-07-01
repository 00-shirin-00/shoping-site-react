import authSliceReducer from "./Slice/AuthSlice"; //    احراز هویت 

import CartSlice from "./Slice/CartSlice"; //    سبد خرید

import { configureStore } from "@reduxjs/toolkit";

// ============================================
const store = configureStore({
  reducer: {
    auth: authSliceReducer, //احراز هویت
    cart: CartSlice, //سبد خرید
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
