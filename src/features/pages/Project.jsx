import React from "react";
import { useProject } from "../Projects/useProject";
import ProjectHeader from "../project/ProjectHeader";
import ProposalTable from "../project/ProposalTable";
import Loader from "../ui/Loader";
function Project() {
  const { project, isLoading } = useProject();
  console.log(project)
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mr-8 space-y-6">
      <ProjectHeader project={project} />
      <ProposalTable proposal={project.proposals} />
    </div>
  );
}

export default Project;
