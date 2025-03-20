import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useChangeProposalStaus from "../freelancer/projects/useChangeProposalStatus";
import RHFSelect from "../ui/RHFSelect";
const option = [
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
function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { isUpdating, chnageProposalStatus } = useChangeProposalStaus();
  const onSubmit = (data) => {
    chnageProposalStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
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
          options={option}
          required
        />
        <button className="btn btn--primary w-full mt-5" type="submit">
          تایید
        </button>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
