import React from "react";
import ProjectsHeader from "../Projects/ProjectHeader";
import ProjectTable from "../Projects/ProjectTable";
import useOwnerProject from "../Projects/useOwnerProject";

function Projects() {
  return (
    <div className="mt-6 px-1">
      <ProjectsHeader />
      <ProjectTable />
    </div>
  );
}

export default Projects;
