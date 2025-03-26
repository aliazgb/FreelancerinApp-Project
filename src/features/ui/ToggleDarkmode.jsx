import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { useDarkMode } from "../../context/DarkModeContext";

function ToggleDarkmode() {
  const { toggleDarkMode, darkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? (
        <LuSunMoon className="text-primary-900 w-4 h-4 lg:w-6 lg:h-6 hover:text-secondary-500" />
      ) : (
        <IoMoonOutline className="text-primary-900 w-4 h-4 lg:w-6 lg:h-6 hover:text-secondary-500" />
      )}
    </button>
  );
}

export default ToggleDarkmode;
