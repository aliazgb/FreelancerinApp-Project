import { HiCollection } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import AppLayout from "../ui/AppLayout";
import Sidebar from "../ui/Sidebar";
import CustomNavLink from "../ui/CustomNavLink"; 

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <CustomNavLink to="dashboard"> 
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="proposals">
            <HiCollection />
            <span>درخواست ها</span>
          </CustomNavLink>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
