import { createSlice } from "@reduxjs/toolkit";
// ====================================================
const initialState = {
  token: null,
  user: null, // مقدار اولیه اطلاعات کاربر
};

// ایجاد اسلایس احراز هویت
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // تعریف اکشن login برای ورود کاربر
    login(state, action) {
      state.token = action.payload.token; // ذخیره توکن کاربر
      state.user = action.payload.user; // ذخیره اطلاعات کاربر
    },
    // تعریف اکشن logout برای خروج کاربر
    logout(state) {
      state.token = null; // حذف توکن کاربر
      state.user = null; // حذف اطلاعات کاربر
    },
  },
});

//  اکشن‌های برای استفاده در کامپوننت‌ها
export const { login, logout } = authSlice.actions;

// صادر کردن reducer برای استفاده در استور
export default authSlice.reducer;
