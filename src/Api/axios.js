import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/project-2-ddd77/us-central1/api",
  baseURL: "https://amazon-api-3z00.onrender.com/",
});


export {axiosInstance};