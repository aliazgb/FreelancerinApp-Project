import http from "./httpService";

export default function getOwnerPRojectApi() {
  return http.get("/project/list").then(({ data }) => data.data);
}
