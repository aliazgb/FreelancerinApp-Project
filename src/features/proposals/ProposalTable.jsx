import React from "react";
import Table from "../Projects/Table";
import TableProposal from "./TableProposal";

function ProposalTable({ proposals }) {
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposals, index) => (
          <TableProposal key={proposals._id} proposals={proposals} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
