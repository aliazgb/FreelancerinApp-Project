import React, { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import truncateText from "../../../utils/truncateText";
import Table from "../../Projects/Table";
import CreateProposal from "../../proposals/CreateProposal";
import Modal from "../../ui/Modal";
import toLocalDateShort from "../../../utils/toLocalDateShort";

const projectStatus = {
  OPEN: { label: "باز", className: "badge--success" },
  CLOSE: { label: "بسته", className: "badge--danger" },
};

function ProjectRow({ projects, index }) {
  console.log(projects)
  const { _id } = projects;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(projects.title, 30)}</td>
      <td>{projects.budget}</td>
      <td>{toLocalDateShort(projects.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[projects.status].className}`}>
          {projectStatus[projects.status].label}
        </span>
      </td>
      <td>
        <Modal
          title={`انجام پروژه ${projects.title}`}
          open={open}
          onClose={() => setOpen(false)}
        >
          <CreateProposal projectId={_id} onClose={() => setOpen(false)}/>
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
