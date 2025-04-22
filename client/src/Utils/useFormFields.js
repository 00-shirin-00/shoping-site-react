// وارد کردن هوک useState از ری‌اکت
import { useState } from "react"; // برای مدیریت وضعیت فرم

// تعریف هوک سفارشی useFormFields
const useFormFields = () => {
  const [fields, setFields] = useState({}); // تعریف وضعیت اولیه برای فیلدهای فرم

  // تابع handleChange برای مدیریت تغییرات در فیلدهای فرم
  const handleChange = (e) => {
    const { target } = e; // استخراج عنصر هدف از رویدادconst target = e.target;
    
  setFields({
      ...fields, // نگه داشتن مقادیر قبلی فیلدها
      [target.name]: target.value, // به‌روزرسانی مقدار فیلد تغییر یافته
    });
  };

  return [fields, handleChange]; // بازگرداندن وضعیت فیلدها و تابع مدیریت تغییرات
};

export default useFormFields; // صادر کردن هوک برای استفاده در فایل‌های دیگر
