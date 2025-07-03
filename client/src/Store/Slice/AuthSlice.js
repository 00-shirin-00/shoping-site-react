import { createSlice } from "@reduxjs/toolkit";
// ====================================================
const initialState = {
  token: localStorage.getItem("token") || null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))  
    : null,
};

//  اسلایس احراز هویت
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // تعریف اکشن login برای ورود کاربر
    login(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;

      // ذخیره در localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    // تعریف اکشن logout برای خروج کاربر
    logout(state) {
      state.token = null;
      state.user = null;

      // حذف از localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
