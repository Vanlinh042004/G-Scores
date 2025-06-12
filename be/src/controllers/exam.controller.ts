import { Request, Response } from "express";
import ExamService from "../services/exam.service";

class ExamController {
  async getScore(req: Request, res: Response) {
    try {
      const { sbd } = req.params;
      const score = await ExamService.findScoreBySbd(sbd);
      if (!score) {
        res.status(404).json({ error: "Score not found for the given SBD" });
        return;
      }
      res.json(score);
    } catch (error) {
      res.status(500).json({ error: "Lỗi server" });
    }
  }

  async getStats(req: Request, res: Response) {
    try {
      const stats = await ExamService.getScoreStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Lỗi server" });
    }
  }

  async getTop10(req: Request, res: Response) {
    try {
      const top10 = await ExamService.getTop10GroupA();
      res.json(top10);
    } catch (error) {
      res.status(500).json({ error: "Lỗi server" });
    }
  }
}

export default new ExamController();
