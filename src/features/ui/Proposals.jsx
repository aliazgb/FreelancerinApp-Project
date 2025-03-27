import React from "react";
import ProposalTable from "../proposals/ProposalTable";
import { useProposal } from "../proposals/useProposal";
import Loader from "./Loader";
import Empty from "./Empty";

function Proposals() {
  const { proposals, isLoading } = useProposal();
  if (isLoading) return <Loader />;
  if (!proposals) {
   return <Empty resourceName="Proposals"/>
  }
  return (
    <div>
      <h1 className="font-black text-secondary-700 mb-8 text-xl text-center">
        Your Proposals
      </h1>
      <ProposalTable proposals={proposals} />
    </div>
  );
}

export default Proposals;
