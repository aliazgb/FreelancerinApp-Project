import React from "react";
import { BsCollection } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdGridView } from "react-icons/md";
import Stat from "../freelancer/Stat";

function Stats({ projects }) {
  // console.log(projects[0].proposal.length)
  console.log(projects.proposals)
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((project) => project.status === 2);
  const numOfProposals = projects.map((f)=>f.proposal).length
  return (
    <div className="grid grid-cols-2 gap-x-8 w-[70%]">
      <Stat
        title=" پروژه ها"
        icon={<MdGridView className="w-20 h-20" />}
        color="primary"
        value={numOfProjects}
      />
      <Stat
        title=" پروژه های واگذار شده"
        icon={<HiOutlineCurrencyDollar className="w-20 h-20" />}
        color="green"
        value={numOfAcceptedProjects.length}
      />
      <Stat
        title=" درخواست ها"
        icon={<BsCollection className="w-20 h-20" />}
        color="yellow"
        value={numOfProposals}
      />
    </div>
  );
}

export default Stats;
