import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "./useLogout";

function LogOut() {
  const{logout, isPending}=  useLogout()
  return (
    <button onClick={logout}>
      <TbLogout2 className="text-secondary-500 hover:text-error w-4 h-4 lg:w-6 lg:h-6" />
    </button>
  );
}

export default LogOut;
