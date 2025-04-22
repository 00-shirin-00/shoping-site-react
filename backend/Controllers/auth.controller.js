import HandleError from "../utils/handleError.js";
import catchAsync from "../Utils/catchAsync.js";
import User from "../Models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = catchAsync(async (req, res, next) => {
  const { username = null, password = null, email = null } = req.body;



  if (password?.length < 4) {
    return next(new HandleError("must be 4 character at least"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  await User.create({ username, password: hashedPassword, email });

  res.status(201).json({
    success: true,
    message: "user created successfully",
  });

  console.log("Password:", password);
  console.log("Hashed:", hashedPassword);
});

export const signin = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  // لاگ‌گذاری ورودی‌های درخواست
  console.log("Signin Request Body:", req.body);

  const validUser = await User.findOne({ username });
  if (!validUser) return next(new HandleError("user not found", 404));

  // لاگ‌گذاری رمز عبور هش شده از دیتابیس
  console.log("Hashed Password from DB:", validUser.password);



  const validPassword = bcryptjs.compareSync(password, validUser.password);

  if (!validPassword)
    return next(new HandleError("password is incorrect", 401));

  const token = jwt.sign(
    { id: validUser._id, role: validUser.role },
    process.env.JWT_SECRET
  );

  const { password: pw, ...userInfo } = validUser._doc;

  // لاگ‌گذاری موفقیت ورود
  console.log("User logged in successfully:", userInfo);

  return res.status(200).json({
    success: true,
    data: {
      user: userInfo,
      token,
    },
    message: "login successfully",
  });
});
