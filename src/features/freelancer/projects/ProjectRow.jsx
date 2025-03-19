import React from "react";
import { MdAssignmentAdd } from "react-icons/md";
import truncateText from "../../../utils/truncateText";
import Table from "../../Projects/Table";

const projectStatus = {
  OPEN: { label: "باز", className: "badge--success" },
  CLOSED: { label: "بسته", className: "badge--danger" },
};

function ProjectRow({ projects, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(projects.title, 30)}</td>
      <td>{projects.budget}</td>
      <td>{projects.deadline}</td>
      <td>
        <span className={`badge ${projectStatus[projects.status].className}`}>
          {projectStatus[projects.status].label}
        </span>
      </td>
      <td>
        <button>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
