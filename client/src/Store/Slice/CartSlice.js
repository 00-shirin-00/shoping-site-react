// وارد کردن تابع createSlice از Redux Toolkit
import { createSlice } from "@reduxjs/toolkit"; // برای ایجاد یک اسلایس در Redux

// تعریف وضعیت اولیه برای سبد خرید
const initialState = {
  items: [], // آرایه‌ای برای ذخیره آیتم‌های موجود در سبد خرید
  totalPrice: 0, // مقدار اولیه قیمت کل سبد خرید
};

// ایجاد اسلایس سبد خرید با استفاده از createSlice
const cartSlice = createSlice({
  name: "cartSlice", // نام اسلایس
  initialState, // مقدار اولیه وضعیت
  reducers: {
    // اکشن clear برای خالی کردن سبد خرید
    clear(state) {
      state.items = []; // خالی کردن آرایه آیتم‌ها
      state.totalPrice = 0; // تنظیم قیمت کل به صفر
    },
    // اکشن remove برای حذف یک آیتم از سبد خرید
    remove(state, action) {
      const productId = action.payload; // شناسه محصولی که باید حذف شود
      state.items = state.items.filter((e) => {
        if (e._id == productId) {
          // بررسی اینکه آیا آیتم مورد نظر در سبد وجود دارد
          e.cartQuantity = e.cartQuantity - 1; // کاهش تعداد آیتم در سبد
          state.totalPrice = state.totalPrice - e?.price; // کاهش قیمت کل بر اساس قیمت آیتم
          if (e.cartQuantity == 0) {
            // اگر تعداد آیتم به صفر رسید، آن را حذف کن
            return false;
          }
        }
        return e; // بازگرداندن آیتم‌های باقی‌مانده
      });
    },
    // اکشن add برای اضافه کردن یک آیتم به سبد خرید
    add(state, action) {
      let add = false; // متغیری برای بررسی اینکه آیا آیتم جدید است یا خیر
      const product = action.payload; // محصولی که باید اضافه شود
      state.totalPrice = state.totalPrice + product?.price; // افزایش قیمت کل بر اساس قیمت محصول
      state.items = state.items?.map((e) => {
        if (e._id == product._id) {
          // بررسی اینکه آیا محصول قبلاً در سبد وجود دارد
          e.cartQuantity = e.cartQuantity + 1; // افزایش تعداد آیتم در سبد
          add = true; // تنظیم متغیر به true برای نشان دادن اینکه آیتم قبلاً وجود داشته است
        }
        return e; // بازگرداندن آیتم‌های به‌روزرسانی‌شده
      });
      if (!add) {
        // اگر آیتم جدید بود
        state.items.push({ ...product, cartQuantity: 1 }); // اضافه کردن آیتم به سبد با مقدار اولیه 1
      }
    },
  },
});

// صادر کردن اکشن‌های add، remove و clear برای استفاده در کامپوننت‌ها
export const { add, remove, clear } = cartSlice.actions;

// صادر کردن reducer برای استفاده در استور
export default cartSlice.reducer;
