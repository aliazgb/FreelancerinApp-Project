import React from "react";
import Table from "../Projects/Table";
import TableProposal from "./TableProposal";

function ProposalTable({ proposals }) {
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Description</th>
        <th>Delivery Time</th>
        <th>Cost</th>
        <th>Status</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposals, index) => (
          <TableProposal
            key={proposals._id}
            proposals={proposals}
            index={index}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
