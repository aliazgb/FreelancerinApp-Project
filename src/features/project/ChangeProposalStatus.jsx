import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useChangeProposalStaus from "../freelancer/projects/useChangeProposalStatus";
import RHFSelect from "../ui/RHFSelect";
const options = [
  {
    label: "Rejected",
    value: 0,
  },
  {
    label: "Pending Approval",
    value: 1,
  },
  {
    label: "Approved",
    value: 2,
  },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { chnageProposalStatus } = useChangeProposalStaus();
  const onSubmit = (data) => {
    chnageProposalStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["projects", projectId] });
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
          options={options}
        />
        <button className="btn btn--primary w-full mt-5" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
