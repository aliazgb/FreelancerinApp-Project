import React, { useState } from "react";
import { TbStatusChange } from "react-icons/tb";
import Table from "../../Projects/Table";
import Modal from "../../ui/Modal";
import ChangeUsersStatus from "./ChangeUsersStatus";

const statusStyle = [
  {
    label: "Rejected ",
    className: "badge--danger",
  },
  {
    label: "Pending Approval",
    className: "badge--secondary",
  },
  {
    label: "Verified",
    className: "badge--success",
  },
];

function UserRow({ users, index }) {
  const [open, setOpen] = useState();
  const { status } = users;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{users.name}</td>
      <td>
        <p>{users.email}</p>
      </td>
      <td className="text-center">{users.phoneNumber}</td>
      <td>{users.role} </td>
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
          <ChangeUsersStatus
            userId={users._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <TbStatusChange className="text-primary-900 w-4 h-4" />
        </button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
