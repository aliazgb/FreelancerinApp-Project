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
  if (!projects.length > 0) {
    <Empty />;
  }
  return (
    <Table>
      <Table.Header>
        {" "}
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>{" "}
      <Table.Body>
        {projects.map((project, index) => (
          <TableProject key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
