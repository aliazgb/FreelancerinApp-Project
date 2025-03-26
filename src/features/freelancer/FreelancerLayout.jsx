import { HiCollection } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import AppLayout from "../ui/AppLayout";
import Sidebar from "../ui/Sidebar";
import CousttomLinks from "../ui/CousttomLinks";
import { MdOutlineRequestQuote } from "react-icons/md";

function FreelancerLayout() {
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

export default FreelancerLayout;
