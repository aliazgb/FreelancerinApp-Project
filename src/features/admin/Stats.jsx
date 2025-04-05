import { BsCollection } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { MdGridView } from "react-icons/md";
import { Link } from "react-router-dom";
import Stat from "../freelancer/Stat";

function Stats({ proposals, users, projectList }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 w-[70%] lg:grid-cols-2">
      <Link to="/admin/users">
        <Stat
          title=" Users"
          icon={<FaUserGroup className="w-20 h-20" />}
          color="primary"
          value={users}
        />
      </Link>
      <Link to="/admin/proposals">
        <Stat
          title="Requests"
          icon={<MdGridView className="w-20 h-20" />}
          color="green"
          value={proposals}
        />
      </Link>
      <Link to="/admin/projects">
        <Stat
          title="Projects"
          icon={<BsCollection className="w-20 h-20" />}
          color="yellow"
          value={projectList}
        />
      </Link>
    </div>
  );
}
export default Stats;
