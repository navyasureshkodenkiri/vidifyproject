const serverUrl = "http://localhost:3001";

const API = {
  main: serverUrl + "/",
  login: serverUrl + "/login",
  register: serverUrl + "/register",
  verifyOtp: serverUrl + "/verify-otp",
  categoryVideos: serverUrl + "/getVideoCategories",
};
export default API;
