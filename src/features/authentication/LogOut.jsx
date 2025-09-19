import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { useDarkMode } from "../../context/DarkModeContext";
import useLogout from "./useLogout";

function LogOut() {
  const { logout } = useLogout();
  const { setIsDarkMode } = useDarkMode();
  const handleLogout =  () => {
    setIsDarkMode(false);
    logout();
  };
  return (
    <button onClick={handleLogout}>
      <TbLogout2 className="text-secondary-500 hover:text-error w-4 h-4 lg:w-6 lg:h-6" />
    </button>
  );
}

export default LogOut;
