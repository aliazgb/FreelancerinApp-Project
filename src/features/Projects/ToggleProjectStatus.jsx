import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import useToggleStatus from "./useToggleStatus";

function ToggleProjectStatus({ project }) {
  const [enabled, setEnabled] = useState(
    project.status === "OPEN" ? true : false
  );
  const { toggleProjectStatus, isUpdating } = useToggleStatus();
  const handleToggle = () => {
    const status = project.status === "OPEN" ? "CLOSE" : "OPEN";
    toggleProjectStatus(
      { id: project._id, data: { status }, },
      { onSuccess: () => setEnabled((prev)=>!prev)}
    )
  }
  return (
    <div className="w-[5rem]">
      <Switch.Group>
        <div className="flex items-center">
          <Switch.Label className="ml-4">
            {enabled ? " باز" : " بسته"}
          </Switch.Label>
          <Switch
            checked={enabled}
            onChange={handleToggle}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-indigo-500 focus:ring-offset-2`}
          >
            <span
              className={`${
                enabled ? "-translate-x-6" : "-translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  );
}

export default ToggleProjectStatus;
