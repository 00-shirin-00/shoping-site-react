import HandleError from "../Utils/HandleError.js";
// وارد کردن کلاس `HandleError` برای مدیریت خطاهای سفارشی

import catchAsync from "../Utils/catchAsync.js";
// وارد کردن تابع `catchAsync` برای مدیریت خطاهای ناگهانی در توابع async

import jwt from "jsonwebtoken";
// وارد کردن کتابخانه `jsonwebtoken` برای مدیریت توکن‌های JWT
// =======================================================================

const isLogin = catchAsync(async (req, res, next) => {
  // تعریف Middleware `isLogin` برای بررسی اینکه آیا کاربر وارد سیستم شده است یا خیر

  try {
    const token = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET
    );
    // بررسی توکن JWT:
    // - ابتدا هدر `Authorization` از درخواست گرفته می‌شود.
    // - توکن از هدر جدا شده و با استفاده از `jwt.verify` بررسی می‌شود.
    // - اگر توکن معتبر باشد، کاربر وارد سیستم شده است.

    return next();
    // اگر توکن معتبر باشد، درخواست به Middleware یا کنترلر بعدی ارسال می‌شود.
  } catch (err) {
    return next(new HandleError("you don't have permission", 401));
    // اگر توکن معتبر نباشد یا خطایی رخ دهد، خطای 401 (عدم دسترسی) برگردانده می‌شود.
  }
});

export default isLogin;
