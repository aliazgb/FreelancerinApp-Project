import { HiCollection } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import AppLayout from "../ui/AppLayout";
import CustomNavlink from "../ui/CustomNavLink";
import Sidebar from "../ui/Sidebar";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <CustomNavlink to="dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="proposals">
            <HiCollection />
            <span>درخواست ها</span>
          </CustomNavlink>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
