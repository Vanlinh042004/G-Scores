import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  MONGODB_URL: "mongodb://127.0.0.1:27017/examdb",
  PORT: 5000,
};
