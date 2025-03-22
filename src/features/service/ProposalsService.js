import http from "./httpService";

export function chageProposalStatusApi({ proposalId, ...data }) {
  console.log(data)
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
}

export function getProposalsApit(id) {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}
export function createProposalApi(data) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
