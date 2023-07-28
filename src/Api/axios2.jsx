import axios from "axios";
// import { URL } from "./Constants";
import { toast } from "react-toastify";
import { BaseUrl } from "../constants/baseUrl";


// axios.defaults.withCredentials = true;


export const apiInstanceV2 = axios.create({
  baseURL: BaseUrl,
  headers: {
    Accept: "application/json",
  },
});

const responseSuccessHandler = (response) => {
  return response;
};

const responseErrorHandler = (error) => {
  if (!navigator.onLine) {
    toast.error("Request failed, Please check your network connection!");
  }
  return Promise.reject(error);
};

apiInstanceV2.interceptors.request.use(
  function (config) {
    // document.getElementById("overlay").style.display = "block";
    const token = localStorage.getItem('bearerToken');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiInstanceV2.interceptors.response.use(
  (response) => responseSuccessHandler(response),
  (error) => responseErrorHandler(error)
);

export default apiInstanceV2;
