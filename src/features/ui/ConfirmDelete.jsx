import React from "react";

function ConfirmDelete({ resourceName, onclose, onConfirm }) {
  return (
    <div className="w-[100%]">
      <h2 className="font-bold mb-8 text-xs lg:text-base text-start">
        Are you sure you want to delete {resourceName}?
      </h2>
      <div className="flex justify-between items-center w-full space-x-20">
        <button onClick={onclose} className="btn btn--primary flex-1 py-3 px-6">
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="btn btn--danger flex-1 py-3 px-6"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
