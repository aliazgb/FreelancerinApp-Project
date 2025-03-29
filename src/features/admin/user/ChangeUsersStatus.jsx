import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import RHFSelect from "../../ui/RHFSelect";
import useChangeUsersStatus from "./useChangeUsersStatus";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
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
          label="تغییر وضعیت"
          name={"status"}
          register={register}
          required
          options={options}
        />
        <button className="btn btn--primary w-full mt-5" type="submit">
          تایید
        </button>
      </form>
    </div>
  );
}

export default ChangeUsersStatus;
