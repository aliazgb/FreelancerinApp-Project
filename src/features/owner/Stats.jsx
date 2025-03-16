import React from "react";
import { MdGridView } from "react-icons/md";
import Stat from "./stat";
import { BsCollection } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map(
    (project) => project.status === 2
  ).length;
  // const numOfProposals = projects.reduce(
  //   (acc, cur) => cur.proposal.length + acc,
  //   0
  // );
  return (
    <div className="grid grid-cols-2 gap-x-8 w-[70%]">
      <Stat
        title=" پروژه ها"
        icon={<MdGridView className="w-20 h-20" />}
        color="primary"
      />
      <Stat
        title=" پروژه های واگذار شده"
        icon={<HiOutlineCurrencyDollar className="w-20 h-20" />}
        color="green"
      />
      <Stat
        title=" درخواست ها"
        icon={<BsCollection className="w-20 h-20" />}
        color="blue"
      />
    </div>
  );
}

export default Stats;
