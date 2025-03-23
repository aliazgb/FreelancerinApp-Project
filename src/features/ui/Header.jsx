import React from "react";
import useUser from "../authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import Avatar from "./useAvatar";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={` container xl:max-w-screen-lg flex items-center justify-end gap-x-8 ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <Avatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
