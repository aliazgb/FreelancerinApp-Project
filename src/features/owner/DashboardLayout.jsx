import React from "react";
import useOwnerProject from "../Projects/useOwnerProject";
import Loader from "../ui/Loader";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
function DashboardLayout() {
  const { projects, isLoading } = useOwnerProject();

  if (isLoading) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
