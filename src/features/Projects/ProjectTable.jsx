import React from "react";
import Empty from "../ui/Empty";
import Loading from "../ui/Loading";
import Table from "./Table";
import TableProject from "./TableProject";
import useOwnerProject from "./useOwnerProject";

function ProjectTable() {
  const { projects, isLoading } = useOwnerProject();
  if (isLoading) {
    return <Loading />;
  }
  if (!projects.length || projects == undefined) {
    return <Empty resourceName={"Projects"} />;
  }
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Project Title</th>
        <th>Category</th>
        <th>Budget</th>
        <th>Deadline</th>
        <th>Tags</th>
        <th>Freelancer</th>
        <th className="text-center">Status</th>
        <th className="text-center">Actions</th>
        <th>Show Requests</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <TableProject key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
