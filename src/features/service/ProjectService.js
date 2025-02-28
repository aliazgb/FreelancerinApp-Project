import http from "./httpService";

export default function getOwnerPRojectApi(params) {
  return  http.get("/project/owner-projects").then(({data})=>data.data)
}
