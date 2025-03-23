import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../ui/AppLayout";
import Sidebar from "../ui/Sidebar";
import CousttomLinks from "../ui/CousttomLinks";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <CousttomLinks to="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CousttomLinks>
        </li>
        <li>
          <CousttomLinks to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CousttomLinks>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
