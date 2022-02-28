import axios from "axios";
import { toast } from "react-toastify";
import config from "../startup/config.json";
// axios.defaults.headers.common['x-auth-token'] = auth.getJwt()
axios.interceptors.response.use(null, (error) => {
  if (
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  ) {
    return Promise.reject(error);
  } else {
    console.log("<<<Logging the error>>>", error);
    toast.error("An unexpected error occurred.");
    // alert("An unexpected error occurred.");
  }
});

axios.defaults.baseURL = config.apiEndpoint;

export function setJwt(token) {
  axios.defaults.headers.common["x-auth-token"] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
