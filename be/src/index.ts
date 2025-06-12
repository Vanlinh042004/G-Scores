import express from "express";
import { connectDB } from "./configs/db.config";
import examRoutes from "./routes/exam.route";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/", examRoutes);

app.listen(PORT, () => console.log(`Server chạy ở port ${PORT}`));
