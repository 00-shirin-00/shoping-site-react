import HandleError from "../utils/handleError.js";
import catchAsync from "../Utils/catchAsync.js";
import jwt from "jsonwebtoken";

const isAdmin = catchAsync(async (req, res, next) => {
  try {


    // //<<<------------------------->>
    //   if (!req.headers.authorization) {
    //     return next(new HandleError("Authorization header is missing", 401));
    //   }
    



    
    const { role } = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET
    );
    if (role !== "admin") {
      return next(new HandleError("you don't have permission", 401));
    }
    return next();
  } catch (err) {
    return next(new HandleError("you don't have permission", 401));
  }
});

export default isAdmin;
