import React from "react";
import Table from "../../Projects/Table";
import useProjects from "../../hooks/useProjects";
import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { projects, isLoading } = useProjects();
  console.log(projects);
  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین </th>
        <th>وضعیت </th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow projects={project} index={index} key={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
