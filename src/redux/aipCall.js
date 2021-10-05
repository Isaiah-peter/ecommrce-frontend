import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
