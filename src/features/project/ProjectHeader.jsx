import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import useMoveBack from "../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center lg:px-10 flex-war flex-col space-y-5 lg:flex-row flex-nowrap">
      <button onClick={moveBack} className=" text-bold text-primary-900 ">
        <HiArrowLeft className="lg:w-5 h-5"/>
      </button>
      <h1 className="text-xs mx-auto font-black text-secondary-700 lg:text-lg">
        All Requests for  <span className="text-primary-600">{project?.title}</span> 
      </h1>
    </div>
  );
}

export default ProjectHeader;
