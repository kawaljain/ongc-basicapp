import axios from "axios";

const BASE_URL='http://34.205.171.75:8080';

const axiosInstance = axios.create({
  baseURL: BASE_URL
});



axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers['Content-Type'] = "application/json";
    config.headers['Accept'] = "application/json";
    config.headers['Language'] = "en";

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  async function (response) {
    console.log('success');
    return response;
  },
  async function (error) {
      console.log('error');

    return Promise.reject(error);
  }
);

export default axiosInstance;
