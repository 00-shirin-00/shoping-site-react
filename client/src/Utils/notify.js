// وارد کردن کتابخانه toast از react-hot-toast
import toast from "react-hot-toast"; // برای نمایش اعلان‌ها به کاربر

// تابع notify برای نمایش اعلان‌ها
const notify = (type, message) => {
  toast[type](message, {
    // نوع اعلان و پیام را مشخص می‌کند
    duration: 5000, // مدت زمان نمایش اعلان (2 ثانیه)
    position: "top-center", // موقعیت نمایش اعلان (بالای مرکز صفحه)
  });
};

export default notify; // صادر کردن تابع برای استفاده در فایل‌های دیگر
