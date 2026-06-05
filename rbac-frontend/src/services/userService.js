import API from "../api/axios";

export const getUserProfile = () => {
  return API.get("/user/profile");
};