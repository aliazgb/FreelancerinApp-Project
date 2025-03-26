import React from "react";
import useUser from "../authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import Avatar from "./useAvatar";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="bg-secondary-0 py-4  border-b border-secondary-200">
      <div
        className={` container xl:max-w-screen-lg flex items-center justify-between gap-x-8 ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <HeaderMenu />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
