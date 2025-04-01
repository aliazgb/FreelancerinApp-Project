import React from "react";

function ConfirmDelete({ resourceName, onclose, onConfirm }) {
  return (
    <div className="w-[50%]">
      <h2 className="text-base font-bold mb-8">
        Are you sure you want to delete {resourceName}?
      </h2>
      <div className="flex justify-between items-center gap-x-36">
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
