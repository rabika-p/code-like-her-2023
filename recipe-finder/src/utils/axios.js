import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const endpoints = {
  list: "/search.php?s=",
};

export default api;
