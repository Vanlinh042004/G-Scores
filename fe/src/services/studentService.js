import { get } from "../utils/request";
export const getStudentService = async (Sbd) => {
  return get(`/score/${Sbd}`);
};
export const getStatsService = async () => {
  return get("/stats");
};
export const getStudentsTop10Service = async () => {
  return get("/top10");
};
