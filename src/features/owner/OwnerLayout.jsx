import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../ui/AppLayout";
import CustomNavlink from "../ui/CustomNavLink";
import Sidebar from "../ui/Sidebar";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <CustomNavlink to="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavlink>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
