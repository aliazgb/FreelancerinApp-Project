import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import RHFSelect from "../../ui/RHFSelect";
import useChangeUsersStatus from "./useChangeUsersStatus";

const options = [
  {
    label: "Rejected / Block",
    value: 0,
  },
  {
    label: "Pending Approval",
    value: 1,
  },
  {
    label: "Verified",
    value: 2,
  },
];

function ChangeUsersStatus({ userId, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { isChangingStatusUser, changeUserStatus } = useChangeUsersStatus();
  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          label="Change Status"
          name={"status"}
          register={register}
          required
          options={options}
        />
        <button className="btn btn--primary w-full mt-5" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default ChangeUsersStatus;
