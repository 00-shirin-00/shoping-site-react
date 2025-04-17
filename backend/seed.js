import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./Models/product.model.js";
import Category from "./Models/category.model.js";
import Slider from "./Models/slider.model.js";
import fs from "fs";

dotenv.config();

const importData = async () => {
  try {
    // اتصال به دیتابیس
    await mongoose.connect(process.env.DATA_BASE_URI);
    console.log("Database connected!");

    

    // خواندن داده‌ها از فایل‌های JSON
    const products = JSON.parse(
      fs.readFileSync("./db/test.products.json", "utf-8")
    ).map((product) => ({
      ...product,
      _id: product._id?.$oid || product._id,
      categoryId: product.categoryId?.$oid || product.categoryId,
      createdAt: product.createdAt?.$date || product.createdAt,
      updatedAt: product.updatedAt?.$date || product.updatedAt,
    }));

    const categories = JSON.parse(
      fs.readFileSync("./db/test.categories.json", "utf-8")
    ).map((category) => ({
      ...category,
      _id: category._id?.$oid || category._id,
      createdAt: category.createdAt?.$date || category.createdAt,
      updatedAt: category.updatedAt?.$date || category.updatedAt,
    }));

    const sliders = JSON.parse(
      fs.readFileSync("./db/test.sliders.json", "utf-8")
    ).map((slider) => ({
      ...slider,
      _id: slider._id?.$oid || slider._id,
      createdAt: slider.createdAt?.$date || slider.createdAt,
      updatedAt: slider.updatedAt?.$date || slider.updatedAt,
    }));

    // وارد کردن داده‌ها به دیتابیس
    await Product.insertMany(products);
    await Category.insertMany(categories);
    await Slider.insertMany(sliders);

    console.log("Data imported successfully!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

importData();
