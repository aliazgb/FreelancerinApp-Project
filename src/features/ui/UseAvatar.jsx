import React from "react";
import useUser from "../authentication/useUser";

function Avatar() {
  const { user, isLoading } = useUser();

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <img
        src="https://imgurl.ir/uploads/152340_user.jpg"
        alt="user-account"
        className="w-7 h-7 object-cover rounded-full object-center"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default Avatar;
