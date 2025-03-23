import { HiCollection } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import AppLayout from "../ui/AppLayout";
import Sidebar from "../ui/Sidebar";
import CousttomLinks from "../ui/CousttomLinks";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <CousttomLinks to="dashboard"> 
            <HiHome />
            <span>داشبورد</span>
          </CousttomLinks>
        </li>
        <li>
          <CousttomLinks to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CousttomLinks>
        </li>
        <li>
          <CousttomLinks to="proposals">
            <HiCollection />
            <span>درخواست ها</span>
          </CousttomLinks>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
