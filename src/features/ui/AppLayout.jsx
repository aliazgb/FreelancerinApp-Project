import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="container xl:w-[80%] ">
      <div className="bg-red-200 grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
        <div className="bg-secondary-0">app header</div>
        <div className="bg-secondary-0 row-start-1 row-span-2 ">app sidebar</div>
        <div className="bg-secondary-100 overflow-y-auto">
          <div className="mx-auto max-w-screen-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
