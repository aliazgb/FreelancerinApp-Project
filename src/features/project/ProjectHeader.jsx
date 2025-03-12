import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import useMoveBack from "../hooks/useMoveBack";
import Project from "../pages/Project";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex center">
      <button onClick={moveBack} className="text-secondary-500">
        <HiArrowRight />
      </button>
      <h1 className="text-xl mr-8 font-black text-secondary-700">لیست درخواست های {project.title}</h1>
    </div>
  );
}

export default ProjectHeader;
