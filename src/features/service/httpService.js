import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
app.interceptors.request.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status == 401) {
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
