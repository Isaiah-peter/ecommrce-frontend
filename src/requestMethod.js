import axios from "axios";

const BASE_URL = "http://Localhost:5000";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjEsIklzQWRtaW4iOnRydWUsImV4cCI6MTYzMzQ0Nzk3OH0.mgdtkkw6o4qBoMhaCKlw06j9kbPyaSrW6oUJeJGT1aM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const UserRequest = axios.create({
  baseURL: BASE_URL,
});
