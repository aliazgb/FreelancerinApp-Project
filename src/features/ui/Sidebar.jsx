import React from "react";

function Sidebar({ children }) {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 ">
      <ul className="flex flex-col gap-y-4 py-4 w-[100%]">{children}</ul>
    </div>
  );
}

export default Sidebar;
