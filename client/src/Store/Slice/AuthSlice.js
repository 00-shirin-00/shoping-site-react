// وارد کردن تابع createSlice از Redux Toolkit
import { createSlice } from "@reduxjs/toolkit"; // برای ایجاد یک اسلایس در Redux
// ====================================================
// تعریف وضعیت اولیه برای احراز هویت
const initialState = {
  token: null, // مقدار اولیه توکن کاربر
  user: null, // مقدار اولیه اطلاعات کاربر
};

// ایجاد اسلایس احراز هویت با استفاده از createSlice
const authSlice = createSlice({
  name: "authSlice", // نام اسلایس
  initialState, // مقدار اولیه وضعیت
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

// صادر کردن اکشن‌های login و logout برای استفاده در کامپوننت‌ها
export const { login, logout } = authSlice.actions;

// صادر کردن reducer برای استفاده در استور
export default authSlice.reducer;
