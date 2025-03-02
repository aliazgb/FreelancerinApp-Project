import React from "react";

function ConfirmDelete({ resourceName, onclose, onConfirm }) {
  return (
    <div className="w-[50%]">
      <h2 className="text-base font-bold mb-8">
        ایا از حذف {resourceName} مطمین هستید؟
      </h2>
      <div className="flex justify-between items-center gap-x-36">
        <button onClick={onclose} className="btn btn--primary flex-1 py-3 px-6">
          لغو
        </button>
        <button
          onClick={onConfirm}
          className="btn btn--danger flex-1 py-3 px-6"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
