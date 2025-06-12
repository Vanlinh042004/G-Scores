import axios from "axios";
const API_DOMAIN = "http://localhost:5000";
export const get = async (url) => {
  const response = await axios.get(`${API_DOMAIN}${url}`);
  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data;
};
