import React from "react";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map(
    (project) => project.status === 2
  ).length;
  const numOfProposals = projects.reduce(
    (acc, cur) => cur.proposals.length + acc,
    0
  );
  return <div>Stats</div>;
}

export default Stats;
