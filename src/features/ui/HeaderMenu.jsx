import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogOut from "../authentication/LogOut";
import ToggleDarkmode from "./ToggleDarkmode";
import { TbUser } from "react-icons/tb";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-3 lg:gap-x-5">
      <li>
        <LogOut />
      </li>
      <li>
        <ToggleDarkmode />
      </li>
      <li>
        {/* <Link to={"dashboard"}> */}
          <button>
            <TbUser className="text-primary-900 w-4 h-4 lg:w-6 lg:h-6 hover:text-secondary-500" />
          </button>
        {/* </Link> */}
      </li>
    </ul>
  );
}

export default HeaderMenu;
