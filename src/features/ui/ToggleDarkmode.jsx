import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { useDarkMode } from "../../context/DarkModeContext";

function ToggleDarkmode() {
  const { toggleDarkMode, darkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? (
        <LuSunMoon className="text-primary-900 w-5 h-5 " />
      ) : (
        <IoMoonOutline className="text-primary-900 w-5 h-5 " />
      )}
    </button>
  );
}

export default ToggleDarkmode;
