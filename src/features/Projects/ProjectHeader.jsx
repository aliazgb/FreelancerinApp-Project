import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center mb-8 flex-wrap space-y-2">
      <h1 className="font-black text-secondary-700 text-lg w-full text-center">Your Projects</h1>
      <Modal
        title="Add New Project"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2 w-15 h-8 "
      >
        <HiOutlinePlus />
        <span className="text-xs">Add New Project</span>
      </button>
    </div>
  );
}
export default ProjectsHeader;