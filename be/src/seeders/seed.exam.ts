import fs from "fs";
import path from "path";
import csv from "csv-parser";
import ExamModel from "../models/exam.model";
import { connectDB } from "../configs/db.config";

const CSV_FILE_PATH = path.join(__dirname, "../data/diem_thi_thpt_2024.csv");

const seedData = async () => {
  try {
    if (!fs.existsSync(CSV_FILE_PATH)) {
      console.error(`Lỗi: File ${CSV_FILE_PATH} không tồn tại`);
      process.exit(1);
    }

    await connectDB();
    await ExamModel.deleteMany({});

    const exams: any[] = [];
    fs.createReadStream(CSV_FILE_PATH)
      .pipe(csv())
      .on("data", (row) => {
        exams.push({
          sbd: row.sbd,
          toan: row.toan ? Number(row.toan) : undefined,
          ngu_van: row.ngu_van ? Number(row.ngu_van) : undefined,
          ngoai_ngu: row.ngoai_ngu ? Number(row.ngoai_ngu) : undefined,
          vat_li: row.vat_li ? Number(row.vat_li) : undefined,
          hoa_hoc: row.hoa_hoc ? Number(row.hoa_hoc) : undefined,
          sinh_hoc: row.sinh_hoc ? Number(row.sinh_hoc) : undefined,
          lich_su: row.lich_su ? Number(row.lich_su) : undefined,
          dia_li: row.dia_li ? Number(row.dia_li) : undefined,
          gdcd: row.gdcd ? Number(row.gdcd) : undefined,
          ma_ngoai_ngu: row.ma_ngoai_ngu || undefined,
        });
      })
      .on("end", async () => {
        await ExamModel.insertMany(exams);
        console.log("Nhập dữ liệu thành công, tổng: ", exams.length, "bản ghi");
        process.exit(0);
      });
  } catch (error) {
    console.error("Lỗi nhập dữ liệu:", error);
    process.exit(1);
  }
};

seedData();
