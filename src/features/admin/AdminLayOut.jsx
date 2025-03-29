import { HiCollection, HiHome } from "react-icons/hi";
import { MdOutlineRequestQuote } from "react-icons/md";
import AppLayout from "../ui/AppLayout";
import CousttomLinks from "../ui/CousttomLinks";
import Sidebar from "../ui/Sidebar";
import { FaUserGroup } from "react-icons/fa6";

function AdminLayOut() {
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <CousttomLinks to="dashboard">
            <HiHome />
            <span>Dashboard</span>
          </CousttomLinks>
        </li>
        <li>
          <CousttomLinks to="users">
            <FaUserGroup />
            <span>Users</span>
          </CousttomLinks>
        </li>
        <li>
          <CousttomLinks to="projects">
            <HiCollection />
            <span>Projects</span>
          </CousttomLinks>
        </li>
        <li>
          <CousttomLinks to="proposals">
            <MdOutlineRequestQuote />
            <span>Requests</span>
          </CousttomLinks>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayOut;
