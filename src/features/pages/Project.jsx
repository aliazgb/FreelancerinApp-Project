import React from "react";
import { useProject } from "../Projects/useProject";
import ProjectHeader from "../project/ProjectHeader";
import ProposalTable from "../project/ProposalTable";

function Project() {
  const { project, isLoading} = useProject();
  return (
    <div className="mr-8 space-y-6">
      <ProjectHeader project={project}/>
      <ProposalTable />
    </div>
  );
}

export default Project;
