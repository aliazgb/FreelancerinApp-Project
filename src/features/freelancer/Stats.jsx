import { BsCollection } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdGridView } from "react-icons/md";
import Stat from "./Stat";
import { FcAcceptDatabase } from "react-icons/fc";

function Stats({ proposals }) {
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
      <Stat
        title=" Requests"
        icon={<MdGridView className="w-20 h-20" />}
        color="primary"
        value={numOfProposals}
      />
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
        value={balance}
      />
    </div>
  );
}
export default Stats;
