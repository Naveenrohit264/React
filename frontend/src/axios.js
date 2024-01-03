import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://192.168.30.76:8800/api/",
  withCredentials: true,
});
