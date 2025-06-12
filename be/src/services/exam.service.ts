import ExamModel, { IExam } from "../models/exam.model";

export interface SubjectStats {
  above8: number;
  from6to8: number;
  from4to6: number;
  below4: number;
}

class ExamService {
  async findScoreBySbd(sbd: string): Promise<IExam | null> {
    return await ExamModel.findOne({ sbd });
  }

  async getScoreStats(): Promise<Record<string, SubjectStats>> {
    const subjects = [
      "toan",
      "ngu_van",
      "ngoai_ngu",
      "vat_li",
      "hoa_hoc",
      "sinh_hoc",
      "lich_su",
      "dia_li",
      "gdcd",
    ];
    const stats: Record<string, SubjectStats> = {};

    for (const subject of subjects) {
      const result = await ExamModel.aggregate([
        { $match: { [subject]: { $exists: true } } }, // Lọc bản ghi có điểm môn
        {
          $group: {
            _id: null,
            above8: { $sum: { $cond: [{ $gte: [`$${subject}`, 8] }, 1, 0] } },
            from6to8: {
              $sum: {
                $cond: [
                  {
                    $and: [
                      { $gte: [`$${subject}`, 6] },
                      { $lt: [`$${subject}`, 8] },
                    ],
                  },
                  1,
                  0,
                ],
              },
            },
            from4to6: {
              $sum: {
                $cond: [
                  {
                    $and: [
                      { $gte: [`$${subject}`, 4] },
                      { $lt: [`$${subject}`, 6] },
                    ],
                  },
                  1,
                  0,
                ],
              },
            },
            below4: { $sum: { $cond: [{ $lt: [`$${subject}`, 4] }, 1, 0] } },
          },
        },
      ]);
      stats[subject] = result[0]
        ? {
            above8: result[0].above8,
            from6to8: result[0].from6to8,
            from4to6: result[0].from4to6,
            below4: result[0].below4,
          }
        : { above8: 0, from6to8: 0, from4to6: 0, below4: 0 };
    }

    return stats;
  }

  // Lấy top 10 khối A
  async getTop10GroupA(): Promise<any[]> {
    const exams = await ExamModel.find({
      toan: { $exists: true },
      vat_li: { $exists: true },
      hoa_hoc: { $exists: true },
    }).lean();

    return exams
      .map((exam) => ({
        ...exam,
        average: (exam.toan + exam.vat_li + exam.hoa_hoc) / 3,
      }))
      .sort((a, b) => b.average - a.average)
      .slice(0, 10);
  }
}

export default new ExamService();
