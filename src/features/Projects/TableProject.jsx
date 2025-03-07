import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import toLocalDateShort from "../../utils/toLocalDateShort";
import truncateText from "../../utils/truncateText";
import ConfirmDelete from "../ui/ConfirmDelete";
import Modal from "../ui/Modal";
import Table from "./Table";
import useRemoveProject from "./useRemoveProject";
// import useRemoveProject from "./useRemoveProject";

function TableProject({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState();
  const [isDeleteOpen, setIsDeleteOpen] = useState();
  const { removeProject, isDeleting } = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{project.budget}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w[200px]">
          {project.tags.map((tag) => (
            <span key={tag} className="bade badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status == "OPEN" ? (
          <span className="badge badge--success ">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
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
              <ConfirmDelete
                resourceName={project.title}
                onclose={() => setIsEditOpen(false)}
                onConfirm={() => removeProject(project._id)}
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
    </Table.Row>
  );
}

export default TableProject;
