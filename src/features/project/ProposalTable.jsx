import React from "react";
import Table from "../Projects/Table";
import useOwnerProject from "../Projects/useOwnerProject";
import Loader from "../ui/Loader";
import ProposalRow from "./ProposalRow";

function ProposalTable() {
  const { projects, isLoading } = useOwnerProject();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه </th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.proposal.map((project, index) => (
          <ProposalRow proposal={project.proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
