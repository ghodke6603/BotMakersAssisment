import API from "../api/axios";

export const getAdminDashboard = () => {
  return API.get("/admin/dashboard");
};