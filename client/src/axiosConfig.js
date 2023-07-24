/* eslint-disable no-undef */
import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("persist:auth");
    console.log(token);
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
export default instance;
