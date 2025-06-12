import express from 'express';
import ExamController from '../controllers/exam.controller';
import { validateSbd } from '@/middlewares/validation';

const examRouter = express.Router();


examRouter.get('/score/:sbd', validateSbd, ExamController.getScore);

examRouter.get('/stats', ExamController.getStats);

examRouter.get('/top10', ExamController.getTop10);

export default examRouter;