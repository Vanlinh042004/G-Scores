import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  //MONGODB_URL: "mongodb://127.0.0.1:27017/examdb",
  MONGODB_URL:
    "mongodb+srv://vanlinh042004:rmzl5RaH8WkSah31@cluster0.5cvqe9s.mongodb.net/examdb?retryWrites=true&w=majority&appName=Cluster0",
  PORT: 5000,
};
