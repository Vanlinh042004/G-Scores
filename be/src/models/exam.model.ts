import mongoose, { Schema, Document } from 'mongoose';

export interface IExam extends Document {
  sbd: string;
  toan?: number;
  ngu_van?: number;
  ngoai_ngu?: number;
  vat_li?: number;
  hoa_hoc?: number;
  sinh_hoc?: number;
  lich_su?: number;
  dia_li?: number;
  gdcd?: number;
  ma_ngoai_ngu?: string;
}

const ExamSchema = new Schema({
  sbd: { type: String, required: true, unique: true },
  toan: { type: Number, min: 0, max: 10 },
  ngu_van: { type: Number, min: 0, max: 10 },
  ngoai_ngu: { type: Number, min: 0, max: 10 },
  vat_li: { type: Number, min: 0, max: 10 },
  hoa_hoc: { type: Number, min: 0, max: 10 },
  sinh_hoc: { type: Number, min: 0, max: 10 },
  lich_su: { type: Number, min: 0, max: 10 },
  dia_li: { type: Number, min: 0, max: 10 },
  gdcd: { type: Number, min: 0, max: 10 },
  ma_ngoai_ngu: { type: String }
});

const ExamModel = mongoose.model<IExam>('Exam', ExamSchema);
export default ExamModel;