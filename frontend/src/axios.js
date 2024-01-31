import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://192.168.0.11:8800/api/",
  withCredentials: true,
});
