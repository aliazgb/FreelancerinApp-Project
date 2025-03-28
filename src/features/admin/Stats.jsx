import { BsCollection } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdGridView } from "react-icons/md";
import Stat from "../freelancer/Stat";

function Stats({ proposals, users, projets }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 w-[70%] lg:grid-cols-2">
      <Stat
        title=" Requests"
        icon={<MdGridView className="w-20 h-20" />}
        color="primary"
        value={users}
      />
      <Stat
        title="Accepted Proposals"
        icon={<HiOutlineCurrencyDollar className="w-20 h-20" />}
        color="green"
        value={proposals.length}
      />
      <Stat
        title="Wallet"
        icon={<BsCollection className="w-20 h-20" />}
        color="yellow"
        value={projets}
      />
    </div>
  );
}
export default Stats;
