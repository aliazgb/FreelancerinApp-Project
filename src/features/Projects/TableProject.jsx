import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiEye, HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import toLocalDateShort from "../../utils/toLocalDateShort";
import truncateText from "../../utils/truncateText";
import ConfirmDelete from "../ui/ConfirmDelete";
import Modal from "../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import Table from "./Table";
import ToggleProjectStatus from "./ToggleProjectStatus";
import useRemoveProject from "./useRemoveProject";

function TableProject({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState();
  const [isDeleteOpen, setIsDeleteOpen] = useState();
  const { removeProject, isDeleting } = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="text-center">{truncateText(project.title, 18)}</td>
      <td>{project?.category?.title}</td>
      <td className="text-center">{project.budget} $</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w[200px] justify-center">
          {project.tags.map((tag) => (
            <span key={tag} className="bade badge--secondary ">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="flex justify-center">{project?.freelancer|| "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <HiOutlinePencilSquare className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={project.title}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                onClose={() => setIsEditOpen(false)}
                editProject={project}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <FaRegTrashCan className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={project.title}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                onclose={() => setIsDeleteOpen(false)}
                onConfirm={() => removeProject(project._id)}
                resourceName={project.title}
              />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center text-primary-900">
          <HiEye className="w-5 h-5" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default TableProject;
