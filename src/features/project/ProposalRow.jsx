import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import truncateText from "../../utils/truncateText";
import Table from "../Projects/Table";
import Modal from "../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusStyle = [
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
      <td className="text-center">{proposal.duration} Day</td>
      <td>{proposal.price} $</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td className="text-center">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Request to Change Status"
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <FaExchangeAlt className="text-primary-900 w-4 h-4"/>
        </button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
