import express from "express";
// وارد کردن کتابخانه Express برای ایجاد روتر و مدیریت مسیرها

import isAdmin from "../MiddleWares/isAdmin.js";
// وارد کردن Middleware `isAdmin` برای بررسی اینکه آیا کاربر مدیر (admin) است یا خیر

import isLogin from "../Middlewares/isLogin.js";
// وارد کردن Middleware `isLogin` برای بررسی اینکه آیا کاربر وارد سیستم شده است یا خیر

import {
  create,
  favoriteProduct,
  get,
  getAll,
  remove,
  update,
} from "../Controllers/product.controller.js";

const router = express.Router();

router.route("/").get(getAll).post(isAdmin, create);
router.route("/:id").get(get).patch(isAdmin, update).delete(isAdmin, remove);
router.route("/favorite/:id").post(isLogin, favoriteProduct)

export default router;
