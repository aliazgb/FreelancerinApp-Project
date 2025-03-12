import React from "react";
import { Outlet } from "react-router-dom";
import ProjectsHeadr from "../Projects/ProjectHeader";
import Header from "./Header";
import Sidebar from "./Sidebar";
function AppLayout() {
  return (
    <div className="container xl:w-[80%] ">
      <div className="bg-red-200 grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
        <Header />
        <Sidebar />
        <div className="bg-secondary-100 overflow-y-auto">
          <div className="mx-auto max-w-screen-lg mt-10">
         
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
