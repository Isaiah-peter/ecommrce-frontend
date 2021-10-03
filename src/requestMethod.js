import axios from "axios";

const BASE_URL = "http://Localhost:5000";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjEsIklzQWRtaW4iOnRydWUsImV4cCI6MTYzMzM1NDE0MH0.V4QCNm9GC35C7gwNmls-2QkzXbLVTkIVQdPidOHOFAc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const UserRequest = axios.create({
  baseURL: BASE_URL,
});
