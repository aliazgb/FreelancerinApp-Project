import { BsCollection } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdGridView } from "react-icons/md";
import Stat from "../freelancer/Stat";
import { FaUserGroup } from "react-icons/fa6";

function Stats({ proposals, users, projectList }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 w-[70%] lg:grid-cols-2">
      <Stat
        title=" Users"
        icon={<FaUserGroup className="w-20 h-20" />}
        color="primary"
        value={users}
      />
      <Stat
        title="Requests"
        icon={<MdGridView className="w-20 h-20" />}
        color="green"
        value={proposals}
      />
      <Stat
        title="Projects"
        icon={<BsCollection className="w-20 h-20" />}
        color="yellow"
        value={projectList}
      />
    </div>
  );
}
export default Stats;
