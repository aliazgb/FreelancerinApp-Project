import React from "react";
import Table from "../Projects/Table";
import Empty from "../ui/Empty";
import ProposalRow from "./ProposalRow";

function ProposalTable({ proposal, index }) {
  if (!proposal) {
    return <Empty />;
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
        {proposal.map((project, index) => (
          <ProposalRow proposal={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
