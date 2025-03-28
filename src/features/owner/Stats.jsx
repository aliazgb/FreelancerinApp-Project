import React from "react";
import { BsCollection } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdGridView } from "react-icons/md";
import Stat from "../freelancer/Stat";
import useOwnerProject from "../Projects/useOwnerProject";

function Stats({ projects }) {
  
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter(
    (project) => project.status === "OPEN"
  );
  // const numOfProposals = projects.map(
  //   (project) => project.proposals
  // );
console.log(projects)
  return (
    <div className="grid grid-cols-1 gap-x-8 w-[70%] lg:grid-cols-2">
      <Stat
        title="Projects"
        icon={<MdGridView className="w-20 h-20" />}
        color="primary"
        value={numOfProjects}
      />
      <Stat
        title="Assigned Projects"
        icon={<HiOutlineCurrencyDollar className="w-20 h-20" />}
        color="green"
        value={numOfAcceptedProjects.length}
      />
      <Stat
        title="Requests"
        icon={<BsCollection className="w-20 h-20" />}
        color="yellow"
        value={6}
      />
    </div>
  );
}

export default Stats;
