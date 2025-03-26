import React from "react";
import ProposalTable from "../proposals/ProposalTable";
import { useProposal } from "../proposals/useProposal";
import Loader from "./Loader";

function Proposals() {
  const { proposals, isLoading } = useProposal();
  if (isLoading) return <Loader />;
  return (
    <div>
      <h1 className="font-black text-secondary-700 mb-8 text-xl">
        Your Proposals
      </h1>
      <ProposalTable proposals={proposals} />
    </div>
  );
}

export default Proposals;
