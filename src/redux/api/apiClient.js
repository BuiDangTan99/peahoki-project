import axios from "axios";
import * as qs from "query-string";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API_DEV,
  headers: {
    // "content-type": "application/json",
    "Authorization": `Bearer ${process.env.REACT_APP_URL_API_KEY}`,
  },
  paramsSerializer: (params) => qs.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient
