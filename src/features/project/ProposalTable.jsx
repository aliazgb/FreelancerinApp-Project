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
        <th>Freelancer</th>
        <th>Description</th>
        <th>Delivery Time</th>
        <th>Cost</th>
        <th>Status</th>
        <th>Change Status</th>
      </Table.Header>
      <Table.Body>
        {proposal.map((project, index) => (
          <ProposalRow proposal={project} index={index} key={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
