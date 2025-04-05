import { FcAcceptDatabase } from "react-icons/fc";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdGridView } from "react-icons/md";
import { Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import Loader from "../ui/Loader";
import Stat from "./Stat";
import { VscGitPullRequestDraft } from "react-icons/vsc";

function Stats({ proposals }) {
  const { projects, isLoading } = useProjects();
  if (isLoading) return <Loader />;

  const numOfProposals = proposals?.length;
  const numOfAcceptedProposals = proposals.filter(
    (project) => project.status === 2
  );
  const balance = numOfAcceptedProposals.reduce(
    (acc, cur) => cur.price + acc,
    0
  );
  return (
    <div className="grid grid-cols-1 gap-x-8 w-[70%] lg:grid-cols-2">
      <Link to="/freelancer/proposals">
        <Stat
          title=" Projects"
          icon={<MdGridView className="w-20 h-20" />}
          color="primary"
          value={projects?.length}
        />
      </Link>
      <Link to="/freelancer/proposals">
        <Stat
          title=" Requests"
          icon={<VscGitPullRequestDraft className="w-20 h-20" />}
          color="primary"
          value={numOfProposals}
        />
      </Link>
      <Stat
        title="Accepted Proposals"
        icon={<FcAcceptDatabase className="w-20 h-20" />}
        color="green"
        value={numOfAcceptedProposals.length}
      />
      <Stat
        title="Wallet"
        icon={<HiOutlineCurrencyDollar className="w-20 h-20" />}
        color="yellow"
        value={balance + " $"}
      />
    </div>
  );
}
export default Stats;
