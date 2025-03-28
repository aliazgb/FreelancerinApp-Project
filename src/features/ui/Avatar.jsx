import React from "react";
import useUser from "../authentication/useUser";

function Avatar() {
  const { user, isLoading } = useUser();

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <span className="text-xs lg:text-lg">{user?.name}</span>
      <img
        src="https://i.postimg.cc/KYSkQKgp/user.jpg"
        alt="user-account"
        className="w-7 h-7 object-cover rounded-full object-center"
      />
    </div>
  );
}

export default Avatar;
