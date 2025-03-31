import React, { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import truncateText from "../../../utils/truncateText";
import Table from "../../Projects/Table";
import CreateProposal from "../../proposals/CreateProposal";
import Modal from "../../ui/Modal";

const projectStatus = {
  OPEN: { label: "Open", className: "badge--success" },
  CLOSED: { label: "Closed", className: "badge--danger" },
};

function ProjectRow({ projects, index }) {
  const { _id } = projects;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(projects.title, 30)}</td>
      <td>{projects.budget} $</td>
      <td>{toLocalDateShort(projects.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[projects.status].className}`}>
          {projectStatus[projects.status].label}
        </span>
      </td>
      <td className="pr-8">
        <Modal
          title={`Project Completed: ${projects.title}`}
          open={open}
          onClose={() => setOpen(false)}
        >
          <CreateProposal projectId={_id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
