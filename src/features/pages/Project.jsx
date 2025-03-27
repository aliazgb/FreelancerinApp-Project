import React from "react";
import { useProject } from "../Projects/useProject";
import ProjectHeader from "../project/ProjectHeader";
import ProposalTable from "../project/ProposalTable";
import Empty from "../ui/Empty";
import Loader from "../ui/Loader";
function Project() {
  const { project, isLoading } = useProject();
  if (isLoading) {
    return <Loader />;
  }
  if (!project.proposals.length) {
    return <Empty resourceName={"Request for this project "} />;
  }
  return (
    <div className=" space-y-6">
      <ProjectHeader project={project} />
      <ProposalTable proposal={project.proposals} />
    </div>
  );
}

export default Project;
