import React from "react";
import { useProject } from "../Projects/useProject";
import ProjectHeader from "../project/ProjectHeader";
import ProposalTable from "../project/ProposalTable";
import Loader from "../ui/Loader";
function Project() {
  const { project, isLoading } = useProject();
  if (isLoading) {
    return <Loader />;
  }
  console.log(project)
  return (
    <div className="mr-8 space-y-6">
      <ProjectHeader project={project} />
      <ProposalTable proposals={project.proposal} />
    </div>
  );
}

export default Project;
