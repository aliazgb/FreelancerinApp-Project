import React from "react";
import { useProposal } from "../proposals/useProposal";
import Loader from "../ui/Loader";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { proposals, isLoading } = useProposal();
  if (isLoading) return <Loader />;
  return (
    <div className="px-4">
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
