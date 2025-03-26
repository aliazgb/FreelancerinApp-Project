import React from "react";
import truncateText from "../../utils/truncateText";
import Table from "../Projects/Table";
const proposalsStatus = [
  {
    label: "Rejected",
    className: "badge--danger",
  },
  {
    label: "Pending Approval",
    className: "badge--secondary",
  },
  {
    label: "Approved",
    className: "badge--success",
  },
];

function TableProposal({ proposals, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(proposals.description, 50)}</td>
      <td>{proposals.duration}</td>
      <td>{proposals.price}</td>
      <td>
        <span
          className={`badge ${proposalsStatus[proposals.status].className}`}
        >
          {proposalsStatus[proposals.status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default TableProposal;
