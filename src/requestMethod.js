import axios from "axios";

const BASE_URL = "http://Localhost:5000";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjEsIklzQWRtaW4iOnRydWUsImV4cCI6MTYzMzI2NzA1Mn0.mKQkgemLt4ku--DYAubkgtZYLTumgiTxbi5mKALH_A8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const UserRequest = axios.create({
  baseURL: BASE_URL,
});
