import mongoose from "mongoose";
import { ENV } from "./env.config";

const MONGODB_URL = ENV.MONGODB_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Kết nối MongoDB thành công");
  } catch (error) {
    console.error("Kết nối MongoDB thất bại:", error);
    process.exit(1);
  }
};
