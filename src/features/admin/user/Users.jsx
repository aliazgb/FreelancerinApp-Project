import React from "react";
import UserTable from "./UserTable";

function Users() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 mb-8 text-xl text-center">
        Users
      </h1>
      <UserTable />
    </div>
  );
}

export default Users;
