import React from "react";
import useUser from "../authentication/useUser";
function Header() {
  const { data } = useUser();
  return <div className="bg-secondary-0">app header</div>;
}

export default Header;
