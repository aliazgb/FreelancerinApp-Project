import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 ">
      
      <ul className="flex flex-col gap-y-4 py-4 w-[100%]">
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
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavlink({ children,to }) {
  const navLinkClasses =
    "flex items-center gap-x-2 hover:bg-primary-100 px-2 py-2 rounded-lg w-[80%]";
  return (
    <NavLink
    to={to}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClasses} bg-primary-100/50 text-primary-900 `
          : `${navLinkClasses} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
