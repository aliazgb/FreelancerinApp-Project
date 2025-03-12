import React from "react";
import Table from "../Projects/Table";
import TableProject from "../Projects/TableProject";

function ProposalTable() {
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <TableProject key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
