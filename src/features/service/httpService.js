import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});
app.interceptors.request.use(
  (res) =>res,
  async (err)=>{
    const originalConfig=err.config;
    if (err.response.status==401) {
      
    }
  }
)
const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  put: app.put,
};
export default http;
