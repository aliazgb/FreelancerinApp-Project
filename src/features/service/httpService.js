import axios from "axios";
const BASE_URL = "https://freelanceringapp-backend.onrender.com/api";
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status == 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { date } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (date) {
          return app(originalConfig);
        }
      } catch (error) {}
    }
  }
);
const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  put: app.put,
};
export default http;
