import React from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import LogOut from "../authentication/LogOut";
import ToggleDarkmode from "./ToggleDarkmode";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 ">
      <li className="flex">
        <Link to={"dashboard"}>
          <CiUser className="w-5 h-5 text-primary-900" />
        </Link>
      </li>
      <li>
        <ToggleDarkmode />
      </li>
      <li>
        <LogOut />
      </li>
    </ul>
  );
}

export default HeaderMenu;
