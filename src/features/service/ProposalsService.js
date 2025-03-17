import http from "./httpService";

export  function getProposalsApit(id) {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}
