import React from "react";
import ProjectTable from "../Projects/ProjectTable";
import ProjectsHeader from "../Projects/ProjectHeader";

function Projects() {
  return (
    <div className="mt-6 px-1">
      <ProjectsHeader />
      <ProjectTable />
      
    </div>
  );
}

export default Projects;
