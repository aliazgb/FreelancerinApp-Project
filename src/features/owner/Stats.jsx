import React from "react";
import { BsCollection } from "react-icons/bs";
import { MdGridView, MdOutlineAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import Stat from "../freelancer/Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter(
    (project) => project.status === "OPEN"
  );
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );
  return (
    <div className="grid grid-cols-1 gap-x-8 w-[70%] lg:grid-cols-2">
      <Link to="/owner/projects">
        <Stat
          title="Projects"
          icon={<MdGridView className="w-20 h-20" />}
          color="primary"
          value={numOfProjects}
        />
      </Link>
      <Link to="/owner/projects">
        <Stat
          title="Assigned Projects"
          icon={<MdOutlineAssignment className="w-20 h-20" />}
          color="green"
          value={numOfAcceptedProjects.length}
        />
      </Link>
      <Stat
        title="Requests"
        icon={<BsCollection className="w-20 h-20" />}
        color="yellow"
        value={numOfProposals}
      />
    </div>
  );
}

export default Stats;
