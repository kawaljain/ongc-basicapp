import axiosInstance from "./../utilis/AppAxios";
export default class Api {
  static postRequest = async (url, postData = {}, requestConfig = {}) => {
    const response = await axiosInstance.post(url, postData, requestConfig);
    return response;
  };
}
