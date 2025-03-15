import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

function ToggleDarkmode() {
  return (
    <button>
      <MdOutlineDarkMode className="text-secondary-500 w-5 h-5 " />
    </button>
  );
}

export default ToggleDarkmode;
