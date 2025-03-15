import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDarkMode } from "../../context/DarkModeContext";

function ToggleDarkmode() {
  const { toggleDarkMode, darkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      <MdOutlineDarkMode className="text-secondary-500 w-5 h-5 " />
    </button>
  );
}

export default ToggleDarkmode;
