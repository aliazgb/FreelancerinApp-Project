import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "./useLogout";

function LogOut() {
  const{logout, isPending}=  useLogout()
  return (
    <button onClick={logout}>
      <TbLogout2 className="text-secondary-500 w-5 h-5 hover:text-error" />
    </button>
  );
}

export default LogOut;
