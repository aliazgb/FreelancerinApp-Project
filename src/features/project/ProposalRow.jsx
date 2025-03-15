import React, { useState } from "react";
import truncateText from "../../utils/truncateText";
import Table from "../Projects/Table";
import Modal from "../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary ",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  const [open, setOpen] = useState();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal open={open} onClose={()=>setOpen(false)} title=" درخواست تغییر وضعیت">
          <ChangeProposalStatus/>
        </Modal>
        <button onClick={()=>setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
