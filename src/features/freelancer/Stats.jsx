import { BsCollection } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdGridView } from "react-icons/md";
import Stat from "./Stat";

function Stats({ proposals }) {
  const numOfProposals = proposals?.length;
  const numOfAcceptedProposals = proposals.filter(
    (project) => project.status === 2
  );
  const balance = numOfAcceptedProposals.reduce((acc, cur) => cur.price + acc, 0);
  console.log(balance);
  return (
    <div className="grid grid-cols-2 gap-x-8 w-[70%]">
      <Stat
        title=" درخواست  ها"
        icon={<MdGridView className="w-20 h-20" />}
        color="primary"
        value={numOfProposals}
      />
      <Stat
        title=" درخواست های تایید شده"
        icon={<HiOutlineCurrencyDollar className="w-20 h-20" />}
        color="green"
        value={numOfAcceptedProposals.length}
      />
      <Stat
        title=" کیف پول"
        icon={<BsCollection className="w-20 h-20" />}
        color="yellow"
        value={balance}
      />
    </div>
  );
}
export default Stats;
