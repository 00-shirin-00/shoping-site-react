// وارد کردن ماژول‌های مورد نیاز از کتابخانه‌های مختلف
import { fileURLToPath } from "url"; // برای تبدیل URL به مسیر فایل
import express from "express"; // برای ایجاد سرور و مدیریت درخواست‌ها
import cors from "cors"; // برای فعال کردن Cross-Origin Resource Sharing
import path from "path"; // برای مدیریت مسیرهای فایل
import HandleError from "./utils/handleError.js"; // برای مدیریت خطاهای سفارشی
import catchError from "./Utils/catchError.js"; // برای مدیریت خطاهای ناگهانی
import userRouter from "./routes/user.route.js"; // مسیرهای مربوط به کاربران
import authRouter from "./routes/auth.route.js"; // مسیرهای مربوط به احراز هویت
import productRouter from "./routes/product.route.js"; // مسیرهای مربوط به محصولات
import categoryRouter from "./routes/category.route.js"; // مسیرهای مربوط به دسته‌بندی‌ها
import sliderRouter from "./Routes/slider.route.js"; // مسیرهای مربوط به اسلایدرها
import searchRouter from "./routes/search.route.js"; // مسیرهای مربوط به جستجو
import uploadRouter from "./routes/upload.route.js"; // مسیرهای مربوط به آپلود فایل

// تعیین مسیر فایل فعلی و دایرکتوری آن
const __filename = fileURLToPath(import.meta.url); // تبدیل URL به مسیر فایل
export const __dirname = path.dirname(__filename); // گرفتن مسیر دایرکتوری فایل

const app = express(); // ایجاد یک اپلیکیشن Express

app.use(express.json()); // فعال کردن پشتیبانی از JSON در درخواست‌ها
app.use(cors()); // فعال کردن CORS برای دسترسی از دامنه‌های مختلف
app.use(express.static("Public")); // تنظیم مسیر فایل‌های استاتیک

// تعریف مسیرهای مختلف برای API
app.use("/api/user", userRouter); // مسیرهای مربوط به کاربران
app.use("/api/auth", authRouter); // مسیرهای مربوط به احراز هویت
app.use("/api/product", productRouter); // مسیرهای مربوط به محصولات
app.use("/api/category", categoryRouter); // مسیرهای مربوط به دسته‌بندی‌ها
app.use("/api/slider", sliderRouter); // مسیرهای مربوط به اسلایدرها
app.use("/api/search", searchRouter); // مسیرهای مربوط به جستجو
app.use("/api/upload", uploadRouter); // مسیرهای مربوط به آپلود فایل

// مدیریت خطا برای مسیرهای تعریف‌نشده
app.use("*", (req, res, next) => {
  return next(new HandleError("Route not found", 404)); // ایجاد خطای 404 برای مسیرهای نامعتبر
});

app.use(catchError); // مدیریت خطاهای ناگهانی با استفاده از middleware

export default app; // صادر کردن اپلیکیشن برای استفاده در فایل‌های دیگر
