import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
function AppLayout({ children }) {
  return (
    <div className="container w-[100%]  lg:w-[80%]">
      <div className="bg-red-200 grid h-screen grid-rows-[auto_1fr] grid-cols-[7rem_1fr] lg:grid-cols-[15rem_1fr]">
        <Header />
        {children}
        <div className="bg-secondary-100 overflow-y-auto">
          <div className="mx-auto max-w-screen-lg mt-5 lg:mt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
